export default function returnHowManyArguments(...args) {
  if (args.length < 1) {
    return 0;
  }
  return args.length;
}
