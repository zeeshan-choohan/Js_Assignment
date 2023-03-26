'use strict'

//     Chapter__01   Alerts


// Task__1

// alert("Hello Broyher!")

// Task__02

// alert("JavaScript Alert \n\nError! please enter a valid passward")

// Task__03

// alert("JavaScript Aletr \n\nWelcome to JS Land...\nHappy Coding!")

// Task__04

// alert("JavaScript Aletr \n\nWelcome to JS Land...")
// alert("JavaScript Aletr \n\nHappy Coding!\nPrevent this page from creating additional dialogs.")

// Task__05

// alert("Hello.. I can run JS through my web brower's console")
// console.log("Hello.. I can run JS through my web brower's console")

// Task__06

// alert("SMIT Hyderabad The best platform for Students in IT Field")

// Task__07

// Sir see it in HTML File

// Chapter_____02 VARIABLES FOR STRING

// Task_01

// var username 

// Task_02

// var myName = "Muhammad Zeeshan" 

// Task_03

// var message = "Hello World"
// alert(message)

// Task_04

// var student_name = prompt("Please Enter your Name ")
// var age = prompt("Please Enter your Age ")
// var course = prompt("Please Enter your Course Name ")
// alert("Welcome "+student_name)
// alert(age+" Years Old")
// alert(course)


// Task_05

// alert("PIZZA \n PIZZ \n PIZ \n PI \n P")

// Task_06

// var email = "example@gmail.com"
// alert("My email address is "+email)

// Task_07

// var book = "A Smarter \n Way To Learn JavaScript"
// alert("I am trying to learn from the Book "+book)

// Task_08

// document.write("Yah! I can write HTML content through JavaScript")

// Task_09

// var task = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(task)

// Chapter_____03 VARIABLES FOR NUMBERS

// Task_01

// var age = prompt("Enter your age please! ")
// alert("I am "+age+" years Old")

// Task_02

// var visiter = "You have visited this site 14 times"
// document.write(visiter)

// Task_03

// var birth_Year = parseInt(prompt("Enter your Age "))
// document.write("My birth year is "+birth_Year+"</br> Data type of my declared variable is number")

// Task_04

// var visiter_Name = prompt("Please Enter your name first ")
// var product = prompt("Please Enter product")
// var order = prompt("Please Enter your order")
// document.write("<b>"+visiter_Name+"</b>"+" order "+"<b>"+order+" "+product+"<b>"+"(s) "+" on XYZ Clothing store")

// Task_05

// Chapter_____04 VARIABLES NAMES : LEGAL & ILLEGAL

// Task_01

// var a=b=c = "Zeeshan" 
// document.write(a,b,c)

// Task_02

//legal names
// var name
// var user_name
// var $sum
// var name1
// var usarName

// illegal name

// var 1name
// var !code 
// var +illegal
// var Name Zeeshan
// var @ill gal 

// task-03
 // a 
// document.write("<h1>Rules for naming JS variables</h1></br></br>")      
// //b
// document.write("<b>Variable names can only contain character , $ , _ ,letter and character string </b></br>")   
// //c
// document.write("<b>Variables must begin with a , $ , _  or letter/name</b> <br>")
// //d
// document.write("<b>Variable names are Case Sensitive </b><br>")
// //e
// document.write("<b>Variable names should not be JS keywords/reserve words</b>")


// Chapter_____05 MATH EXPRESSIONS

// Task-01

// var num1 = parseInt(prompt("Enter number I will add them "))
// var num2 = parseInt(prompt("Enter 2nd number I will add them "))
// document.write("Sum of "+num1+" and "+num2+" is "+(num1+num2))

// Task_02

// var num1 = parseInt(prompt("Enter number I will subtract them "))
// var num2 = parseInt(prompt("Enter 2nd number I will add them "))
// document.write("Subtraction of "+num1+" and "+num2+" is "+(num1-num2)+"</br>")
// var num1 = parseInt(prompt("Enter number I will multiply them "))
// var num2 = parseInt(prompt("Enter 2nd number I will add them "))
// document.write("Multiplication of "+num1+" and "+num2+" is "+(num1*num2)+"</br>")
// var num1 = parseInt(prompt("Enter number I will divide them "))
// var num2 = parseInt(prompt("Enter 2nd number I will add them "))
// document.write("Division of "+num1+" and "+num2+" is "+(num1/num2)+"</br>")
// var num1 = parseInt(prompt("Enter number I will give you remainder of it"))
// var num2 = parseInt(prompt("Enter 2nd number I will add them "))
// document.write("Modulus of "+num1+" and "+num2+" is "+(num1%num2))

// Task_03
//a
// var value 
// //b
// document.write("<b>"+"Value after variable declaration is :",value+"<br>"+"</b>")
// //c
// var value = 5
// //d
// document.write("<b>"+"Initial Value :",value+"<br>"+"</b>")
// //e
// value = ++value
// //f
// document.write("<b>"+"Value after increment is : " ,value+"<br>"+"</b>")
// //g
// value = value+7
// //h
// document.write("<b>"+"Value after addition is :",value+"<br>"+"</b>")
// //i
// value = --value
// //j
// document.write("<b>"+"Value after decrement is :", value+"<br>"+"</b>")
// //k
// value = value%3
// document.write("<b>"+"The remainder is :",value+"</b>")

