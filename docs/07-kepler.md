# Định luật thứ 3 của Kepler

## Mục tiêu

Mục tiêu đầu tiên của bài thực hành này là biết sử dụng Stellarium để quan sát được toàn bộ Hệ Mặt Trời "từ trên cao". Làm vậy sẽ giúp người thực hành có được hình dung chính xác về các quỹ đạo và chuyển động trong Hệ Mặt Trời. Nguyên do là trong các tài liệu phổ biến khoa học, các kích thước thường không được thể hiện đúng tỷ lệ.

Mục tiêu thứ hai là hiểu công thức và ghi nhớ Định luật thứ 3 của Kepler thông qua hoạt động tính toán kiểm chứng. Đây cũng là dịp để người thực hành tư duy về quá trình tìm ra các định luật trong tự nhiên.

## Lý thuyết

Đọc trang wiki [Các định luật của Kepler về chuyển động thiên thể](https://vi.wikipedia.org/wiki/C%C3%A1c_%C4%91%E1%BB%8Bnh_lu%E1%BA%ADt_Kepler_v%E1%BB%81_chuy%E1%BB%83n_%C4%91%E1%BB%99ng_thi%C3%AAn_th%E1%BB%83), có thể bỏ qua các công thức.

## Thực hành

**A**. Khởi động Stellarium.

**B**. Thiết lập vị trí (_Location_): "Qui Nhon". Quay góc nhìn về đường chân trời phía Nam (_S_).

**C**. Cho thời gian dừng chạy. Thiết lập ngày giờ: 1/1/2024, 6am (giờ địa phương). Đặt thanh thời gian về phía trên bên phải màn hình.

**D**. Tắt hiển thị mặt đất (_Ground_) và khí quyển (_Atmosphere_). Hiển thị quỹ đạo của các hành tinh (menu *Sky and view options*, tab *SSO*, check *Show orbits* + tìm hiểu ý nghĩa của các checkbox gần đó).

---

**E**. Nhìn tổng thể Hệ Mặt Trời (menu *Location*, chọn *Planet* là *Solar System Observer*).

**F**. Đảm bảo rằng bạn đang nhìn thấy cực Bắc của Mặt Trời (menu *Search*, gõ *Sun*, bấm hết cỡ tổ hợp Alt + ↑ rồi bấm hết cỡ ↓).

**G**. Phóng to cho đến khi trường nhìn (*FOV*) còn khoảng 3-4º. Ta sẽ thấy được các "hành tinh vòng trong" (chấm trắng + tên phía trên bên phải).

---

**H**. Tăng thời gian sao cho Sao Kim (*Mercury*) đi được một vòng và điền vào cột *P (ngày)* trong Bảng \@ref(tab:kepler) (± 1 ngày).

**I**. Chỉnh lại ngày giờ về 1/1/2024, 6am. Làm tương tự cho Sao Thủy (*Venus*).

**J**. Phóng to trường nhìn lên khoảng 4-5º. Chỉnh lại ngày giờ về 1/1/2024, 6am. Làm tương tự cho Sao Hỏa (*Mars*) (± 1 tháng).

**J**. Phóng to trường nhìn lên khoảng 17-20º. Chỉnh lại ngày giờ về 1/1/2024, 6am. Làm tương tự cho Sao Mộc (*Jupiter*) và Sao Thổ (*Saturn*) (± một vài tháng).


| Hành tinh | P (ngày) | P (năm) | $P^2$ | a (A.U.) | a thực tế (A.U.) | Sai số (%) |
| --------- | -------- | ------- | ----- | ----- | --------- | ------- |
| Sao Thủy | <input class='webex-solveme nospaces' data-tol='4' size='2' data-answer='["88"]'/> | <input class='webex-solveme nospaces' data-tol='0.01' size='4' data-answer='["0.24",".24"]'/> |  | <input class='webex-solveme nospaces' data-tol='0.04' size='5' data-answer='["0.387",".387"]'/> | 0.387 | <input class='webex-solveme nospaces' data-tol='100' size='4' data-answer='["0.01",".01"]'/> |
| Sao Kim | <input class='webex-solveme nospaces' data-tol='10' size='5' data-answer='["224.7"]'/> |  |  | <input class='webex-solveme nospaces' data-tol='0.07' size='5' data-answer='["0.723",".723"]'/> | 0.723 | <input class='webex-solveme nospaces' data-tol='10' size='4' data-answer='["0.01",".01"]'/> |
| Trái Đất | 365.24 | 1 | 1 | 1 | 1 | 0 |
| Sao Hỏa | - | <input class='webex-solveme nospaces' data-tol='0.1' size='4' data-answer='["1.88"]'/> |  | <input class='webex-solveme nospaces' data-tol='0.1' size='5' data-answer='["1.523"]'/> | 1.523 | <input class='webex-solveme nospaces' data-tol='10' size='4' data-answer='["0.01",".01"]'/> |
| Sao Mộc | - | <input class='webex-solveme nospaces' data-tol='0.6' size='5' data-answer='["11.86"]'/> |  | <input class='webex-solveme nospaces' data-tol='0.5' size='5' data-answer='["5.204"]'/> | 5.204 | <input class='webex-solveme nospaces' data-tol='10' size='4' data-answer='["0.01",".01"]'/> |
| Sao Thổ | - | <input class='webex-solveme nospaces' data-tol='1.5' size='5' data-answer='["29.46"]'/> |  | <input class='webex-solveme nospaces' data-tol='1' size='5' data-answer='["9.582"]'/> | 9.582 | <input class='webex-solveme nospaces' data-tol='10' size='4' data-answer='["0.01",".01"]'/> |

: (\#tab:kepler) Bảng tổng hợp

---

**K**. Điền vào cột *P (năm)* (nếu chưa điền) bằng cách chia chu kỳ theo ngày cho 365.25.

**L**. Tính $P^2$ từ cột *P (năm)*.

**M**. Tính các bán trục lớn *a* dựa theo công thức $P^2 = a^3$

**O**. Tính sai số so với dữ liệu chuẩn dựa theo công thức 

[(giá trị tính được) - (giá trị thực tế)]/(giá trị thực tế) x 100%
