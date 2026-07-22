import { useEffect } from 'react';
import { gaQuizStart } from '../utils/ga4.js';
import './Intro.css';

export default function Intro({ onStart }) {
  useEffect(() => {
    gaQuizStart();
  }, []);

  return (
    <div className="intro-wrap">
      {/* 상단 */}
      <div className="intro-top">
        <span className="intro-brand">멈추면 굶는 사장</span>
      </div>

      {/* 중앙 메인 카피 */}
      <div className="intro-center">
        <h1 className="intro-title">
          사장님,<br />
          사냥꾼이세요?<br />
          군주세요?
        </h1>
        <p className="intro-sub">
          성격 말고, 통장 구조를 봅니다.<br />
          12문항, 2분.
        </p>
        <div className="intro-badge-row">
          <span className="intro-badge">무료</span>
          <span className="intro-badge">로그인 없음</span>
          <span className="intro-badge">2분 완성</span>
        </div>
      </div>

      {/* 하단 CTA */}
      <div className="intro-bottom">
        <button
          className="btn-primary intro-cta"
          onClick={onStart}
          id="btn-start"
        >
          진단 시작
        </button>
        <p className="intro-footer">
          🎭 이 진단은 「멈추면 굶는 사장」 세계관의 일부입니다
        </p>
      </div>
    </div>
  );
}
