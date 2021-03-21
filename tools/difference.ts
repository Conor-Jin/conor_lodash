export default function difference(array1: any[], array2: any[]) {
  return array1.filter(item => {
    return array2.indexOf(item) == -1;
  });
}