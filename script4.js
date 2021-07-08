//ФУНКЦИЯ КОНСТРУКТОР
console.log('<!-- Задание4 -->');
function DeviceEz(electro,shop,product,cost,year,name){
    this.electro=electro;
    this.status=0;
    this.shop=shop;
    this.product=product;
    this.cost=cost;
    this.year=year;
    this.buyer=name;
}
DeviceEz.prototype.turnToogle=function(){
    if(this.electro){
        this.status=!this.status;
    }else{
        console.log('Прибор является не электронным');
    }
}
DeviceEz.prototype.check=function(){
    console.log(`===============================\n Продукт: ${this.product}\n Цена: ${this.cost}руб\n Год покупки: ${this.year}\n Покупатель: ${this.buyer}\n\n Состояние: ${this.status?'Включен':'Выключен'}\n Место покупки: ${this.shop}\n Электроприбор: ${this.electro?'Да':'Нет'}\n===============================`);
}

let phone=new DeviceEz([true,'Мобилка'],'Iphone 11',1200,2018,'Максим')
let gamingComputer=new DeviceEz([true,'Белый Ветер'],'Игровой компьютер',30000,2020,'Елена')
let chair=new DeviceEz([false,'Все для попки'],'Кресло',300,2010,'Михаил')
phone.check();
phone.turnToogle();
phone.check();
gamingComputer.check();
chair.check();
