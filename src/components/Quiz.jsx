import { useState, useEffect, useMemo } from 'react';
import { questions } from '../data/questions.js';
import { gaQuizAnswered } from '../utils/ga4.js';
import './Quiz.css';

// 배열 셔플 (Fisher-Yates) — display 순서만 바꿈, value는 원본 그대로
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ answers, onAnswer, onBack, currentIndex }) {
  const [animKey, setAnimKey] = useState(0);
  const q = questions[currentIndex];
  const total = questions.length;
  const progress = (currentIndex / total) * 100;

  // 문항이 바뀔 때마다 선택지 셔플 (display only)
  const shuffledOptions = useMemo(
    () => shuffleArray(q.options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentIndex]
  );

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [currentIndex]);

  function handleOption(value) {
    gaQuizAnswered(currentIndex);
    onAnswer(q.id, value);
  }

  return (
    <div className="quiz-wrap">
      {/* 진행바 */}
      <div className="quiz-progress-bar-track">
        <div
          className="quiz-progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 헤더: 뒤로가기 + "약 1분" 라벨 (숫자 없음) */}
      <div className="quiz-header">
        {currentIndex > 0 && (
          <button className="quiz-back-btn" onClick={onBack} aria-label="이전 문항">
            ←
          </button>
        )}
        <span className="quiz-time-label">약 1분</span>
      </div>

      {/* 문항 */}
      <div key={animKey} className="quiz-body quiz-enter">
        <p className="quiz-axis-label">{q.axisLabel}</p>
        <h2 className="quiz-question">{q.text}</h2>

        <div className={`quiz-options ${q.type === 'tag' ? 'quiz-options--tag' : ''}`}>
          {shuffledOptions.map((opt) => {
            const isSelected = answers[q.id] === opt.value;
            return (
              <button
                key={opt.value}
                className={`quiz-option-btn ${isSelected ? 'selected' : ''} ${q.type === 'tag' ? 'tag-btn' : ''}`}
                onClick={() => handleOption(opt.value)}
                id={`opt-${q.id}-${opt.value}`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

