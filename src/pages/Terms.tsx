import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-2">
              <a href="#tos" className="block py-2 px-4 rounded-lg bg-primary/10 text-primary font-bold">이용약관</a>
              <a href="#privacy" className="block py-2 px-4 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">개인정보 처리방침</a>
              <a href="#shipping" className="block py-2 px-4 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">배송 및 환불규정</a>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-20">
            <section id="tos">
              <h1 className="font-['Space_Grotesk'] text-4xl font-bold mb-8">이용약관</h1>
              <div className="prose prose-slate max-w-none text-on-surface-variant space-y-6">
                <p>본 약관은 신의데코프린팅(이하 "회사")이 운영하는 웹사이트 및 관련 서비스의 이용 조건 및 절차를 규정합니다.</p>
                <div className="space-y-4">
                  <h4 className="text-on-surface font-bold">제1조 (목적)</h4>
                  <p className="text-sm">이 약관은 회사가 제공하는 모든 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                  
                  <h4 className="text-on-surface font-bold">제2조 (커스텀 상품 특약)</h4>
                  <p className="text-sm">주문 제작(커스텀) 상품은 고객의 요청에 따라 개별적으로 제작되는 상품으로, 제작이 시작된 이후에는 단순 변심에 의한 주문 취소 및 환불이 불가능합니다.</p>
                </div>
              </div>
            </section>

            <hr className="border-outline-variant/30" />

            <section id="privacy">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-8">개인정보 처리방침</h2>
              <div className="prose prose-slate max-w-none text-on-surface-variant space-y-6">
                <p>회사는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수합니다.</p>
                <div className="space-y-4">
                  <h4 className="text-on-surface font-bold">1. 수집하는 개인정보 항목</h4>
                  <p className="text-sm">성명, 연락처, 배송지 주소, 결제 정보 등 서비스 제공에 필수적인 항목을 수집합니다.</p>
                  
                  <h4 className="text-on-surface font-bold">2. 수집 및 이용 목적</h4>
                  <p className="text-sm">주문 제작 관리, 상품 배송, 고객 상담 및 본인 확인 등을 위해 사용됩니다.</p>
                </div>
              </div>
            </section>

            <section id="shipping" className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/20">
              <h3 className="font-bold text-xl mb-4">배송 및 환불 상세 가이드</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant list-disc pl-5">
                <li>배송 방법: 택배 서비스 (CJ대한통운/우체국)</li>
                <li>배송 지역: 전국 (도서산간 지역 추가 비용 발생)</li>
                <li>제작 기간: 영업일 기준 평균 3~5일 소요</li>
                <li>환불 규정: 제품 불량이나 오배송의 경우 100% 환불/재제작 가능</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
