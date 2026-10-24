const { execSync } = require('child_process');
const fs = require('fs');

console.log('Preparing hero background and assets...');

// We have the raw reference image at public/assets/aistudio/01_hero_navigation.png_6a61ba12.png (2340x1117)
// Let's create public/assets/hero_bg_clean.jpg
// We will apply a dark gradient on the left side so that:
// 1. All previous text on the left (x: 0 to 1050) is covered by a rich dark charcoal (#080d0b)
// 2. The top area where the old navbar was is softly blended with a patch of the dark office bokeh
// 3. The right side retains the crystal-clear professional consultant, tablet, and subtle tech grid!

// Let's create the gradient mask for the left side:
// A 2340x1117 PNG gradient from solid dark #070c0a on the left to transparent on the right
execSync('convert -size 1250x1117 gradient:"#070c0a"-none public/assets/left_gradient.png');

// Composite the gradient onto the base image
execSync('convert public/assets/aistudio/01_hero_navigation.png_6a61ba12.png public/assets/left_gradient.png -geometry +0+0 -composite public/assets/hero_bg_step1.png');

// For the top nav area (from y=25 to y=115, x=1000 to x=2300), let's blur or blend so the old text/icons don't show through the new glass navbar
execSync('convert public/assets/hero_bg_step1.png -region 1300x100+1000+25 -blur 0x12 public/assets/hero_bg_clean.jpg');

// Clean up temporary files
if (fs.existsSync('public/assets/left_gradient.png')) fs.unlinkSync('public/assets/left_gradient.png');
if (fs.existsSync('public/assets/hero_bg_step1.png')) fs.unlinkSync('public/assets/hero_bg_step1.png');

console.log('hero_bg_clean.jpg prepared successfully!');
