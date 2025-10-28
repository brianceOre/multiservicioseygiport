document.addEventListener("DOMContentLoaded", () => {
  
  const botonesComprar = document.querySelectorAll(".cajon-venta button");

  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
      
      const producto = boton.closest(".cajon-venta");
      const nombre = producto.querySelector("h2").textContent.trim();
      const precio = producto.querySelector("b").textContent.replace("S/", "").trim();

      // Mostrar confirmación
      alert(`🛒 Has agregado "${nombre}" al carrito.\nPrecio: S/ ${precio}`);

      
      const telefono = "950883543"; // Número de destino
      const mensaje = encodeURIComponent(`Hola 👋, quiero comprar el producto "${nombre}" por S/ ${precio}.`);
      const enlace = `https://wa.me/${telefono}?text=${mensaje}`;
      
      
      window.open(enlace, "_blank");
    });
  });
});
