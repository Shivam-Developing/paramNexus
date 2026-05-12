"use client";

import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Color, Geometry } from 'ogl';

const vertexShader = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uFocal;
  uniform float uRotation;
  uniform float uStarSpeed;
  uniform float uDensity;
  uniform float uHueShift;
  uniform float uGlowIntensity;
  uniform float uSaturation;
  uniform float uMouseRepulsion;
  uniform float uTwinkleIntensity;
  uniform float uRotationSpeed;
  uniform float uRepulsionStrength;
  uniform bool uAutoCenterRepulsion;
  uniform bool uTransparent;

  #define PI 3.14159265359

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = (vUv - 0.5) * uResolution / min(uResolution.x, uResolution.y);
    uv *= uFocal;

    float r_angle = uRotation + uTime * uRotationSpeed;
    mat2 rot = mat2(cos(r_angle), -sin(r_angle), sin(r_angle), cos(r_angle));
    uv *= rot;

    vec2 mouse = (uMouse - 0.5) * uResolution / min(uResolution.x, uResolution.y);
    mouse *= uFocal;
    mouse *= rot;

    vec3 color = vec3(0.0);
    float t = uTime * uStarSpeed;

    for(float i = 0.0; i < 3.0; i++) {
        float z = fract(0.1 * i + 0.1 * t);
        float size = mix(15.0, 0.1, z);
        float fade = smoothstep(0.0, 0.2, z) * smoothstep(1.0, 0.8, z);
        
        vec2 grid = vec2(uDensity) * size;
        vec2 id = floor(uv * grid);
        vec2 fuv = fract(uv * grid) - 0.5;

        float h = hash(id);
        
        vec2 offset = vec2(h - 0.5, hash(id + 456.78) - 0.5) * 0.8;
        
        vec2 starPos = (id + 0.5 + offset) / grid;
        float dMouse = length(starPos - mouse);
        
        if (uAutoCenterRepulsion) {
            dMouse = min(dMouse, length(starPos));
        }

        float repulsion = exp(-dMouse * uMouseRepulsion) * uRepulsionStrength;
        fuv -= offset + (starPos - mouse) * repulsion / size;

        float d = length(fuv);
        
        float star = smoothstep(0.1, 0.0, d);
        float glow = exp(-d * uGlowIntensity);
        
        float twinkle = sin(uTime * 5.0 + h * PI * 2.0) * 0.5 + 0.5;
        twinkle = mix(1.0, twinkle, uTwinkleIntensity);

        vec3 starColor = hsv2rgb(vec3(h + uHueShift, uSaturation, 1.0));
        color += (star * 2.0 + glow) * fade * starColor * twinkle;
    }

    if (uTransparent) {
        gl_FragColor = vec4(color, clamp(length(color), 0.0, 1.0));
    } else {
        gl_FragColor = vec4(color, 1.0);
    }
  }
`;

interface GalaxyProps {
  focal?: number;
  rotation?: number;
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: boolean;
  transparent?: boolean;
  className?: string;
  color?: string; // For compatibility with requested mapping
  backgroundColor?: string; // For compatibility with requested mapping
}

export default function Galaxy({
  focal = 1.0,
  rotation = 0.0,
  starSpeed = 0.1,
  density = 20.0,
  hueShift = 0.0,
  disableAnimation = false,
  speed = 1.0,
  mouseInteraction = true,
  glowIntensity = 5.0,
  saturation = 0.5,
  mouseRepulsion = 10.0,
  twinkleIntensity = 0.5,
  rotationSpeed = 0.05,
  repulsionStrength = 0.05,
  autoCenterRepulsion = false,
  transparent = false,
  className = "",
  ...rest
}: GalaxyProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;

    const ctn = ctnDom.current;
    const renderer = new Renderer({ alpha: transparent, premultipliedAlpha: false });
    const gl = renderer.gl;
    ctn.appendChild(gl.canvas);

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(gl.canvas.width, gl.canvas.height, 0) },
        uMouse: { value: new Color(mousePos.current.x, mousePos.current.y, 0) },
        uFocal: { value: focal },
        uRotation: { value: rotation },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uMouseRepulsion: { value: mouseRepulsion },
        uTwinkleIntensity: { value: twinkleIntensity },
        uRotationSpeed: { value: rotationSpeed },
        uRepulsionStrength: { value: repulsionStrength },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uTransparent: { value: transparent },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ctn.getBoundingClientRect();
      mousePos.current.x = (e.clientX - rect.left) / rect.width;
      mousePos.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let animateId: number;
    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      if (!disableAnimation) {
        program.uniforms.uTime.value = t * 0.001 * speed;
      }
      program.uniforms.uMouse.value.set(mousePos.current.x, mousePos.current.y, 0);
      renderer.render({ scene: mesh });
    };

    const handleResize = () => {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value.set(width, height, 0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animateId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (ctn && ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [
    focal, rotation, starSpeed, density, hueShift, disableAnimation,
    speed, mouseInteraction, glowIntensity, saturation, mouseRepulsion,
    twinkleIntensity, rotationSpeed, repulsionStrength, autoCenterRepulsion, transparent
  ]);

  return <div ref={ctnDom} className={`w-full h-full relative ${className}`} {...rest} />;
}
