import { useMemo } from 'react';
import { useInput } from '../hooks/useInput';
import SectionCard from '../components/SectionCard';

export default function InputPlayground() {
  const email = useInput('');
  const password = useInput('');
  const nickname = useInput('');

  const summary = useMemo(() => {
    if (!email.value && !nickname.value) return 'Điền biểu mẫu để xem thẻ preview.';
    return `${nickname.value || 'Thành viên mới'} sẽ đăng nhập bằng ${email.value || 'ai-do@studio.com'}`;
  }, [email.value, nickname.value]);

  const handleReset = () => {
    email.reset();
    password.reset();
    nickname.reset();
  };

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 07 · Custom Hook"
        title="Sân Chơi Input"
        description="Xây dựng logic form tái sử dụng với hook useInput (value, handler, reset)."
        footer={
          <button type="button" className="btn btn-ghost" onClick={handleReset}>
            Xóa nội dung
          </button>
        }
      >
        <div className="two-col">
          <form className="card-panel stack" style={{ margin: 0 }}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="ban@domain.com" value={email.value} onChange={email.onChange} />

            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password.value}
              onChange={password.onChange}
            />

            <label htmlFor="nickname">Biệt danh</label>
            <input id="nickname" type="text" placeholder="Tên hiển thị" value={nickname.value} onChange={nickname.onChange} />
          </form>

          <div className="card-panel">
            <p className="tagline">Preview thời gian thực</p>
            <h4 style={{ marginBottom: '0.35rem' }}>{nickname.value || 'Ẩn danh'}</h4>
            <p style={{ color: '#475569', marginTop: 0 }}>{summary}</p>
            <p style={{ marginTop: '1.25rem', color: '#475569' }}>
              Độ dài mật khẩu: <strong>{password.value.length}</strong>
            </p>
          </div>
        </div>
      </SectionCard>
    </main>
  );
}
