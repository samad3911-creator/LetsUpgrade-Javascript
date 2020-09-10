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

function printAllObjects(){
    arrayOfObjects.forEach(function(ele){
        console.log(ele);
    });
}


printAllObjects();