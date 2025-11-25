import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import { products } from '../data/products';

export default function ProductList() {
  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 05 · Router"
        title="Bản Đồ Sản Phẩm"
        description="Đi từ danh sách tới trang chi tiết bằng Link của react-router mà không mất trạng thái."
      >
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <p className="tagline">{product.tagline}</p>
              <h4>{product.name}</h4>
              <p style={{ color: '#475569' }}>{product.description}</p>
              <p style={{ margin: '0.75rem 0' }}>
                <strong>${product.price}</strong> · ⭐ {product.rating}
              </p>
              <footer>
                <Link className="btn btn-primary" to={`/products/${product.id}`}>
                  Xem chi tiết
                </Link>
                <span className="badge">Màu: {product.colors.join(' / ')}</span>
              </footer>
            </article>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
