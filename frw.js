const getName = async ()=> { 
    let peticion = await fetch("information.txt"); /* Here you replace your API url, if you want to add parameters, add ",{}" after it. */
    let resultado = await peticion.json();
    let HTMLCode = `<div class="resultOutput">
                        • Name: ${resultado.Nombre} <br>
                        • Surname: ${resultado.Apellido}   
                    </div>`
    console.log(resultado)
    document.querySelector(".result").innerHTML = HTMLCode
}

document.getElementById("button").addEventListener("click",getName);