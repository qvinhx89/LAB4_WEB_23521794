import { Link, useParams } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import { findProduct } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = findProduct(id);

  if (!product) {
    return (
      <main className="page-shell">
        <SectionCard
          eyebrow="Chủ đề 05 · Router"
          title="Không tìm thấy sản phẩm"
          description="Mã đường dẫn này không khớp với sản phẩm nào trong bộ sưu tập."
          footer={<Link className="btn btn-soft" to="/products">Quay lại danh sách</Link>}
        >
          <p className="alert">Vui lòng kiểm tra lại URL hoặc chọn sản phẩm khác.</p>
        </SectionCard>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <SectionCard
        eyebrow="Chủ đề 05 · Router"
        title={product.name}
        description={product.description}
        footer={<Link className="btn btn-soft" to="/products">← Trở về danh mục</Link>}
      >
        <div className="two-col">
          <div className="card-panel">
            <p className="tagline">Thông tin nhanh</p>
            <table className="card-table">
              <tbody>
                <tr>
                  <td>Giá</td>
                  <td>${product.price}</td>
                </tr>
                <tr>
                  <td>Đánh giá</td>
                  <td>⭐ {product.rating}</td>
                </tr>
                <tr>
                  <td>Màu sắc</td>
                  <td>{product.colors.join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card-panel">
            <p className="tagline">Thông số chính</p>
            <ul className="timeline">
              {product.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionCard>
    </main>
  );
}
