/* ---------------------------------------------------------------------------- /**/
/* Задача 3                                                                     /**/
/* Написать function catsGroupGenerate(n),                                      /**/
/* которая возвращает массив объектов, полученных из котогенератора, длиной n.  /**/
/* ---------------------------------------------------------------------------- /**/
var catfact = require('./02catfactory.js');
/*
function catFactory()
{
    function pick(mass)
    {
        return mass[Math.floor(Math.random() * mass.length)];
    }

    var catFac = {}; 
    var mass_name = ['Айсберг','Аскольд','Астерикс' ,'Аякс'     ,'Артур'    ,'Асклепий','Арес'    ,'Атос'    ,'Арамис'  ,'Август'  ,'Альбус'  ,'Алмаз'  ,
                     'Васаби' ,'Винсент','Валдис'   ,'Вирус'    ,'Ватсон'   ,'Висмут'  ,'Вермут'  ,'Витас'   ,'Витязь'  ,'Влас'    ,'Василек' ,'Вольтер',
                     'Густав' ,'Гелиос' ,'Гефест'   ,'Гусар'    ,'Гизмо'    ,'Гусляр'  ,'Гораций' ,'Ганс'    ,'Грызя'   ,'Гиннесс' ,'Гуффи'   ,'Голиаф' ,
                     'Джакс'  ,'Декстер','Диксон'   ,'Деймос'   ,'Даллас'   ,'Декарт'  ,'Джерри'  ,'Джексон' ,'Джедай'  ,'Дениска' ,'Джойстик','Дорофей',
                     'Есаул'  ,'Есенин' ,'Евсей'    ,'Енисей'   ,'Елисей'   ,'Ерофей'  ,'Ёжик'    ,'Евстахий','Елизар'  ,'Евфрат'  ,'Евклид'  ,'Енох'   ,
                     'Жозеф'  ,'Жустьен','Жгутик'   ,'Живчик'   ,'Жулик'    ,'Жусик'   ,'Жорик'   ,'Жужик'   ,'Жако'    ,'Жофрей'  ,'Жорж'    ,'Жикар'  ,
                     'Зевс'   ,'Зодиак' ,'Звездочет','Зигмунд'  ,'Задира'   ,'Забияка' ,'Завулон' ,'Зенит'   ,'Зефир'   ,'Зорро'   ,'Зидан'   ,'Захар'  ,
                     'Баксик' ,'Бакстер','Брюс'     ,'Базальт'  ,'Базилио'  ,'Базилик' ,'Боско'   ,'Бостон'  ,'Батон'   ,'Бисквит' ,'Бисер'   ,'Боцман' ,
                     'Изюмчик','Иртыш'  ,'Иствуд'   ,'Изумруд'  ,'Иосиф'    ,'Искандер','Ипполит' ,'Икар'    ,'Ивасик'  ,'Ивашка'  ,'Йогурт'  ,'Йосик'  ,
                     'Кекс'   ,'Кузьма' ,'Круассан' ,'Карабас'  ,'Космос'   ,'Конфуций','Кёртис'  ,'Коржик'  ,'Косинус' ,'Колбасыч','Каспер'  ,'Кастор' ,
                     'Ластик' ,'Лизун'  ,'Лютик'    ,'Лоскутик' ,'Люциус'   ,'Лакмус'  ,'Ляпис'   ,'Люсьен'  ,'Ланселот','Лунатик' ,'Лоуренс' ,'Лисенок',
                     'Мэйсон' ,'Маркиз' ,'Мультик'  ,'Матроскин','Марсианин','Мушкетер','Максимус','Моцарт'  ,'Муфаса'  ,'Мяут'    ,'Морсик'  ,'Маркус'  ];
    var mass_age = ['1','2','3','5','7','9','10','13'];
    var mass_gender = ['Мужской','Женский','Непонятный'];
    var mass_legsCount = ['4','3'];
    var mass_tailLength  = ['1','3','5','7','9','11','13','15','25'];
    
    catFac.name = pick(mass_name);
    catFac.age = pick(mass_age);
    catFac.gender = pick(mass_gender);
    catFac.legsCount = pick(mass_legsCount);
    catFac.tailLength  = pick(mass_tailLength);

    return catFac;
}
*/
function catsGroupGenerate(n0)
{
    var arraCatFac = [];

    for (var i=0; i<n0; i++)
    {
        //arraCatFac[i]=catFactory();
        arraCatFac[i]=catfact();
    }
    return arraCatFac;
}

var n=5;
//console.log(" ugu\n",catsGroupGenerate(n));
//catsGroupGenerate(n);


module.exports = catsGroupGenerate;