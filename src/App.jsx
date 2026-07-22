import { useState, useCallback } from 'react';
import { questions } from './data/questions.js';
import { calcResult } from './utils/scoring.js';
import { gaQuizComplete } from './utils/ga4.js';
import { GA_ID } from './utils/ga4.js';
import Intro from './components/Intro.jsx';
import Quiz from './components/Quiz.jsx';
import Loading from './components/Loading.jsx';
import Result from './components/Result.jsx';
import './index.css';

// GA4 스크립트 동적 로드 (실제 ID 교체 후 활성화)
// if (GA_ID !== 'G-XXXXXXXXXX') { ... }

const SCREENS = {
  INTRO: 'intro',
  QUIZ: 'quiz',
  LOADING: 'loading',
  RESULT: 'result',
};

const INITIAL_ANSWERS = {};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.INTRO);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(INITIAL_ANSWERS);
  const [result, setResult] = useState(null);

  // 진단 시작
  function handleStart() {
    setScreen(SCREENS.QUIZ);
    setCurrentIndex(0);
    setAnswers({});
  }

  // 문항 응답 — 즉시 다음 문항으로
  const handleAnswer = useCallback(
    (questionId, value) => {
      const newAnswers = { ...answers, [questionId]: value };
      setAnswers(newAnswers);

      if (currentIndex + 1 >= questions.length) {
        // 마지막 문항 → 로딩
        setScreen(SCREENS.LOADING);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [answers, currentIndex]
  );

  // 뒤로가기
  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  // 로딩 완료 → 결과 계산
  const handleLoadingDone = useCallback(() => {
    const res = calcResult(answers);
    gaQuizComplete(res.character.name);
    setResult(res);
    setScreen(SCREENS.RESULT);
  }, [answers]);

  // 재진단
  function handleRetry() {
    setScreen(SCREENS.INTRO);
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <div className="app-container">
      {screen === SCREENS.INTRO && (
        <Intro onStart={handleStart} />
      )}
      {screen === SCREENS.QUIZ && (
        <Quiz
          answers={answers}
          currentIndex={currentIndex}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {screen === SCREENS.LOADING && (
        <Loading onDone={handleLoadingDone} />
      )}
      {screen === SCREENS.RESULT && result && (
        <Result result={result} onRetry={handleRetry} />
      )}
    </div>
  );
}
