export default function compact(array: any[]) {
  return array.filter(item => {
    return Number(item) >= 1;
  });
}
