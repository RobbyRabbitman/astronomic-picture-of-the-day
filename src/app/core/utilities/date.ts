export function formatDateToYYYYMMDD(date: Date, delimiter: string = '-') {
  let day: number = date.getDate();
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();
  return `${year}${delimiter}${month < 10 ? '0' : ''}${month}${delimiter}${
    day < 10 ? '0' : ''
  }${day}`;
}
