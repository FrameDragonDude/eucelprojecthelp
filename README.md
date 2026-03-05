# EUCEL Website

Trang web giới thiệu công ty Cố phần EUCEL - Bông tẩy trang sinh học từ gỗ bạch đàn.

## Về EUCEL

**EUCEL** là một công ty cổ phần Việt Nam chuyên sản xuất và kinh doanh sản phẩm chăm sóc cá nhân, 
đặc biệt là bông tẩy trang nén từ sợi Lyocell (chiết xuất từ gỗ bạch đàn). 

### Tầm Nhìn
Đến năm 2035, EUCEL trở thành thương hiệu bông tẩy trang sinh học uy tín tại Việt Nam, 
được người tiêu dùng tin chọn trong chăm sóc da bền vững.

### Sứ Mệnh
Sứ mệnh của EUCEL là người bạn đồng hành đáng tin cậy của khách hàng thông qua việc cung cấp 
bông tẩy trang sinh học chất lượng cao, kết hợp giữa khoa học và trách nhiệm xã hội nhằm 
thúc đẩy tiêu dùng xanh và bảo vệ môi trường.

### Giá Trị Cốt Lõi
- **Thuần Khiết (Purity)**: 100% sợi Lyocell tự nhiên
- **Bền Vững (Sustainability)**: Phân hủy sinh học, thân thiện môi trường
- **An Toàn (Safety)**: Không kích ứng, không xơ bông
- **Trách Nhiệm (Responsibility)**: Minh bạch và có trách nhiệm với cộng đồng
- **Đổi Mới (Innovation)**: Công nghệ nén sinh học tiên tiến

## Cấu Trúc Dự Án

```
eucelprojecthelp/
├── public/
│   └── index.html           # HTML chính
├── src/
│   ├── components/
│   │   ├── Header.js        # Thanh header
│   │   ├── Hero.js          # Section hero
│   │   ├── Introduction.js  # Giới thiệu doanh nghiệp
│   │   ├── Vision.js        # Tầm nhìn, sứ mệnh, giá trị cốt lõi
│   │   ├── Products.js      # Sản phẩm
│   │   └── Footer.js        # Footer
│   ├── App.js               # Component chính
│   ├── App.css              # Stylesheet chính
│   └── index.js             # Entry point
├── picture/
│   ├── logo.png             # Logo EUCEL
│   ├── sp.png               # Ảnh sản phẩm
│   ├── aothun.png           # Áo thun
│   ├── tui.png              # Túi tote
│   ├── sotay.png            # Sổ tay
│   ├── butbi.png            # Bút bi
│   └── mubaohiem.png        # Mũ bảo hiểm
├── package.json             # Dependencies
└── .gitignore               # Git ignore file
```

## Cài Đặt & Chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy ứng dụng dev

```bash
npm start
```

Ứng dụng sẽ mở tại `http://localhost:3000`

### 3. Build cho production

```bash
npm build
```

## Các Phần Chính

### Header
- Logo EUCEL
- Navigation menu với các mục: Giới Thiệu, Tầm Nhìn, Sản Phẩm, Liên Hệ

### Hero Section
- Tiêu đề chính "EUCEL - Bông Tẩy Trang Sinh Học"
- Hình ảnh sản phẩm
- Call-to-action button

### Introduction Section
- Giới thiệu doanh nghiệp
- Ý nghĩa tên EUCEL
- Loại hình kinh doanh
- Lĩnh vực hoạt động
- Thông tin liên hệ

### Vision Section
- Tầm nhìn (Vision) đến năm 2035
- Sứ mệnh (Mission)
- 5 Giá trị cốt lõi: Thuần khiết, Bền vững, An toàn, Trách nhiệm, Đổi mới

### Products Section
- Giới thiệu sản phẩm chính (EUCEL Compressed Pads)
- Đặc điểm nổi bật
- Sản phẩm nhận diện thương hiệu

### Footer
- Thông tin liên hệ
- Địa chỉ trụ sở và nhà máy
- Giá trị cốt lõi
- Bản quyền

## Thiết Kế & Màu Sắc

### Màu Sắc Chủ Đạo
- **Primary Green**: `#2d7a5e` - Biểu tượng của thiên nhiên và bền vững
- **Secondary Brown**: `#a8956d` - Gợi liên tưởng đến gỗ bạch đàn
- **Light Background**: `#f5f5f0` - Nền sáng, thuần khiết
- **Dark Text**: `#333` - Văn bản chính
- **White**: `#ffffff` - Nền cơ bản

### Font
- Chủ yếu sử dụng `Segoe UI`, `Tahoma`, `Geneva`, `Verdana`, `sans-serif`

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Grid layout tự động điều chỉnh

## Tính Năng

✅ Responsive design (Desktop, Tablet, Mobile)
✅ Smooth scrolling navigation
✅ Modern UI/UX với hiệu ứng hover
✅ Hình ảnh sản phẩm từ folder picture
✅ Thông tin doanh nghiệp đầy đủ
✅ Tầm nhìn, sứ mệnh, giá trị cốt lõi rõ ràng
✅ SEO-friendly metadata
✅ Performance optimized

## Thông Tin Liên Hệ

- **Email**: contact@eucel.vn
- **Hotline**: 1900 966 955
- **Website**: www.eucel.vn
- **Trụ sở**: Tòa nhà Manulife Plaza, 75 Hoàng Văn Thái, Quận 7, TP. Hồ Chí Minh
- **Nhà máy**: Khu công nghiệp VSIP 1, Bình Dương

## Bản Quyền

© 2026 Công ty Cổ phần EUCEL. All rights reserved.

**Slogan**: "Làm sạch tinh gọn - Trách nhiệm dài lâu"
