let arr = [1,2,3,4,5,6,7]
console.log(arr[1]);
arr.push(3)
console.log(arr);
arr.pop()
console.log(arr)
arr.unshift(9)
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.includes(8));
console.log(arr.indexOf(4));



let newarr = arr.join()
console.log(arr);
console.log(newarr);


//slice     , splice 

console.log(arr);
console.log(arr.slice(1,3));


console.log(arr.splice(2,3));
console.log(arr);