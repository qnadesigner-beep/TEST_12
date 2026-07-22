// GA4 이벤트 — 스펙 §8

const GA_ID = 'G-XXXXXXXXXX'; // TODO: 실제 GA4 Measurement ID로 교체

/** gtag 안전 호출 */
function gtag(...args) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
}

export function gaQuizStart() {
  gtag('event', 'quiz_start');
}

export function gaQuizAnswered(questionIndex) {
  gtag('event', `quiz_q${questionIndex + 1}_answered`);
}

export function gaQuizComplete(characterName) {
  gtag('event', 'quiz_complete', { character: characterName });
}

export function gaCardSave(characterName) {
  gtag('event', 'card_save', { character: characterName });
}

export function gaCtaThreadsClick() {
  gtag('event', 'cta_threads_click');
}

export { GA_ID };
