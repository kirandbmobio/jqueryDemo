$(document).ready(function () {
    $('.getDemo').click(function () {
        $('#div1').load("demo.txt", function (responseText, statusTxt, xhr) {
            if (statusTxt == 'success') {
                alert("success");
            }
            if (statusTxt == 'error') {
                alert("ERROR : " + xhr.status + ":" + xhr.statusText);
            }
        });
    });
    $(".getJson").click(function () {
        $.get("json.js", function (data, status) {
            console.log(data);
            $(data).each(function (index, item) {
                console.log(item);
            })
        })
    })
})