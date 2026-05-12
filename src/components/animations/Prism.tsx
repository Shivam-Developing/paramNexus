"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Triangle, Program, Mesh } from 'ogl';

interface PrismProps {
  height?: number;
  baseWidth?: number;
  animationType?: 'rotate' | 'slide';
  glow?: number;
  offset?: { x: number; y: number };
  noise?: number;
  transparent?: boolean;
  scale?: number;
  hueShift?: number;
  colorFrequency?: number;
  hoverStrength?: number;
}

export default function Prism({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1.2,
  offset = { x: 0, y: 0 },
  noise = 0.4,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
}: PrismProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: transparent, premultipliedAlpha: false });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        attribute vec2 uv;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform float uNoise;
        uniform float uGlow;

        void main() {
          vec2 uv = vUv;
          float strength = 0.5 + 0.5 * sin(uTime + uv.x * 10.0);
          vec3 color = vec3(0.388, 0.4, 0.945); // Neon Indigo #6366F1
          color = mix(color, vec3(0.024, 0.714, 0.831), strength); // Cyber Cyan #06B6D4
          
          gl_FragColor = vec4(color * uGlow, strength * 0.2);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uNoise: { value: noise },
        uGlow: { value: glow },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      if (!containerRef.current) return;
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    }
    window.addEventListener('resize', resize, false);
    resize();

    let request: number;
    function update(time: number) {
      request = requestAnimationFrame(update);
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    }
    request = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(request);
      if (containerRef.current && gl.canvas) {
        containerRef.current.removeChild(gl.canvas);
      }
    };
  }, [transparent, glow, noise]);

  return <div ref={containerRef} className="absolute inset-0 -z-10 w-full h-full pointer-events-none" />;
}
