//* ---------------------------------------------------------------------------- /**/
//* Задача 5                                                                     /**/
//* const list = catsGroupGenerate(999)                                          /**/
//* Написать function nameStats(list),                                           /**/
//* которая считает распределение объектов по именам, напр:                      /**/
//* {                                                                            /**/
//* Vasily: 5,                                                                   /**/
//* Murka: 10                                                                    /**/
//* }                                                                            /**/
//* ---------------------------------------------------------------------------- /**/
function catsGroupGenerate(n0)
{
    function pick(mass)
    {
        return mass[Math.floor(Math.random() * mass.length)];
    }
    function catFactory()
    {
        var mass_name = ['Айсберг','Аскольд','Астерикс'];/* ,'Аякс'     ,'Артур'    ,'Асклепий','Арес'    ,'Атос'    ,'Арамис'  ,'Август'  ,'Альбус'  ,'Алмаз'  ,
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
                         'Мэйсон' ,'Маркиз' ,'Мультик'  ,'Матроскин','Марсианин','Мушкетер','Максимус','Моцарт'  ,'Муфаса'  ,'Мяут'    ,'Морсик'  ,'Маркус'  ];*/
        var mass_age = [1,2,3,5,7,9,10,13,14,15];
        var mass_gender = ['Мужской','Женский','Непонятный'];
        var mass_legsCount = ['4','3'];
        var mass_tailLength = ['1','3','5','7','9','11','13','15','25'];
    
        var CatFac = {}; /*объявление пустого котообъекта*/
        CatFac.name = pick(mass_name);                  //заполнение 
        CatFac.age = pick(mass_age);                    //котообъекта
        CatFac.gender = pick(mass_gender);              //рандомными
        CatFac.legsCount = pick(mass_legsCount);        //данными
        CatFac.tailLength  = pick(mass_tailLength);     //из БД
    
        return CatFac;
    }
    var arraCatFac = [];
    for (var i=0; i<n0; i++){
        arraCatFac[i]=catFactory();
    }
    return arraCatFac;
}
/************************************************************************************************ *//**/

var n=999;
console.log (" ");
console.log ("КотоКонстантныйЛист на",n,"котов");
const list = catsGroupGenerate(n);

function nameStats1(cotolist)
{
    var arraN = {name:[] } ;

    for (var i = 0; i < cotolist.length; i++)
    {
        arraN.name[i]= cotolist[i].name;
    }
    //console.log(" ",arraN);
    var ameN={nam:[],cou:[]};
    var counter=0;
    for (var i5 = 0; i5 < arraN.name.length; i5++) 
    {   
        counter=0;
        ameN.nam.push(arraN.name[i5]);
        for (var j5 = i5+1; j5 < arraN.name.length; j5++) 
        {
            if (arraN.name[i5]===arraN.name[j5])
            {
                counter=counter+1;
                arraN.name.splice(j5,1);
                j5=j5-1;
            }   
        }
        ameN.cou.push(counter+1);
    }
    for (var i = 0; i < ameN.nam.length; i++) 
    {
        console.log(" ",ameN.nam[i],": ",ameN.cou[i]);
    }
}
nameStats1(list);


function nameStats0(cotolist)
{
/*for (var i5 = 0; i5 < arraN.name.length-1; i5++)
{
    var y=arraN.name[i5];
    ameN.nam=arraN.name.filter(function(x){return x===arraN.name[i5];});
    ameN.cou=ameN.nam.length;
    console.log(" ameN",ameN);
}
*/
//console.log(" arraN",arraN);
//console.log(" amen",ameN);
}


