import { useEffect, useRef, useState } from 'react';
import SectionCard from '../components/SectionCard';

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handlePause();
    setSeconds(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (!intervalRef.current) return;
    setLaps((prev) => [{ id: Date.now(), label: formatTime(seconds) }, ...prev.slice(0, 4)]);
  };

  const progress = Math.min((seconds % 60) / 60, 1);

  useEffect(
    () => () => {
      clearInterval(intervalRef.current);
    },
    []
  );

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 02 · useRef"
        title="Đồng Hồ Quán Tính"
        description="Điều khiển setInterval bằng ref, lưu lịch sử vòng và xem tiến độ ngay lập tức."
        footer={
          <>
            <button type="button" className="btn btn-primary" onClick={handleStart}>
              Bắt đầu
            </button>
            <button type="button" className="btn btn-soft" onClick={handlePause}>
              Tạm dừng
            </button>
            <button type="button" className="btn btn-soft" onClick={handleLap}>
              Ghi vòng
            </button>
            <button type="button" className="btn btn-ghost" onClick={handleReset}>
              Đặt lại
            </button>
          </>
        }
      >
        <div className="card-panel">
          <p className="tagline">Thời gian đã trôi</p>
          <div className="metric">
            <span>{formatTime(seconds)}</span>
            <p>phút:giây</p>
          </div>
          <div
            style={{
              marginTop: '1rem',
              background: 'rgba(148, 163, 184, 0.2)',
              borderRadius: '999px',
              height: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress * 100}%`,
                height: '100%',
                background: 'linear-gradient(120deg, var(--accent), var(--alt-accent))',
              }}
            />
          </div>
        </div>

        <div className="card-panel">
          <p className="tagline">Nhật ký vòng</p>
          {laps.length === 0 ? (
            <p style={{ color: '#475569' }}>Nhấn “Ghi vòng” khi đồng hồ chạy để lưu tối đa 5 cột mốc.</p>
          ) : (
            <ul className="list">
              {laps.map((lap, index) => (
                <li key={lap.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Vòng {laps.length - index}</span>
                  <strong>{lap.label}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SectionCard>
    </main>
  );
}
