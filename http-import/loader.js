export async function load(url, context, nextLoad) {
	if (url.startsWith("https://") || url.startsWith("http://")) {
		const response = await fetch(url, { redirect: "follow" });
		const source = await response.text();

		return { source, format: "module", shortCircuit: true };
	}

	return await nextLoad(url, context);
}
