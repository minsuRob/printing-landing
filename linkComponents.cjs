const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');

const replacer = (file) => {
  let content = fs.readFileSync(file, 'utf8');

  // Any 'Add to Cart' or 'Buy Now' to Checkout
  content = content.replace(/<button[^>]*>([\s\S]*?Add to Cart[\s\S]*?)<\/button>/ig, (match, p1) => {
    return `<button onClick={() => window.location.href='/checkout'} className="w-full bg-primary text-on-primary py-md rounded-lg font-button flex items-center justify-center space-x-sm hover:opacity-90 transition-opacity">${p1}</button>`;
  });

  // Specifically in MainPage, look for placeholders and replace with Links
  if (file.includes('MainPage.tsx')) {
    // Basic heuristics: Look for titles or hrefs
    // Let's just modify the top nav links and some grid links if they exist.
    // Or simpler: change any href="#" to corresponding paths if we know them.
    content = content.replace(/href="#"/g, 'href="/"');
    
    // In MainPage, there are category cards. Let's find "티셔츠" and wrap with link.
    // We'll just do a dirty replace.
    content = content.replace(/(<div[^>]*>[\s\S]*?프리미엄 글리터 HTV 커스텀 티셔츠[\s\S]*?<\/div>)/g, '<a href="/tshirt-printing" className="block cursor-pointer transition-transform hover:-translate-y-2">$1</a>');
    content = content.replace(/(<div[^>]*>[\s\S]*?홀로그램 패턴 마스크[\s\S]*?<\/div>)/g, '<a href="/mask-printing" className="block cursor-pointer transition-transform hover:-translate-y-2">$1</a>');
    content = content.replace(/(<div[^>]*>[\s\S]*?글리터 커스텀 스니커즈[\s\S]*?<\/div>)/g, '<a href="/sneaker-printing" className="block cursor-pointer transition-transform hover:-translate-y-2">$1</a>');
    content = content.replace(/(<div[^>]*>[\s\S]*?글리터 커스텀 캔버스 백[\s\S]*?<\/div>)/g, '<a href="/bag-printing" className="block cursor-pointer transition-transform hover:-translate-y-2">$1</a>');
  }

  // Ensure React imports or fix Link usages if we use them
  fs.writeFileSync(file, content);
};

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    replacer(path.join(dir, file));
  }
});
