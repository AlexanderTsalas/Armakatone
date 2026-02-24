const fs = require('fs');

let content = fs.readFileSync('public/image.svg', 'utf8');

// Replace white backgrounds
content = content.replace(/fill="#FEFDFD"/gi, 'fill="transparent"');
content = content.replace(/stop-color="white"/gi, 'stop-color="transparent"');

// Replace all other fills
content = content.replace(/fill="#([A-Fa-f0-9]{6})"/g, (match, hex) => {
    if (hex.toUpperCase() === 'FEFDFD') return 'fill="transparent"';
    return 'fill="#00D4FF"';
});

content = content.replace(/stop-color="#([A-Fa-f0-9]{6})"/g, (match, hex) => {
    if (hex.toUpperCase() === 'FEFDFD') return 'stop-color="transparent"';
    return 'stop-color="#00D4FF"';
});

fs.writeFileSync('public/image.svg', content, 'utf8');
console.log("Recolored image.svg");
