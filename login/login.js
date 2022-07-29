let usuario1 = {
    usuario: "MarcoVa",
    password: "Marco987",
    flag: 0,
    noCuenta: 135656,
    saldo: 6890,
    correo: "marco_dmk@outlook.es",
};

let usuario2 = {
    usuario: "JoeLozano",
    password: "JOE323",
    flag: 1,
    noCuenta: 135720,
    saldo: 12360,
    correo: "joellozano@outlook.es",
};

let usuario3 = {
    usuario: "MMiguel",
    password: "Migue564",
    flag: 2,
    noCuenta: 136210,
    saldo: 12250,
    correo: "miguelmonterroso@hotmail.com",
};

let usuarios = [usuario1, usuario2, usuario3];
let loginStatus = false;
let flag;

const form = document.getElementById("login");
const div = document.getElementById("render");
const form2 = document.getElementById("userData");

const userValidation = (useru, passu) => {
    for (let index = 0; index < usuarios.length; index++) {
        if (useru == usuarios[index].usuario && passu == usuarios[index].password) {
            loginStatus = true;
            console.log("Correcto");
            flag = usuarios[index].flag;
            let blank1 = (document.getElementById("userAccount").value = "");
            let blank2 = (document.getElementById("userPassword").value = "");
            break;
        }
    }

    if (loginStatus == true) {
        console.log("Logeo con Exito");
        showUserData(flag);
        Swal.fire("¡Bienvenido! " + useru, "Has iniciado sesion correctamente", "success");
    } else {
        console.log("Error de Logeo");
        console.log(useru, passu);
        let blank1 = (document.getElementById("userAccount").value = "");
        let blank2 = (document.getElementById("userPassword").value = "");
        setTimeout(() => {
            div.classList.remove("hide");
            div.classList.add("render");
        }, 0);
        setTimeout(() => {
            div.classList.remove("render");
            div.classList.add("hide");
        }, 2000);
    }
};

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    loginStatus = false;

    /*  let useru = Number(document.getElementById("userAccount").value);
    let passu = Number(document.getElementById("userPassword").value); */

    let useru = document.getElementById("userAccount").value;
    let passu = document.getElementById("userPassword").value;

    userValidation(useru, passu);
});

const showUserData = (flag) => {
    console.log(usuarios[flag]);
    form.classList.add("hide");
    form2.classList.remove("hide");
};

const depositar = () => {
    let amount = parseFloat(document.getElementById("amount").value);
    if (amount > 2000) {
        Swal.fire("¡ERROR!", "No se permiten depositos mayores a $2000", "error");
        // alert("No se permiten depositos mayores a $2000");
        document.getElementById("amount").value = "";
    } else {
        usuarios[flag].saldo = usuarios[flag].saldo + amount;
        Swal.fire("¡Gracias!", "Se ha depositado correctamente la cantidad de " + amount, "success");
        //  alert("Se ha depositado correctamente la cantidad de " + amount);
        document.getElementById("amount").value = "";
        checkBalance();
    }
};

const retirar = () => {
    let amount = parseFloat(document.getElementById("amount").value);
    let amountBWD = usuarios[flag].saldo - amount;
    if (amountBWD < 10) {
        Swal.fire("¡ERROR!", "Tu cuenta no puede quedar con un saldo menor a $10", "error");
        // alert("Tu cuenta no puede quedar con un saldo menor a $10");
        document.getElementById("amount").value = "";
    } else {
        usuarios[flag].saldo = usuarios[flag].saldo - amount;
        Swal.fire("¡Gracias!", "Se ha retirado correctamente la cantidad de " + amount, "success");
        // alert("Se ha retirado correctamente la cantidad de " + amount);
        document.getElementById("amount").value = "";
        checkBalance();
    }
};

const checkBalance = () => {
    let userBalance = (document.getElementById("userBalance").value = usuarios[flag].saldo);
};
