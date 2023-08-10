function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}






regBtn.addEventListener('click', function () {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var contrasena = document.getElementById('password1').value;
    var email = document.getElementById('email').value;
    var repetirContra = document.getElementById('password2').value;

    if (nombre.length > 0 && apellido.length > 0 && contrasena.length > 0 && email.length > 0 && repetirContra.length > 0 && contrasena.length > 5 && contrasena === repetirContra && document.getElementById('terminos').checked) {

        showAlertSuccess();
    }
    else {

        showAlertError();
    }
});


