console.log("Code is executing")

function dataread (){
    $.get("http://localhost:5000/api/peopledb", function (data, status) {

        if (data) {
            let code = ""
            for (let x in data) {
                code += "<tr>"
                code += "<td>" + data[x].sno + "</td>"
                code += "<td>" + data[x].name + "</td>"
                code += "<td>" + data[x].city + "</td>"
                code += "</tr>"
            }
            $("#tdata").html(code)
        }

    })
}

dataread()

$(document).ready(
    function () {
        $('#store').click(function () {


            $.ajax({
                url: 'http://localhost:5000/api/peopledb',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    sno: $('#sno').val(),
                    name: $('#name').val(),
                    city: $('#city').val()
                }),
                processData: false,
                success: function (data, textStatus, jQxhr) {
                    alert("data successfully stored")
                    dataread()

                },
                error: function (jqXhr, textStatus, errorThrown) {
                    alert("problem in storing the data")
                }
            });



        })
      
    }
)