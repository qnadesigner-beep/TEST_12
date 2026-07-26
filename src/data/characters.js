// 캐릭터 데이터 — 9종 (3×3 매트릭스)
// R축 3단계 × L축 3단계

export const characters = {

  // ── R: 흐름형(0-2) ─────────────────────────────────────────────
  hunter: {
    id: 'hunter',
    name: '사냥꾼',
    bgImage: '/images/bg_hunter.jpg',
    mythName: 'Artemis',
    rLabel: '흐름형',
    lLabel: '내 몸만',
    accentColor: '#39FF14',
    definition: '잡아야 먹는다. 매달 새 먹잇감을 찾아야 한다.',
    uniqueStrength: '실행력. 시작을 가장 잘 한다. 아무것도 없는 데서 판을 여는 능력은 이 유형만 갖고 있다.',
    leak: '멈추면 통장도 멈춘다. 바쁜데 남는 게 없고, 잘될수록 더 바빠지는 구조다.',
    populationRatio: 31,
    nextMove: '이번 달 한 일 중 하나를 패키지로 만들어라. 다음 번엔 덜 설명하고 더 빨리 팔린다.',
  },
  fisher: {
    id: 'fisher',
    name: '어부',
    bgImage: '/images/bg_fisher.jpg',
    mythName: 'Poseidon',
    rLabel: '흐름형',
    lLabel: '시스템',
    accentColor: '#39FF14',
    definition: '그물이 좀 있다. 혼자일 때보다 더 잘 잡힌다.',
    uniqueStrength: '채널. 나 없이도 일부가 굴러간다. 온전히 맨손은 아니다.',
    leak: '그물을 계속 던져야 한다. 자동은 아니고, 관리 비용이 생각보다 많이 든다.',
    populationRatio: 11,
    nextMove: '제일 잘 잡히는 채널 하나에 집중해라. 나머지는 줄이거나 없애라.',
  },
  clergy: {
    id: 'clergy',
    name: '성직자',
    bgImage: '/images/bg_clergy.jpg',
    mythName: 'Hestia',
    rLabel: '반복형',
    lLabel: '시스템',
    accentColor: '#39FF14',
    definition: '팔로워가 있다. 말 한 마디가 멀리 퍼진다.',
    uniqueStrength: '영향력. 같은 일을 해도 더 많이 닿는다. 신뢰가 이미 쌓여 있다.',
    leak: '영향력이 돈으로 연결되는 구조가 약하다. 인지도는 높은데 수익이 안 따라온다.',
    populationRatio: 8,
    nextMove: '영향력에서 수익이 나오는 파이프라인 하나를 만들어라. 강의든, 제품이든 하나면 된다.',
  },

  // ── R: 반복형(3-5) ─────────────────────────────────────────────
  blacksmith: {
    id: 'blacksmith',
    name: '대장장이',
    bgImage: '/images/bg_blacksmith.jpg',
    mythName: 'Hephaestus',
    rLabel: '반복형',
    lLabel: '내 몸만',
    accentColor: '#39FF14',
    definition: '단골이 돌아온다. 실력으로 버텨온 사람.',
    uniqueStrength: '반복 거래. 광고비 없이 다음 달이 온다. 이 유형만 갖는 구조다.',
    leak: '결국 내 손이 멈추면 다 멈춘다. 몸이 유일한 한계이자 유일한 엔진이다.',
    populationRatio: 18,
    nextMove: '가장 자주 반복되는 일 하나를 메뉴화해라. 견적 없이 바로 팔리게 만든다.',
  },
  merchant: {
    id: 'merchant',
    name: '상인',
    bgImage: '/images/bg_merchant.jpg',
    mythName: 'Hermes',
    rLabel: '흐름형',
    lLabel: '손발+도구',
    accentColor: '#39FF14',
    definition: '여러 라인을 동시에 돌린다. 균형이 특기다.',
    uniqueStrength: '안정성. 하나가 죽어도 살아남는다. 시장 급변에 가장 강한 구조다.',
    leak: '어느 라인이 진짜 돈을 버는지 흐릿하다. 분산이 방어가 아니라 희석이 된다.',
    populationRatio: 13,
    nextMove: '라인별로 시간 대비 순이익을 계산해라. 하위 2개는 정리하고, 상위 1개에 집중해라.',
  },
  architect: {
    id: 'architect',
    name: '건축가',
    bgImage: '/images/bg_architect.jpg',
    mythName: 'Daedalus',
    rLabel: '축적형',
    lLabel: '손발+도구',
    accentColor: '#39FF14',
    definition: '팀이 있고 시스템이 있다. 판을 설계하는 사람.',
    uniqueStrength: '재현 능력. 성공한 걸 다시 만들 수 있다. 혼자서는 불가능한 규모가 된다.',
    leak: '새 판을 열 때마다 에너지가 크게 든다. 설계자가 빠지면 흔들린다.',
    populationRatio: 3,
    nextMove: '지난 프로젝트를 상품화해라. 사례 → 절차 → 패키지. 다음 판은 더 빠르다.',
  },

  // ── R: 축적형(6-8) ─────────────────────────────────────────────
  farmer: {
    id: 'farmer',
    name: '농부',
    bgImage: '/images/bg_farmer.jpg',
    mythName: 'Demeter',
    rLabel: '반복형',
    lLabel: '손발+도구',
    accentColor: '#39FF14',
    definition: '심은 게 계속 자란다. 기다릴 줄 아는 사람.',
    uniqueStrength: '쌓인 신뢰. 이미 3년치 씨앗을 뿌렸다. 경쟁자가 따라오기 어렵다.',
    leak: '수요는 있는데 내 몸이 병목이다. 혼자 수확해서 규모가 안 커진다.',
    populationRatio: 10,
    nextMove: '수확을 도와줄 사람 한 명을 구해라. 구조는 이미 있다. 손만 더 필요하다.',
  },
  professor: {
    id: 'professor',
    name: '교수',
    bgImage: '/images/bg_professor.jpg',
    mythName: 'Athena',
    rLabel: '축적형',
    lLabel: '내 몸만',
    accentColor: '#39FF14',
    definition: '이름이 알려졌다. 사람들이 먼저 찾아온다.',
    uniqueStrength: '신뢰 자산. 설명 없이 팔린다. 여섯 유형 중 가장 낮은 마케팅 비용으로 운영된다.',
    leak: '가르치고 나면 다시 처음부터다. 일회성 수입이 많고 반복 소득이 적다.',
    populationRatio: 6,
    nextMove: '지식을 자고 일어나도 팔리는 형태로 하나 만들어라. 강의 녹화도 된다.',
  },
  lord: {
    id: 'lord',
    name: '군주',
    bgImage: '/images/bg_lord.jpg',
    mythName: 'Zeus',
    rLabel: '축적형',
    lLabel: '시스템',
    accentColor: '#D4AF37',
    definition: '내가 없어도 돌아간다. 대부분의 사장님이 도달 못하는 자리.',
    uniqueStrength: '시간. 무엇을 할지 고를 수 있다. 나머지 유형은 해야 할 일에 끌려다닌다.',
    leak: '지키는 데 바빠서 새 판을 안 연다. 안정은 가장 느린 형태의 쇠퇴다.',
    populationRatio: 0.3,
    isRare: true,
    nextMove: '수익의 일부를 실패해도 되는 실험에 고정 배분해라. 비율은 작아도 된다.',
  },
};

