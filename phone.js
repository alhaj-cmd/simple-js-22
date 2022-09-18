const phones  = [
    {name:'iphone', price:120000,  colour:'gray'},
    {name:'phone', price:11000,  colour:'gray'},
    {name:'samsung', price:42000,  colour:'gray'},
    {name:'nokia', price:45000,  colour:'gray'},
    {name:'symphone', price:56000,  colour:'gray'},
    {name:'vivo', price:2200000,  colour:'gray'},
    {name:'redmi', price:20000,  colour:'gray'},
    {name:'realme', price:13000,  colour:'gray'}
];

function isPhone(phone){
    let chepset  = phone[0];
    for(let i  = 0; i<phone.length; i++){
        const quantity  = phone[i];
       // console.log(quantity);
       if(quantity.price>chepset.price){
        chepset = quantity;
       }
    }
    return chepset;
}

const selection  =  isPhone(phones);
console.log(selection);