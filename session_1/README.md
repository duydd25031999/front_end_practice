- margin : khoảng cách từ element tới other element
- border : viền
- padding : khoảng cách từ border tới content
- background = padding + content
- kích thước element = content + padding + border (không tính margin)

- box-sizing : cách tính kích thước của element
    + content-box (default) :  
        width = content width
        height = content height
    + border-box : 
.height = width = content + padding

- display : 
    + inline : 
        không chiếm dòng
        không custom kích thước (kích thước theo content)
        luôn có margin có sẵn
    + block : 
        chiếm cả 1 dòng
        thay đổi margin để chiếm dòng đó
        custom kích thước
    + inline-block : hiển thị chiếm phần kích thước của nó

- margin : auto = căn x
- margin collapse
    + nếu 2 elements ngang hàng => margin giữa 2 element chọn cái lớn hơn (không phải tổng 2 cái)
    + chỉ xảy ra với vertical, không xảy ra với horizontal

- !important : 
    + chiếm attribute
    + lấy important sau cùng của attribute

- <a>
    + active : khi click vào
    + visited : sau khi ấn vào
    + hover : khi cursor lướt qua 

- <header>
- <nav>

bài tập : 
- căn y
- xóa margin trong inline-block
- code nav = <ul>
- phần tử cha không bao margin của phần tử con
+ margin collapse between parent and children
+ làm sao thằng cha bao đc margin của thằng con
- float => cha ko bao đc con 