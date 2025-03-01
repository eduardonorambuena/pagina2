document.addEventListener('DOMContentLoaded', () => {
    // Puedes agregar scripts para mejorar la funcionalidad de tu página
    console.log("Página cargada correctamente");

    // Ejemplo de función para validar el formulario antes de enviarlo
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const nombre = document.querySelector("input[name='nombre']").value;
        const email = document.querySelector("input[name='email']").value;
        if (!nombre || !email) {
            alert("Por favor, complete todos los campos.");
            event.preventDefault();
        }
    });
});
