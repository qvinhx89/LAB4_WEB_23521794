import { useEffect, useMemo, useState } from 'react';
import SectionCard from '../components/SectionCard';

const getBreakpoint = (width) => {
  if (width < 640) return 'Di động';
  if (width < 1024) return 'Máy tính bảng';
  return 'Máy tính để bàn';
};

export default function WindowResizer() {
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0));
  const [lastUpdated, setLastUpdated] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setLastUpdated(new Date().toLocaleTimeString());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const density = useMemo(() => getBreakpoint(windowWidth), [windowWidth]);
  const percentOf4k = Math.min(100, Math.round((windowWidth / 3840) * 100));

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 01 · useEffect"
        title="Nhịp Cửa Sổ"
        description="Lắng nghe sự kiện thay đổi kích thước cửa sổ và hiển thị thông tin thân thiện."
        footer={<span className="badge">Cập nhật · {lastUpdated}</span>}
      >
        <div className="two-col">
          <div className="card-panel">
            <p className="tagline">Chiều rộng hiện tại</p>
            <div className="metric">
              <span>{windowWidth}</span>
              <p>px</p>
            </div>
            <p style={{ color: '#475569' }}>Tương đương {percentOf4k}% màn hình 4K.</p>
          </div>

          <div className="card-panel">
            <p className="tagline">Breakpoint</p>
            <h3 style={{ margin: '0.35rem 0 0.5rem' }}>{density}</h3>
            <ul className="timeline">
              <li>Di động &lt; 640px</li>
              <li>Máy tính bảng 640-1023px</li>
              <li>Máy tính để bàn ≥ 1024px</li>
            </ul>
          </div>
        </div>
      </SectionCard>
    </main>
  );
}
