
const expiryDateFormat = (str: string): string => str && str.replace(
    /[^0-9]/g, '' // To allow only numbers
  ).replace(
    /^([2-9])$/g, '0$1' // 3 > 03
  ).replace(
    /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
  ).replace(
    /^0{1,}/g, '0' // 00 > 0
  ).replace(
    /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // 113 > 11/3
  )

export { expiryDateFormat }
