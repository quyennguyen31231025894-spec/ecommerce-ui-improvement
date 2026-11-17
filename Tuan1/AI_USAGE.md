# AI Usage Log

## 1. Công cụ AI

ChatGPT.

## 2. Mục đích sử dụng

Hỗ trợ phân tích giao diện website Biti's, đề xuất cách cải tiến trang chi tiết sản phẩm và tạo mã HTML5/CSS3. Kết quả được đối chiếu với website tham khảo và kiểm tra trên trình duyệt.

## 3. Prompt đã sử dụng

### Prompt 1 – Phân tích website (Nhiệm vụ 2)

> Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử.
>
> Tôi đang khảo sát website của Biti’s: https://bitis.com.vn/.
>
> Hãy giúp tôi lập bảng phân tích các khu vực:
> 1. Trang chủ.
> 2. Danh mục sản phẩm.
> 3. Chi tiết sản phẩm.
> 4. Tìm kiếm.
> 5. Giỏ hàng.
>
> Với mỗi khu vực, hãy nêu:
> - Mục đích của chức năng.
> - Thành phần giao diện cần có.
> - Điểm thuận tiện đối với khách hàng.
> - Một vấn đề có thể phát sinh.
> - Một đề xuất cải tiến.
>
> Không khẳng định những tính năng chưa được kiểm chứng.
> Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.

### Prompt 2 – Đề xuất giao diện (Nhiệm vụ 3, Bước 2)

> Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.
>
> Tôi muốn cải tiến khu vực: Khu vực được chọn để cải tiến là **chi tiết sản phẩm** trên website Biti’s. Qua khảo sát, phần mô tả sản phẩm còn khá dài, nhiều chữ và chưa được trình bày thật gọn nên người xem khó nắm nhanh các thông tin quan trọng. Ngoài ra, nút mua hàng chưa đủ nổi bật.
>
> Vì vậy, giao diện chi tiết sản phẩm sẽ được thiết kế lại theo hướng gọn hơn, dễ xem hơn. Phần mô tả sẽ được trình bày lại theo dạng bảng hoặc nhóm thông tin rõ ràng. Đồng thời, nút “Mua ngay” sẽ được làm to hơn, nổi bật hơn để khách hàng dễ chú ý và thao tác mua hàng nhanh hơn.
>
> Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.
>
> Hãy đề xuất:
> 1. Bố cục giao diện.
> 2. Các thành phần HTML cần sử dụng.
> 3. Cách tổ chức CSS.
> 4. Cách hiển thị trên máy tính và điện thoại.
> 5. Những điểm cần kiểm tra về khả năng sử dụng.
>
> Trước tiên, hãy giải thích phương án thiết kế. Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.

### Prompt 3 – Tạo mã nguồn (Nhiệm vụ 3, Bước 3)

> Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.
>
> Yêu cầu:
> - Giao diện có tiêu đề và khu vực sản phẩm.
> - Có tối thiểu 4 sản phẩm mẫu.
> - Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
> - Bố cục phù hợp với màn hình máy tính và điện thoại.
> - Mã HTML có cấu trúc rõ ràng.
> - CSS được tách thành file riêng.
> - Không sử dụng backend hoặc cơ sở dữ liệu.
> - Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
>
> Giải thích cách chạy trang web và những phần tôi cần kiểm tra.

## 4. Kết quả AI đề xuất

**Prompt 1:** AI lập bảng phân tích 5 khu vực và đưa ra các ý tưởng như gợi ý sản phẩm theo lịch sử mua hàng, xử lý bộ lọc không có kết quả, hỗ trợ chọn size, cải thiện tìm kiếm và thông báo ưu đãi vận chuyển.

**Prompt 2:** AI đề xuất giữ bố cục chính của trang chi tiết sản phẩm, trình bày lại nội dung mô tả bằng bảng và các nhóm thông tin, đồng thời làm nút **MUA NGAY** màu đỏ nổi bật. Bố cục được điều chỉnh cho máy tính và điện thoại.

**Prompt 3:** AI hỗ trợ tạo giao diện HTML/CSS gồm hình ảnh và thông tin giày, bảng thông số, phần nội dung mở/thu gọn, nút mua hàng và bốn thẻ sản phẩm mẫu. CSS được đặt trong file riêng.

## 5. Kiểm tra và điều chỉnh

Kết quả phân tích AI được đối chiếu với ảnh và các thao tác khảo sát website Biti's. Các giả định chưa được kiểm chứng, như trang tải chậm, tìm kiếm sai chính tả hoặc bộ lọc trả về 0 kết quả, không được dùng làm nhận xét thực tế.

Giao diện được mở trên trình duyệt để kiểm tra hình ảnh, nội dung, bố cục máy tính và điện thoại. Khi cuộn xuống đọc mô tả, khối chọn màu, kích cỡ và nút mua ở bản đầu bị cuộn khỏi màn hình. CSS được điều chỉnh bằng `position: sticky` để giữ khối này trong tầm nhìn khi cuộn trên máy tính.

## 6. Phần hiểu và có thể giải thích

