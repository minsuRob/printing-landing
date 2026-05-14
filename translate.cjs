const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');

const translations = {
  'Home': '홈',
  'Shop': '쇼핑',
  'Custom Order': '맞춤 주문',
  'Gallery': '갤러리',
  'Community': '커뮤니티',
  'Support': '고객 지원',
  'Premium Edition': '프리미엄 에디션',
  'Vinyl Texture Selection': '비닐 텍스처 선택',
  'Select Size': '사이즈 선택',
  'Size Guide': '사이즈 가이드',
  'Add to Cart': '장바구니 담기',
  'Personalize Design': '디자인 커스터마이징',
  'Free Shipping': '무료 배송',
  'Premium Quality': '프리미엄 품질',
  'The Precision Process': '정밀 공정 프로세스',
  'Step 01. Vector Design': '1단계. 벡터 디자인',
  'Step 02. Precision Cutting': '2단계. 정밀 컷팅',
  'Step 03. Industrial Press': '3단계. 산업용 프레스',
  'Care Instructions': '세탁 및 관리 방법',
  'Quick Links': '빠른 링크',
  'About Us': '회사 소개',
  'Privacy Policy': '개인정보 처리방침',
  'Terms of Service': '이용약관',
  'Shipping Info': '배송 정보',
  'Connect With Us': 'SNS 연결',
  'Precision in every press.': '모든 프레스에 담긴 정밀함.',
  'Gold': '골드',
  'Silver': '실버',
  'Rainbow': '레인보우',
  'PressPro HTV': '신의데코프린팅'
};

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    for (const [eng, kor] of Object.entries(translations)) {
      // Use regex to replace exact text (avoiding class names)
      // >Text< or "Text"
      const regex1 = new RegExp(`>\\s*${eng}\\s*<`, 'g');
      content = content.replace(regex1, `>${kor}<`);
      
      const regex2 = new RegExp(`"${eng}"`, 'g');
      content = content.replace(regex2, `"${kor}"`);
      
      // also standalone text
      const regex3 = new RegExp(`>\\s*${eng.replace('.', '\\.')}\\s*<`, 'g');
      content = content.replace(regex3, `>${kor}<`);
    }
    // Also replace PressPro HTV without strict tags
    content = content.replace(/PressPro HTV/g, '신의데코프린팅');
    
    fs.writeFileSync(path.join(dir, file), content);
  }
});
