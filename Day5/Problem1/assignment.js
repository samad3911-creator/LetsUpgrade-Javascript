let employees=[
    {
    name:"Abdul",
    city:"Lucknow",
    age:24,
    salary:"62,500"
    },
    {
    name:"Aditya",
    city:"Mumbai",
    age:24,
    salary:"42,500"
    },
    {
    name:"Shivam",
    city:"Indore",
    age:23,
    salary:"42,500"
    },
    {
    name:"Shalik",
    city:"Shillong",
    age:26,
    salary:"1,15,000"
    },
    {
      name:"Pranav",
      city:"Pune",
      age:22,
      salary:"35,000"
    }
]


function display(employeeArray){
    let tabledata="";

    employeeArray.forEach(function(employee,index){
        let currentrow=`<tr>
        <td>${index+1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td><button id="delete" onclick="deleteEmployee(${index})">Delete</button></td>
        </tr>`;
        tabledata+=currentrow;
    });

    document.getElementById("tdata").innerHTML=tabledata;

    
}


display(employees);


function searchByNameOrCity(){
    let searchValue=document.getElementById("searchInput").value;

    console.log(searchValue);

    let newdata=employees.filter(function(employee){
           return (employee.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 || employee.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1);
    });

    display(newdata);
}


function deleteEmployee(index){
employees.splice(index,1);
display(employees);
}
