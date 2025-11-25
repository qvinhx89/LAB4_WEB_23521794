import ThemeButton from './ThemeButton';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import SectionCard from '../components/SectionCard';

function ThemePreview() {
  const { theme } = useTheme();
  const palettes = {
    light: ['#f8fafc', '#e5edff', '#cbd5f5'],
    dark: ['#111827', '#1f2a44', '#0f172a'],
  };

  return (
    <div
      className="card-panel"
      style={{
        background: theme === 'light' ? 'rgba(248,250,252,0.9)' : 'rgba(15,23,42,0.95)',
        color: theme === 'light' ? '#0f172a' : '#e2e8f0',
        borderColor: theme === 'light' ? 'rgba(15,23,42,0.1)' : 'rgba(148,163,184,0.3)',
      }}
    >
      <p style={{ marginTop: 0 }}>Xem nhanh giao diện · {theme === 'light' ? 'Sáng' : 'Tối'}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        {palettes[theme].map((color) => (
          <span
            key={color}
            style={{
              flex: 1,
              borderRadius: '0.75rem',
              background: color,
              height: '60px',
              border: '1px solid rgba(15,23,42,0.15)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ThemePreferences() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="card-panel">
      <p className="tagline">Đổi bảng màu nhanh</p>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
        <button
          type="button"
          className={theme === 'light' ? 'btn btn-primary' : 'btn btn-soft'}
          onClick={() => setTheme('light')}
        >
          Giao diện sáng
        </button>
        <button
          type="button"
          className={theme === 'dark' ? 'btn btn-primary' : 'btn btn-soft'}
          onClick={() => setTheme('dark')}
        >
          Giao diện tối
        </button>
      </div>
    </div>
  );
}

export default function ThemePlayground() {
  return (
    <ThemeProvider>
      <main className="page-shell">
        <SectionCard
          eyebrow="Chủ đề 06 · Context"
          title="Studio Chủ Đề"
          description="Truyền state chủ đề bằng Context để mọi component con luôn đồng bộ."
          footer={<ThemeButton />}
        >
          <div className="two-col">
            <ThemePreview />
            <ThemePreferences />
          </div>
        </SectionCard>
      </main>
    </ThemeProvider>
  );
}
