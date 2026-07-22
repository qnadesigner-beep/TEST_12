import { useEffect, useState } from 'react';
import './Loading.css';

const COPIES = [
  '통장 구조 뜯어보는 중…',
  '사장님 캐릭터 소환 중…',
  '숫자는 거짓말을 안 합니다…',
];

export default function Loading({ onDone }) {
  const [copy] = useState(() => COPIES[Math.floor(Math.random() * COPIES.length)]);
  const [dots, setDots] = useState('');

  // 점 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // 1.5초 후 결과로
  useEffect(() => {
    const timer = setTimeout(onDone, 1500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="loading-wrap">
      <div className="loading-spinner">
        <div className="spinner-ring" />
        <div className="spinner-ring spinner-ring--2" />
      </div>
      <p className="loading-copy">
        {copy.replace('…', '')}<span className="loading-dots">{dots}</span>
      </p>
    </div>
  );
}
