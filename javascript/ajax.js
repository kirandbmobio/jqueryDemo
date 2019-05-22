$(document).ready(function () {
    $('.getDemo').click(function () {
        $('#div1').load("demo.txt", function (responseText, statusTxt, xhr) {
            if (statusTxt == 'success') {
                $('#div1').html(responseText);
            }
            if (statusTxt == 'error') {
                alert("ERROR : " + xhr.status + ":" + xhr.statusText);
            }
        });
    });
    $(".getJson").click(function () {
        $.get("jsonData.json", function (data, status) {

            let data1 = JSON.parse(data);
            $.each(data1.data, function (i, field) {
                console.log(field.name);
                $('#div1').text(field.name + " " + status);
            });
        });
    });
    $(".serialise").click(function () {
        $(".serialisediv").text($("form").serialize());
    });

    $(".serializeArray").click(function () {
        let arr = $('form').serializeArray();
        $.each(arr, function (i, field) {
            $('.serialisediv').append(field.name + ":" + field.value + " ");
        });

    });
});