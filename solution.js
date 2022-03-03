// You must RETURN your result in each function!

function printNums(nums) {
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
  let newArray = []
  nums.forEach(element => newArray.push(element))
  return newArray
}

// let sampleArr = [1,2,3,4,5]
//console.log(printNums(sampleArr))

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
  let newArray = []
  nums.forEach((value, index) => newArray.push(value + index))
  return newArray
}

//console.log(returnSums(sampleArr))

function returnTotal(objs) {
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
  let sum = 0
  objs.forEach(element => sum += element.n)
  return sum
}

// let nums = [{ n: 1 }, { n: 2 }, { n: 7 }]
// console.log(returnTotal(nums))

function printMoney(decimals) {
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
  let newArr = []
  decimals.map(value => {
    newArr.push('$'+value.toFixed(2))
  })
  return newArr
}

// let dollars = [13.99, 99.99, 32.99, 40.0]
// console.log(printMoney(dollars))

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
  return values.filter(items => {return items.happy == true})
}

// const items = [
//   { name: 'Joe', happy: false },
//   { name: 'Beth', happy: true },
//   { name: 'Ruth', happy: true },
//   { name: 'Bob', happy: false },
//   { name: 'Kev', happy: false },
//   { name: 'Becky', happy: true }
// ]

// console.log(returnAllTrueValues(items))

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
  return nums.reduce((sum, numsVal) => {return sum + (numsVal+2)},0)
}

// let nums = [1, 2, 3, 4]
// console.log(addTwo(nums))

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  return strings.reduce((newStr, stringsChar) => {return newStr+stringsChar},"")
}

// const strings = ['h', 'e', 'l', 'l', 'o']
// console.log(joinStrings(strings))

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  return objs.sort((firstValue, nextValue) => {return firstValue.value - nextValue.value})
}

// const items1 = [
//   { value: 23 },
//   { value: 3 },
//   { value: 54 },
//   { value: 22 },
//   { value: 100 }
// ]

// console.log(sortObjectsByValue(items1))

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
