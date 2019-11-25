export default function concat(...args: any) {
  let array: any = [];
  for (let i = 0; i < args.length; i++) {
    array = array.concat(args[i]);
  }
  return array;
}
