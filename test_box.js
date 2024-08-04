import { println } from "./utils";

export function row_entry(x="noll"){
    x=x.toString()
    let empty_space="            ";
    if (x.length>12){return x;}
    let entry=empty_space.slice(0,empty_space.length-x.length)+x;
    return entry;
}
println(row_entry("1234567890123"));