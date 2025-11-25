export const products = [
  {
    id: 'tai-nghe-chong-on',
    name: 'Tai nghe Hành Tinh',
    tagline: 'Chống ồn chủ động',
    price: 329,
    rating: 4.8,
    colors: ['Tím Khói', 'Đen Mờ'],
    description: 'Driver lai, EQ thích ứng và pin 40 giờ hỗ trợ những buổi tập trung dài.',
    specs: ['ANC thông minh', 'Pin 40 giờ', 'Sạc nhanh USB-C'],
  },
  {
    id: 'ban-phim-lumen',
    name: 'Bàn phím Lumen Air',
    tagline: 'Phím cơ low-profile',
    price: 189,
    rating: 4.6,
    colors: ['Hồng Thạch', 'Onyx'],
    description: 'Switch hot-swap, RGB từng phím và Bluetooth 5.2 đa thiết bị.',
    specs: ['Kailh Choc v2', 'PCB hot-swap', '3 chế độ kết nối'],
  },
  {
    id: 'but-orbit',
    name: 'Bút Orbit Pro',
    tagline: 'Bút cảm ứng chính xác',
    price: 119,
    rating: 4.9,
    colors: ['Xám Titan'],
    description: '4096 mức lực, hỗ trợ nghiêng và nam châm hít gọn cho tablet.',
    specs: ['4096 mức lực', 'Ngòi 0.1mm', 'Thân nhôm nguyên khối'],
  },
];

export const findProduct = (id) => products.find((product) => product.id === id);
