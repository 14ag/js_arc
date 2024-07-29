function outer(){
    let var=0;
    return function inner(){
        var++;
        return var;
    };
}
const blt=outer();
console.log(blt());
console.log(blt());