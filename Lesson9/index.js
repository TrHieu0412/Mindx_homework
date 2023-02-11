// Bài toán 1: tính tổng các số của số tự nhiên n (n < 100000)
function Sum1(num){
    let result=0;
    while(num>0){
        const residual= num%10;
        result+=residual;
        num=Math.floor(num/10)
    }
    console.log("Tổng của các số tự nhiên là ", result);
}
console.log(Sum1(20))
// Bài toán 2: tính tổng các ước nguyên dương của số tự nhiên n
function Sum2(integer){
    let result2=0;
    for(let i=1;i<=integer;i++){
        if(integer%i==0){
            result2+=i
        }
    }
    console.log("Tổng các ước nguyên dương là", result2)
}
console.log(Sum2(4))

// Bài toán 3: kiểm tra xem n có phải là số nguyên tố hay không
function Sum3(prime){
    let result3=0;
    for(let j=1;j<=prime;j++){
        if(prime%j==0){
            result3+=j
            if(result3==prime+1){
                console.log("Đây là số nguyên tố");
            } else {
                console.log("Đây không phải là số nguyên tố")
            }
        }
    }
}
console.log(Sum3(10))
