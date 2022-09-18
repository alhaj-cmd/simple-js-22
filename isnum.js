function isNum(phone,computer,laptop){
    const isPhone = 2;
    const isComputer = 3;
    const isLaptop = 5;

   // if(totalprice){
        const phoneQuantity = isPhone*phone;
        const computerQuantity = isComputer*computer;
        const laptopQuantity = isLaptop*laptop;
    //}
    const totalprice = phoneQuantity+computerQuantity+laptopQuantity
    return totalprice;
}
const price = isNum(0,1,0);
console.log(price)