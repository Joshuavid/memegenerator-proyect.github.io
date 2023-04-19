//Estas variables son para el form y generacion de los memes.
const form = document.querySelector("#meme-form");
const memeContainer = document.querySelector("#meme-container");

//Estas variables son para los colores random de h1 y el color de el body.
// const h1 = document.querySelector('h1');
const letters = document.querySelectorAll('.letter');

//Funcion de h1 colores randum:
function randomRGB () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//Le pondremos un interbalo de medio segundo para que cambia a un color randum.
setInterval(function() {
    for (let letter of letters) {
        //h1 random color.
        letter.style.color = randomRGB ();
        //form backgroundcolor random.
        form.style.backgroundColor = randomRGB();
    } 
}, 1000); // 1 sequend transition.

//Cuando movamos el mause el body de la pajina cambiara de color.
document.addEventListener('mousemove', function(e) {
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    // const g = Math.round(e.pageY * 255 / window.innerHeight);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    const color = `rgb(${r}, 0, ${b})`;

    document.body.style.backgroundColor = color;
    // console.log(color);
})


//Empesaremos poniendo un event en el form que es donde se ara la mecanica.
form.addEventListener("submit", function(event) {
    //prevent ara que no se abra otra pajina cada que ponfamos submit
  event.preventDefault();
  
  //Tomaremos los botones que tenemos en html por su ID sus VALORES
  const topText = document.querySelector("#top-text").value;
  const bottomText = document.querySelector("#bottom-text").value;
  const imageUrl = document.querySelector("#image-url").value;
  
  //Verificamos que los tres botones tengan un valor si no lo tienen mandara un alert diciendo que llenes los cuadros basios.
  if (!topText || !bottomText || !imageUrl) {
    alert("Please fill in all fields.");
    return;
  }
  
  //Generaremos un div dentro de el meme-container y le anadiremos como atributo una clase llamada meme".
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");
  
  //Dentro de memeDiv generaremos un elemento tipo img, y le pondremos como atributo un src = "" como valor esta bien ponerle el "imageUrl"
  const memeImage = document.createElement("img");
  memeImage.src = imageUrl;
  memeDiv.appendChild(memeImage);
  
  //Dentro de memeDiv generaremos otro div, le anadiremos como atributo class = "top-text"
  const topTextDiv = document.createElement("div");
  topTextDiv.classList.add("top-text");
  //Y dentro de inner text que es el texto que se mostrara tendra valor de el boton topText.
  topTextDiv.innerText = topText;
  memeDiv.appendChild(topTextDiv);
  
  //Aqui es lo mismo otro div que tendra el valor de el boton buttonText
  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("bottom-text");
  bottomTextDiv.innerText = bottomText;
  memeDiv.appendChild(bottomTextDiv);
  
  //Y con esta generaremos un boton que kle anadiremos como atributo la clase delete-button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  //En inner text mostrara en pantalla una X
  deleteButton.innerText = "X";
  //Y al hacer clik quitaremos el meme div que emos generado por completo.
  deleteButton.addEventListener("click", function() {
    memeContainer.removeChild(memeDiv);
  });

  //le ponemos el boton x como hijo al div memeDiv
  memeDiv.appendChild(deleteButton);
  //Y pondremos a su ves a memeDiv como hijo en memeContainer
  memeContainer.appendChild(memeDiv);
  
  //Reiniciamos el form para pode poner mas memes.
  form.reset();
});
