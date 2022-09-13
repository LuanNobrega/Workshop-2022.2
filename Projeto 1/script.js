let dados = [];

const elementoH1 = document.querySelector("h1");
const btn = document.querySelector('.btn-azul'); //Selecionar o botão 
elementoH1.innerText = `${dados.length} monstros`; //Mostrar o número de monstros.

/*fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    dados = json.slice(0, 5);
    elementoH1.innerText = `${dados.length} monstros`;

    for(let objeto of dados){ //Loop para criar a lista de monstros.
        const elemtoArticle = document.createElement("Article");
        elemtoArticle.classList.add('monstros');
    
        elemtoArticle.innerHTML =`
            <article class= "monstros">
                <img src= "https://robohash.org/${objeto.id}?set=set2" alt="${objeto.name}">
                <div>
                    <h2>${objeto.name}</h2>
                    <p>${objeto.email}</p>
                </div>
            </article>`; 
    
        elementoH1.insertAdjacentElement("afterend", elemtoArticle); //Colocar o elemento após o h1.
    }
  });*/

btn.addEventListener("click", () => { //Criou uma função anônima
let articles = document.querySelectorAll('article');

for(let i = 0; i < articles.length; i++){ //loop para andar em toda a lista.
    articles[i].remove();
}

dados = [] //Zerar a lista. 
elementoH1.innerText = `${dados.length} monstros`; //Mostrar o número de monstros.

})

async function renderizar() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const dadosJSON = await response.json();
  
    dados = dadosJSON.slice(0, 5);
    elementoH1.innerText = `${dados.length} monstros`;
  
    for (let objeto of dados) {
      const elemtArticle = document.createElement("article");
      elemtArticle.classList.add("monstros");
  
      elemtArticle.innerHTML = `
        <img src="https://robohash.org/${objeto.id}?set=set2" alt="${objeto.name}" />
          <div>
            <h2>${objeto.name}</h2>
            <p>${objeto.email}</p>
          </div>
        `;
  
      elementoH1.insertAdjacentElement("afterend", elemtArticle);
    }
}

// const renderizar = async () => {

// }

renderizar();

console.log("primeiro");





  



   
