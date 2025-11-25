import { Link } from 'react-router-dom';

const sections = [
  {
    path: '/section-1',
    eyebrow: 'useEffect',
    title: 'Nhịp Cửa Sổ',
    summary: 'Theo dõi kích thước trình duyệt theo thời gian thực.',
  },
  {
    path: '/section-2',
    eyebrow: 'useRef',
    title: 'Đồng Hồ Quán Tính',
    summary: 'Bắt đầu, tạm dừng và ghi vòng với ref an toàn.',
  },
  {
    path: '/section-3',
    eyebrow: 'Data Fetching',
    title: 'Danh Bạ Nhóm',
    summary: 'Gọi API và lọc thành viên mượt mà.',
  },
  {
    path: '/section-4',
    eyebrow: 'Controlled Inputs',
    title: 'Trình Soạn Tài Khoản',
    summary: 'Kiểm tra mật khẩu và chọn vai trò ngay lập tức.',
  },
  {
    path: '/products',
    eyebrow: 'Router',
    title: 'Bản Đồ Sản Phẩm',
    summary: 'Đi giữa danh sách và chi tiết bằng link động.',
  },
  {
    path: '/section-6',
    eyebrow: 'Context API',
    title: 'Studio Chủ Đề',
    summary: 'Đổi giữa sáng/tối cho toàn bộ cây component.',
  },
  {
    path: '/section-7',
    eyebrow: 'Custom Hook',
    title: 'Sân Chơi Input',
    summary: 'Tái sử dụng hook useInput để xem preview.',
  },
  {
    path: '/login',
    eyebrow: 'Mini Project',
    title: 'Đăng Nhập Bộ Nhớ',
    summary: 'Lưu tên người dùng bằng localStorage.',
  },
  {
    path: '/dashboard',
    eyebrow: 'Mini Project',
    title: 'Bảng Quan Sát',
    summary: 'Phối hợp hook để xem thống kê đội nhóm.',
  },
];

export default function ExerciseMenu() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="tagline">Phạm Quốc Vĩnh · MSSV 23521794</p>
        <h1>Sổ Tay React Cá Nhân</h1>
        <p>
          Bộ bài tập được làm mới để đồng bộ phong cách, thêm hiệu ứng tinh tế và dùng tiếng Việt
          thân thiện cho phần thực hành học kỳ này.
        </p>
      </section>

      <div className="section-grid">
        {sections.map((section) => (
          <Link key={section.path} to={section.path} className="section-card" style={{ textDecoration: 'none' }}>
            <p className="tagline">{section.eyebrow}</p>
            <h3 style={{ marginBottom: '0.35rem' }}>{section.title}</h3>
            <p style={{ color: '#a7b5d6' }}>{section.summary}</p>
            <footer>
              <span className="badge">Mở bài tập →</span>
            </footer>
          </Link>
        ))}
      </div>
    </main>
  );
}
