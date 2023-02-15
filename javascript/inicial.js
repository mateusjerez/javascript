function rangeOfNumbers(starNum, endNum){
  if(endNum < starNum){
    return [];
  }else{
    const a = starNum
    const countD = rangeOfNumbers(a, endNum - 1);
    countD.push(endNum);
    return countD;
  }
  
}
console.log(rangeOfNumbers(4,4));