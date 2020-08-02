//01
/**
 * Crear un input de tipo checkbox.
 * Escribir una funcion "toggleChecked" que 
 * cambie el estado de clickeado a sin 
 * clickear o viceversa.
 */

function toggleChecked() {
    document.querySelector("#checkbox").click();
}

 // 02
 /**
  * Dado el siguiente HTML
  */
// <input type="text" id="miInput" name="miInput"></input>
/**
 * cambiar el atributo name a miExInput
 */

const input = document.querySelector("#miInput");
input.setAttribute("name", "miExInput");

 // 03
 /**
  * Escribir un HTML con un div.
  * Luego, por ID, modificar el contenido del DIV
  * agregando una lista de 5 elementos.
  * Una vez agregada la lista, agregar 
  * programaticamente un numero a cada elemento
  * 
  * por ejemplo, si son 5 elementos deberia verse:
  * 1
  * 2
  * 3
  * 4
  * 5
  */

const createList = () => {
    const div = document.querySelector("#div");
    const newUl = document.createElement("ul");  
    div.appendChild(newUl); 
    
    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");  
        newUl.appendChild(newLi);
    }
}

createList();


const assignText = () => {
    const lis = document.querySelectorAll("li");
    
    let i = 1;

    lis.forEach(li => {
        li.innerText = i;
        i++;
    })
}

assignText();


  //04
  /**
   * Escribir una funcion que se llame changeTitle.
   * Para esto deberemos tener dos elementos,
   * un input, y un h1. 
   * Debemos tomar el valor del input y ponerlo como 
   * el title. Si ya existe texto, reemplazarlo.
   */

const changeTitle = () => {
    let inputValue = document.querySelector("#text").value;
    document.querySelector("h1").innerText = inputValue;

}