// 1) Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
// обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//    a) Метод, який виводить на екран інформацію про автомобіль.
//    b) Додавання ім’я водія у список
//    c) Перевірка водія на наявність його ім’я у списку
//    d) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
//       Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

// const myCar = {
//     name: 'Ford',
//     model: 'Fusion',
//     year: 2013,
//     speed: 120,
//     patrolVol: 62,
//     patrol: 13,
//     carInfo: function () {
//         console.log(this);
//     },
//     addName: function () {
//         if(!this.name) {
//             this.name = prompt('Name?');
//         }
//
//         this.carInfo();
//     },
//     carData: function () {
//         let dist = prompt('Distance?');
//         let time = dist / this.speed;
//         let currentPatrol = (this.patrol / 100)* dist;
//         let currentTime = () => {
//             if (time >= 4) {
//
//             }
//         }
//         console.log(currentPatrol);
//     }
// }
//
// myCar.carData();



// 2) Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//     a) Для виведення часу на екран.
const date = new Date();
console.log(date);

//     b) Зміни часу на передану кількість секунд.
let newTime = prompt('Скільки додати секунд?');
function addSeconds(numOfSeconds, date = new Date()) {
    date.setSeconds(date.getSeconds() + numOfSeconds);

    return date;
}

const result = addSeconds(180);
console.log(addSeconds(180, date));
