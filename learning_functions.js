import { println } from "./utils.js";
function outer(){
    let foo=0;
    return function inner(){
        foo++;
        return foo;
    };
}
const blt=outer();
println(blt());
println(blt());