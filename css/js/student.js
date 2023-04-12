

let students = [
    { name: "John", likeTopic: "C#", dislikeTopic: "STS"},
    { name: "billy", likeTopic: "Sql", dislikeTopic: "ADS"},
    { name: "Pat", likeTopic: "Java", dislikeTopic: "SSMS"}
]

const add = () => {
    let nameCtrl = document.getElementById("pName")
    let favCtrl = document.getElementById("plikeTopic")
    let leastFavCtrl = document.getElementById("pdislikeTopic")

    let newName = nameCtrl.value;
    let newlikeTopic = favCtrl.value;
    let newdislikeTopic = leastFavCtrl.value;
``
    console.debug("newName", newName, "fav", newlikeTopic, "least", newdislikeTopic)

    let newStudent = {
        name: newName, likeTopic: newlikeTopic, dislikeTopic: newdislikeTopic
    }

    students.push(newStudent);
    console.log("Student added...");
    render();
}

const render =() =>{
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let student of students){
        console.log(`${student.name} | ${student.likeTopic} | ${student.dislikeTopic}`);
        let row = "<tr>";
        row += `<td>${student.name}</td>`
        row += `<td>${student.likeTopic}</td>`
        row += `<td>${student.dislikeTopic}</td>`
        row +="</tr>";
        tbody.innerHTML += row;
    }
}

const loaded = () =>{
    let bodiesCtrl = document.getElementsByTagName("body");
    let bodyCtrl = bodiesCtrl[0];
    bodyCtrl.style.fontFamily = "Arial";
    let tableCtrl = document.getElementsByTagName("table")[0];
    tableCtrl.style.width = "50%";
    render();
}

