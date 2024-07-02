

const display_form = () => {
    document.getElementById("div_displayForm").style.visibility = "initial";

    let name = document.getElementById("d_name").textContent;
    document.getElementById("f_name").value = name;

    let role = document.getElementById("d_role").textContent;
    document.getElementById("f_role").value = role;

    let available = document.getElementById("d_availability").textContent;
    document.getElementById("f_availability").value = available;

    let age = document.getElementById("d_age").textContent;
    document.getElementById("f_age").value = age;

    let location = document.getElementById("d_location").textContent;
    document.getElementById("f_location").value = location;

    let exp = document.getElementById("d_exp").textContent;
    document.getElementById("f_exp").value = exp;

    let d_email = document.getElementById("d_email").textContent;
    document.getElementById("f_email").value = d_email;
}

const update_data = () => {
    document.getElementById("div_displayForm").style.visibility = "hidden";

    let name = document.getElementById("f_name").value;
    document.getElementById("d_name").textContent = name;

    let role = document.getElementById("f_role").value;
    document.getElementById("d_role").textContent = role;

    let available = document.getElementById("f_availability").value;
    document.getElementById("d_availability").textContent = available;

    let age = document.getElementById("f_age").value;
    document.getElementById("d_age").textContent = age;

    let location = document.getElementById("f_location").value;
    document.getElementById("d_location").textContent = location;

    let exp = document.getElementById("f_exp").value;
    document.getElementById("d_exp").textContent = exp;

    let d_email = document.getElementById("f_email").value;
    document.getElementById("d_email").textContent = d_email;
}