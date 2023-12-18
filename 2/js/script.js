const form = document.getElementById("form");
const output = document.getElementById("outputData");

function getFormData() {
    let data = JSON.stringify(Object.fromEntries(new FormData(form)));
    output.textContent = `Данные из формы: ${data}`;
    return data;
}
function onSubmitForm(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../abstract.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
            form.reset();
        }
    };
    xhr.send(getFormData());
    return false;
}

form.addEventListener("submit", onSubmitForm);