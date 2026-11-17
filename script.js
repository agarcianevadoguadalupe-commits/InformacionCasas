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
        "img/Stark.png"
    ),

    new Casa(
        "Targaryen",
        "Tierras de la Corona",
        "Dragón rojo de tres cabezas sobre fondo negro",
        "Fuego y sangre",
        ["Daenerys", "Viserys", "Aegon"],
        ["Antigua dinastía real", "Dragones"],
        "img/Targaryen.png"
    ),

    new Casa(
        "Baratheon",
        "Tierras de la Tormenta",
        "Ciervo negro coronado sobre fondo dorado",
        "Nuestra es la furia",
        ["Robert", "Stannis", "Renly"],
        ["Fuerza", "Orgullo", "Espíritu guerrero"],
        "img/Baratheon.png"
    ),

    new Casa(
        "Arryn",
        "El Valle de Arryn",
        "Halcón y luna blanca sobre fondo azul",
        "Tan alto como el honor",
        ["Jon", "Robin"],
        ["Fortaleza montañosa", "Honor", "Defensa"],
        "img/Arryn.png"
    ),

    new Casa(
        "Lannister",
        "Occidente",
        "León dorado sobre fondo carmesí",
        "¡Oye mi rugido!",
        ["Tywin", "Cersei", "Jaime", "Tyrion"],
        ["Riqueza", "Poder político", "Ambición"],
        "img/Lannister.png"
    ),

    new Casa(
        "Greyjoy",
        "Islas del Hierro",
        "Kraken dorado sobre fondo negro",
        "Nosotros no sembramos",
        ["Balon", "Theon", "Yara"],
        ["Navegación", "Independencia", "Tradición marinera"],
        "img/Greyjoy.png"
    ),

    new Casa(
        "Tully",
        "Tierras de los Ríos",
        "Trucha plateada sobre fondo azul y rojo",
        "Familia, deber, honor",
        ["Hoster", "Edmure", "Catelyn"],
        ["Lealtad familiar", "Alianzas políticas"],
        "img/Tully.png"
    ),

    new Casa(
        "Tyrell",
        "El Dominio",
        "Rosa dorada sobre fondo verde",
        "Crecer fuerte",
        ["Mace", "Margaery", "Olenna"],
        ["Riqueza agrícola", "Diplomacia", "Influencia"],
        "img/Tyrell.png"
    ),

    new Casa(
        "Bolton",
        "El Norte",
        "Hombre desollado sobre fondo rojo",
        "Nuestras hojas son afiladas",
        ["Roose", "Ramsay"],
        ["Crueldad", "Rivalidad con los Stark"],
        "img/Bolton.png"
    ),

    new Casa(
        "Martell",
        "Dorne",
        "Sol rojo atravesado por una lanza sobre fondo naranja",
        "Nunca doblegado, nunca roto",
        ["Doran", "Oberyn", "Trystane"],
        ["Independencia", "Orgullo", "Resistencia"],
        "img/Martell.png"
    )
];