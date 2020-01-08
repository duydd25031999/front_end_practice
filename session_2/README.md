float 
    <!-- => position : absolute -->
    => parent không nhận thằng child => height = 0
    xử lý vấn đề = clearfix
        .clearfix::after {
            content : " ";
            display : "block | table"
            clear : both
        }

clear
    ngăn float xung quanh element
    left
    right
    both : left + right

display : none 
    xóa luôn hiện diện của element
    không phải làm trong suốt 

xóa khoảng cách giữa các elements "display : inline"
    font-size : 0 
        => dấu cách ẩn

bài toàn border của parent không cách child = margin của child
    fix => parent "overflow: auto;"

vertical-align : middle
    chỉ dùng khi "display : table-cell"

postition
    static (default)
    relative
        thêm attribute "left : n px" : vị trí so với parent là cách left n(px)
    absolute
        so với 1 thằng relative gần nhất
            không cứ phải parent
                nếu parent ko có thì tìm thằng lớn hơn nữa

transform
    translateY
    translateX

display : flex
    flex-direction
        row (default)
            item trản dài theo x
        column 
            item trản dài theo y
        ! align ăn theo trục chính
    justify-content
        center : căn giữa content theo trục
            row : căn giữa ngang
            col : căn giữa dọc
    align-item
        center : căn giữa ngược theo trục
            row : căn giữa dọc
            col : căn giữa ngang

box-model
    box-sizing
    position
    