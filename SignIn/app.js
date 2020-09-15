"use strict";

const btnSignIn = document.querySelector("#SignIn");

btnSignIn.onclick = function(){
    const Username = document.querySelector("#Username").value;
    const Password = document.querySelector("#Password").value;
    const UserTulos = document.querySelector("#EmailTulos");
    const PassTulos = document.querySelector("#PassTulos");

    UserTulos.innerHTML = `Username: ${Username}`;
    PassTulos.innerHTML = `Password: ${Password}`;

    return false;
}