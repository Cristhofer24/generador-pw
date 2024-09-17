let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let clave = document.getElementById('contrasena');
const cadena = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+';
let especial = '!@#$%^&*()_+';
let estado = document.getElementById('estado');

let paswoord = '';

function generar() {
    let numDigitado = parseInt(cantidad.value);
    paswoord = '';
    console.log(numDigitado);

    if (cantidad.value == "") {
        alert('Por favor, ingrese la longitud de la contraseña');
        nuevo();
    } else {

        if (numDigitado < 8) {
            alert('La contraseña debe tener al menos 8 caracteres');
            nuevo();
        } else {
            let contieneEspecial = false;

            for (let i = 0; i < numDigitado; i++) {
                let aleatorio = cadena[Math.floor(Math.random() * cadena.length)];
                paswoord += aleatorio;


                if (especial.includes(aleatorio)) {
                    contieneEspecial = true;
                }
            }


            if (contieneEspecial) {
                estado.textContent = "La contraseña es fuerte y segura";
                estado.style.color = 'green';
            } else {
                estado.textContent = "La contraseña es débil";
                estado.style.color = 'red';
            }

            clave.value = paswoord;
        }
    }
}

function nuevo() {
    clave.value = "";
    cantidad.value = "";
    estado.textContent = "";
}
