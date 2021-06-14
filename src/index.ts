import quotes from "./quotes.json";

const taow = () =>
	(quotes as string[])[Math.floor(Math.random() * quotes.length)];

export default taow;
