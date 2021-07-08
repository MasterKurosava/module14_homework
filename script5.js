//РАБОТА С КЛАССАМИ
console.log('<!-- Задание5 -->');
class Device{
    constructor([electro,shop]){
        this.electro=electro;
        this.status=0;
        this.shop=shop;
    }
    turnToogle(){
        if(this.electro){
            this.status=!this.status;
        }else{
            console.log('Прибор является не электронным');
        }
    }
}
class typeOfDevice extends Device{
    constructor(info,product,cost,year,name){
        super(info)
        this.product=product;
        this.cost=cost;
        this.year=year;
        this.buyer=name;
    }
    check(){
        console.log(`===============================\n Продукт: ${this.product}\n Цена: ${this.cost}руб\n Год покупки: ${this.year}\n Покупатель: ${this.buyer}\n\n Состояние: ${this.status?'Включен':'Выключен'}\n Место покупки: ${this.shop}\n Электроприбор: ${this.electro?'Да':'Нет'}\n===============================`);
    }
}
let lamp=new typeOfDevice([true,'Белый Ветер'],'SoLight',1200,2018,'Максим')
let computer=new typeOfDevice([true,'Белый Ветер'],'Игровой компьютер',30000,2020,'Елена')
let stool=new typeOfDevice([false,'Деревяшка'],'Табуретка',300,2010,'Михаил')
lamp.check();
lamp.turnToogle();
lamp.check();
computer.check();
stool.check();
