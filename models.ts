import { readFile } from "fs/promises";

class Product {
	id: number;
	name: string;
}

class ProductCollection {
	products: Product[];

	async getAll() {
		const jsonBuffer = await readFile("./products.json");
		const jsonString = jsonBuffer.toString();
		const jsonParseado = JSON.parse(jsonString);
		return jsonParseado;
	}

	async getById(id: number) {
		this.products = await this.getAll();
		const prodABuscar = this.products.find((prod) => prod.id == id);
		return prodABuscar;
	}
}

export { ProductCollection };
