//Si usamos callbacks, se ve así:
function obtenerUsuario(callback) {
  setTimeout(() => {
    console.log("Usuario obtenido");
    callback({ id: 1, nombre: "Ana" });
  });
}

function obtenerPedidos(usuarioId, callback) {
  setTimeout(() => {
    console.log("Pedidos obtenidos");
    callback(["pedido1", "pedido2"]);
  });
}

function obtenerDetallePedido(pedidoId, callback) {
  setTimeout(() => {
    console.log("Detalle del pedido obtenido");
    callback({ id: pedidoId, producto: "Laptop" });
  });
}

obtenerUsuario((usuario) => {
  obtenerPedidos(usuario.id, (pedidos) => {
    obtenerDetallePedido(pedidos[0], (detalle) => {
      console.log("Resultado final:", detalle);
    });
  });
});

//Si convertimos esas funciones para que devuelvan promesas, podemos usar async/await:

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

// Código más limpio con async/await
async function main() {
  const usuario = await obtenerUsuario();
  const pedidos = await obtenerPedidos(usuario.id);
  const detalle = await obtenerDetallePedido(pedidos[0]);

  console.log("Resultado final:", detalle);
}

main();
