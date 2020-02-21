let a = parseFloat(prompt('Nhap gia tri canh thu nhat'));
let b = parseFloat(prompt('Nhap gia tri canh thu hai'));
let c = parseFloat(prompt('Nhap gia tri canh thu ba'));
if ( a>0 && b>0 && c>0 &&(a+b)>c && (b+c)>a && (c+a)>b ) {
    alert('Day la gia tri hop le cua ba canh tam giac');
} else {
    alert('Day khong phai la ba canh cua tam giac');
}