// Task_04

// var inp = parseInt(prompt("Please Enter ticket"))
// var ticket_cost = 600
// document.write("<h1>"+"Total cost of buy "+inp+" tickets to a movie is "+(ticket_cost*inp)+"PKR"+"<h1>")


//Task_05 

// var inp = parseInt(prompt("Enter Number of Table :"))
// document.write("<b>"+"Table of "+inp+"<br>"+"<b>")
// for(var i = 1; i <=10;i++){
//   document.write(inp+" x "+i+" = "+i*inp+"<br>")
//}

// task_06

// // a
//  var cel = parseInt(prompt("Enter Temperature in Cel :"))
// //b
// var cel_far = (((cel*9)/5)+32)
// document.write("<b>"+cel+"<sup>0</sup> C is "+cel_far+"<sup>0</sup> F "+"<b>"+"</br>")
// //c
// var far = parseInt(prompt("Enter Temperature in Far :"))
// //d
// var far_cel = (((far-32)*5)/9)
// document.write("<b>"+far+"<sup>0</sup>F is "+far_cel+"<sup>0</sup>C </b>")


// task_07

// //a
// var item1 = parseInt(prompt("Enter price of item 1"))
// //b
// var item2 = parseInt(prompt("Enter price of item 2"))
// //c
// var order_1_quan = parseInt(prompt("Enter quantity of item 1 "))
// //d
// var order_2_quan = parseInt(prompt("Enter quantity of item 2 "))
// //e
// var ship_charge = parseInt(prompt("Enter Shipping charges "))

// document.write("<h1>Shoppping Cart</h1><b>Price of item 1 is "+item1+"</b></br>")
// document.write("<b>Quantity of item 1 is "+order_1_quan+"</b></br>")
// document.write("<b>Price of item 2 is "+item2+"</b></br>")
// document.write("<b>Quantity of item 2 is "+order_2_quan+"</b></br>")
// document.write("<b>Shipping Charges "+ship_charge+"</b></br></br>")
// document.write("<b>Total cost of your order is "+((item1*order_1_quan)+(item2*order_2_quan)+ship_charge)+"</b>")

// Task_08

// var totalMarks = parseInt(prompt("Enter Total marks I will provide you its percentage "))
// var obtainMarks = parseInt(prompt("Enter your obtained marks "))
// document.write("<h1>Marks sheet</h1></br></br> <b>Total marks : "+totalMarks+"</b></br>"+"<b>Marks Obtained : "+obtainMarks+"</b></br>"+"<b>Percentage : "+((obtainMarks*100)/totalMarks)+"%</b>")

// Task_09

// document.write("<h1>Currency in PKR </h1>Total Currency in PKR :"+parseInt(10*104.80+25*28))


// Task_10

// var num = 10
// document.write(((num+5)*10)/2)

// task_11

//a
// var currYear = parseInt(prompt("Enter Current Year "))
// //b
// var birthYear = parseInt(prompt("Enter Your birth Year "))
// //c
// document.write("<h1>Age Calculator</h1>Current Year :"+currYear+"</br>Birth Year :"+birthYear+"</br>Your Age is :"+(currYear-birthYear))

// Task_12

//a

// var radius = parseInt(prompt("Enter radius of circle "))
// //b
// document.write("<h1>The Geometrizer</h1>Radius of Circle :"+radius+"</br>The circumference is :"+(2*3.142*radius)+"</br>The area is :"+(3.142*radius*radius))

// Task_13

//a
// var favSnack = prompt("Enter your favourite Snake name ") 
// //b
// var currAge = parseInt(prompt("Enter your current Age "))
// //c
// var maxAge = parseInt(prompt("Enter maximum age "))
// //d
// var estAmount = parseInt(prompt("Enter estimated amount of Snack you eat per day "))
// document.write("<h1>The Lifetime Supply Calculator</h1></<br>")
// document.write("<b>Favourite snack : "+favSnack+"</b></br>")
// document.write("<b>Current Age : "+currAge+"</b></br>")
// document.write("<b>Estimated Maximum Age : "+maxAge+"</b></br>")
// document.write("<b>Amount of Snack per day :"+estAmount+"</b></br>")
// document.write("<b>You will need "+((maxAge-currAge)*estAmount)+" Choclate Chip to last you until the ripe old age of "+maxAge+"</b>")



// Chapter_____ 06 --09 MATH EXPRESSIONS

// Task_ 01

// var num1 = parseInt(prompt("Enter a number "))
// document.write("Result :</br>The value of a is :"+num1+"</br>.................</br>")
// num1 = ++num1
// document.write("The value of ++a is "+num1+"</br>Now the value of a is :"+num1+"</br></br>")
// document.write("The value of a++ is :"+num1+"</br>")
// num1 = num1+1
// document.write("Now the value of a is :"+num1+"</br></br>")
// num1 = --num1
// document.write("The value of --a is :"+num1+"</br>Now the value of a is :"+num1+"</br></br>")
// document.write("The value of a-- is :"+num1+"</br>")
// num1 = num1-1
// document.write("Now the value of a is :"+num1)

