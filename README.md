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

---

# Buổi 2 – HTML5 & CSS3

## 1. Giới thiệu bài tập

Bài tập cá nhân Buổi 2 tiếp tục phát triển trang chi tiết sản phẩm Biti's từ Buổi 1, không tạo website mới. Trọng tâm là thực hành HTML5 có ngữ nghĩa, CSS selector, Box Model, Flexbox, CSS Grid và hiệu ứng hover/focus.

## 2. Website tham khảo và khu vực đã cải tiến

- **Website tham khảo:** Biti's – https://bitis.com.vn/
- **Khu vực trọng tâm:** bộ sưu tập hình ảnh sản phẩm (ảnh lớn và 4 ảnh thu nhỏ).
- **Khu vực thực hành thêm:** thẻ sản phẩm trong mục "Sản phẩm liên quan" (Box Model), thanh header (Flexbox), danh sách sản phẩm liên quan (Grid).

## 3. Kỹ thuật HTML5/CSS3 đã thực hành

| Kỹ thuật | Áp dụng trong bài |
|---|---|
| HTML5 có ngữ nghĩa | `section`, `figure`, `article`, `nav`, `img` + `alt`, `label` + `input type="radio"` |
| CSS selector | Element (`img`), class (`.product-card`), descendant (`.product-card .card-price`) |
| Box Model | `padding`, `margin`, `border`, `border-radius` trên thẻ sản phẩm; `box-sizing: border-box` |
| Flexbox | Header: `.header-content`, `.primary-nav`, `.header-icons` |
| CSS Grid | Danh sách sản phẩm `.product-grid`: 4 cột trên máy tính, 2 cột trên điện thoại |
| Hover, transition | Rê chuột lên ảnh nhỏ để xem trước ảnh lớn; viền đổi màu mượt |
| Focus | `:focus-visible` hiện viền xanh khi chọn ảnh bằng bàn phím |

## 4. Hướng dẫn chạy website

Tải hoặc clone repository, giữ nguyên cấu trúc thư mục (`index.html`, `css/`, `images/`), sau đó mở `index.html` bằng Chrome hoặc trình duyệt khác. Không cần cài đặt thêm.

## 5. Những thay đổi đã thực hiện

| Bước | Thay đổi |
|---|---|
| HTML5 có ngữ nghĩa | Sửa `alt` của ảnh nhỏ và ảnh lớn; đổi `aside` thành `div` ở khu vực mua hàng; thêm `role="img"` cho đánh giá sao; ẩn icon trang trí bằng `aria-hidden="true"` |
| Selector và Box Model | Thẻ sản phẩm liên quan có `padding`, viền rõ hơn, bo góc; bỏ khoảng trống thừa giữa tên và giá; nút "Xem sản phẩm" đổi từ `button` sang liên kết `a.btn-detail` |
| Hover và focus | Rê chuột lên ảnh nhỏ thì ảnh lớn đổi theo (dùng `:has()`); viền xanh khi dùng bàn phím; hiệu ứng chỉ bật trên thiết bị có chuột bằng `@media (hover: hover)` |
| Kiểm tra và tự sửa | Thay ảnh góc nghiêng bị dính nút giao diện bằng ảnh gốc; sửa dòng hướng dẫn thành "Chọn ảnh nhỏ để xem" cho đúng với cả máy tính và điện thoại |

Flexbox (header) và Grid (danh sách sản phẩm) đã có từ Buổi 1; ở Buổi 2 các thuộc tính được thử nghiệm trong Chrome DevTools và giữ nguyên giá trị phù hợp nhất.

**Ảnh trước và sau:** xem thư mục [`screenshots/`](screenshots/).

## 6. Báo cáo kiểm thử

| Nội dung kiểm tra | Kết quả | Ghi chú |
|---|---|---|
| Trang HTML mở được | Đạt | Mở bằng Google Chrome |
| CSS được áp dụng | Đạt | Tab Network tải `style.css` thành công |
| Hình ảnh hiển thị đúng | Đạt | Đã thay ảnh góc nghiêng; ảnh sản phẩm liên quan còn icon từ ảnh chụp màn hình, sẽ thay sau |
| Liên kết hoạt động | Đạt | Menu, nút "Xem sản phẩm", ô màu Đen mở trang Biti's |
| Bố cục không bị tràn | Đạt | Kiểm tra ở 1366px, 768px, 390px |
| Hover/focus hoạt động | Đạt | Chuột, bàn phím (Tab, mũi tên) và chạm trên điện thoại |
| Đã tự sửa ít nhất một vấn đề | Đạt | Thay ảnh góc nghiêng; sửa dòng hướng dẫn trên ảnh |

## 7. Công cụ AI và cách kiểm tra kết quả

ChatGPT và Claude được dùng để phân tích mã nguồn, giải thích HTML/CSS và đề xuất cách sửa. Mọi đề xuất đều được chạy thử trên Chrome trước khi áp dụng. Nhiều đề xuất không được dùng, ví dụ: đổi danh sách sản phẩm thành 2 cột trên máy tính, thêm hiệu ứng nâng ảnh và mờ dần, ẩn chữ bằng `font-size: 0`. Chi tiết trong [AI_USAGE.md](AI_USAGE.md).

## 8. Đường dẫn

- **Repository:** https://github.com/quyennguyen31231025894-spec/ecommerce-ui-improvement
- **Website (GitHub Pages):** [điền link nếu đã bật GitHub Pages]

## 9. Hướng phát triển (Buổi 3)

Bổ sung JavaScript cho cửa sổ phóng to ảnh có nút chuyển ảnh trước/sau, và các chức năng tìm kiếm, lọc, sắp xếp, thêm vào giỏ hàng.
