const squared = (arr)=>{
    return arr.map(item => item*(item < 0 ? item : item)).sort((a,b)=> a-b )
}

console.log(squared([-10, -5, 0, 5, 10]));