- **`index.html`:** Chứa nội dung trang web như hình ảnh, giá, bảng mô tả và bốn sản phẩm mẫu.
- **`css/style.css`:** Quy định cách sắp xếp, kích thước, màu sắc và bố cục trên các màn hình khác nhau.
- **`<table>`:** Trình bày thông số sản phẩm thành hàng và cột để dễ xem.
- **`<details>` và `<summary>`:** Tạo các mục có thể nhấn để mở hoặc thu gọn thông tin mà không cần JavaScript.
- **`display: grid`:** Chia khu vực chi tiết sản phẩm thành hai cột trên máy tính.
- **`.buy-now`:** Quy định màu đỏ, kích thước lớn và hình thức của nút MUA NGAY.
- **`.purchase-sticky-area`:** Nhóm các thành phần chọn màu, kích cỡ và nút mua.
- **`position: sticky`:** Giúp nhóm thông tin mua hàng bám theo khi cuộn trong phạm vi khu vực sản phẩm.
- **`top: 16px`:** Khi bám theo, khối này nằm cách mép trên vùng xem website một khoảng 16 pixel.
- **`align-self: stretch`:** Giúp cột bên phải kéo dài theo hàng đang chứa nó, tạo khoảng không gian để khối có thể bám theo khi cuộn.
- **`@media`:** Áp dụng cách bố trí khác nhau cho máy tính và điện thoại; ở điện thoại khối mua hàng không bám theo để tránh che nội dung.

---

# Buổi 2 – HTML5 & CSS3

## 1. Công cụ AI

ChatGPT, Claude.

## 2. Mục đích sử dụng

Phân tích mã nguồn Buổi 1, kiểm tra cấu trúc HTML5, giải thích CSS selector, Box Model, Flexbox, Grid, đề xuất hiệu ứng hover/focus và hỗ trợ tìm nguyên nhân lỗi.

## 3. Prompt đã sử dụng

| Prompt | Công cụ | Nội dung chính |
|---|---|---|
| Prompt 1 – Phân tích mã nguồn hiện tại | ChatGPT | Xác định thành phần HTML đã có, ba vấn đề của bộ ảnh sản phẩm, thứ tự cải tiến |
| Prompt 2 – Kiểm tra cấu trúc HTML5 | Claude | Kiểm tra thẻ ngữ nghĩa, thứ bậc tiêu đề, `img`/`alt`/`a`, thẻ đóng mở |
| Prompt 3 – Tạo CSS cơ bản | ChatGPT | Liên kết `css/style.css`, định dạng `body`, `img`, cách kiểm tra đường dẫn CSS |
| Prompt 4 – Selector và Box Model | ChatGPT | Định dạng thẻ sản phẩm, giải thích margin/padding/`box-sizing` |
| Prompt 5 – Flexbox | ChatGPT | Căn chỉnh header bằng `justify-content`, `align-items`, `gap` |
| Prompt 6 – CSS Grid | ChatGPT | Bố trí danh sách sản phẩm, `grid-template-columns`, `object-fit` |
| Prompt 7 – Hover và focus | ChatGPT | Rê chuột đổi ảnh lớn, `transition`, `:focus-visible` |
| Prompt 8 – Kiểm tra lỗi | ChatGPT | Dòng hướng dẫn "Rê chuột…" hiển thị sai trên thiết bị cảm ứng |

Nội dung đầy đủ của từng prompt và câu trả lời của AI được lưu trong báo cáo bài tập Buổi 2.

## 4. Kết quả AI đề xuất và phần tự điều chỉnh

| Prompt | AI đề xuất | Kiểm tra và quyết định |
|---|---|---|
| 2 | Đổi `aside` thành `div`, thêm `role="img"`, ẩn icon trang trí, đổi thứ tự `h1`/`h2` | Áp dụng 3 lỗi chính và sửa `alt`; chưa đổi thứ tự tiêu đề vì phải sửa bố cục CSS |
| 3 | Thêm `height: auto` cho ảnh | Không áp dụng vì ảnh không khai báo `width`/`height` trong HTML, không bị méo |
| 4 | CSS thẻ sản phẩm gần giống CSS cũ, giữ `min-height: 42px`, giữ `button` | Không áp dụng; tự sửa viền, padding, bỏ `min-height`, đổi nút thành liên kết `a` |
| 5 | Thêm `justify-content: space-between` cho `.header-content` | Không áp dụng vì menu có `flex: 1` nên không tạo khác biệt; thử `justify-content` trên menu thay thế |
| 6 | Máy tính 2 cột, điện thoại 1 cột | Không áp dụng; giữ 4 cột trên máy tính, 2 cột trên điện thoại sau khi so sánh trong DevTools |
| 7 | Dùng `:has()` và `:not()`, thêm hiệu ứng nâng ảnh, mờ dần | Dùng ý tưởng `:has()` và `:focus-visible`; viết cách ngắn hơn (ảnh xem trước nằm đè), giới hạn bằng `@media (hover: hover)`, bỏ hiệu ứng thừa |
| 8 | Ẩn chữ bằng `font-size: 0` và hiện chữ mới bằng `::after` | Không áp dụng vì trình đọc màn hình vẫn đọc chữ cũ; sửa trực tiếp nội dung thành "Chọn ảnh nhỏ để xem"; dùng lệnh `matchMedia("(hover: none)")` của AI để kiểm tra |

## 5. Phần hiểu và có thể giải thích

- **`:has()`:** chọn khung ảnh có chứa ảnh nhỏ đang được rê chuột, để hiện ảnh lớn tương ứng.
- **`position: absolute`, `inset: 0`, `z-index`:** cho ảnh xem trước nằm đè lên ảnh đang chọn.
- **`@media (hover: hover)`:** chỉ áp dụng hiệu ứng rê chuột trên thiết bị có chuột.
- **`:focus-visible`:** hiện viền xanh khi người dùng chọn ảnh bằng bàn phím, không hiện khi bấm chuột.
- **`padding` / `margin` / `border`:** khoảng trống bên trong viền, bên ngoài viền và đường viền của thẻ sản phẩm.
- **`display: flex`, `justify-content`, `align-items`, `gap`:** sắp xếp và căn chỉnh logo, menu, icon trong header.
- **`display: grid`, `grid-template-columns`, `gap`:** chia danh sách sản phẩm thành các cột bằng nhau.
- **`object-fit: cover`, `aspect-ratio`:** giữ ảnh sản phẩm trong khung vuông, không bị méo.
