import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        <div>
          <h3 className="font-h3 text-2xl font-bold text-on-surface mb-4">신의데코프린팅</h3>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            © 2024 신의데코프린팅. 모든 공정에 정밀함을 담습니다.<br/>
            열전사 필름의 새로운 기준, 신의데코와 함께하세요.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold text-on-surface mb-2">회사</span>
            <Link to="/about" className="text-sm text-on-surface-variant hover:text-primary transition-all">회사 소개</Link>
            <Link to="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-all">개인정보 처리방침</Link>
            <Link to="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-all">이용약관</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold text-on-surface mb-2">고객 지원</span>
            <Link to="/terms#shipping" className="text-sm text-on-surface-variant hover:text-primary transition-all">배송 정보</Link>
            <Link to="/support" className="text-sm text-on-surface-variant hover:text-primary transition-all">고객 센터</Link>
            <Link to="/support" className="text-sm text-on-surface-variant hover:text-primary transition-all">자주 묻는 질문</Link>
          </div>
        </div>
        <div>
          <span className="text-sm font-bold text-on-surface block mb-4">뉴스레터</span>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            새로운 텍스처와 이벤트 소식을<br/>가장 먼저 받아보세요.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-white border border-outline-variant rounded-xl px-4 py-3 w-full text-sm focus:outline-none focus:border-primary transition-colors shadow-inner"
              placeholder="이메일 주소"
              type="email"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-primary/90 active:scale-95 transition-all whitespace-nowrap shadow-lg shadow-primary/20">
              구독
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
