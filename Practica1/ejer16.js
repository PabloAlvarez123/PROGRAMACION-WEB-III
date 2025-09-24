function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, nombre: "Ana" }), 1000);
  });
}

function obtenerPedidos(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["pedido1", "pedido2"]), 1000);
  });
}

function obtenerDetallePedido(pedidoId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: pedidoId, producto: "Laptop" }), 1000);
  });
}

obtenerUsuario()
  .then(usuario => {
    return obtenerPedidos(usuario.id);
  })
  .then(pedidos => {
    return obtenerDetallePedido(pedidos[0]);
  })
  .then(detalle => {
    console.log("Resultado final:", detalle);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });
