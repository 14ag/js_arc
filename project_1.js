/* this project provides a table showing the relationship
 btn the number of comparisons of search
  and the binary representations of array lengths for arrays with lengths 1 to 10. in a worst case scernario.
  it uses rows "array_length" "binary_representation" "number_of_bits" "comparisons".
*/
import { println,binar_search,to_binary,row_entry } from "./utils";

var array_lenth,binary_representation,bit_count,comparisons_count;

println("array_length  bin_rep      number_of_bits  comparisons")
println("------------  ------------  ------------  ------------")
const sample=[]
for (i=1;i<11;i++){
    //generate arrays
    sample=sample.push(i);
    // array_lenth
    array_lenth=sample.length;
    // binary representation of array lenth
    binary_representation=to_binary(sample.length);
    // number of bits in binary representation
    bit_count=binary_representation.length
    // get comparison count
    comparisons_count=binar_search(sample,sample[sample.length-1]);
    println(row_entry(array_lenth)+" "+row_entry(binary_representation)+" "+row_entry(bit_count)+" "+row_entry(comparisons_count))

}

