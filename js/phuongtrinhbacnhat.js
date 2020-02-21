let a = parseFloat(prompt('Nhap a'));
let b = parseFloat(prompt('Nhap b'));
let x;
if (a==0) {
    if (b==0) {
        alert('phuong trinh co vo so nghiem');
    } else {
        alert('Phuong trinh vo nghiem');
    }
} else {
    x = -b/a;
    alert('Phuong trinh co nghiem la '+x);
}