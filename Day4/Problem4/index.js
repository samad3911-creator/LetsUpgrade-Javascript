let arrayOfObjects=[
{
  name:"Aditya",
  age:24,
  country:"India",
  hobbies:["Playing Guitar","Playing PS"]
},
{
 name:"John",
 age:40,
 country:"U.S",
 hobbies:["Watching T.V","Fighting"]
},
{
    name:"Shalik",
    age:27,
    country:"India",
    hobbies:["Playing Guitar","Playing PS"]
}
]

function printByAge(){
    arrayOfObjects.forEach(function(ele){
        if(ele.age<30)
        console.log(ele);
    });
}

function printByCountry(){
    arrayOfObjects.forEach(function(ele){
        if(ele.country=="India")
        console.log(ele);
    });
}



printByAge();

printByCountry();