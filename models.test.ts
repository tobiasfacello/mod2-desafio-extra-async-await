import test from "ava";
import { ProductCollection } from "./models";

test("Prueba el método getAll()", async (t) => {
	const instPrueba = new ProductCollection();
	const productos = [
		{ id: 1, name: "Producto 1" },
		{ id: 2, name: "Producto 2" },
		{ id: 3, name: "Producto 3" },
		{ id: 4, name: "Producto 4" },
		{ id: 5, name: "Producto 5" },
	];
	t.deepEqual(await instPrueba.getAll(), productos);
});

test("Prueba el método getById()", async (t) => {
	const instPrueba = new ProductCollection();
	const prodABuscar = { id: 3, name: "Producto 3" };
	t.deepEqual(await instPrueba.getById(3), prodABuscar);
});
