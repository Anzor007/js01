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

function catsGroupGenerate(n0)
{
    var arraCatFac = [];

    for (var i=0; i<n; i++)
    {
        //console.log(" ");
        //console.log("Num= ",1+i);
        //console.log("",arraCatFac[i]=catFactory());
        arraCatFac[i]=catFactory();
    }
    return arraCatFac;
}






/************************************************************************************************ *//**/
var n=5;
console.log (" ");
console.log ("КотоКонстантныйЛист на",n,"котов");
const list = catsGroupGenerate(n);
//console.log (" Содержимое LIST =\n",list);
//console.log (" list[2].gender=",list[2].gender);


function catMen(catsGGList)
{/* - котов мужского пола /**/
    var arraCatMen = [];
    
    var counter = 0;

    for (var i=0; i<n; i++)
    {
        if (catsGGList[i].gender === "Мужской")
        {
            arraCatMen[counter] = catsGGList[i];
            //console.log (" Super Man =",arraCatMen[counter]);
            counter++;
        } 
     }
     if (counter===0)
     {
         console.log (" Мужиков нет ");
     }
     else
     {
        console.log (" Cat Men All =",counter);
        console.log (" ",arraCatMen);
     }
    return arraCatMen;
}
console.log ("-------------------------------------------------- func1 catMen GO  -------------------------------------------");
catMen(list);
console.log ("-------------------------------------------------- catMen END --------------------------------------------------");

function catName(catsGGList)
{/* - имен /**/
    var arraCatName = [];
    for (var i=0; i<n; i++)
    {
        arraCatName[i] = catsGGList[i].name;
        //console.log (" Cat Name =",arraCatName[i]);   
     }
     console.log (" Cat Name All=",arraCatName);   
     return arraCatName;
}
console.log (" ");
console.log ("-------------------------------------------------- func2 catName GO  -------------------------------------------");
catName(list);
console.log ("-------------------------------------------------- catName END -------------------------------------------------");

function catOld(catsGGList,n0)
{/* - n самых старых котов (функция также принимает параметр n - максимальный размер результата)   /**/
    var t_arracatAge=[]; 
    //var tt_catAge=0; 
    //var tt_catAge_i=0;
    
    
    for (var i0=0; i0<n0; i0++)
    {
        t_arracatAge[i0]=catsGGList[i0].age;
    }
    console.log(" \nfufel\n",t_arracatAge);


    

    for (var i=0; i<catsGGList.length-1; i++)
    { 
        for (var j=i+1; j<=catsGGList.length; j++)
        if (t_catAge[i].age > t_catAge[j].age)
        {

            tt_catAge=t_catAge[i]; tt_catAge_i=[i];
            t_catAge[i]=t_catAge[j];
            t_catAge[j]=tt_catAge[tt_catAge_i];
        }
    }
    console.log(" ",t_catAge_i);
    return 0;
}
console.log (" ");
console.log ("-------------------------------------------------- func2 catOld GO  --------------------------------------------");
catOld(list,n);
console.log ("-------------------------------------------------- catOld END --------------------------------------------------");
function catKid(catsGGList,n0)
{/* - имен n самых молодых кошек  (функция также принимает параметр n - максимальный размер результата)   /**/
    for (var i=0; i<n0; i++)
    {

    }
    return 0;
}
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
console.log (" END");