// // let studnet=["ram", "hari", "mohan"]
// // let student = {"key":"key_value", "Key":"key_value", ... }
// let student ={"name":"Prabhat", "add":"Janakpur", "mob":"9854221"}

// // document.write(student.name + " "+ student.add + " "+ student.mob)
// document.write(`${student.name}  ${student.add} ${student.mob}`)

let student = [
    {
        "name": "prabhat",
        "Add": "Janakpur",
        "mob": "554545"
    },
    {
        "name": "Janak kumar Dhakal",
        "Add": "Kathmandu",
        "mob": "5554545"
    },
    {
        "name": "Roshan Regmi",
        "Add": "Biratnagar",
        "mob": "98451"
    },
    {
        "name": "Rupesh Neupane",
        "Add": "Pokhara",
        "mob": "545484"
    }
]
document.write(`<Table border=1>`)
document.write(`<tr> <th> SN </th> <th> Name </th> <th> Address </th> <th> Address </th> </tr>`)
for (let i = 0; i < student.length; i++) {
    document.write(`<tr> <td>${i+1} </td> <td>${student[i].name} </td> <td> ${student[i].Add} </td> <td>${student[i].mob} </td></tr>`)

}
document.write(`</Table>`)

