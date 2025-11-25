import { useMemo, useState } from 'react';
import SectionCard from '../components/SectionCard';
import useFetch from '../hooks/useFetch';

export default function UserList() {
  const [query, setQuery] = useState('');
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  }, [users, query]);

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 03 · Data Fetching"
        title="Danh Bạ Nhóm"
        description="Tận dụng hook useFetch tái sử dụng, xử lý trạng thái tải và lọc kết quả ngay tại client."
      >
        <div className="two-col">
          <div className="card-panel">
            <label htmlFor="search">Tìm thành viên</label>
            <input
              id="search"
              type="text"
              placeholder="Nhập tên cần tìm"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <p style={{ color: '#475569', marginTop: '0.5rem' }}>
              Đang hiển thị {filteredUsers.length}/{users?.length ?? 0} thành viên
            </p>
          </div>

          <div className="card-panel" style={{ minHeight: '220px' }}>
            <p className="tagline">Trạng thái</p>
            {loading && <p style={{ color: '#475569' }}>Đang tải danh sách...</p>}
            {error && <p className="alert">Lỗi: {error.message || error}</p>}
            {!loading && !error && users && (
              <ul className="list" style={{ maxHeight: '260px', overflowY: 'auto', marginTop: '1rem' }}>
                {filteredUsers.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong>
                    <p style={{ margin: '0.25rem 0 0', color: '#475569' }}>{user.email}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </SectionCard>
    </main>
  );
}
