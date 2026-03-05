# 🚀 HƯỚNG DẪN DEPLOY WEBSITE EUCEL - ONLINE 24/7

## ✅ CÁCH ĐƠN GIẢN NHẤT - NETLIFY DROP (MIỄN PHÍ VĨNH VIỄN)

**Ưu điểm:**
- ✅ Website online 24/7 kể cả khi máy bạn TẮT
- ✅ KHÔNG CẦN cài Vercel (tránh lỗi mạng)
- ✅ KHÔNG CẦN dùng terminal
- ✅ Chỉ cần kéo thả folder
- ✅ MIỄN PHÍ vĩnh viễn
- ✅ Có HTTPS tự động
- ✅ URL cố định như: https://eucel.netlify.app

---

## 📝 BƯỚC 1: XEM ĐÃ CÀI DEPENDENCIES CHƯA

Kiểm tra xem đã có folder `node_modules`:
- Nếu CHƯA: Chạy `npm install` (đang chạy rồi)
- Nếu RỒI: Sang bước 2

---

## 📝 BƯỚC 2: BUILD WEBSITE

```bash
npm run build
```

⏳ Đợi 1-2 phút, sẽ tạo folder `build` trong project

**Nếu gặp lỗi**, báo lại tôi sẽ fix!

---

## 📝 BƯỚC 3: DEPLOY LÊN NETLIFY (3 PHÚT)

### Cách A: Kéo Thả (Đơn giản nhất - KHUYÊN DÙNG)

1. **Mở trình duyệt**, vào: https://app.netlify.com/drop

2. **Đăng nhập** (hoặc tạo tài khoản miễn phí):
   - Dùng email
   - Hoặc GitHub
   - Hoặc GitLab

3. **Kéo thả** folder `build` vào ô màu xanh trên trang web

4. **XONG!** 🎉 
   - Netlify sẽ cho bạn URL như: `https://eucel-abc123.netlify.app`
   - Gửi link này cho mọi người
   - Website online 24/7, máy bạn tắt vẫn truy cập được!

### Cách B: Đổi Tên Domain (Tùy chọn)

Sau khi deploy xong:
1. Click vào **Site settings**
2. Click **Change site name**
3. Đổi thành `eucel` → URL sẽ là: `https://eucel.netlify.app`

---

## 🔄 CẬP NHẬT WEBSITE SAU NÀY

Khi sửa code, muốn cập nhật website:

```bash
# 1. Build lại
npm run build

# 2. Vào Netlify dashboard: https://app.netlify.com
# 3. Click vào site của bạn
# 4. Click "Deploys"
# 5. Kéo thả folder "build" mới vào
```

---

## 🆘 XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi: `react-scripts is not recognized`
```bash
# Chạy lại
npm install
```

### Lỗi: Hình ảnh không hiển thị trên Netlify
Folder picture đã được copy vào public rồi, nên không lo!

### Lỗi: `npm install` chậm
- Bình thường, có thể mất 3-5 phút
- Chờ cho đến khi thấy "added ... packages"

### Lỗi: ECONNRESET khi cài Vercel
- KHÔNG CẦN cài Vercel
- Dùng Netlify Drop như hướng dẫn trên!

---

## 📊 SO SÁNH NETLIFY vs NGROK

| Tiêu chí | Netlify | Ngrok |
|----------|---------|-------|
| **Máy tắt vẫn truy cập được** | ✅ CÓ | ❌ KHÔNG |
| **URL cố định** | ✅ CÓ | ❌ Đổi mỗi lần chạy |
| **Miễn phí** | ✅ Vĩnh viễn | ⚠️ Có giới hạn |
| **Dễ dùng** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **HTTPS** | ✅ Tự động | ✅ Có |

👉 **Kết luận**: Dùng NETLIFY cho website chính thức!

---

## 🎯 TÓM TẮT

1. ✅ Chạy `npm install` (1 lần duy nhất)
2. ✅ Chạy `npm run build`
3. ✅ Vào https://app.netlify.com/drop
4. ✅ Kéo thả folder `build`
5. ✅ **XONG!** Nhận link online 24/7

**Link mẫu**: https://eucel.netlify.app

---

## 📧 CẦN TRỢ GIÚP?

- Nếu `npm install` hoặc `npm run build` lỗi → Báo lại tôi
- Nếu deploy lên Netlify lỗi → Báo lại tôi
- Nếu muốn dùng tên miền riêng (eucel.com) → Hỏi sau khi deploy thành công

---

**Chúc bạn deploy thành công! 🎉**
