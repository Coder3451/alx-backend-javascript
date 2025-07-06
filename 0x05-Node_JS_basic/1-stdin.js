process.stdout.write("Welcome to ALX, what is your name?\n");

process.stdin.once('data', (data) => {
	const INPUT = data.toString().trim();
	console.log(`Your name is: ${INPUT}`);
	if (!process.stdin.isTTY) {
		console.log("This important software is now closing");
	}
	process.exit();
});
