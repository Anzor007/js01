/* ---------------------------------------------------------------------------- /**/
/* Задача 6                                                                     /**/
/* Модифицировать catFactory() на catFactory(defaults),                         /**/
/* где defaults - опциональный объект со значениями по умолчанию.               /**/
/* Например, вызов catFactory({gender: ‘M’}) вернет объект                      /**/
/* с произвольными значениями свойств,                                          /**/
/* за исключением gender (всегда будет равен ‘M’).                              /**/
/* В catsGroupGenerate добавить второй опциональный аргумент ‘defaults’.        /**/
/* ---------------------------------------------------------------------------- /**/

function catFactory(defaults)
{
    function pick(mass) {   return mass[Math.floor(Math.random() * mass.length)];   }
    
    var name = [     'Айсберг','Аскольд','Астерикс' ,'Аякс'     ,'Артур'    ,'Асклепий','Арес'    ,'Атос'    ,'Арамис'  ,'Август'  ,'Альбус'  ,'Алмаз'  ,
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
    var age = ['1','2','3','5','7','9','10','13'];
    var gender = ['Мужской','Женский','Непонятный'];
    var legsCount = ['4','3'];
    var tailLength  = ['1','3','5','7','9','11','13','15','25'];
    
    var CatFac = {}; /*создание котообъекта*/
  
    if (typeof defaults !== 'undefined')
    {
        CatFac.name = defaults.name || pick(name);
        CatFac.age = defaults.age || pick(age);
        CatFac.gender = defaults.gender || pick(gender);
        CatFac.legsCount = defaults.legsCount || pick(legsCount);
        CatFac.tailLength  = defaults.tailLength || pick(tailLength);
        
        
        //return CatFac;
    }
    else
    {
        CatFac.name = pick(name);
        CatFac.age = pick(age);
        CatFac.gender = pick(gender);
        CatFac.legsCount = pick(legsCount);
        CatFac.tailLength  = pick(tailLength);
    }
 return CatFac;
}

function catsGroupGenerate(n0,defaults)
{
    var arraCatFac = [];
    if (typeof defaults === 'undefined')
    {
        for (var i=0; i<n0; i++)    {   arraCatFac[i]=catFactory(); }
    }
    else
    {
        for (var i=0; i<n0; i++)    {   arraCatFac[i]=catFactory(defaults); }
    }
    return arraCatFac;
}



console.log("\n catFactory({gender:'ops', name:'упс', age:'ops'})");
console.log("\n ",catFactory({gender:'ops', name:'упс', age:'ops'}));
console.log("\n catFactory()");
console.log("\n ",catFactory());
var n=3;
console.log ("\nКотоГенератор на",n,"котикатов");
console.log ("\n  catsGroupGenerate(n)");
console.log ("\n ", catsGroupGenerate(n));
console.log ("\n  catsGroupGenerate(n, { age:'ops',legsCount:'ops'})");
console.log ("\n ", catsGroupGenerate(n, { age:'ops',legsCount:'ops'}));
