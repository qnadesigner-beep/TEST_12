// 12문항 — 새 스펙 (PART A) 기준

export const questions = [

  // ── R축: 반복성 Q1~Q4 (0·1·2점) ──────────────────────────────
  {
    id: 'Q1',
    axis: 'R',
    axisLabel: '반복성',
    text: '이번 달 일이 끝나면, 다음 달 시작점은?',
    type: 'score',
    options: [
      { label: '매번 새로 판을 연다', value: 0 },
      { label: '지난 판의 일부가 따라온다', value: 1 },
      { label: '판이 알아서 굴러와 있다', value: 2 },
    ],
  },
  {
    id: 'Q2',
    axis: 'R',
    axisLabel: '반복성',
    text: '손님이 지갑을 여는 순간은?',
    type: 'score',
    options: [
      { label: '완성해서 넘겼을 때 한 번', value: 0 },
      { label: '찾아올 때마다·팔릴 때마다', value: 1 },
      { label: '약속한 날마다 알아서', value: 2 },
    ],
  },
  {
    id: 'Q3',
    axis: 'R',
    axisLabel: '반복성',
    text: '지난 3개월, 다시 찾아온 손님은?',
    type: 'score',
    options: [
      { label: '매번 새로운 얼굴', value: 0 },
      { label: '낯익은 얼굴이 섞임', value: 1 },
      { label: '대부분 아는 사이', value: 2 },
    ],
  },
  {
    id: 'Q4',
    axis: 'R',
    axisLabel: '반복성',
    text: '다음 달 매출을 지금 예측한다면?',
    type: 'score',
    options: [
      { label: '열어봐야 안다', value: 0 },
      { label: '절반은 정해져 있다', value: 1 },
      { label: '거의 그대로 맞춘다', value: 2 },
    ],
  },

  // ── L축: 레버리지 Q5~Q8 (0·1·2점) ──────────────────────────────
  {
    id: 'Q5',
    axis: 'L',
    axisLabel: '레버리지',
    text: '2주 동안 연락을 끊고 사라진다면?',
    type: 'score',
    options: [
      { label: '멈춘다. 내가 엔진이니까', value: 0 },
      { label: '절반쯤 굴러간다', value: 1 },
      { label: '그대로 굴러가 있다', value: 2 },
    ],
  },
  {
    id: 'Q6',
    axis: 'L',
    axisLabel: '레버리지',
    text: '매출을 2배로 만드는 가장 현실적인 방법은?',
    type: 'score',
    options: [
      { label: '내 시간을 더 쓴다', value: 0 },
      { label: '손님의 수를 늘린다', value: 1 },
      { label: '나 없이 도는 구조를 키운다', value: 2 },
    ],
  },
  {
    id: 'Q7',
    axis: 'L',
    axisLabel: '레버리지',
    text: '지난달 수입 중 내가 직접 안 붙어도 들어온 돈은?',
    type: 'score',
    options: [
      { label: '전부 내 손을 거쳤다', value: 0 },
      { label: '일부는 알아서', value: 1 },
      { label: '상당 부분 알아서', value: 2 },
    ],
  },
  {
    id: 'Q8',
    axis: 'L',
    axisLabel: '레버리지',
    text: '요즘 하루의 대부분을 쓰는 일은?',
    type: 'score',
    options: [
      { label: '만들고 파는 일', value: 0 },
      { label: '손님·채널 돌보기', value: 1 },
      { label: '굴러갈 구조 짜기', value: 2 },
    ],
  },

  // ── 무기: 자본 유형 Q9·Q10 ────────────────────────────────────
  {
    id: 'Q9',
    axis: 'W',
    axisLabel: '자본 유형',
    text: '지금까지 사업을 버티게 해준 자산은?',
    type: 'tag',
    options: [
      { label: '내 기술과 몸', value: 'hand' },
      { label: '나를 다시 찾을 사람들', value: 'seal' },
      { label: '나를 지켜보는 사람들', value: 'banner' },
      { label: '내가 만들어둔 구조', value: 'gear' },
      { label: '함께 일하는 사람들', value: 'circle' },
    ],
  },
  {
    id: 'Q10',
    axis: 'W',
    axisLabel: '자본 유형',
    text: '지금 가장 공들여 키우고 있는 것은?',
    type: 'tag',
    options: [
      { label: '내 기술과 몸', value: 'hand' },
      { label: '나를 다시 찾을 사람들', value: 'seal' },
      { label: '나를 지켜보는 사람들', value: 'banner' },
      { label: '내가 만들어둔 구조', value: 'gear' },
      { label: '함께 일하는 사람들', value: 'circle' },
    ],
  },

  // ── 길: 수익 방식 Q11 ──────────────────────────────────────────
  {
    id: 'Q11',
    axis: 'P',
    axisLabel: '수익 방식',
    text: '지금 주된 수익이 들어오는 방식은?',
    type: 'tag',
    options: [
      { label: '건마다 완성해서 넘긴다', value: 'commission' },
      { label: '팔릴 때마다 마진이 남는다', value: 'market' },
      { label: '영향력에 값이 붙는다', value: 'fame' },
      { label: '매달 약속된 돈이 들어온다', value: 'pledge' },
      { label: '한 번 만든 걸 계속 판다', value: 'archive' },
    ],
  },

  // ── 동행자: Q12 ───────────────────────────────────────────────
  {
    id: 'Q12',
    axis: 'C',
    axisLabel: '동행자',
    text: 'AI는 지금 사업에서 어느 위치인가요?',
    type: 'tag',
    options: [
      { label: '아직 내 방식이 더 빠르다', value: 'solo' },
      { label: '손이 하나 더 늘어난 정도', value: 'assistant' },
      { label: '이미 팀원 한 명 몫을 한다', value: 'member' },
    ],
  },
];
