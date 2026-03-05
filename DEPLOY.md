# 🚀 HƯỚNG DẪN DEPLOY WEBSITE EUCEL

## ✅ CÁCH 1: DEPLOY LÊN VERCEL (KHUYÊN DÙNG - MIỄN PHÍ VĨNH VIỄN)

Website sẽ có địa chỉ: `https://eucel.vercel.app` hoặc tên bạn chọn

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Build project
```bash
npm run build
```

### Bước 3: Login vào Vercel
```bash
vercel login
```
Chọn phương thức login (GitHub, GitLab, hoặc Email)

### Bước 4: Deploy
```bash
vercel --prod
```

Làm theo hướng dẫn:
- Project name: eucel-website (hoặc tên bạn muốn)
- Directory: `./` (Enter)
- Các câu hỏi khác: Nhấn Enter để chọn mặc định

✅ **Xong!** Vercel sẽ cho bạn link như: `https://eucel-website.vercel.app`

---

## ⚡ CÁCH 2: DÙNG NGROK (URL TẠM THỜI - CHO DEMO NHANH)

URL chỉ hoạt động khi máy bạn đang chạy

### Bước 1: Tải ngrok
Truy cập: https://ngrok.com/download
Tải về và giải nén

### Bước 2: Chạy website local
```bash
npm start
```
Website chạy tại `http://localhost:3000`

### Bước 3: Mở terminal mới, chạy ngrok
```bash
ngrok http 3000
```

✅ **Xong!** Ngrok sẽ cho bạn URL như: `https://abc123.ngrok.io`
Gửi URL này cho mọi người để truy cập

**LƯU Ý**: URL này chỉ hoạt động khi:
- Máy bạn đang bật
- Website đang chạy (`npm start`)
- Ngrok đang chạy

---

## 🌟 CÁCH 3: DEPLOY LÊN NETLIFY (MIỄN PHÍ VĨNH VIỄN)

### Phương án A: Deploy qua Netlify CLI

```bash
# Cài Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod --dir=build
```

### Phương án B: Deploy qua Web UI (Đơn giản nhất)

1. Build project:
```bash
npm run build
```

2. Truy cập: https://app.netlify.com/drop
3. Kéo thả folder `build` vào trang web
4. ✅ Xong! Netlify cho bạn URL như: `https://eucel.netlify.app`

---

## 📊 SO SÁNH CÁC PHƯƠNG ÁN

| Tiêu chí | Vercel | Netlify | Ngrok |
|----------|--------|---------|--------|
| **Miễn phí** | ✅ Vĩnh viễn | ✅ Vĩnh viễn | ✅ Có (giới hạn) |
| **URL cố định** | ✅ | ✅ | ❌ Thay đổi |
| **Tốc độ** | ⚡ Rất nhanh | ⚡ Rất nhanh | 🐌 Phụ thuộc máy |
| **Dễ dùng** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **SSL/HTTPS** | ✅ | ✅ | ✅ |
| **Phải bật máy** | ❌ | ❌ | ✅ |

---

## 🎯 KHUYẾN NGHỊ

### Cho demo nhanh ngay:
👉 Dùng **NGROK** - Chỉ cần 2 phút

### Cho website chính thức:
👉 Dùng **NETLIFY** (Web UI) - Dễ nhất, kéo thả là xong
👉 Hoặc **VERCEL** - Tốc độ cực nhanh, tích hợp tốt với React

---

## 🆘 TROUBLESHOOTING

### Lỗi: Hình ảnh không hiển thị sau khi deploy

**Giải pháp**: Copy folder `picture` vào folder `public`:
```bash
# Windows
xcopy picture public\picture /E /I

# Sau đó build lại
npm run build
```

### Lỗi: Cannot find module

```bash
# Xóa node_modules và cài lại
rmdir /s /q node_modules
npm install
```

---

## 📧 HỖ TRỢ

Nếu gặp lỗi, check:
- Node.js phiên bản >= 14: `node --version`
- npm phiên bản >= 6: `npm --version`
- Internet connection ổn định

---

**Chúc bạn deploy thành công! 🎉**
