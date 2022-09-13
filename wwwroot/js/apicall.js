console.log("Code is executing")

$.get("http://localhost:5000/api/peopledb", function (data, status) {

    if (data) {
        let code=""
        for (let x in data) {
            code += "<tr>"
            code += "<td>" + data[x].sno +"</td>"
            code += "<td>" + data[x].name + "</td>"
            code += "<td>" + data[x].city + "</td>"
            code += "</tr>"
        }
        $("#tdata").html(code)
    }

})