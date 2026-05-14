const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-on-surface mb-2">신의데코프린팅</h3>
          <p className="text-sm text-on-surface-variant mb-6">
            © 2024 신의데코프린팅. 모든 프레스에 담긴 정밀함.<br />
            열전사 필름의 새로운 기준.
          </p>
          <div className="flex gap-6">
            <a href="#/" className="text-on-surface-variant hover:text-primary transition-all duration-200">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#/" className="text-on-surface-variant hover:text-primary transition-all duration-200">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-on-surface mb-1">회사</span>
            <a href="#/" className="text-sm text-on-surface-variant hover:text-primary transition-all">회사 소개</a>
            <a href="#/" className="text-sm text-on-surface-variant hover:text-primary transition-all">개인정보 처리방침</a>
            <a href="#/" className="text-sm text-on-surface-variant hover:text-primary transition-all">이용약관</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-on-surface mb-1">고객 지원</span>
            <a href="#/" className="text-sm text-on-surface-variant hover:text-primary transition-all">배송 정보</a>
            <a href="#/" className="text-sm text-on-surface-variant hover:text-primary transition-all">고객 센터</a>
            <a href="#/" className="text-sm text-on-surface-variant hover:text-primary transition-all">자주 묻는 질문</a>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold text-on-surface block mb-2">뉴스레터</span>
          <p className="text-sm text-on-surface-variant mb-4">새로운 텍스처와 이벤트 소식을 가장 먼저 받아보세요.</p>
          <div className="flex gap-1">
            <input
              className="bg-surface border border-outline-variant rounded-lg px-4 py-2 w-full text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="이메일 주소"
              type="email"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all whitespace-nowrap">
              가입
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
