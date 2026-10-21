# E-commerce UI Improvement

## 1. Giới thiệu

Bài tập cải tiến giao diện **chi tiết sản phẩm** của website Biti's bằng HTML5 và CSS3. Phần mô tả được sắp xếp lại để dễ đọc hơn và nút **MUA NGAY** được làm nổi bật.

## 2. Website tham khảo

- **Tên website:** Biti's
- **URL:** https://bitis.com.vn/
- **Khu vực đã khảo sát:** Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- **Khu vực cải tiến:** Chi tiết sản phẩm.

## 3. Chức năng

- Hiển thị ảnh, tên, giá, màu sắc, kích cỡ và thông tin sản phẩm.
- Hiển thị phần mô tả dạng bảng, danh sách đặc điểm và các mục có thể mở/thu gọn.
- Hiển thị nút **MUA NGAY** và **Thêm vào giỏ hàng**.
- Có **4 sản phẩm mẫu**, mỗi sản phẩm gồm hình ảnh, tên, giá và nút thao tác.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Trên máy tính, khối chọn màu, kích cỡ và nút mua bám theo khi cuộn trong khu vực chi tiết sản phẩm.

Các nút mua hàng chỉ minh họa giao diện, không thực hiện đặt hàng hoặc thanh toán.

## 4. Công nghệ

- HTML5
- CSS3

## 5. Cách chạy

Giữ nguyên các file và thư mục của dự án, sau đó mở `index.html` bằng Chrome hoặc trình duyệt khác. Không cần cài đặt thêm thư viện hay sử dụng cơ sở dữ liệu.

## 6. Cải tiến đã thực hiện

Phần mô tả trên trang tham khảo có nhiều đoạn chữ dài, khó xem nhanh thông tin. Giao diện cải tiến trình bày **thông số bằng bảng**, **đặc điểm bằng các ý ngắn** và **hướng dẫn/chính sách trong mục mở rộng**. Nút **MUA NGAY** được bổ sung với màu đỏ và kích thước lớn hơn.

Khi kiểm tra bản đầu, khối chọn màu, kích cỡ và nút mua không còn hiển thị lúc cuộn xuống đọc mô tả. Phần này được điều chỉnh bằng `position: sticky` trong CSS để bám theo khi cuộn trên máy tính.

## 7. Hỗ trợ từ AI

ChatGPT hỗ trợ phân tích website, đề xuất bố cục và tạo mã HTML/CSS theo yêu cầu. Kết quả được đối chiếu với ảnh khảo sát và chạy thử trên máy tính, điện thoại. Những nhận xét chưa có bằng chứng không được dùng làm kết luận khảo sát; phần khối mua hàng bám theo khi cuộn được bổ sung sau kiểm tra thực tế.

Các prompt chính và kết quả AI được ghi trong [AI_USAGE.md](AI_USAGE.md).
