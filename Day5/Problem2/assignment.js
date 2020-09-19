let buses=[

]

function addBus(e){
    e.preventDefault();
    let bus={};
    let name=document.getElementById("name").value;
    let source=document.getElementById("source").value;
    let destination=document.getElementById("destination").value;
    let busNumber=document.getElementById("bus number").value;
    let capacity=document.getElementById("capacity").value;

    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.busNumber=busNumber;
    bus.busCapacity=capacity;

    buses.push(bus);

    display(buses);

    document.getElementById("name").value=" ";
    document.getElementById("source").value=" ";
    document.getElementById("destination").value=" ";
    document.getElementById("bus number").value=" ";
    document.getElementById("capacity").value=" ";


}

function display(busArray){
    let tabledata="";

    busArray.forEach(function(bus,index){
        let currentrow=`<tr>
        <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.busNumber}</td>
        <td>${bus.busCapacity}</td>
        </tr>`;
        tabledata+=currentrow;
    });

    document.getElementById("tdata").innerHTML=tabledata;

    
}


function searchBySourceOrDestination(){
    let searchValue=document.getElementById("searchInput").value;

    let newdata=buses.filter(function(bus){
       return bus.source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1 || bus.destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });

    display(newdata);
}