let a = parseFloat(prompt('Nhap a'));
let b = parseFloat(prompt('Nhap b'));
let c = parseFloat(prompt('Nhap c'));
let delta = (b*b - 4*a*c);
let x1;
let x2;
if (a==0) {
    alert('Khong phai la phuong trinh bac hai');
} else {
    if (delta < 0) {
        alert('phuong trinh vo nghiem');
    } else {
        if (delta ==0) {
            x1 =-b/(2*a);
            alert('Phuong trinh co nghiem duy nhat '+x1);
        } else {
            x1 = (-b+ Math.sqrt(delta))/(2*a);
            x2 = (-b - Math.sqrt(delta))/(2*a);
            let t =x1+ ' va ' +x2;
            alert('Phuong trinh co hai nghiem la '+t);
        }
    }
}
