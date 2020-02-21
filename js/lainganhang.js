let amount = parseFloat(prompt('Nhap so tien goc ban dau '));
let month = parseInt(prompt('Nhap so thang vay'));
let interest = parseFloat(prompt('Nhap ti le lai suat quy dinh'));
let totalInterest = amount*(Math.pow((1+interest), month)-1);
alert('Tong so tien lai phai tra la '+totalInterest);