// ── 무기 (Q10) ────────────────────────────────────────────────────
export const weapons = {
  hand:   { name: '기술과 몸',   badge: '/emblems/badge_hand.svg' },
  seal:   { name: '단골 신뢰',   badge: '/emblems/badge_seal.svg' },
  banner: { name: '팔로워 영향력', badge: '/emblems/badge_banner.svg' },
  gear:   { name: '시스템 구조', badge: '/emblems/badge_gear.svg' },
  circle: { name: '함께하는 팀', badge: '/emblems/badge_circle.svg' },
};

// ── 길 (Q11) ──────────────────────────────────────────────────────
export const paths = {
  commission: '의뢰',
  market:     '판매',
  fame:       '영향력',
  pledge:     '구독',
  archive:    '콘텐츠',
};

// ── 동행자 접두어 (Q12) ───────────────────────────────────────────
export const companions = {
  solo:      '아직 혼자라면 —',
  assistant: 'AI를 조수로 쓰고 있다면 —',
  member:    'AI가 팀원 수준이라면 —',
};

// ── 과거 무기 라벨 (Q9 비교용) ────────────────────────────────────
export const weaponLabels = {
  hand:   '기술과 몸',
  seal:   '단골 신뢰',
  banner: '팔로워 영향력',
  gear:   '시스템 구조',
  circle: '함께하는 팀',
};
