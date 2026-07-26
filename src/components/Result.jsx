import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { gaCardSave, gaCtaThreadsClick } from '../utils/ga4.js';
import './Result.css';

const THREADS_URL = 'https://www.threads.com/@wag_on_q';
const DIAG_URL = 'wag-on-q.vercel.app';

export default function Result({ result, onRetry, onDetail }) {
  const {
    character,
    weapon,
    path,
    companionPrefix,
    rLabel,
    lLabel,
    rPct,
    lPct,
    weaponMatch,
    pastWeaponLabel,
    currentWeaponLabel,
  } = result;

  const cardRef = useRef(null);

  async function handleSaveCard() {
    gaCardSave(character.name);
    const node = cardRef.current;
    if (!node) return;
    try {
      node.classList.add('capture-mode');
      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#111111',
        width: node.offsetWidth,
        height: node.offsetHeight,
        logging: false,
      });
      node.classList.remove('capture-mode');
      const link = document.createElement('a');
      link.download = `${character.name}_진단카드.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      cardRef.current?.classList.remove('capture-mode');
    }
  }

  function handleCtaClick() {
    gaCtaThreadsClick();
    window.open(THREADS_URL, '_blank', 'noopener');
  }

  return (
    <div className="result-wrap">

      {/* 저장용 카드 */}
      <div
        ref={cardRef}
        className="result-card"
        style={{ '--char-accent': character.accentColor }}
        id="result-card"
      >
        {/* ── 상단: 석상 배경 이미지 영역 ── */}
        <div
          className="result-hero"
          style={{
            backgroundImage: character.bgImage
              ? `url(${character.bgImage})`
              : 'none',
          }}
        >
          {/* 이미지 없을 때 플레이스홀더 */}
          {!character.bgImage && (
            <div className="result-hero-placeholder" />
          )}
          {/* 하단 그라데이션 오버레이 */}
          <div className="result-hero-overlay" />

          {/* 캐릭터명 — 이미지 위에 올라옴 */}
          <div className="result-char-header">
            <h1 className="result-char-name">{character.name}</h1>
            <p className="result-char-subtitle">{character.definition}</p>
          </div>
        </div>

        {/* ── 하단: 본문 영역 ── */}
        <div className="result-body">

          {/* 태그 */}
          <div className="result-tags">
            <span className="result-tag">{rLabel}</span>
            <span className="result-tag">{lLabel}</span>
            <span className="result-tag result-tag--accent">{path}</span>
          </div>

          {/* Q9 ≠ Q10 비교 */}
          {!weaponMatch && (
            <div className="result-weapon-compare">
              지금까지는 <strong>{pastWeaponLabel}</strong>으로 버텼고,
              앞으로는 <strong>{currentWeaponLabel}</strong>에 집중하고 있다.
            </div>
          )}

          {/* 게이지 */}
          <div className="result-gauges">
            <GaugeBar label="수익 반복성" valueLabel={rLabel} pct={rPct} accentColor={character.accentColor} />
            <GaugeBar label="레버리지"   valueLabel={lLabel} pct={lPct} accentColor={character.accentColor} />
          </div>

          {/* 3블록 카피 */}
          <div className="result-blocks">
            <CopyBlock title="강점"      body={character.uniqueStrength} />
            <CopyBlock title="주의할 것"  body={character.leak} />
            <CopyBlock
              title="지금 당장"
              body={`${companionPrefix}\n${character.nextMove}`}
              accent={character.accentColor}
            />
          </div>

          <div className="result-card-footer">{DIAG_URL}</div>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="result-actions no-capture">
        <button
          className="btn-primary result-save-btn"
          onClick={handleSaveCard}
          id="btn-card-save"
          style={{ background: character.accentColor, color: '#fff' }}
        >
          결과 카드 저장
        </button>

        <button
          className="btn-primary result-detail-btn"
          onClick={onDetail}
          id="btn-detail"
          style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1.5px solid var(--border)', boxShadow: 'none' }}
        >
          {character.name} 상세 진단서 보기
        </button>

        <button className="result-retry-btn" onClick={onRetry} id="btn-retry">
          다시 진단하기
        </button>
      </div>

      <p className="result-footer-text">멈추면 굶는 사장</p>
    </div>
  );
}

function GaugeBar({ label, valueLabel, pct, accentColor }) {
  return (
    <div className="gauge">
      <div className="gauge-meta">
        <span className="gauge-label">{label}</span>
        <span className="gauge-value-label" style={{ color: accentColor }}>{valueLabel}</span>
      </div>
      <div className="gauge-track">
        <div className="gauge-fill" style={{ width: `${pct}%`, background: accentColor }} />
      </div>
    </div>
  );
}

function CopyBlock({ title, body, accent }) {
  return (
    <div className="copy-block">
      <span className="copy-block-title">{title}</span>
      <p className="copy-block-body" style={accent ? { color: accent } : {}}>
        {body}
      </p>
    </div>
  );
}
