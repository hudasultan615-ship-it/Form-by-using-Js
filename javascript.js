// sum of two numbers button action

function SumOfTwoNumbers(){
    let num_1 = Number(document.getElementById("sum_no_1").value);
    let num_2 =Number(document.getElementById("sum_no_2").value);
    let sum = num_1 + num_2;
    document.getElementById("sum_result").innerHTML = "Sum = "+ sum;

}

let sum_button = document.getElementById("sum_btn");

sum_button.onclick = SumOfTwoNumbers;

// max number logic bteween the to numbers

function MaxNumber(){
    let num1 = Number(document.getElementById("max_no_1").value);
    let num2 = Number(document.getElementById("max_no_2").value);
    let max = Number(0);
    if (num1 > num2){
        max=num1;
    }
    else{
        max =num2;
    }
    document.getElementById("max_result").innerHTML = "Max No = "+max;

}

let max_button = document.getElementById("max_btn");
max_button.onclick = MaxNumber;

// maximum no from 3 numbers

function MaxNumberFromThree(){
    let num1 = Number(document.getElementById("max_num_1").value);
    let num2 = Number(document.getElementById("max_num_2").value);
    let num3 = Number(document.getElementById("max_num_3").value);
    let max = Number(0);
    let count = Number(0);

    if (num1 > num2 && num1 > num3){
        max = num1;
        count =1;
    }
    else if(num2 > num3){
        max = num2;
        count +=1;
    }
    else{
        max = num3;
        count += 3;
    }

    document.getElementById("maximum_result").innerText = count +" no is the max no: "+max;
}
max_three_btn = document.getElementById("maximum_btn");
max_three_btn.onclick = MaxNumberFromThree;

// check a number (+,-,0)
function CheckNumber(){
    let num = Number(document.getElementById("check_no").value);

    if (num > 0){
        document.getElementById("check_no_result").innerText = num +" is positive.";
    }
    else if (num < 0){
        document.getElementById("check_no_result").innerText = num +" is negative.";
    }
    else{
        document.getElementById("check_no_result").innerText = num +" is zero.";
    }
}

let check_button = document.getElementById("check_no_btn");
check_button.onclick = CheckNumber;

// divible by 5 and 11 a number

function Divisible_Number_Check(){
    let num = Number(document.getElementById("divisible_check_no").value);

    if ((num%5 == 0) && (num%11 == 0)){
        document.getElementById("divisible_check_no_result").innerText = num +" is divisible by 5 and 11 both.";
    }
    else{
        document.getElementById("divisible_check_no_result").innerText = num +" isn't divisible by 5 and 11.";
    }
}

let divible_check_button = document.getElementById("divisible_check_no_btn");
divible_check_button.onclick = Divisible_Number_Check;

// even odd number function

function Even_Odd_Number_Check(){
    let num = Number(document.getElementById("even_odd_no_check").value);

    if (num % 2 == 0){
        document.getElementById("even_odd_no_check_result").innerText = num +" is even.";
    }
    else{
        document.getElementById("even_odd_no_check_result").innerText = num +" is odd.";
    }
}

let even_odd_no_check_button = document.getElementById("even_odd_no_check_btn");
even_odd_no_check_button.onclick = Even_Odd_Number_Check;


// leap yar check function
function leap_year_Check(){
    let num = Number(document.getElementById("leap_year").value);

    if((num < 1000) || (num > 9999)){
        alert("Please Enter a 4-digit year!");
        return;
    }

    if ((num %4 ==0 && num %100 != 0) || (num %400 ==0)){
        document.getElementById("leap_year_result").innerText = num +" is a leap year.";
    }
    else{
        document.getElementById("leap_year_result").innerText = num +" is not a leap year.";
    }
}

let leap_year_button = document.getElementById("leap_year_btn");
leap_year_button.onclick = leap_year_Check;

// a charcter is alphabet or not

function Character_Check(){
    let char = document.getElementById("character_check").value;

    if(!char){
        alert("Please Enter a Character!");
        return;
    }

    if ((/^[A-Za-z]$/).test(char)){
        document.getElementById("character_result").innerText = char +" is an alphabet.";
    }
    else{
        document.getElementById("character_result").innerText = char +" is not an alphabet.";
    }
}

let character_button = document.getElementById("character_btn");
character_button.onclick = Character_Check;

// alphabet is vowel or not


function Alphabet_Check(){
    let char = document.getElementById("alphabet_check").value;

    char = char.toLowerCase();
    switch(char){
        case 'a':
        case 'e':
        case "i":
        case 'o':
        case 'u':
            document.getElementById("alphabet_result").innerText = char+" is vowel.";
            break;
        default:
            document.getElementById("alphabet_result").innerText = char+" is not a vowel.";
    }
}

let alphabet_button = document.getElementById("alphabet_btn");
alphabet_button.onclick = Alphabet_Check;

// display a week day name 


