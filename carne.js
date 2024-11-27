function carne(contenedor) {
    let divCarne = document.createElement("div");
    divCarne.className = "div-carne";
    contenedor.appendChild(divCarne);

    let divCarne1 = document.createElement("div");
    divCarne1.className = "div-carne1";
    contenedor.appendChild(divCarne1);
}

export { carne };
