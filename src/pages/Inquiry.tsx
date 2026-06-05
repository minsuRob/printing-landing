import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'tshirt',
    quantity: '',
    message: '',
    file: null as File | null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <div className="bg-[#f8faff] text-[#1a1c1e] font-sans min-h-screen">
      <Navbar />
      
      <main className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-6">
                GET A QUOTE
              </span>
              <h1 className="text-5xl font-black leading-tight mb-6">
                당신의 디자인을 <br/>
                <span className="text-primary">현실로 만드세요.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                상세한 정보를 남겨주시면 신의데코의 프린팅 전문가가 24시간 이내에 최적의 견적과 솔루션을 제안해 드립니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">최고급 DTF 필름 사용</h4>
                  <p className="text-sm text-gray-500">세탁 후에도 변형 없는 강력한 내구성을 보장합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">빠른 제작 및 배포</h4>
                  <p className="text-sm text-gray-500">주문 확정 후 48시간 이내 제작 완료 및 발송 시스템.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-[32px] text-white shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm font-medium opacity-80 mb-2">빠른 상담이 필요하신가요?</p>
                <h3 className="text-2xl font-bold mb-4">010-2058-7121</h3>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold transition-all">
                  카카오톡 채널 상담하기
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">문의가 접수되었습니다!</h2>
                <p className="text-gray-500 mb-10">담당자가 확인 후 입력하신 연락처로 빠르게 안내해 드리겠습니다.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
                >
                  확인
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">이름</label>
                    <input 
                      type="text" 
                      required
                      placeholder="성함 또는 기업명"
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">연락처</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="010-0000-0000"
                      className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">카테고리</label>
                  <select 
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="tshirt">티셔츠 프린팅</option>
                    <option value="sneakers">스니커즈 커스텀</option>
                    <option value="hat">모자/굿즈</option>
                    <option value="bag">에코백/가방</option>
                    <option value="film">필름 대량 주문</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">문의 상세 내용</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="제작하시려는 제품 종류, 수량, 디자인 특이사항 등을 적어주세요."
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">디자인 파일 첨부 (선택)</label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-primary/40 transition-colors">
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <span className="material-symbols-outlined text-gray-400 mb-2">upload_file</span>
                    <p className="text-sm text-gray-500">
                      {formData.file ? formData.file.name : 'AI, PSD, PNG 파일을 드래그하거나 클릭하여 선택하세요.'}
                    </p>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
                >
                  문의하기 제출
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inquiry;
