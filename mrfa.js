//1.a) get all the countries from the asian continent/region using filter function.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var res=JSON.parse(request.response);
console.log(res);
var result=res.filter((ele)=>ele.region=="Asia").map((ele)=>ele.name);
console.log(result);
};


 //1.b) get all the countries whoes population less than 2 lakhs using filter function 
//var request=new XMLHttpRequest();
//request.open("GET","https://restcountries.com/v2/all");
//request.send();
//request.onload=function(){
//var res=JSON.parse(request.response);
//console.log(res);
//var popu=res.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
//console.log(popu);
//};

 //1.c)print the followin details name capital flag using forEach function.
//var request=new XMLHttpRequest();
//request.open("GET","https://restcountries.com/v2/all");
//request.send();
//request.onload=function(){
//var res=JSON.parse(request.response);
//console.log(res);
//var result=res.forEach((ele)=>console.log("Name: "+ele.name+","+" Capital: "+ele.capital+","+" Flag: "+","+ele.flag));
//console.log(result);
//};

//1.d)print the total population of countries using reduce function.
//var request=new XMLHttpRequest();
//request.open("GET","https://restcountries.com/v2/all");
//request.send();
//request.onload=function(){
//var res=JSON.parse(request.response);
// console.log(res);
//var result=res.reduce((acc,cv)=>acc+cv.population);
//console.log(result)
//}; 

//1.e)print the country which uses US dollar as currency.
//var request=new XMLHttpRequest();
//request.open("GET","https://restcountries.com/v2/all");
//request.send();
//request.onload=function(){
//var res=JSON.parse(request.response);
 //console.log(res);
//var result=res.forEach((ele)=>console.log(ele.currencies));
  //console.log(result);
//}; 

