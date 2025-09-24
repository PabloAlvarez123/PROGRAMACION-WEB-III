//Con promesas encadenadas
function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: 1, nombre: "Ana" });
    }, 1000);
  });
}

function obtenerPedidos(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pedidos obtenidos");
      resolve(["pedido1", "pedido2"]);
    }, 1000);
  });
}

function obtenerDetallePedido(pedidoId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Detalle del pedido obtenido");
      resolve({ id: pedidoId, producto: "Laptop" });
    }, 1000);
  });
}

// Encadenamiento de promesas
/*
obtenerUsuario()
  .then((usuario) => {
    return obtenerPedidos(usuario.id);
  })
  .then((pedidos) => {
    return obtenerDetallePedido(pedidos[0]);
  })
  .then((detalle) => {
    console.log("Resultado final:", detalle);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
*/
//Ahora reescribimos usando async/await y el flujo se entiende como si fuera código síncrono:

async function main() {
  try {
    const usuario = await obtenerUsuario();
    const pedidos = await obtenerPedidos(usuario.id);
    const detalle = await obtenerDetallePedido(pedidos[0]);

    console.log("🎯 Resultado final:", detalle);
  } catch (error) {
    console.error("❌ Ocurrió un error:", error);
  }
}

main();
