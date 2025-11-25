import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import SectionCard from '../components/SectionCard';

export default function Dashboard() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const navigate = useNavigate();

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Bài tập nhỏ"
        title="Bảng Quan Sát"
        description="Kết hợp custom hook, điều hướng và bảng dữ liệu để mô phỏng dashboard nội bộ."
        footer={
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>Đăng xuất</button>
        }
      >
        <div className="two-col">
          <div className="card-panel">
            <p className="tagline">Chỉ số nhóm</p>
            {loading && <p style={{ color: '#475569' }}>Đang tải dữ liệu...</p>}
            {error && <p className="alert">Lỗi: {error.message || error}</p>}
            {data && (
              <ul className="list">
                <li>
                  Thành viên · <strong>{data.length}</strong>
                </li>
                <li>
                  Công ty đầu tiên · <strong>{data[0].company.name}</strong>
                </li>
                <li>
                  Thành phố · <strong>{new Set(data.map((user) => user.address.city)).size}</strong>
                </li>
              </ul>
            )}
          </div>

          <div className="card-panel" style={{ minHeight: '200px' }}>
            <p className="tagline">Danh sách</p>
            {!loading && !error && data ? (
              <div className="tablet-scroll">
                <table className="card-table" style={{ width: '100%' }}>
                  <tbody>
                    {data.slice(0, 6).map((user) => (
                      <tr key={user.id}>
                        <td>
                          <strong>{user.name}</strong>
                          <p style={{ margin: 0, color: '#475569' }}>{user.email}</p>
                        </td>
                        <td style={{ textAlign: 'right', color: '#475569' }}>{user.company.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              !loading && !error && <p style={{ color: '#475569' }}>Chưa có dữ liệu</p>
            )}
          </div>
        </div>
      </SectionCard>
    </main>
  );
}
