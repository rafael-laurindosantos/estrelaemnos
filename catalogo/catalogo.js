const container = document.getElementById("form-catalogo");

const cardsListagem = [
    { id: 1, texto: "Peça 1 - R$300,00", imagem: "../img/peca1.jpg" },
    { id: 2, texto: "Peça 2 - R$200,00", imagem: "../img/peca2.jpg" },
    { id: 3, texto: "Peça 3 - R$150,00", imagem: "../img/peca3.jpg" },
    { id: 4, texto: "Peça 4 - R$180,00", imagem: "../img/peca4.jpg" },
    { id: 5, texto: "Peça 5 - R$300,00", imagem: "../img/peca1.jpg" },
    { id: 6, texto: "Peça 6 - R$200,00", imagem: "../img/peca2.jpg" },
    { id: 7, texto: "Peça 7 - R$150,00", imagem: "../img/peca3.jpg" },
    { id: 8, texto: "Peça 8 - R$180,00", imagem: "../img/peca4.jpg" },
    { id: 9, texto: "Peça 9 - R$150,00", imagem: "../img/peca3.jpg" },
    { id: 10, texto: "Peça 10 - R$180,00", imagem: "../img/peca4.jpg" }
];

cardsListagem.forEach((card) => {
    const cardHTML = `
        <div class="cards_catalogo" onclick="verDetalhes(${card.id})">
            <img class="img-catalogo" src="${card.imagem}" alt="${card.texto}">
            <p class="texto_card">${card.texto}</p>
            <button>Comprar</button>
        </div>
    `;

    container.innerHTML += cardHTML;
});

function verDetalhes(id) {
    localStorage.setItem("cardSelecionadoId", id);
    window.location.href = "#";
}