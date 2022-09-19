const change = (coins)=> {
    let sum = 1;

    coins = coins.sort((a,b)=> a-b );

    for (let i=0; i<coins.length; i++){
        if (coins[i] > sum) return sum; 
        sum = sum + coins[i];
    }

    return sum;
}

console.log(change([5, 7, 1, 1, 2, 3, 22])) //Expected Output 20

console.log(change([1, 1, 1, 1, 1])) //Expected Output 6
 
console.log(change([1, 5, 1, 1, 1, 10, 15, 20, 100])) //Expected Output 55

console.log(change([1, 2, 5])) //Expected Output 4