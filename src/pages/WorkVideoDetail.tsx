import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VIDEOS = [
  {
    id: 'video-001',
    title: '초정밀 레이저 컷팅 공정',
    desc: '최첨단 레이저 헤드를 활용하여 의류 및 아크릴 소재를 정밀하게 컷팅하는 자동화 설비의 작동 모습입니다.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    badge: '레이저 가공',
  },
  {
    id: 'video-002',
    title: '의류 열전사 필름 프린팅 작업',
    desc: '강력한 압력과 열을 가하여 가방 및 티셔츠에 고퀄리티 필름을 완벽하게 부착하는 프레스 공정입니다.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    badge: '열전사 프린팅',
  },
  {
    id: 'video-005',
    title: '고온 압착 열프레스기 작업',
    desc: '강력한 고온 압착 방식으로 티셔츠, 에코백 등의 원단에 전사 필름을 완벽하고 균일하게 부착하는 전문 열프레스 가공 공정입니다.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    badge: '열프레스 가공',
  },
  {
    id: 'video-003',
    title: '정밀 수작업 재단 및 가공',
    desc: '숙련된 작업자가 미세한 부분까지 섬세하게 다듬고 최종 검수하는 수작업 마감 작업입니다.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    badge: '가공 & 검수',
  },
  {
    id: 'video-004',
    title: '정밀 소품 커팅 스티커 가공',
    desc: '다양한 텍스처를 가진 전사필름에서 불필요한 영역을 날카로운 블레이드로 분리하는 컷팅 공정입니다.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    badge: '소품 가공',
  },
];

const WorkVideoDetail = () => {
  const [currentVideo, setCurrentVideo] = useState(VIDEOS[0]);

  const handleInquiry = () => {
    window.location.href = 'mailto:contact@godsdeco.com';
  };

  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      <Navbar />

      <main>
        {/* Category Header */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-3">
              <Link to="/" className="hover:text-primary transition-colors">홈</Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-on-surface font-bold">작업동영상</span>
            </nav>
            <h1 className="font-['Space_Grotesk'] text-5xl font-bold text-on-surface">작업동영상 갤러리</h1>
            <p className="text-on-surface-variant mt-3 max-w-2xl text-lg">
              신의데코프린팅의 정밀 공정 및 자동화 설비 가동 현장을 생생한 영상으로 확인해 보세요.
            </p>
          </div>
        </section>

        {/* Video Player & Playlist Section */}
        <section className="py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Player Column */}
              <div className="lg:col-span-8 space-y-6">
                <div className="rounded-2xl overflow-hidden bg-black border border-outline-variant/30 shadow-2xl relative aspect-[16/9]">
                  <video
                    key={currentVideo.id}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    src={currentVideo.src}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {currentVideo.badge}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold">{currentVideo.title}</h2>
                  <p className="text-on-surface-variant text-base leading-relaxed max-w-4xl">
                    {currentVideo.desc}
                  </p>
                </div>
              </div>

              {/* Playlist Column */}
              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-xl font-bold border-b border-outline-variant/30 pb-3">공정별 영상 목록</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {VIDEOS.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => setCurrentVideo(video)}
                      className={`flex gap-4 p-3 rounded-xl cursor-pointer border transition-all duration-300 ${
                        currentVideo.id === video.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container-low'
                      }`}
                    >
                      <div className="w-28 aspect-[16/9] bg-black rounded-lg overflow-hidden flex-shrink-0 relative flex items-center justify-center">
                        <video className="w-full h-full object-cover opacity-60" src={video.src} muted playsInline />
                        <span className="material-symbols-outlined absolute text-white text-2xl drop-shadow-md">
                          play_circle
                        </span>
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <span className="text-xs text-primary/80 font-medium mb-1">{video.badge}</span>
                        <h4 className="font-bold text-sm truncate">{video.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleInquiry}
                    className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-hover shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    맞춤형 제작 문의하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Banner */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold mb-6">최상의 퀄리티를 구현하는 설비 시스템</h2>
              <p className="text-on-surface-variant text-lg mb-8">
                신의데코프린팅은 단순 생산을 넘어 정교한 자동 제어 하에 최고의 설비들로 가공 공정을 설계합니다.
                대량 인쇄 및 복합 공정 가공 역시 체계적인 롤 피딩 방식으로 빈틈없이 대응합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
                {[
                  { icon: 'speed', title: '신속한 자동 공정', text: '롤 전사 피딩 시스템과 레이저 컷팅으로 생산 시간을 단축합니다.' },
                  { icon: 'precision_manufacturing', title: '0.05mm 정밀 제어', text: '오차 없는 컷팅 헤드를 장착하여 아주 정교한 로고도 구현합니다.' },
                  { icon: 'verified', title: '철저한 수작업 최종 검수', text: '기계 가공을 마친 후 전수 수작업 검사를 통해 불량을 철저히 배제합니다.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">{item.icon}</span>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkVideoDetail;
