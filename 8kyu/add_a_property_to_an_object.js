/*Напишите функцию, которая добавляет именованное свойство к объекту.
 Должна быть возможность задать свойству новое значение.
 Если свойство уже существует в объекте, должна быть выдана ошибка.*/

function addProperty(obj, prop, value) {
    // Проверяем, существует ли свойство в объекте
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Property "${prop}" already exists in the object.`);
    } else {
        // Если свойство не существует, добавляем его с новым значением
        obj[prop] = value;
    }
}
/*
* function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) throw "Error: Property already present";

  obj[prop] = value;
}
*/