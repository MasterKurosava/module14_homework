console.log('<!-- Задание1 -->');
//Вывод собственных свойст объекта
let randomObj={
    ame:'Ruslan',
    age:12,
    location:'Kz'
};
let randomPrototype=Object.create(randomObj);
randomPrototype.job='developer';
randomPrototype.gender='male'
for(key in randomPrototype){
    if(randomPrototype.hasOwnProperty(key)){
        console.log(key);
    }
}