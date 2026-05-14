const fs = require('fs');

let content = fs.readFileSync('src/pages/MainPage.tsx', 'utf8');

// Replace standard links
content = content.replace(/<a className="group block" href="#\/">\s*<div className="aspect-square/g, (match, offset, string) => {
  return match; // Actually, I need to match the titles
});

// A better way: replace by title
content = content.replace(/<a className="group block" href="#\/">([\s\S]*?)<span className="font-label-bold text-label-bold text-on-surface">티셔츠<\/span>/g, '<a className="group block" href="#/tshirt-printing">$1<span className="font-label-bold text-label-bold text-on-surface">티셔츠</span>');
content = content.replace(/<a className="group block" href="#\/">([\s\S]*?)<span className="font-label-bold text-label-bold text-on-surface">마스크<\/span>/g, '<a className="group block" href="#/mask-printing">$1<span className="font-label-bold text-label-bold text-on-surface">마스크</span>');
content = content.replace(/<a className="group block" href="#\/">([\s\S]*?)<span className="font-label-bold text-label-bold text-on-surface">신발<\/span>/g, '<a className="group block" href="#/sneaker-printing">$1<span className="font-label-bold text-label-bold text-on-surface">신발</span>');
content = content.replace(/<a className="group block" href="#\/">([\s\S]*?)<span className="font-label-bold text-label-bold text-on-surface">모자<\/span>/g, '<a className="group block" href="#/">$1<span className="font-label-bold text-label-bold text-on-surface">모자</span>');
content = content.replace(/<a className="group block" href="#\/">([\s\S]*?)<span className="font-label-bold text-label-bold text-on-surface">가방<\/span>/g, '<a className="group block" href="#/bag-printing">$1<span className="font-label-bold text-label-bold text-on-surface">가방</span>');

// Replace shopping cart icon button to checkout
content = content.replace(/<button className="p-base hover:bg-surface-container-low transition-all duration-300 rounded-full active:opacity-80 active:scale-95 transition-transform">\s*<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart<\/span>\s*<\/button>/, 
`<button onClick={() => window.location.href="#/checkout"} className="p-base hover:bg-surface-container-low transition-all duration-300 rounded-full active:opacity-80 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
</button>`);

// English to Korean translation missing in MainPage.tsx
const translations = {
  'Company': '회사',
  'Newsletter': '뉴스레터',
  'Contact Support': '고객 센터',
  'FAQ': '자주 묻는 질문',
  'Join': '가입',
  'Email Address': '이메일 주소'
};

for (const [eng, kor] of Object.entries(translations)) {
  const regex1 = new RegExp(`>\\s*${eng}\\s*<`, 'g');
  content = content.replace(regex1, `>${kor}<`);
  const regex2 = new RegExp(`placeholder="${eng}"`, 'g');
  content = content.replace(regex2, `placeholder="${kor}"`);
}

fs.writeFileSync('src/pages/MainPage.tsx', content);