// Task _02

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// document.write(result+"</br>")
// document.write("<b> --a;  =>  1   </b></br>")
// document.write("<b>  --a - --b;  => 1 - 0   </b></br>")
// document.write("<b>  --a - --b + ++b;  => 1 - 0 + 1    </b></br>")
// document.write("<b>    --a - --b + ++b + b--; 1 - 0 + 1 + 1    </b>")



// Task_03

// var user = prompt("Enter your Name please! ")
// document.write(" <b> Wel Come in SMIT Hyd "+user+"</b>")

// Task_05

// var inp = prompt("Enter number I will give you it's table ")
// for(var i = 1; i <=10 ; i++ ){
//     if (inp == ""){
//         inp = 5
//         document.write("<b>"+inp +" x "+i+" = "+(i*inp)+"</b></br>")
//     }
//    else{
//     document.write("<b>"+inp +" x "+i+" = "+(i*inp)+"</b></br>")
//    } 
   
// }


// Task_06

// //a

// var sub1 = prompt("Enter first subject ")
// //  if(sub1 >=0 && sub1 <=100){
//   var sub2 = prompt("Enter second subject ")
//     // if(sub2 >=0 && sub2 <=100){
//       var sub3 = prompt("Enter Third subject ")
//         // if(sub3 >=0 && sub3 <=100){
//             // console.log("You entered correct value ")
// // //b
// var totalMarks = 300
// // //c
// var obt_mark1 = parseInt(prompt("Enter obtained mark of first subject "))
// // //d
// var obt_mark2 = parseInt(prompt("Enter obtained mark of second subject "))
// var obt_mark3 = parseInt(prompt("Enter obtained mark of third subject "))

// // //e

// var marks_Obt = obt_mark1+obt_mark2+obt_mark3
// var percentage = (marks_Obt/totalMarks)*100
// percentage.toFixed()

//         document.write("<table  class='c1'>")
//         document.write("<tr class='c2'><th class='c2'>Subject</th>")
//         document.write("<th class='c2'>Total marks</th>")
//         document.write("<th class='c2'>Obt marks</th>")
//         document.write("<th class='c2'>Percentage</th>")
//         document.write("</tr>")

//         document.write("<tr><th class='c2'>"+sub1+"</th>")
//         document.write("<th class='c2'>100</th>")
//         document.write("<th class='c2'>"+obt_mark1+"</th>")
//         document.write("<th class='c2'>"+obt_mark1+"%</th>")
//         document.write("</tr>")

//         document.write("<tr><th>"+sub2+"</th>")
//         document.write("<th>100</th>")
//         document.write("<th>"+obt_mark2+"</th>")
//         document.write("<th>"+obt_mark2+"%</th>")
//         document.write("</tr>")

//         document.write("<tr><th>"+sub3+"</th>")
//         document.write("<th>100</th>")
//         document.write("<th>"+obt_mark3+"</th>")
//         document.write("<th>"+obt_mark3+"%</th>")
//         document.write("</tr>")

//         document.write("<tr><th></th>")
//         document.write("<th>"+totalMarks+"</th>")
//         document.write("<th>"+marks_Obt+"</th>")
//         document.write("<th>"+percentage+"%</th>")
//         document.write("</tr>")
//         document.write("</table>")

// }
// else{
// document.write("Enter sub3 correct number")

// }

// }
// else{
// document.write("Enter sub2 correct number")

// }
// }
// else{
// document.write("Enter sub1 correct number")
// }







// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></table>")
// document.write("<tr><th>"+sub1+"</th><th>"+totalMarks+"</th><th>"+obt_mark1+"</th><th>"+((obt_mark1*100)/totalMarks)+"%"+"</th></tr>")
// document.write("<tr><th>"+sub2+"</th><th>"+totalMarks+"</th><th>"+obt_mark2+"</th><th>"+((obt_mark2*100)/totalMarks)+"%"+"</th></tr>")
// document.write("<tr><th>"+sub3+"</th><th>"+totalMarks+"</th><th>"+obt_mark3+"</th><th>"+((obt_mark3*100)/totalMarks)+"%"+"</th></tr></table>")



// USER INPUT  &  CONDITIONAL STATEMENT 9-11

// Task_01


// var inp = prompt("Enter city name ")
// user = inp.toLowerCase()
// if(user == "karachi"){
//     console.log("Welcome to city of lights")
// }

// Task_02


// var gender = prompt("Enter your gender please! ")
// user = gender.toLocaleLowerCase()
// if(user == "male"){
//     console.log("Good Morning Sir")
// }
// else if(user == "female"){
//     console.log("Good Morning Ma'am")
// }

// Task_03


