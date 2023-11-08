// //no arr and no return 
// function message(){

//     console.log("My Name is Prabhat")

// }


// message()
// message()
// message()
// message()
// message()

// //pass arr and no return
// function message(n){
//     console.log("My name is "+n)
// }

// message("Mukesh")
// message("Ram Kumar Sah")
// message("Gopal Regmi")


//pass arrg and return value
// add = (a, b)=> a+b 


// a=100
// b=40

// console.log(add(a,b))


//Qn 6

calCommissionAmount=(sales)=>{
var rate;
if(sales >0 && sales <=1000){
  rate=5;
}
else if (sales >1001 && sales <=2500){
  rate=10
}
else{
rate = 15;
}
var comm = sales * rate /100
return comm
}


var sales = parseInt(prompt("Enter sales Amount = "))

document.write("Commssion Amount = "+calCommissionAmount(sales))