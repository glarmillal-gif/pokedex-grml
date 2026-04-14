let currentId = 1;

const typeColors = {
    fire: "#f97316",
    water: "#3b82f6",
    grass: "#22c55e",
    electric: "#facc15",
    psychic: "#a855f7",
    ice: "#67e8f9",
    dragon: "#7c3aed",
    dark: "#374151",
    fairy: "#f472b6",
    normal: "#a3a3a3"
};

async function getPokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        currentId = data.id;

        document.getElementById("name").innerText =
            `#${data.id} ${data.name.toUpperCase()}`;

        document.getElementById("sprite").src =
            data.sprites.front_default;

        const type = data.types[0].type.name;

        document.getElementById("type").innerText = "Tipo: " + type;

        document.getElementById("card").style.background =
            typeColors[type] || "#334155";

        document.getElementById("hp").innerText =
            "HP: " + data.stats[0].base_stat;

        document.getElementById("attack").innerText =
            "Ataque: " + data.stats[1].base_stat;

        document.getElementById("defense").innerText =
            "Defensa: " + data.stats[2].base_stat;

    } catch {
        alert("No encontrado");
    }
}

function searchPokemon() {
    const value = document.getElementById("search").value.toLowerCase();
    getPokemon(value);
}

function nextPokemon() {
    currentId++;
    getPokemon(currentId);
}

function prevPokemon() {
    if (currentId > 1) {
        currentId--;
        getPokemon(currentId);
    }
}

// Cargar el primero
getPokemon(currentId);