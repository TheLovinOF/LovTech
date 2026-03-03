const fs = require('fs');

const width = 1440;
const height = 400;
const num_lines = 15;
let lines = [];

lines.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">`);

for (let i = 0; i < num_lines; i++) {
    let path = [];

    for (let x = 0; x <= width; x += 10) {
        let base_y = 20 + i * 15;
        // Topography contour waves
        let y = base_y
            + Math.sin(x * 0.005 + i * 0.2) * 20
            + Math.sin(x * 0.01 - i * 0.1) * 10
            + Math.sin(x * 0.002 + i * 0.05) * 40;

        if (x === 0) {
            path.push(`M ${x} ${y.toFixed(1)}`);
        } else {
            path.push(`L ${x} ${y.toFixed(1)}`);
        }
    }

    const d = path.join(' ');
    const opacity = Math.max(0.02, 0.4 - (i * 0.02));
    const strokeWidth = 1 + (i * 0.1);
    // Gradient dark red color in CSS, so white with opacity for the lines works great, 
    // or maybe a dark red opacity. Let's use white with low opacity, creating a glass contour over red
    lines.push(`<path d="${d}" fill="none" stroke="rgba(255, 255, 255, ${opacity.toFixed(2)})" stroke-width="${strokeWidth.toFixed(1)}" />`);
}

lines.push('</svg>');

fs.writeFileSync('waves.svg', lines.join('\n'));
console.log('generated waves.svg');
