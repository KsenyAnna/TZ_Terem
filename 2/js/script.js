$(document).ready(function () {
    function submitForm() {
        let response = JSON.stringify($("#form").serializeArray());
        dataOutput(response);
        return response;
    }
  
    function dataOutput(data) {
        let output = document.getElementById('outputData');
        output.textContent = `Данные из формы: ${data}`;
    }
  
    $("#form").on("submit", function (x) {
        x.preventDefault();
        $.ajax({
            type: "GET",
            url: "../abstract.php",
            data: submitForm(),
            success: function (data) {
            alert(data);
            },
        });
        return false;
    });
});