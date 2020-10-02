/* типа user из БД*/
const user = {
    name: "Иван",
    lastname: "Иванов",
    email:"ivanov@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе...",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHIF1PwskQQHDMtUX-ArHATLfxGxeGxOwFDw&usqp=CAU"
}
const users = {
    0: {name: "Виолетка", lastname: "Колевa"},
    1: {name: "Виолетка", lastname: "Цоневa"},
    2: {name: "Маргарита", lastname: "Горановa"},
    3: {name: "Ангел", lastname: "Цонев"},
    4: {name: "Маргарита", lastname: "Горановa"},
    5: {name: "Веселин", lastname: "Аврамов"},
    6: {name: "Веселин", lastname: "Генов"},
    7: {name: "Стоян", lastname: "Начев"},
    8: {name: "Виолетка", lastname: "Начевa"},
    9: {name: "Гена", lastname: "Начевa"},
    10: {name: "Симеон", lastname: "Стоянов"}
}

export function getUser(){
    return user;
}
export function getUsers(){
    return users;
}
