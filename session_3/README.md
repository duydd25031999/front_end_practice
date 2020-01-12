!SCSS
    chỉ chạy trên server envirement
        phải compile
    ! prefix cho mỗi tên "_"

.parent {

    &.another-class { // css : .parent.another-class
    }

    .child { // css : .parent . child
    }
}

& 
    nằm trong scope
    tương đương this

$variable = value
    .class {
        attribute : $variable
    }

web-saft-font
    font default cho mọi broswer

structure
    base
        những cái dùng chung cho toàn project
    components
        style cho những thành phần nhỏ
    layouts
        style cho 1 layout
    pages
        style riêng cho từng pages
    
    