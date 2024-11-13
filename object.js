//now code
//compute
import { println } from "./utils";


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let total =0
for (let x in salaries){
    total += salaries[x];
    // println(total)
}

println(total)