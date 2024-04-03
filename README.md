## Giới thiệu

Quyển sách này được viết bằng R Markdown trên nền tảng **bookdown** (https://github.com/rstudio/bookdown).

Người dùng cần đăng nhập để xem nội dung. Netlify phụ trách auth.

Đây là một cuốn sách tương tác. Người đọc có thể tự kiểm tra kết quả khi trả lời các câu hỏi trong sách.

Điều này làm được là nhờ package webexercices. Sau đây là lệnh cài đặt ban đầu (KHÔNG CHẠY LẠI LỆNH NÀY):

``` {r}
webexercises::add_to_bookdown(bookdown_dir = ".",
  include_dir = "",
  script_dir = "",
  output_format = "bs4_book")
```

## Cài đặt

Một số packages (có thể) cần cài: downlit, tinytex, servr, usethis, learnr (?), webexercises

## Build

Copy file *login.html* vào thư mục output (*docs*).

## Additional resources:

The **bookdown** book: https://bookdown.org/yihui/bookdown/

The **bookdown** package reference site: https://pkgs.rstudio.com/bookdown
