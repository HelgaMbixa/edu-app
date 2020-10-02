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
    0: {name: "Виолетка", lastname: "Колевa", id:2},
    1: {name: "Виолетка", lastname: "Цоневa", id:4},
    2: {name: "Маргарита", lastname: "Горановa", id:9},
    3: {name: "Ангел", lastname: "Цонев", id:135},
    4: {name: "Маргарита", lastname: "Горановa", id:5},
    5: {name: "Веселин", lastname: "Аврамов", id:19},
    6: {name: "Веселин", lastname: "Генов", id:12},
    7: {name: "Стоян", lastname: "Начев", id:23},
    8: {name: "Виолетка", lastname: "Начевa", id:34},
    9: {name: "Гена", lastname: "Начевa", id:44},
    10: {name: "Симеон", lastname: "Стоянов", id:6}
}

export function getUser(userId){
    for (let i = 0; i < Object.keys(users).length; i++)
        if(users[i].id == userId)
            return users[i];
    return user;
}
export function getUsers(){
    return users;
}
