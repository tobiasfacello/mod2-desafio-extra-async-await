import { ProductCollection } from "./models";

class ProductController {
	products: ProductCollection;
	constructor() {
		this.products = new ProductCollection();
	}

	processOptions(option) {
		if (option.search) {
			return this.products.getById(option.search);
		} else {
			return this.products.getAll();
		}
	}
}

export { ProductController };
