function avg(arr){
    let total = 0;
    for(num of arr){
        total += num;
    }
    return total/arr.length;
}