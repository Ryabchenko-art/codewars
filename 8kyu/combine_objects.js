/* Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются вместе, так что значения соответствующих ключей суммируются.

Пример:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.*/

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const combined = combine(objA, objB);

function combine(...objects) {
    const result = {};

    objects.forEach(object => {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                // Если ключ уже существует в результате, суммируем значения
                if (result[key] !== undefined) {
                    result[key] += object[key];
                } else {
                    // Если ключа нет в результате, просто присваиваем значение
                    result[key] = object[key];
                }
            }
        }
    });

    return result;
}
console.log(combined);