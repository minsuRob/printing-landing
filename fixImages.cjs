const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');
const ASSETS_MAP = {
  'MainPage.tsx': './assets/tshirt.png',
  'TshirtPrintingDetail.tsx': './assets/tshirt.png',
  'MaskDetail.tsx': './assets/mask.png',
  'SneakerDetail.tsx': './assets/sneaker.png',
  'BagDetail.tsx': './assets/bag.png',
};

const files = fs.readdirSync(PAGES_DIR);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(PAGES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const asset = ASSETS_MAP[file] || './assets/tshirt.png';
  
  // Replace all https://lh3.googleusercontent.com/... with the mapped asset
  const newContent = content.replace(/https:\/\/lh3\.googleusercontent\.com\/aida[^\s\"']*/g, asset);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${file} with ${asset}`);
  }
});
