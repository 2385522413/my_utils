export function slice(arr, begin, end) {
  if (arr.length === 0) {
    return [];
  }
  begin = begin || 0;
  if (begin >= arr.length) {
    return [];
  }
  end = end || arr.length;
  if (end > arr.length) {
    end = arr.length;
  }
  if (end < begin) {
    return [];
  }
  const result = [];
  for (let i = begin; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}
