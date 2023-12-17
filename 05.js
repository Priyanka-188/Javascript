//  Write a function to remove duplicate elements from an array.

let arr = ["Kanha","Kanha","Kanha","Radha","Radha","Priya","Ladli",1,3,1,3];

const removeDuplicates = (arr)=>{
    arr = [...new Set(arr)];    
    
    return arr;
}

console.log(removeDuplicates(arr));
// removeDuplicates(arr);