// var inp_color = prompt("Enter color name of road traffic light")
// var uper = inp_color.toLocaleUpperCase()
// if(uper == "RED"){
//     document.write("<table>")
//     document.write("<tr> <th>Signal Color</th><th>Message</th></tr>")
//     document.write(`<tr> <th>${uper}</th><th>Must Stop</th></tr>`)
//     document.write(" </table>")
// }
// else if(uper == "YELLOW"){
//     document.write("<table>")
//     document.write("<tr> <th>Signal Color</th><th>Message</th></tr>")
//     document.write(`<tr> <th>${uper}</th><th>Ready to Move</th></tr>`)
//     document.write(" </table>")
// }
// else if(uper == "GREEN"){
//     document.write("<table>")
//     document.write("<tr> <th>Signal Color</th><th>Message</th></tr>")
//     document.write(`<tr> <th>${uper}</th><th>Move Now</th></tr>`)
//     document.write(" </table>")
// }
// else{
//     alert("No data you entered")
// }



// Task_04

// var inp = prompt("Enter your car Remaining fuel in Liter")
// if(inp <= 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("You have enough fuel")
// }

// Task_05

// A

// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }
// // B

// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }

// // C

// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// if(c === 13){
//     alert("condition 2 is true");
// }
// if(++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// // D
// var materialCost = 2000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost
// if(totalCost === materialCost+laborCost){
//     alert("The cost equals");
// }
// // E
// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }
// // F
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

//Task_06

// var sub1 = parseInt(prompt("Enter English obtained marks out of 100 "))
// if(sub1 > 100){
//         alert("Enter correct marks of Eng <100")
//     }
// var sub2 = parseInt(prompt("Enter Math obtained marks out of 100 "))
// if(sub2 > 100){
//         alert("Enter correct marks of Math < 100")
//     }
//  var sub3 = parseInt(prompt("Enter Urdu obtained marks out of 100 "))
//     if(sub3 > 100){
//         alert("Enter correct marks of Urdu < 100")
//     }
//     var remark = "";
// total_mark = 300;
// var sum = sub1+sub2+sub3
// var per = (sum*100)/total_mark
// if(per < 100 && per >= 80){
// var grade = "A-one"
// remark = "Excellent"
// document.write("<table class = 'table'>")
// document.write("<tr class = 'table_Heading'><th>Percentage %</th><th>Grade</th><th>Remarks</th></tr>")
// document.write(`<tr class = 'table_Row1'><th>Greater than or equal to ${per.toFixed()}</th><th>${grade}</th><th>${remark}</th></tr>`)
// document.write("</table>")

// document.write("<table class = 'marksheet'>")
// document.write("<tr><th><h1>Marks Sheet</h1></th></tr>")
// document.write(`<tr><th>Total marks : ${total_mark}</th></tr> `)
// document.write(`<tr><th>Marks Obtained : ${sum}</th></tr>`)
// document.write(`<tr><th>Percentage : ${per}%</th></tr> `)
// document.write(`<tr><th>Grade : ${grade}</th></tr>`) 
// document.write(`<tr><th>Remarks : ${remark}</th></tr>`)
// document.write("</table>")


// }
// else if(per < 80 && per >= 70){
//     var grade = "A"
//     remark = "Good"
//     document.write("<table class = 'table'>")
//     document.write("<tr class = 'table_Heading'><th>Percentage %</th><th>Grade</th><th>Remarks</th></tr>")
//     document.write(`<tr class = 'table_Row2'><th>Greater than or equal to ${per.toFixed()}</th><th>${grade}</th><th>${remark}</th></tr>`)
//     document.write("</table>")

//     document.write("<table class = 'marksheet'>")
// document.write("<tr><th><h1>Marks Sheet</h1></th></tr>")
// document.write(`<tr><th>Total marks : ${total_mark}</th></tr> `)
// document.write(`<tr><th>Marks Obtained : ${sum}</th></tr>`)
// document.write(`<tr><th>Percentage : ${per}%</th></tr> `)
// document.write(`<tr><th>Grade : ${grade}</th></tr>`) 
// document.write(`<tr><th>Remarks : ${remark}</th></tr>`)
// document.write("</table>")
//     }

//     else if(per < 70 && per >= 60){
//         var grade = "B"
//         remark = "You need to improve"
//         document.write("<table class = 'table'>")
//         document.write("<tr class = 'table_Heading'><th>Percentage %</th><th>Grade</th><th>Remarks</th></tr>")
//         document.write(`<tr class = 'table_Row1'><th>Greater than or equal to ${per.toFixed()}</th><th>${grade}</th><th>${remark}</th></tr>`)
//         document.write("</table>")

//         document.write("<table class = 'marksheet'>")
// document.write("<tr><th><h1>Marks Sheet</h1></th></tr>")
// document.write(`<tr><th>Total marks : ${total_mark}</th></tr> `)
// document.write(`<tr><th>Marks Obtained : ${sum}</th></tr>`)
// document.write(`<tr><th>Percentage : ${per}%</th></tr> `)
// document.write(`<tr><th>Grade : ${grade}</th></tr>`) 
// document.write(`<tr><th>Remarks : ${remark}</th></tr>`)
// document.write("</table>")
//         }
//         else if(per < 60 && per >= 0){
//             var grade = "Fail"
//             remark = "Sorry"
//             document.write("<table class = 'table'>")
//             document.write("<tr class = 'table_Heading'><th>Percentage %</th><th>Grade</th><th>Remarks</th></tr>")
//             document.write(`<tr class = 'table_Row2'><th>Less than ${per.toFixed()}</th><th>${grade}</th><th>${remark}</th></tr>`)
//             document.write("</table>")

