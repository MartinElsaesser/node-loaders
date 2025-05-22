import fs from "node:fs/promises";

const overwrites = JSON.parse(await fs.readFile("overwrites.json", "utf-8"));

export async function resolve(specifier, context, nextResolve) {
	if (specifier in overwrites) {
		return await nextResolve(overwrites[specifier], context);
	}

	return await nextResolve(specifier, context);
}
