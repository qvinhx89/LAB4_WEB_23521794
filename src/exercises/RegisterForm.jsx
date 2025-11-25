import { useMemo, useState } from 'react';
import SectionCard from '../components/SectionCard';

const passwordStrength = (value) => {
  if (!value) return { label: 'Quá yếu', percent: 0.1 };
  let score = 0;
  if (value.length >= 6) score += 1;
  if (value.length >= 10) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  const percent = Math.min(score / 4, 1);
  const label = ['Quá yếu', 'Tạm ổn', 'Tự tin', 'Rất vững'][score] || 'Đỉnh cao';
  return { label, percent };
};

export default function RegisterForm() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'designer' });
  const [message, setMessage] = useState(null);

  const strength = useMemo(() => passwordStrength(formData.password), [formData.password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password.length < 6) {
      setMessage({ type: 'error', text: 'Mật khẩu cần tối thiểu 6 ký tự.' });
      return;
    }

    setMessage({ type: 'success', text: `Hẹn gặp lại trong lớp, ${formData.email}!` });
  };

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 04 · Controlled form"
        title="Trình Soạn Tài Khoản"
        description="Thu thập thông tin đăng ký bằng input được kiểm soát và phản hồi ngay lập tức."
        footer={
          <button type="submit" form="register-form" className="btn btn-primary">
            Tạo hồ sơ
          </button>
        }
      >
        <form id="register-form" className="stack" onSubmit={handleSubmit}>
          <label htmlFor="email">Email UIT</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="vinh@uit.edu.vn"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Mật khẩu</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ưu tiên 10+ ký tự"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '-0.25rem',
            }}
          >
            <div style={{ flex: 1, height: '6px', background: 'rgba(148,163,184,0.2)', borderRadius: '999px' }}>
              <div
                style={{
                  width: `${strength.percent * 100}%`,
                  height: '100%',
                  borderRadius: 'inherit',
                  background: strength.percent > 0.6 ? 'var(--success)' : 'var(--danger)',
                  transition: 'width 200ms ease',
                }}
              />
            </div>
            <small style={{ color: '#475569' }}>{strength.label}</small>
          </div>

          <label htmlFor="role">Vai trò mong muốn</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange}>
            <option value="designer">Thiết kế sản phẩm</option>
            <option value="developer">Lập trình giao diện</option>
            <option value="marketer">Tăng trưởng sản phẩm</option>
          </select>
        </form>

        {message && (
          <p className={`alert${message.type === 'success' ? ' alert-success' : ''}`}>
            {message.text}
          </p>
        )}
      </SectionCard>
    </main>
  );
}