//             document.write("<table class = 'marksheet'>")
// document.write("<tr><th><h1>Marks Sheet</h1></th></tr>")
// document.write(`<tr><th>Total marks : ${total_mark}</th></tr> `)
// document.write(`<tr><th>Marks Obtained : ${sum}</th></tr>`)
// document.write(`<tr><th>Percentage : ${per}%</th></tr> `)
// document.write(`<tr><th>Grade : ${grade}</th></tr>`) 
// document.write(`<tr><th>Remarks : ${remark}</th></tr>`)
// document.write("</table>")

//             }
// else{
//     alert("You not Enter Anything")
// }



//Task_07

// var secret_num = 5;
// var user = parseInt(prompt("Enter number from 1 to under 10  if correct number you win!!"));
// if(user == 5){
//     alert("Bingo! Correct answer")
// }
// else if (user+1 == 5){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Try Again")
// }

// Task_08

// var user_Inp = parseInt(prompt("Enter number I will tell you number is divisible by 3 or not"));
// if(user_Inp%3 == 0){
//     alert("Number is Divisible by 3")
// }
// else{
//     alert("Number not Divisible by 3")
// }

// Task_09

// var user_Inp = parseInt(prompt("Enter any number I will tell you number is Even or Odd"));
// if(user_Inp%2 == 0){
//     alert(user_Inp+" is Even number")
// }
// else{
//     alert(user_Inp+" is Odd number")
// }

//Task_10

// var user_Temp = parseInt(prompt("Enter Temperature I will ask you its Update!"));
// if(user_Temp > 40){
//     alert("It is too hot outside.")
// }
// else if(user_Temp > 30){
// alert("The Weather today is Normal.")
// }
// else if(user_Temp > 20){
//     alert("Today's Weather is cool.")
//     }
//     else if(user_Temp > 10){
//         alert("OMG! Today's Weather is so Cool.")
//         }
// else{
//     alert("You not enter anything or type wrong anything else!")
// }


//Task_11

// var user_Num1 = parseInt(prompt("Enter first Number"));
// var user_Num2 = parseInt(prompt("Enter second Number"));
// var operator = prompt("Enter Any operator like + , - , x , / , %");
// if(operator === "+"){
// alert(user_Num1+user_Num2+ " is your sum")
// }
// else if(operator === "*"){
//     alert(user_Num1*user_Num2+ " is your Multiplication result")  
// }
// else if(operator === "/"){
//     alert(user_Num1/user_Num2+ " is your Divisible  result")  
// }
// else if(operator === "-"){
//     alert(user_Num1-user_Num2+ " is your Subtract result")  
// }
// else if(operator === "%"){
//     alert(user_Num1%user_Num2+ " is your remainder result")  
// }
// else{
//     alert("you enter wrong operator you not enter anything else!")
// }


//  // IF...ELSE & ELSE IF STATEMENT, TESTING SETB OF CONDITIONS 12-13

// Task_01

// var user_Inp = prompt("Enter any character number or string I will ask you it is number or string");
// if(user_Inp.charCodeAt(0) >= 65 && user_Inp.charCodeAt(0) <=90){
//     alert(user_Inp+ " is a UpperCase letter")
// }
// else if(user_Inp.charCodeAt(0) >= 97 && user_Inp.charCodeAt(0) <=122){
//     alert(user_Inp+ " is a lower Case letter")
// }
// else if(user_Inp.charCodeAt(0) >= 48 && user_Inp.charCodeAt(0) <=57){
//     alert(user_Inp+ " is a number ")
// }
// else{
//     alert("you enter a wrong character or hit null input field")
// }


// Task_02

// var num1 = parseInt(prompt("Enter numbers I will ask you which one is greater or both equal"));
// var num2 = parseInt(prompt("Enter second number"));
// if(num1 > num2){
//     alert(num1 +" is greater from "+num2)
// }
// else if(num1 < num2){
//     alert(num2 +" is greater from "+num1)
// }
// else{
//     alert(num1+" and "+ num2 +" both are equal")
// }


// Task_03

// var user_Num = prompt("Enter any number I will ask you it is -ve +ve or 0");
// if(user_Num > 0){
//     alert(user_Num+ " Number is Positive Number")
// }
// else if(user_Num < 0){ 
//     alert(user_Num+ " Number is Negative Number")
// }
// else if(user_Num == 0){
//     alert(" Your number is "+ user_Num )
// }
// else{
//     alert(user_Num + " You enter wrong character")
// }

// Task_04

