/* ---------------------------------------------------------------------------- /**/
/* Задача 2                                                                     /**/
/* Написать котогенератор function catFactory(), которая возвращает объект      /**/
/* со свойствами: name , age , gender , legsCount , tailLength                  /**/
/* Значения - произвольные из набора, который вы сами зададите.                 /**/
/* Используйте функцию pick из предыдущего задания                              /**/
/* ---------------------------------------------------------------------------- /**/
function catFactory()
{
    function pick(mass)
    {
        return mass[Math.floor(Math.random() * mass.length)];
    }

    var CatFac = {}; /*создание котообъекта*/
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
    
    CatFac.name = pick(mass_name);
    CatFac.age = pick(mass_age);
    CatFac.gender = pick(mass_gender);
    CatFac.legsCount = pick(mass_legsCount);
    CatFac.tailLength  = pick(mass_tailLength);

    return CatFac;
}
console.log (" ");
console.log (" Котогенератор ");
console.log (" ", catFactory());
console.log (" ");