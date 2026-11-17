// Chạy khi trang đã tải xong (giống bài 9.5 – sự kiện load)
window.addEventListener("load", function () {

    // ===== 1. MENU THU GỌN TRÊN ĐIỆN THOẠI =====
    // Bấm nút ☰ thì thêm/bỏ class "open" để menu hiện/ẩn (giống bài 9.4)
    var menuToggle = document.getElementById("menuToggle");
    var menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("open");
        });

        // Bấm vào một mục trong menu thì tự đóng menu lại
        var menuLinks = menu.querySelectorAll("a");
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener("click", function () {
                menu.classList.remove("open");
            });
        }
    }

    // ===== 2. CÁC MỤC HIỆN DẦN KHI CUỘN TỚI =====
    // Lấy tất cả phần tử có class "reveal" (giống querySelectorAll ở bài 9.1)
    var reveals = document.querySelectorAll(".reveal");

    function showOnScroll() {
        for (var i = 0; i < reveals.length; i++) {
            // vị trí mép trên của mục so với màn hình
            var top = reveals[i].getBoundingClientRect().top;
            // nếu mục đã vào gần cuối màn hình thì cho hiện ra
            if (top < window.innerHeight - 80) {
                reveals[i].classList.add("show");
            }
        }
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // chạy 1 lần lúc mở trang cho các mục đang nằm sẵn trên màn hình

    // ===== 3. NÚT LÊN ĐẦU TRANG =====
    var backToTop = document.getElementById("backToTop");

    if (backToTop) {
        // Cuộn xuống quá 500px thì hiện nút, ngược lại thì ẩn
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        // Bấm nút thì cuộn mượt về đầu trang
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});