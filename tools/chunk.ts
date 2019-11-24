export default function chunk(array: any[], len: number) {
  const arrayLen = array.length;
  
  if (len <= 0) {
    return new Error("长度大于0");;
  }

  if (arrayLen <= len) {
    return array;
  }

  const multiple = Math.floor(arrayLen / len);
  let   newAaary = [];
  for (let i = 0; i < multiple; i++) {
    newAaary.push(array.slice(i * len, i * len + len));
  }
  multiple * len === arrayLen ? "": newAaary.push(array.slice(multiple * len));
  
  return newAaary;
}
