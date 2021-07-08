console.log('<!-- Задание2 -->');
//Проверка на свойство
function checkIn(str,obj){
 return str in obj;
};
let person={
    name:'Ruslan',
    age:12,
    location:'Kz'
}
console.log(checkIn('name',person));
console.log(checkIn('surname',person));