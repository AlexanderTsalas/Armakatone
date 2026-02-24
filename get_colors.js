const fs = require('fs');

const content = fs.readFileSync('public/image.svg', 'utf8');

const colors = content.match(/fill="[^"]+"/g);
const uniqueColors = [...new Set(colors)];

console.log('Unique fills:', uniqueColors);
