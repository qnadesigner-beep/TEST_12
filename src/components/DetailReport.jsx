import { detailData, weaponTransition, companionAdvice } from '../data/detailData.js';
import './DetailReport.css';

const THREADS_URL = 'https://www.threads.com/@wag_on_q';

const SECTION_LABELS = [
  { key: 'structure',  title: '지금 당신의 판' },
  { key: 'growth',     title: '다음 단계 경로' },
  { key: 'mistake',    title: '이 유형이 반복하는 실수' },
  { key: 'thisWeek',   title: '이번 주 딱 하나' },
  { key: 'reference',  title: '참고할 캐릭터' },
  { key: 'trap',       title: '지금 당장 피할 것' },
];

export default function DetailReport({ result, onBack }) {
  const { character, weapon, companionPrefix, weaponMatch,
          pastWeaponLabel, currentWeaponLabel } = result;

  const data = detailData[character.id];
  if (!data) return null;

  // 무기 전환 키
  const pastKey   = result.pastWeaponKey   ?? result.weapon?.id;
  const weaponKey = result.currentWeaponKey ?? result.weapon?.id;
  const transKey  = weaponMatch
    ? 'same'
    : `${pastKey}→${weaponKey}`;
  const transText = weaponTransition[transKey] ?? weaponTransition['same'];

  // AI 동행자 처방
  const companionKey = result.companionKey ?? 'solo';
  const aiAdvice = companionAdvice[companionKey];

  function handleThreads() {
    window.open(THREADS_URL, '_blank', 'noopener');
  }

  return (
    <div className="dr-wrap">

      {/* 헤더 */}
      <div className="dr-header">
        <button className="dr-back-btn" onClick={onBack} aria-label="결과로 돌아가기">
          ← 결과
        </button>
        <span className="dr-header-title">상세 진단서</span>
      </div>

      {/* 캐릭터 타이틀 */}
      <div className="dr-char-bar" style={{ '--char-accent': character.accentColor }}>
        <span className="dr-char-name">{character.name}</span>
        <span className="dr-char-def">{character.definition}</span>
      </div>

      {/* 6섹션 카피 */}
      <div className="dr-sections">
        {SECTION_LABELS.map(({ key, title }, i) => (
          <div key={key} className="dr-section">
            <span className="dr-section-num">0{i + 1}</span>
            <div className="dr-section-content">
              <h3 className="dr-section-title">{title}</h3>
              <p className="dr-section-body">{data[key]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 무기 전환 분석 */}
      <div className="dr-block dr-block--weapon">
        <h3 className="dr-block-title">자본 이동 분석</h3>
        {weaponMatch ? (
          <p className="dr-block-body">
            <strong>{pastWeaponLabel}</strong>에 과거에도 지금도 집중하고 있다. {transText}
          </p>
        ) : (
          <p className="dr-block-body">
            <strong>{pastWeaponLabel}</strong> → <strong style={{ color: character.accentColor }}>{currentWeaponLabel}</strong>으로 이동 중이다.{' '}
            {transText}
          </p>
        )}
      </div>

      {/* AI 동행자 처방 */}
      <div className="dr-block dr-block--ai">
        <h3 className="dr-block-title">AI 동행자 처방</h3>
        <p className="dr-block-body">{aiAdvice}</p>
      </div>

      {/* Threads CTA — 맨 마지막 */}
      <div className="dr-cta">
        <p className="dr-cta-desc">
          {character.name} 사장님이 실제로 이 전환을 한 사례,<br />
          막혔던 순간과 넘긴 방법을 Threads에서 씁니다.
        </p>
        <button
          className="dr-cta-btn"
          onClick={handleThreads}
          style={{ borderColor: character.accentColor, color: character.accentColor }}
          id="btn-threads-detail"
        >
          {character.name}편 읽으러 가기 →
        </button>
      </div>

    </div>
  );
}
