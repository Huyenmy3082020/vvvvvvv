# Interactive Birthday Experience

## Chạy dự án

```bash
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Cá nhân hoá

Chỉ cần mở `src/config/birthday.ts` để đổi:

- `recipientName`, `birthday`, `age`, `mainMessage`
- `heroImage` và mảng `memories` (ảnh + chú thích)
- nội dung thư `letter`, timeline, lời nhắn ngẫu nhiên và lời chúc
- tên bài nhạc hiển thị trong `music`

Ảnh trong config hiện là ảnh minh hoạ từ Unsplash. Thay URL bằng ảnh của bạn (hoặc đưa ảnh vào `public/images/` và dùng đường dẫn `/images/ten-anh.jpg`) để món quà thật riêng tư.

## Tương tác có sẵn

- Mở quà, pháo giấy và nhạc nền tạo bằng Web Audio.
- Countdown đến sinh nhật tiếp theo, lightbox ảnh và card xuất hiện khi cuộn.
- Nút bất ngờ biết “chạy trốn”, thổi nến, phong thư mở với nội dung hiện dần.
- Easter egg: bấm avatar 5 lần, bấm tim ở footer, hoặc nhập Konami Code: `↑ ↑ ↓ ↓ ← → ← → B A`.