function week_day_name(){
    let day = Number(document.getElementById("week_day").value);

    if((day < 1) || (day > 7)){
        alert("Please Enter a number between 1-7!");
        return;
    }

    switch(day){
        case 1:
            document.getElementById("week_day_result").innerText = day+" day is Monday.";
            break;
        case 2:
            document.getElementById("week_day_result").innerText = day+" day is Tuesday.";
            break;
        case 3:
            document.getElementById("week_day_result").innerText = day+" day is Wednesday.";
            break;
        case 4:
            document.getElementById("week_day_result").innerText = day+" day is Thursday.";
            break;
        case 5:
            document.getElementById("week_day_result").innerText = day+" day is Friday.";
            break;
        case 6:
            document.getElementById("week_day_result").innerText = day+" day is Saturday.";
            break;
        case 7:
            document.getElementById("week_day_result").innerText = day+" day is Sunday.";
            break;
        default:
            document.getElementById("week_day_result").innerText = day+" day not a week day.";
    }
}

let week_day_button = document.getElementById("week_day_btn");
week_day_button.onclick = week_day_name;

// displaytotal days in a month


function month_days_total(){
    let month = Number(document.getElementById("month_day").value);

    if((month < 1) || (month > 12)){
        alert("Please Enter a number between 1-12!");
        return;
    }

    if(month == 1 || month == 3 || month ==5 || month == 7 || month == 8 || month == 10 || month == 12){
        document.getElementById("month_day_result").innerText = month+" has 31 days.";
    }
    else if(month == 2){
        document.getElementById("month_day_result").innerText = month+" has 28 days.";
    }
    else{
        document.getElementById("month_day_result").innerText = month+" has 30 days.";
    }

}

let month_day_button = document.getElementById("month_day_btn");
month_day_button.onclick = month_days_total;

// check the traigle valid

function valid_triangle(){
    let angle_1 = Number(document.getElementById("angle_1st").value);
    let angle_2 = Number(document.getElementById("angle_2nd").value);
    let angle_3 = Number(document.getElementById("angle_3rd").value);
    let sum = angle_1 + angle_2 + angle_3;

    if(sum == 180 ){
        document.getElementById("angle_result").innerText = "Its a valid triangle.";
    }
    else{
        document.getElementById("angle_result").innerText = "Its not a valid triangle.";
    }

}

let angle_button = document.getElementById("angle_btn");
angle_button.onclick = valid_triangle;

// check the profit/loss

function profit_loss(){
    let purchase = Number(document.getElementById("purchase_price").value);
    let sale = Number(document.getElementById("sale_price").value);

    if(sale > purchase){
        document.getElementById("price_result").innerText = "You earned a profit of Rs-/ "+(sale-purchase);
    }
    else{
        document.getElementById("price_result").innerText = "You gain a loss of Rs-/ "+(purchase - sale);
    }

}

let price_button = document.getElementById("price_btn");
price_button.onclick = profit_loss;

// display result

function calculate_result(){
    let num_1 = Number(document.getElementById("phy").value);
    let num_2 = Number(document.getElementById("chem").value);
    let num_3 = Number(document.getElementById("bio").value);
    let num_4 = Number(document.getElementById("math").value);
    let num_5 = Number(document.getElementById("comp").value);

    let sum = num_1 + num_2 +num_3 +num_4 + num_5;
    let percen = (sum/500)*100;
    percen = percen.toFixed(2);

    if(percen >= 90){
        document.getElementById("grade_Result").innerText = "You got Grade A with Percentage = "+percen+"%";
    }
    else if(percen >= 80){
        document.getElementById("grade_Result").innerText = "You got Grade B with Percentage = "+percen+"%";
    }
    else if(percen >= 70){
        document.getElementById("grade_Result").innerText = "You got Grade C with Percentage = "+percen+"%";
    }
    else if(percen >= 60){
        document.getElementById("grade_Result").innerText = "You got Grade D with Percentage = "+percen+"%";
    }
    else if(percen >= 40){
        document.getElementById("grade_Result").innerText = "You got Grade E with Percentage = "+percen+"%";
    }
    else{
        document.getElementById("grade_Result").innerText = "You got Grade F with Percentage = "+percen+"%";
    }

}

let result_button = document.getElementById("result_btn");
result_button.onclick = calculate_result;

// calulate gross salary

function calculate_salary(){
    let salary = Number(document.getElementById("basic_salary").value);
    let hra =0;
    let da=0;
    let gross=0;

    if(salary <= 10000){
        hra = salary*0.2;
        da = salary*0.8;
    }
    else if(salary <= 20000){
        hra= salary*0.25;
        da = salary*0.9;
    }
    else {
        hra = salary*0.3;
        da= salary*0.95;
    }
    gross = hra+salary+da;
    document.getElementById("salary_result").innerText = "Gross salary = "+gross;

}

let salary_button = document.getElementById("salary_btn");
salary_button.onclick = calculate_salary;