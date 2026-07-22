import { characters, weapons, paths, companions, weaponLabels } from '../data/characters.js';

/**
 * 9캐릭터 채점 — R(반복성) × L(레버리지) 3×3 매트릭스
 *
 * R = Q1+Q2+Q3+Q4 (0~8)
 *   흐름형  0–2
 *   반복형  3–5
 *   축적형  6–8
 *
 * L = Q5+Q6+Q7+Q8 (0~8)
 *   내 몸만    0–2
 *   손발+도구  3–5
 *   시스템     6–8
 */
export function calcResult(answers) {
  const rScore = (answers.Q1 ?? 0) + (answers.Q2 ?? 0)
               + (answers.Q3 ?? 0) + (answers.Q4 ?? 0);

  const lScore = (answers.Q5 ?? 0) + (answers.Q6 ?? 0)
               + (answers.Q7 ?? 0) + (answers.Q8 ?? 0);

  // R 단계
  let rTier;
  if      (rScore <= 2) rTier = 'flow';
  else if (rScore <= 5) rTier = 'repeat';
  else                  rTier = 'stack';

  // L 단계 (3단계로 분리)
  let lTier;
  if      (lScore <= 2) lTier = 'body';
  else if (lScore <= 5) lTier = 'tool';
  else                  lTier = 'system';

  // 3×3 매핑
  const MAP = {
    flow:   { body: 'hunter',     tool: 'fisher',    system: 'clergy'    },
    repeat: { body: 'blacksmith', tool: 'merchant',  system: 'architect' },
    stack:  { body: 'farmer',     tool: 'professor', system: 'lord'      },
  };

  const charKey = MAP[rTier][lTier];

  // R 라벨
  const rLabels = { flow: '흐름형', repeat: '반복형', stack: '축적형' };
  // L 라벨
  const lLabels = { body: '내 몸만', tool: '손발+도구', system: '시스템' };

  // 무기·길·동행자
  const weaponKey     = answers.Q10 ?? 'hand';
  const pathKey       = answers.Q11 ?? 'commission';
  const companionKey  = answers.Q12 ?? 'solo';
  const pastWeaponKey = answers.Q9  ?? 'hand';
  const weaponMatch   = pastWeaponKey === weaponKey;

  // 막대 % (시각화용)
  const rPct = Math.round((rScore / 8) * 100);
  const lPct = Math.round((lScore / 8) * 100);

  return {
    character:          characters[charKey],
    weapon:             weapons[weaponKey],
    path:               paths[pathKey],
    companionPrefix:    companions[companionKey],
    rScore,
    lScore,
    rLabel:             rLabels[rTier],
    lLabel:             lLabels[lTier],
    rPct,
    lPct,
    weaponMatch,
    pastWeaponLabel:    weaponLabels[pastWeaponKey],
    currentWeaponLabel: weaponLabels[weaponKey],
  };
}