// var userChar = prompt("enter any character string I will ask you it is vowel or not");
// if(userChar == "A" || userChar == "E" || userChar == "I" || userChar == "O" || userChar == "U"){
//     alert(userChar+ " is a vowel "+ true)
// }
// else if(userChar == "a" || userChar == "a" || userChar == "i" || userChar == "o" || userChar == "u"){
//     alert(userChar+ " is a vowel "+ true)
// }
// else{
//     alert(userChar+" is a Consonant "+ false)
// }


// Task_05

// var user_psw = prompt("Enter your password")
// var confirmPsw = prompt("Re-Enter your password for confirmation")
// if(user_psw && confirmPsw == ""){
//     alert("Please Enter your  password in input field")
// }
// else if(user_psw == confirmPsw){
// alert("Correct! The password you entered matches the orignal password")
// }
// else{
//     alert("Incorrect Password")
// }

// Task_06

// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good day";
//     console.log(greeting)
// }
// else{
//     greeting = "Good Evening";
//     console.log(greeting)
// }



// Task_07

// var user_Time = prompt("Enter Time like 1900 I will ask time to you!");
// if(user_Time >=' 0000' && user_Time < '1200'){
//     alert("Good Morning!")
// }
// else if(user_Time >= '1200' && user_Time < '1700'){
// console.log("Good Afternoon!")
// }
// else if(user_Time >= '1700' && user_Time < '2100'){
// console.log("Good Evening!")
// }
// else if(user_Time >= '2100' && user_Time < '2359'){
//     console.log("Good Night!")
// }
// else{
//     console.log("Bro You Entered wrong value that's not exist")
// }


// Chapter 14-16 ARRAYS

// Task_01

// var arr = []

// Task_02

// var obj_Array = {}

// Task_03

// var str_Array = ['Zeeshan','Zia','Nabeel','Umair']
// console.log(str_Array)

// Task_04

// var num_Array = [1,2,3,4,5,6,7,8,9,10]
// console.log(num_Array)

// Task_05

// var boll_Array = [true , false]
// console.log(boll_Array)

// Task_06

// var mix_Array = ['Zeeshan','Saylani',1,2,3,true,false]
// console.log(mix_Array)

// Task_07

// var count = 0;
// var qal_Array = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD']
// document.write('<b>'+"Qualifications :"+'</b></br>');
// for(var i =0 ;i < qal_Array.length ; i++){
//     count++;
//     document.write('<b>'+count ,' ) ', qal_Array[i],'</b></br>')
// }

// Task_08

// var std_Array = ['Zeeshan','Zia','Nabrass']
// var obt_mark = [350,400,450]
// document.write("<b>Score of "+std_Array[0]+" is "+obt_mark[0]+" . Percentage : "+(obt_mark[0]*100)/500+"%</b></br>")
// document.write("<b>Score of "+std_Array[1]+" is "+obt_mark[1]+" . Percentage : "+(obt_mark[1]*100)/500+"%</b></br>")
// document.write("<b>Score of "+std_Array[2]+" is "+obt_mark[2]+" . Percentage : "+(obt_mark[2]*100)/500+"%</b>")


// Task_09

// var color_Array = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue","White","Purple"];
// alert(`${color_Array}`);

// a

// var user = prompt("Enter color name I will add it first in array")
// color_Array.unshift(user)
// document.write(color_Array)

// b

// var user = prompt("Enter color name I will add it  in the last of  array")
// color_Array.push(user)
// document.write(color_Array)

// c

// var user = prompt("Enter color name I will add it first in array")
// var user1 = prompt("Enter 2nd color name I will add it first in array")
// color_Array.unshift(user,user1)
// document.write(color_Array)

// d


// document.write("<h3>The Old Array :</br></br>"+color_Array+"</h3></br>")
// color_Array.shift();
// document.write("<h3>The Updated Array delete element from first :</br></br>"+color_Array+"</h3>")

// e

// document.write("<h3>The Old Array :</br></br>"+color_Array+"</h3></br>")
// color_Array.pop();
// document.write("<h3>The Updated Array delete element from last :</br></br>"+color_Array+"</h3>")

// f 

// var color_Array = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue","White","Purple"];
// alert(`${color_Array}`);
// var user_Index = prompt("Enter index number I will Add that color at desired index!");
// var user_color = prompt("Enter color name ");
// color_Array.splice(user_Index, 0,user_color);
// document.write(color_Array);

// g

// var color_Array = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue","White","Purple"];
// alert(`${color_Array}`);
// var user_Index = prompt("Enter index number which from you want to delete!");
// var user_IndexNum = prompt("Enter how many elements you want to delete !");
// document.write("<b>Previus Array :</br>"+color_Array+"</b></br>")
// color_Array.splice(user_Index, user_IndexNum);
// document.write("<b>Updated Array : </br>"+color_Array+"</b>");

// Task_10

// var std_score = [100,120,400,210,50,68,99,500,20,1,0,33]
// std_score.sort(function(a,b) {return a-b});
// document.write(std_score)

// Task_11

