import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

type Step = 'info' | 'payment' | 'success';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>('info');
  const [payMethod, setPayMethod] = useState<'card' | 'easy'>('card');
  const [form, setForm] = useState({ name: '', phone: '', address: '', detail: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = '이름을 입력해주세요';
    if (!form.phone.trim()) e.phone = '연락처를 입력해주세요';
    if (!form.address.trim()) e.address = '주소를 입력해주세요';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => {
    // 결제 처리 (모의)
    clearCart();
    setStep('success');
    window.scrollTo(0, 0);
  };

  // ── Success Screen ──
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <div className="bg-surface p-12 rounded-2xl shadow-lg border border-outline-variant/30 text-center space-y-6 max-w-md w-full animate-scaleIn">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse-ring">
            <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
          </div>
          <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-on-surface">결제 완료!</h1>
          <p className="text-on-surface-variant">
            주문이 성공적으로 접수되었습니다.<br />
            프리미엄 커스텀 제품이 곧 제작에 들어갑니다.
          </p>
          <div className="bg-surface-container-low rounded-xl p-4 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">주문번호</span>
              <span className="font-semibold">SDP-{Date.now().toString().slice(-8)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">예상 배송일</span>
              <span className="font-semibold">영업일 기준 3-5일</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 btn-gradient text-white rounded-xl font-bold text-base"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-nav sticky top-0 z-50 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-['Space_Grotesk'] text-xl font-bold text-primary">신의데코프린팅</Link>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            안전 결제
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-[1280px] mx-auto px-6 pt-8">
        <div className="flex items-center gap-0 mb-10">
          {[
            { key: 'info', label: '배송 정보' },
            { key: 'payment', label: '결제' },
          ].map((s, i) => (
            <div key={s.key} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${step === s.key ? 'text-primary' : (i === 0 && step === 'payment') ? 'text-green-600' : 'text-on-surface-variant'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${step === s.key ? 'border-primary bg-primary text-white' : (i === 0 && step === 'payment') ? 'border-green-600 bg-green-600 text-white' : 'border-outline-variant'}`}>
                  {i === 0 && step === 'payment' ? '✓' : i + 1}
                </div>
                <span className="text-sm font-semibold hidden sm:block">{s.label}</span>
              </div>
              {i < 1 && <div className={`flex-1 h-0.5 mx-3 ${step === 'payment' ? 'bg-green-600' : 'bg-outline-variant/30'}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2 space-y-6">
            {step === 'info' && (
              <div className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30 space-y-6 animate-fadeIn">
                <h2 className="font-['Space_Grotesk'] text-xl font-bold border-b border-outline-variant/20 pb-4">배송 정보</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-on-surface mb-1.5 block">이름 *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="홍길동"
                      className={`w-full p-4 border rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-error' : 'border-outline-variant/50'}`}
                    />
                    {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-on-surface mb-1.5 block">연락처 *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className={`w-full p-4 border rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors ${errors.phone ? 'border-error' : 'border-outline-variant/50'}`}
                    />
                    {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-on-surface mb-1.5 block">기본 주소 *</label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      placeholder="서울특별시 강남구..."
                      className={`w-full p-4 border rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors ${errors.address ? 'border-error' : 'border-outline-variant/50'}`}
                    />
                    {errors.address && <p className="text-error text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-on-surface mb-1.5 block">상세 주소</label>
                    <input
                      type="text"
                      value={form.detail}
                      onChange={e => setForm({ ...form, detail: e.target.value })}
                      placeholder="동/호수, 상세 주소"
                      className="w-full p-4 border border-outline-variant/50 rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <button
                  onClick={() => { if (validate()) setStep('payment'); }}
                  className="w-full py-4 btn-gradient text-white rounded-xl font-bold text-base mt-2"
                >
                  다음 단계 (결제 수단 선택)
                </button>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30 space-y-6 animate-fadeIn">
                <h2 className="font-['Space_Grotesk'] text-xl font-bold border-b border-outline-variant/20 pb-4">결제 수단</h2>

                {/* Shipping Summary */}
                <div className="bg-surface-container-low rounded-xl p-4 space-y-1">
                  <p className="text-xs font-semibold text-on-surface-variant uppercase">배송지</p>
                  <p className="text-sm font-semibold">{form.name}</p>
                  <p className="text-sm text-on-surface-variant">{form.phone}</p>
                  <p className="text-sm text-on-surface-variant">{form.address} {form.detail}</p>
                  <button onClick={() => setStep('info')} className="text-primary text-xs font-semibold mt-1 hover:underline">수정</button>
                </div>

                {/* Payment Methods */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPayMethod('card')}
                    className={`p-5 border-2 rounded-xl text-sm font-semibold flex flex-col items-center gap-2 transition-all ${payMethod === 'card' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/50 text-on-surface-variant hover:border-primary/50'}`}
                  >
                    <span className="material-symbols-outlined text-2xl">credit_card</span>
                    신용/체크카드
                  </button>
                  <button
                    onClick={() => setPayMethod('easy')}
                    className={`p-5 border-2 rounded-xl text-sm font-semibold flex flex-col items-center gap-2 transition-all ${payMethod === 'easy' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/50 text-on-surface-variant hover:border-primary/50'}`}
                  >
                    <span className="material-symbols-outlined text-2xl">phone_iphone</span>
                    간편결제
                  </button>
                </div>

                {payMethod === 'card' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block">카드 번호</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-4 border border-outline-variant/50 rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">유효기간</label>
                        <input type="text" placeholder="MM/YY" className="w-full p-4 border border-outline-variant/50 rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">CVC</label>
                        <input type="text" placeholder="000" className="w-full p-4 border border-outline-variant/50 rounded-xl bg-surface-container-lowest text-sm focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                )}

                {payMethod === 'easy' && (
                  <div className="grid grid-cols-3 gap-3 animate-fadeIn">
                    {['카카오페이', '네이버페이', '토스'].map(p => (
                      <button key={p} className="p-3 border border-outline-variant/50 rounded-xl text-sm font-semibold hover:border-primary hover:bg-primary/5 transition-all">
                        {p}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={handlePay}
                  className="w-full py-4 mt-4 btn-gradient text-white rounded-xl font-bold text-lg flex justify-center items-center gap-2 shadow-lg"
                >
                  <span className="material-symbols-outlined">lock</span>
                  ₩{(totalPrice + (totalPrice > 30000 ? 0 : 3000)).toLocaleString()} 안전하게 결제하기
                </button>
                <p className="text-xs text-center text-on-surface-variant">
                  SSL 암호화로 결제 정보를 안전하게 보호합니다
                </p>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-4">
            <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/30 sticky top-24">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold mb-4">주문 요약</h3>

              {/* Items */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.length === 0 ? (
                  <p className="text-sm text-on-surface-variant text-center py-4">장바구니가 비어있습니다</p>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0 border border-outline-variant/20" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate">{item.name}</p>
                        {item.size && <p className="text-xs text-on-surface-variant">사이즈: {item.size}</p>}
                        <p className="text-xs text-primary font-bold">₩{(item.price * item.quantity).toLocaleString()} × {item.quantity}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <hr className="border-outline-variant/30 my-4" />

              {/* Price breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">상품 합계</span>
                  <span>₩{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">배송비</span>
                  <span className={totalPrice >= 30000 ? 'text-green-600 font-semibold' : ''}>
                    {totalPrice >= 30000 ? '무료' : '₩3,000'}
                  </span>
                </div>
                {totalPrice >= 30000 && (
                  <p className="text-xs text-green-600">✓ 3만원 이상 무료배송 적용</p>
                )}
              </div>

              <hr className="border-outline-variant/30 my-4" />

              <div className="flex justify-between items-center">
                <span className="font-bold">총 결제금액</span>
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
                  ₩{(totalPrice + (totalPrice >= 30000 ? 0 : 3000)).toLocaleString()}
                </span>
              </div>

              {/* Trust badges */}
              <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-2">
                {[
                  { icon: 'verified_user', text: '안전한 결제 시스템' },
                  { icon: 'local_shipping', text: '빠른 배송 (3-5 영업일)' },
                  { icon: 'assignment_return', text: '품질 보증 환불 정책' },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[16px]">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
