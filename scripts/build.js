'use strict';

const fs = require('node:fs');
const path = require('node:path');

const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'components/header.tsx',
  'components/hero-section.tsx',
  'components/features-section.tsx',
  'components/product-grid.tsx',
  'components/collections-section.tsx',
  'components/about-section.tsx',
  'components/footer.tsx',
  'lib/products.ts',
  'README.md'
];

for (const file of requiredFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Build failed: missing required file ${file}`);
    process.exit(1);
  }

  const contents = fs.readFileSync(fullPath, 'utf8');
  if (contents.includes('TODO')) {
    console.error(`Build failed: TODO found in ${file}`);
    process.exit(1);
  }
}

console.log('Build passed: all required homepage files are present and clean.');
