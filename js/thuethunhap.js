let income = parseFloat(prompt('Nhap thu nhap cua ban tinh theo trieu dong'));
let tax;
if (income<9) {
    alert('chuc mung, ban khong phai nop thue thu nhap');
} else {
    if (income<15) {
        tax = income*2/100;
    } else {
        if (income<30) {
            tax = income*3/100;
        } else {
            tax = income*5/100;
        }
    }
    alert('So thue ban can nop la '+tax+' trieu dong');
}