let dados = [];

const elementoH1 = document.querySelector("h1");
const btn = document.querySelector('.btn-azul'); //Selecionar o botão 
elementoH1.innerText = `${dados.length} monstros`; //Mostrar o número de monstros.

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    dados = json;
    console.log(json);

    for(let objeto of dados){ //Loop para criar a lista de monstros.
        const elemtoArticle = document.createElement("Article");
        elemtoArticle.classList.add('monstros');
    
        elemtoArticle.innerHTML =`
            <article class= "monstros">
                <img src= "${objeto.image}" alt="${objeto.name}">
                <div>
                    <h2>${objeto.name}</h2>
                    <p>${objeto.email}</p>
                </div>
            </article>`; 
    
        elementoH1.insertAdjacentElement("afterend", elemtoArticle); //Colocar o elemento após o h1.
    }
  });

  btn.addEventListener("click", () => { //Criou uma função anônima
    let articles = document.querySelectorAll('article');
    
    for(let i = 0; i < articles.length; i++){ //loop para andar em toda a lista.
        articles[i].remove();
    }

    dados = [] //Zerar a lista. 
    elementoH1.innerText = `${dados.length} monstros`; //Mostrar o número de monstros.

})





  



   
