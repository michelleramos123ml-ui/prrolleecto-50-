/* ==================================================
   MIMI'S - JAVASCRIPT PRINCIPAL
   Proyecto académico de desarrollo web
   ================================================== */


/* -----------------------------------------------
   EJEMPLO DE FUNCIÓN
   ----------------------------------------------- */

function mostrarMensaje() {

    alert("Bienvenido a MIMI'S. Gracias por visitar nuestra tienda.");

}


/* -----------------------------------------------
   EJEMPLO DE DATOS
   ----------------------------------------------- */

function mostrarProducto() {

    const producto = {

        nombre: "MIMI'S Classic",

        precio: 35,

        categoria: "Calzado",

        disponible: true

    };


    const contenedor =
        document.getElementById("productoJSON");


    if (contenedor) {

        contenedor.innerHTML = `

            <div class="producto-datos">

                <h3>${producto.nombre}</h3>

                <p>
                    <strong>Precio:</strong>
                    $${producto.precio.toFixed(2)}
                </p>

                <p>
                    <strong>Categoría:</strong>
                    ${producto.categoria}
                </p>

                <p>
                    <strong>Disponibilidad:</strong>
                    ${producto.disponible ? "Disponible" : "Agotado"}
                </p>

            </div>

        `;

    }

}


/* -----------------------------------------------
   CUESTIONARIO
   ----------------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {


    const formulario =
        document.getElementById("cuestionario");


    if (!formulario) {

        return;

    }


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        let puntuacion = 0;

        let preguntasRespondidas = 0;


        for (let i = 1; i <= 10; i++) {


            const respuesta =
                document.querySelector(
                    `input[name="p${i}"]:checked`
                );


            if (respuesta) {

                preguntasRespondidas++;


                if (respuesta.value === "correcta") {

                    puntuacion++;

                }

            }

        }


        const resultado =
            document.getElementById("resultado");


        if (preguntasRespondidas < 10) {

            resultado.innerHTML = `
                <h3>Cuestionario incompleto</h3>

                <p>
                    Debes responder las 10 preguntas
                    antes de calcular el resultado.
                </p>
            `;

            resultado.className = "resultado aviso";

            return;

        }


        let mensaje = "";


        if (puntuacion === 10) {

            mensaje =
                "Excelente. Has respondido correctamente todas las preguntas.";

        }

        else if (puntuacion >= 8) {

            mensaje =
                "Muy buen resultado. Tienes un buen dominio de los temas.";

        }

        else if (puntuacion >= 6) {

            mensaje =
                "Buen trabajo. Puedes repasar algunos conceptos.";

        }

        else {

            mensaje =
                "Te recomendamos revisar nuevamente las páginas informativas.";

        }


        resultado.innerHTML = `

            <h3>Resultado final</h3>

            <p>
                Obtuviste
                <strong>${puntuacion} de 10</strong>
                respuestas correctas.
            </p>

            <p>${mensaje}</p>

        `;


        resultado.className = "resultado";


        resultado.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});