// var cityNames = ['Jamshoro','Hyderabad','Mirpurkhas','TandoAdam','Kotri']
// document.write("<h3>Cities List :</h3><h3>"+cityNames+"</h3>")
// var selectedCity = cityNames.slice(0,3)
// document.write("<h3>Selected cities list :</h3><h3>"+selectedCity+"</h3>")


// Task_12

// var strArray = ['This','is','my','cat'];
// strArray.join();
// console.log(strArray)
// document.write(strArray)


// Task_13


// for(var i = 0 ; i < 4 ; i++){
//     var fifi_Array = []
//     var user_Inp  = prompt("Enter anything else!")
//     fifi_Array.unshift("Out :</br>"+user_Inp+"</br>")
//     document.write(fifi_Array)
    
// }


// Task_14


// for(var i = 0 ; i < 4 ; i++){
//     var fifi_Array = []
//     var user_Inp  = prompt("Enter anything else!")
//     fifi_Array.push("Out :</br>"+user_Inp+"</br>")
//     document.write(fifi_Array)
    
// }

// Task_15

// var phone_Manufacture = ['Apple','Samsung','Motorola','Nokia','Sony','Haier']
// document.write(`<select ><option selected selected disabled>Select Phone</option>
// <option>${phone_Manufacture[0]}</option><option>${phone_Manufacture[1]}</option>
// <option>${phone_Manufacture[2]}</option><option>${phone_Manufacture[3]}</option>
// <option>${phone_Manufacture[4]}</option><option>${phone_Manufacture[5]}</option></select>`)

// ARRAYS AND LOOP 17-20

// Task_01

// var mult_Array = [
// ['Zeeshan',74],
// ['Zia',106],
// ['Zahid',103],
// ];
// console.log(mult_Array)
// console.table(mult_Array)

// Task_02

// var mult_Array = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]

// ]
// document.write(mult_Array)

// Task_03

// for(var i = 1; i < 11; i++){
//     document.write(i+"</br>")
// }

// Task_04

// var user_Inp = parseInt(prompt("Enter a number to show its multiplication table"));
// var tab_length = parseInt(prompt("Enter length of Table!"));
// document.write("<b>Multiplication Table of "+user_Inp+"</br>Length "+tab_length+"</b></br>")
// for(var i = 1 ; i <=tab_length ; i++){
//     document.write("<b>"+user_Inp+" x "+i+" = "+(user_Inp*i)+"<b/></br>")
// }


// Task_05 not solve yet

// var fruits = ['banana','apple','mango','orange','strawberry']
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+"</br>")
// }
// fruits.forEach((ind_values,ind_num)=>{
//     document.write("Element at index of "+ind_num+" is "+ind_values+"</br>");
// })

// task_06

// a

// document.write("<b>Counting :</b></br>")
// for(var i = 1; i < 21 ; i++){
//     document.write("<b>"+i+" ,</b> ")
// }

// b 

// document.write("<b>Reverse Counting :</b></br>")
// for(var i = 10 ; i> 0 ; i-- ){
//     document.write("<b>"+i+" ,</b> ")
// }

// c

// document.write("<b>Even :</b></br>")
// for(var i = 0; i < 21 ; i = i+2){
//     document.write("<b>"+i+" ,</b> ")
// }

// d

// document.write("<b>Odd :</b></br>")
// for(var i = 1; i < 21 ; i = i+2){
//     document.write("<b>"+i+" ,</b> ")
// }

// e

// document.write("<b>Series :</b></br>")
// for(var i = 2; i < 21 ; i = i+2){
//     document.write("<b>"+i+"k ,</b> ")
// }

// // Task_07  Not complete yet

// var arr = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bakery . What do you want to order sir/ma'am")
// arr.forEach((value,ind)=>{
//     if(user == value){
//         console.log(value+" is available at index "+ind+" in our bakery")
//     }
//     if(user != value){
//         console.log("We are sorry ."+value+" is not available in our bakery")
//     }
// })


/* var arr = [24,53,78,91,12].sort((a,b) => a-b)
 console.log(arr)*/


// task_08

// var arr = [24,53,78,91,12]
// var large = 0
// for(var i=0; i<arr.length; i++){
// if(large < arr[i]){
//      large = arr[i]
   
// }
// }
// document.write("Array items :"+arr+"</br>")
// document.write("The largest number is "+large)

// Task_09
// var small_Arr = [24,53,78,91,12]
// var small = small_Arr.reduce((sml,lrg)=>Math.min(sml,lrg))
// document.write("Array itmes "+small_Arr+"</br>")
// document.write("The smallest number is"+small)

// Task_10

// for(var i = 5; i <=100;i+=5){
// document.write(i+" ")
// }



// STRING METHODS   21-25

//Task_01

// var frName = prompt("Please enter your frist name!")
// var lsName = prompt("Please enter your last frist name!")
// var fulName = frName+" "+lsName
// document.write("Welcome to JavaScript "+fulName)

// Task_02

// var user = prompt("Enter your favourite mobile model!")
// document.write("Length of string :"+user.length)


// task_03

// var countryName = "Pakistani"
// for(var i of countryName){
//     if(i == 'n'){
//         document.write("Index of 'n' : "+countryName.indexOf(i))
//     }
// }

