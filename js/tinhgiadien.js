let amount = parseInt(prompt('Nhap so dien da su dung'));
let price;
if (amount<=100) {
    price=2000*amount;
} else {
    if (amount<=200) {
        price = 100*2000+ 2500*(amount-100);
    } else {
        if (amount<300) {
            price = 100*2000 +100*2500 +3000*(a-200);
        } else {
            price =amount*4000;
        }
    }
}

alert('So tien dien phai tra la '+ price+ 'dong');