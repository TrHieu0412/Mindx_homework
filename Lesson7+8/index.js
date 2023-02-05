/*BT_1. Nhập vào tuổi và giới tình của một người để đưa ra quyết định người đó có phải nhập ngũ hay không biết rằng tuổi nhập ngũ từ  đủ 18-27 và giới tính nhập ngũ là Nam*/
let gender='nam';
let age='20';
if(gender==='nam'&&age>=18&&age<=27){
    console.log("Đủ điều kiện nhập ngũ")
}else {
    console.log("Không đủ điều kiện nhập ngũ")
};

/*BT_2. Viết một đoạn code thực hiện tính thuế thu nhập cá nhân của một người biết rằng:
    1. 11 triệu đầu tiên của lương không phải chịu thuế
    2. Với mỗi 5 triệu tiếp theo phải chịu tương ứng 5%, 10%, 15%, 20% ~ 35% thuế.
    3. Sau khi tính được khoản thuế phải đóng, hãy tính phần lương còn lại sau khi đóng thuế.*/
let oldsalary=11000000;
let newsalary=15000000;
let tax= 0;
let salary=0;
let total=newsalary-oldsalary;
  if(total<=0){
    console.log("Không phải đóng thuế")
    salary=newsalary
} else if(total>0 && total<= 5000000){
    tax=total*0.05
    salary=newsalary-tax
} else if(total>5000000 && total<=10000000){
    tax=5000000*0.05+(total-5000000)*0.1
    salary=newsalary-tax
} else if(total >10000000 && total<=15000000){
    tax=5000000*0.05+ 5000000*0.1 +(total-10000000)*0.15
    salary=newsalary-tax
} else if(total >15000000 && total<=20000000){
    tax=5000000*0.05+ 5000000*0.1 +5000000*0.15+(total-15000000)*0.2
    salary=newsalary-tax
} else if(total >20000000 && total<=25000000){
    tax=5000000*0.05+ 5000000*0.1 +5000000*0.15+5000000*0.2+(total-20000000)*0.25
    salary=newsalary-tax
} else if(total >30000000){
    tax=5000000*0.05+ 5000000*0.1 +5000000*0.15+5000000*0.2+5000000*0.25+(total -25000000)*0.3
    salary=newsalary-tax
}
console.log("Khoản thuế phải đóng sau khi nhận lương là",tax)
console.log("Lương sau khi đóng thuế là", salary)