// task_04 pending

// var str = 'Hello world'
// for(var i of str){
//     if(i == 'l'){
//         document.write("Last index of 'l' :"+str.lastIndexOf(i))
//     }

// }

// Task_05

// var str = 'Pakistan'
// document.write("String :" +str+'</br>')
// document.write("Character at index 3 :"+str[3])

// Task_06

// var frName = prompt("Please Enter your name here!")
// var lsName = prompt("Please Enter your last name!")
// document.write(frName.concat(" "+lsName))

// Task_07 pending

// var city = "Hyderabad"
// city.substring("Hyder")
// console.log(city)

// Task_08 pending


// Task_09

// var numStr = "472"
// document.write("Value :"+numStr+"</br>Type :"+typeof(numStr)+"</br>Value :"+numStr+"</br>Type :"+typeof(Number(numStr)))

// Task_10

// var user = prompt("Enter anything else I show you in capital letter it")
// document.write(user.toUpperCase())

// Task_11


// var user = prompt("Enter anything else I show you in capital letter it")
// var frLetter = user.slice(0,1).toUpperCase()
// var lstLetter = user.slice(1)
// console.log(frLetter+lstLetter)


// Task_12 pending

// var num = 35.36;
// var num1 = num.toString()
// document.write(num1.split(".").join(""))


// Task_13 pending

// var userInp = prompt("Enter some data about yourself")
// if(userInp.charCodeAt == 33){
//     console.log("dot is present")
// }

// Task_14 not complete yet

// var arr = ['cake','apple pie','cookie','chips','patties']
// var user = prompt("Welcome to ABC Bakery . What do you want to order sir/ma'am?")
// arr.forEach((val,ind)=>{
// if(user == val){
// document.write(val+" is available at "+ind+" in our Bakery")
// }
// if(user != val){
//     document.write("We are sorry ."+val+" is not available in our Bakery")   
// }
// })

// Task_15 pending

// var userPassword = prompt("Enter your Password must contain a-z , A-Z , 0-9")

// Task_16 pending

// var university  = "University of Karachi"
// for( var i = 0; i < university.length ;i++){
//     document.write(university[i]+"</br>")

// } 

//Task_17  pending

// var user = prompt("Enter anything I will gave you its last character")
// console.log()

// Task_18 pending

// var str = "The quick brown fox jumps over the lazy dog"
// var count = 0

 
// MATH METHODS 25-30

// var user = Number(prompt("Enter positive integer number"))
// // a 
// console.log(user)
// console.log(typeof(user))

// b

// var user = Number(prompt("Enter positive integer number"))
// console.log(Math.round(user))

//c

// var user = Number(prompt("Enter positive integer number"))
// console.log(Math.floor(user))

// d

// var user = Number(prompt("Enter positive integer number"))
// console.log(Math.ceil(user))


// Task_02

//a

// var user = Number(prompt("Enter a negative floating point value"))
// console.log("Number : "+user)
// console.log(typeof(user))

//b

// var user = Number(prompt("Enter a negative floating point value"))
// console.log(Math.round("round off value :"))

// c

// var user = Number(prompt("Enter a negative floating point value"))
// console.log(MATH.floor("floor value :"+user))

// d

// var user = Number(prompt("Enter a negative floating point value"))
// console.log(Math.ceil("ceil value :"+user))


// Task_03

// var user = prompt("Enter negative integer value")
// console.log("The absolute value of "+user+" is "+Math.abs(user))

// Task_04

// var num = ((Math.random()*6).toFixed())
// if(num == 0){
//     num = num+1
//     console.log(Math.floor(num)) 
// }
// else{
//     console.log(num)
// }

// Task_05

// var coin = ((Math.random()*2).toFixed())
// if(coin == 0){
//      coin = coin+1
//     console.log(Math.floor(coin)+" \n random coin value : Tails") 
// }
// else{
//     console.log(coin+ "\n random coin value : Heads")
// }

// Task_06

// var randomNum = (Math.random()*100).toFixed()
// if(randomNum == 0){
//   randomNum = randomNum+1
//   console.log("random number between 1 and 100 : "+randomNum)
// }
// else{
//     console.log("random number between 1 and 100 : "+randomNum)
// }

// Task_07

// var user = parseFloat(prompt("Please enter your Weight"))
// document.write("The weight of user is " +user+ " kilograms")

// Task_08

// var secretNumber = (Math.random()*10).toFixed()
// var userGuess = prompt("Enter a number between 1 and 10")
// if(secretNumber == 0){
//     secretNumber = secretNumber+1
// }
// if(userGuess == secretNumber){
//     alert("congratulation you guess right")

// }
// else{
// alert("Try again!")
// }


// DATE METHODS 30-34

// Task_01

// var toDay = new Date()
// document.write(toDay)

// Task_02

// var months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December']
// var findMonth = new Date()
// var month = findMonth.getMonth()
// var currentMonth = months[month]
// alert("Current month : "+currentMonth)


// Task_03

// var toDay = new Date()
// var day = toDay.getDay().





