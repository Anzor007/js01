/* ---------------------------------------------------------------------------- /**/
/* Задача 4                                                                     /**/
/* Const list = catsGroupGenerate(999)                                          /**/
/* Написать функции, которые принимая list вернут массив:                       /**/
/* - котов мужского пола                                                        /**/
/* - имен                                                                       /**/
/* - n самых старых котов                                                       /**/
/*      (функция также принимает параметр n - максимальный размер результата)   /**/
/* - имен n самых молодых кошек                                                 /**/
/*      (функция также принимает параметр n - максимальный размер результата)   /**/
/* ---------------------------------------------------------------------------- /**/
function catFactory()
{
    function pick(mass)
    {
        return mass[Math.floor(Math.random() * mass.length)];
    }

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
    //var mass_age
    var mass_age = [1,2,3,5,7,9,10,13,14,15];
    //var mass_gender
    var mass_gender = ['Мужской','Женский','Непонятный'];
    //var mass_legsCount
    var mass_legsCount = ['4','3'];
    //var mass_tailLength
    var mass_tailLength = ['1','3','5','7','9','11','13','15','25'];

    var CatFac = {}; /*создание котообъекта*/

    CatFac.name = pick(mass_name);
    CatFac.age = pick(mass_age);
    CatFac.gender = pick(mass_gender);
    CatFac.legsCount = pick(mass_legsCount);
    CatFac.tailLength  = pick(mass_tailLength);

    return CatFac;
}

function catsGroupGenerate(n0)
{
    var arraCatFac = [];

    for (var i=0; i<n0; i++)
    {
        arraCatFac[i]=catFactory();
    }
    return arraCatFac;
}
/************************************************************************************************ *//**/
var n=10; //999;
console.log (" ");
console.log ("КотоКонстантныйЛист на",n,"котов");
const list = catsGroupGenerate(n); //Const list = catsGroupGenerate(999) N - для теста


function catMen(catsGGList)
{/* - котов мужского пола /**/
    var arraCatMen = [];

    var counter = 0;

    for (var i=0; i<n; i++){
        if (catsGGList[i].gender === "Мужской"){            
            arraCatMen[counter] = catsGGList[i];
            counter++;
        }
     }
     if (counter===0){
         console.log (" Мужиков нет ");
     }
     else{
        console.log (" - котов мужского пола -\n",counter);
        console.log (" ",arraCatMen);
     }
    return arraCatMen;
}
console.log ("------------------------------ func1 catMen GO  --------------------------------------------");
catMen(list);
console.log ("------------------------------ catMen END --------------------------------------------------");

function catName(catsGGList)
{/* - имен /**/
    var arraCatName = [];
    for (var i=0; i<n; i++)
    {
        arraCatName[i] = catsGGList[i].name;
        //console.log (" Cat Name =",arraCatName[i]);
     }
     //console.log (" Cat Name All=",arraCatName);
     return arraCatName;
}
console.log (" ");
console.log ("------------------------------ func2 catName GO  -------------------------------------------");
console.log (" - имен -\n",catName(list));
console.log ("------------------------------ catName END -------------------------------------------------");

function catOld(catsGGList,n0)
{/* - n самых старых котов (функция также принимает параметр n - максимальный размер результата)   /**/
    var t_arracatAge=[];
    for (var i0=0; i0<catsGGList.length; i0++)
    {
        t_arracatAge[i0]=catsGGList[i0];
    }
    t_arracatAge.sort((prev,next) => prev.age-next.age);
    var arrafin = {} = t_arracatAge.slice(t_arracatAge.length-n0);
    return arrafin;
}
console.log (" ");
console.log ("------------------------------ func3 catOld GO  --------------------------------------------");
console.log (" - n самых старых котов -\n",catOld(list,2));
console.log ("------------------------------ catOld END --------------------------------------------------");
function catKid(catsGGList,n0)
{/* - имен n самых молодых кошек  (функция также принимает параметр n - максимальный размер результата)   /**/
    var t_arracatAge=[];

    for (var i0=0; i0<catsGGList.length; i0++)
    {
        t_arracatAge[i0]=catsGGList[i0];
    }

    t_arracatAge.sort((prev,next) => next.age-prev.age);           /*   сортируем по возрасту   */

    var arrafin = {} = t_arracatAge.slice(t_arracatAge.length-n0); /*   обрезаем лишнее         */

    var arrayEND = [];
    for (var i1=0; i1<arrafin.length; i1++)
    {
        arrayEND[i1] = arrafin[i1].name;
    }
    return arrayEND;
}
console.log (" ");
console.log ("------------------------------ func4 catKid GO  --------------------------------------------");
console.log (" - имен n самых молодых кошек -\n",catKid(list,4));
console.log ("------------------------------ catKid END --------------------------------------------------");