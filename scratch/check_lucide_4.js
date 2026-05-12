const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('Twitter:', keys.find(k => k.toLowerCase().includes('twitter')));
console.log('Linkedin:', keys.find(k => k.toLowerCase().includes('linkedin')));
console.log('Github:', keys.find(k => k.toLowerCase().includes('github')));
