// Displays a message with a newline at the

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
