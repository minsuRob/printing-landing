import React, { useEffect } from 'react';

/**
 * SecurityGuard Component
 * 홈페이지 보안 강화를 위한 보안 컴포넌트입니다.
 * - 개발자 도구 감지 및 차단 보조
 * - 콘솔 로그 보호
 * - 우클릭 및 단축키 방지 보조
 */
const SecurityGuard: React.FC = () => {
  useEffect(() => {
    // 1. 콘솔 로그 보호 및 경고 문구
    const warningMessage = `
      %c주의! 이 구역은 보안 구역입니다.%c
      
      이 기능을 사용하여 코드를 복사하거나 수정하려고 시도하지 마십시오.
      무단 접근 시 법적 책임을 물을 수 있습니다.
    `;
    
    console.log(
      warningMessage,
      "color: red; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 0 rgb(0,0,0);",
      "color: gray; font-size: 16px;"
    );

    // 콘솔을 지속적으로 비우는 기법 (필요 시 활성화)
    // setInterval(() => {
    //   console.clear();
    // }, 3000);

    // 2. 개발자 도구 감지 (간단한 방식)
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        // 개발자 도구가 열려있을 때의 동작 (예: 경고 또는 페이지 리로드)
        // console.warn("개발자 도구 감지됨");
      }
    };

    window.addEventListener('resize', detectDevTools);

    // 3. 특정 키 조합 차단 (React 레벨에서 추가 보호)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S (페이지 저장), Ctrl+Shift+I (개발자 도구), F12 등
      if (
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'u') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', detectDevTools);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // 시각적 요소는 없음
};

export default SecurityGuard;
