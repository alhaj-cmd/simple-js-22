const names =['abul','dabul','kabul','jalal','kamal','abul','kabul','kamal','jalal'];

// function isNames (names){
//     const unique = [];
//     for(let i=0; i<names.length; i++){
//         const name =names[i];
//         if(unique.includes(name)=== false){
//             unique.push(name)
//         }

//     }
//      return unique;
// }
// const returnName =isNames(names);
// console.log(returnName);

function isNames (names){
    const unique =[];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
       if(unique.includes(name)===false){
       unique.push(name)
       }
    }
    return unique;
}

const resultName = isNames(names);
console.log(resultName);