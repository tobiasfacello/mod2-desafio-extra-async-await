import minimist from "minimist";
import { ProductController } from "./controller";

function parsearArgs(argv) {
	const argsParseados = minimist(argv);
	if (argsParseados.search) {
		return { search: argsParseados.search };
	} else {
		return {};
	}
}

async function main() {
	const controller = new ProductController();
	const params = process.argv.slice(2);
	const result = parsearArgs(params);
	const res = await controller.processOptions(result);
	console.log(res);
}

main();
