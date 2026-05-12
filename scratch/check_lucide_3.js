const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('Facebook:', keys.find(k => k.toLowerCase().includes('facebook')));
console.log('Instagram:', keys.find(k => k.toLowerCase().includes('instagram')));
console.log('Youtube:', keys.find(k => k.toLowerCase().includes('youtube')));
