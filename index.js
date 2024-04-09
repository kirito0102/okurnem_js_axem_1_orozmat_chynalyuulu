
const arr = [1, 2, 3, 4, 5];


const index3 = arr.indexOf(3);
console.log("Индекс элемента со значением 3:", index3);


const isArray = Array.isArray(arr);
console.log("Является ли переменная массивом:", isArray);


const joinedString = arr.join(",");
console.log("Элементы массива через запятую:", joinedString);


const keysIterator = arr.keys();
console.log("Итератор индексов массива:", Array.from(keysIterator));


const lastIndex4 = arr.lastIndexOf(4);
console.log("Индекс последнего элемента со значением 4:", lastIndex4);


const newArr = Array.of(6, 7, 8);
console.log("Новый массив с заданными элементами:", newArr);


const product = arr.reduceRight((accumulator, currentValue) => accumulator * currentValue);
console.log("Произведение всех элементов массива справа налево:", product);


const shiftedElement = arr.shift();
console.log("Удаленный первый элемент из массива:", shiftedElement);


const reversedArr = arr.slice().reverse();
console.log("Обратный массив:", reversedArr);


const sortedArr = arr.slice().sort();
console.log("Отсортированный массив:", sortedArr);


const splicedArr = arr.slice(2);
console.log("Массив с удаленными первыми двумя элементами:", splicedArr)

