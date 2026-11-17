class Casa {
    region;
    emblema;
    lema;
    personajes = [];
    caracteristicas = [];
    img;

    constructor(nombre, region, emblema, lema, personajes, caracteristicas, img) {
        this.nombre = nombre;
        this.region = region;
        this.emblema = emblema;
        this.lema = lema;
        this.personajes = personajes;
        this.caracteristicas = caracteristicas;
        this.img = img;
    }

    // GETTERS
    getNombre() {
        return this.nombre;
    }

    getRegion() {
        return this.region;
    }

    getEmblema() {
        return this.emblema;
    }

    getLema() {
        return this.lema;
    }

    getPersonajes() {
        return this.personajes;
    }

    getCaracteristicas() {
        return this.caracteristicas;
    }

    getImg() {
        return this.img;
    }

    // SETTERS
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setRegion(region) {
        this.region = region;
    }

    setEmblema(emblema) {
        this.emblema = emblema;
    }

    setLema(lema) {
        this.lema = lema;
    }

    setPersonajes(personajes) {
        this.personajes = personajes;
    }

    setCaracteristicas(caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    setImg(img) {
        this.img = img;
    }
}

// ARRAY DE CASAS
const casas = [
    new Casa(
        "Stark",
        "El Norte",
        "Lobo huargo gris sobre fondo blanco",
        "Se acerca el invierno",
        ["Eddard", "Robb", "Sansa", "Arya", "Bran"],
        ["Honor", "Lealtad", "Tradición"],
        "img/Stark.jpeg"
    ),

    new Casa(
        "Targaryen",
        "Tierras de la Corona",
        "Dragón rojo de tres cabezas sobre fondo negro",
        "Fuego y sangre",
        ["Daenerys", "Viserys", "Aegon"],
        ["Antigua dinastía real", "Dragones"],
        "img/Targaryen.jpeg"
    ),

    new Casa(
        "Baratheon",
        "Tierras de la Tormenta",
        "Ciervo negro coronado sobre fondo dorado",
        "Nuestra es la furia",
        ["Robert", "Stannis", "Renly"],
        ["Fuerza", "Orgullo", "Espíritu guerrero"],
        "img/Baratheon.jpeg"
    ),

    new Casa(
        "Arryn",
        "El Valle de Arryn",
        "Halcón y luna blanca sobre fondo azul",
        "Tan alto como el honor",
        ["Jon", "Robin"],
        ["Fortaleza montañosa", "Honor", "Defensa"],
        "img/Arryn.jpeg"
    ),

    new Casa(
        "Lannister",
        "Occidente",
        "León dorado sobre fondo carmesí",
        "¡Oye mi rugido!",
        ["Tywin", "Cersei", "Jaime", "Tyrion"],
        ["Riqueza", "Poder político", "Ambición"],
        "img/Lannister.jpeg"
    ),

    new Casa(
        "Greyjoy",
        "Islas del Hierro",
        "Kraken dorado sobre fondo negro",
        "Nosotros no sembramos",
        ["Balon", "Theon", "Yara"],
        ["Navegación", "Independencia", "Tradición marinera"],
        "img/Greyjoy.jpeg"
    ),

    new Casa(
        "Tully",
        "Tierras de los Ríos",
        "Trucha plateada sobre fondo azul y rojo",
        "Familia, deber, honor",
        ["Hoster", "Edmure", "Catelyn"],
        ["Lealtad familiar", "Alianzas políticas"],
        "img/Tully.jpeg"
    ),

    new Casa(
        "Tyrell",
        "El Dominio",
        "Rosa dorada sobre fondo verde",
        "Crecer fuerte",
        ["Mace", "Margaery", "Olenna"],
        ["Riqueza agrícola", "Diplomacia", "Influencia"],
        "img/Tyrell.jpeg"
    ),

    new Casa(
        "Bolton",
        "El Norte",
        "Hombre desollado sobre fondo rojo",
        "Nuestras hojas son afiladas",
        ["Roose", "Ramsay"],
        ["Crueldad", "Rivalidad con los Stark"],
        "img/Bolton.jpeg"
    ),

    new Casa(
        "Martell",
        "Dorne",
        "Sol rojo atravesado por una lanza sobre fondo naranja",
        "Nunca doblegado, nunca roto",
        ["Doran", "Oberyn", "Trystane"],
        ["Independencia", "Orgullo", "Resistencia"],
        "img/Martell.jpeg"
    )
];

// RELLENAR DATOS

casas.forEach(function(casa) {
    const nombre = casa.getNombre();

    const divCasa = document.getElementById("casa" + nombre);
    const etiqueta = document.getElementById("et" + nombre);

    etiqueta.classList.add("tarjetaCasa");

    etiqueta.style.borderColor = getComputedStyle(divCasa).getPropertyValue("--color-casa").trim();

    etiqueta.innerHTML = `
        <h3>Casa ${casa.getNombre()}</h3>
        <ul>
            <li>Región: ${casa.getRegion()}</li>
            <li>Emblema: ${casa.getEmblema()}</li>
            <li>Lema: ${casa.getLema()}</li>
            <li>Personajes: ${casa.getPersonajes().join(", ")}</li>
            <li>Características: ${casa.getCaracteristicas().join(", ")}</li>
        </ul>
        <img src="${casa.getImg()}" alt="Casa ${nombre}">
    `;

    divCasa.addEventListener("mouseenter", function() {
        etiqueta.style.display = "block";
    });

    divCasa.addEventListener("mouseleave", function() {
        etiqueta.style.display = "none";
    });
});

// CASAS OKUPADAS

const casasOkupadas = [
    document.getElementById("casaOkupada1"),
    document.getElementById("casaOkupada2")
];

casasOkupadas.forEach(function(casa) {
    const etiqueta = casa.querySelector(".etOkupada");

    casa.addEventListener("mouseenter", function() {
        etiqueta.style.display = "block";
    });

    casa.addEventListener("mouseleave", function() {
        etiqueta.style.display = "none";
    });
});