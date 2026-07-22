import { useEffect, useRef } from 'react';
import { gaQuizStart } from '../utils/ga4.js';
import './LandingPage.css';

// 픽셀 도트 장식 고정 위치
const DOTS = [
  { top: '12%', left: '8%', size: 6 },
  { top: '23%', left: '62%', size: 4 },
  { top: '38%', left: '18%', size: 5 },
  { top: '55%', left: '75%', size: 6 },
  { top: '67%', left: '40%', size: 4 },
  { top: '78%', left: '88%', size: 5 },
  { top: '15%', left: '85%', size: 4 },
  { top: '45%', left: '92%', size: 6 },
];

export default function LandingPage({ onStart }) {
  const heroRef = useRef(null);

  useEffect(() => {
    gaQuizStart();
    // 스크롤 시 헤더 패럴랙스
    const handleScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleStart() {
    onStart();
    window.scrollTo({ top: 0 });
  }

  return (
    <div className="lp-wrap">
      {/* 픽셀 도트 장식 */}
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="lp-dot"
          style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
        />
      ))}

      {/* ───────────────────────────────── HERO ─── */}
      <section className="lp-hero">
        <div className="lp-hero-bg" ref={heroRef} />
        <div className="lp-hero-overlay" />

        <div className="lp-hero-content">
          <p className="lp-season-label">
            <span className="lp-season-icon">◈</span>
            SEASON 1 「멈추면 굶는 사장」 — 기선 선공 시뮬레이션
          </p>

          <h1 className="lp-hero-title">
            사냥꾼에서<br />
            <em>제우스</em>까지
          </h1>

          <p className="lp-hero-body">
            멈추면 굶는다. 잡으면 먹고.<br />
            한 사장이 <strong>신들의 왕좌</strong>까지 걸어가는 기록.<br />
            가상의 이야기지만, 견적서의 고통은 진짜입니다.
          </p>

          <div className="lp-hero-ctas">
            <button className="btn-primary lp-cta-main" onClick={handleStart} id="btn-hero-start">
              2분 진단 시작 →
            </button>
            <button className="lp-cta-ghost" onClick={() => {
              document.getElementById('lp-section-01')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              기록 먼저 보기
            </button>
          </div>
        </div>

        <div className="lp-hero-footer">
          <span>SCROLL — 기록 결정</span>
          <span>EST. 2년차</span>
        </div>
      </section>

      {/* ────────────────────────────── 기록 01 ─── */}
      <section className="lp-section lp-section--dark" id="lp-section-01">
        <div className="lp-chapter-label">
          <span className="lp-ch-num">기록</span>
          <span className="lp-ch-badge">01</span>
          <span className="lp-ch-title">PROLOGUE</span>
        </div>

        <h2 className="lp-section-title">
          망하진 않았다.<br />
          <em>근데 크지도 않았다.</em>
        </h2>

        <div className="lp-prologue-body">
          <p className="lp-prologue-text lp-prologue-text--block">
            스튜디오 2년차.<br />
            매장을 다자인하고, 매대를 만들고, 진열을 바꿨다.<br />
            일은 끊기지 않았다. 동장도 마르지 않았다.
          </p>
          <p className="lp-prologue-text">
            그런데 2년 전과 지금, <em>달라진 게 없다.</em><br />
            더 잘하게 됐는데, 더 나아지진 않았다.
          </p>
          <p className="lp-prologue-text lp-prologue-text--emphasis">
            그게 이상해서, 내 사업을 진단해봤다.
          </p>
        </div>

        {/* 배경 광원 */}
        <div className="lp-section-glow lp-section-glow--right" />
      </section>

      {/* ────────────────────────────── 기록 02 ─── */}
      <section className="lp-section lp-section--diag" id="lp-section-02">
        <div className="lp-chapter-label">
          <span className="lp-ch-num">기록</span>
          <span className="lp-ch-badge">02</span>
          <span className="lp-ch-title">DIAGNOSIS</span>
        </div>

        <h2 className="lp-section-title">
          왕인 줄 알았는데<br />
          <em>사냥꾼이었다.</em>
        </h2>

        <p className="lp-diag-desc">
          진단은 성격을 묻지 않았다. <strong>통장 구조</strong>를 물었다.<br />
          멈추면 수입이 멈추는가. 내 손을 가치지 않은 돈이 있는가.
        </p>

        {/* 미리보기 게이지 */}
        <div className="lp-diag-gauges">
          <DiagGauge label="수익 반복성" sublabel="REPEATABILITY" value={15} />
          <DiagGauge label="레버리지" sublabel="LEVERAGE" value={10} />
        </div>

        <div className="lp-diag-result">
          <span className="lp-diag-verdict">판정 —</span>
          <span className="lp-diag-char">🏹 사냥꾼</span>
          <p className="lp-diag-tagline">
            잡으면 먹고, 멈추면 굶는 사람. 장사가 잘될수록 탈출이 늦어진다.
          </p>
        </div>

        <div className="lp-section-glow lp-section-glow--left" />
      </section>

      {/* ────────────────────────────── 기록 06 ─── */}
      <section className="lp-section lp-section--cta" id="lp-section-06">
        <div className="lp-statues-bg" />
        <div className="lp-statues-overlay" />

        <div className="lp-cta-content">
          <div className="lp-chapter-label lp-chapter-label--center">
            <span className="lp-ch-num">기록</span>
            <span className="lp-ch-badge">06</span>
            <span className="lp-ch-title">YOUR TURN</span>
          </div>

          <h2 className="lp-cta-title">
            사장님은<br />
            어떤 <em>석상</em>입니까.
          </h2>

          <p className="lp-cta-desc">
            성격 말고, 통장 구조를 봅니다.<br />
            12문항, 2분. 당신의 석상이 깨어납니다.
          </p>

          <div className="lp-cta-btns">
            <button className="btn-primary lp-cta-main" onClick={handleStart} id="btn-cta-start">
              내 석상 깨우기 →
            </button>
            <button className="lp-cta-ghost" onClick={() => window.open('https://www.threads.com/@wag_on_q', '_blank', 'noopener')}>
              기록 원로우 — 화규 면제
            </button>
          </div>

          <p className="lp-cta-chars">
            사냥꾼 · 대장장이 · 상인 · 어부 · 교수 · 농부 · 성직자 · 건축가 · 군주
          </p>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="lp-footer">
        🎭 이 진단은 「멈추면 굶는 사장」 세계관의 일부입니다
      </footer>
    </div>
  );
}

function DiagGauge({ label, sublabel, value }) {
  return (
    <div className="lp-gauge">
      <div className="lp-gauge-meta">
        <span className="lp-gauge-label">
          {label} <span className="lp-gauge-sub">{sublabel}</span>
        </span>
        <span className="lp-gauge-value">{value}</span>
      </div>
      <div className="lp-gauge-track">
        <div className="lp-gauge-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
