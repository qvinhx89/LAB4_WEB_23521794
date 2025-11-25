import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import SectionCard from '../components/SectionCard';

export default function Login() {
  const [username, setUsername] = useLocalStorage('user_name', '');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim()) {
      navigate('/dashboard');
    } else {
      alert('Vui lòng nhập tên!');
    }
  };

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Bài tập nhỏ"
        title="Đăng Nhập Bộ Nhớ"
        description="Lưu tên người dùng bằng hook useLocalStorage để dữ liệu tồn tại sau khi tải lại."
        footer={<p className="badge">Khóa lưu · user_name</p>}
      >
        <form className="stack" onSubmit={handleSubmit}>
          <label htmlFor="username">Tên hiển thị</label>
          <input
            id="username"
            type="text"
            placeholder="Ví dụ: Stellar Nguyen"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Đi tới bảng điều khiển
          </button>
        </form>
        <p style={{ color: '#475569' }}>Tải lại trang và bạn sẽ thấy giá trị vẫn được lưu.</p>
      </SectionCard>
    </main>
  );
}
