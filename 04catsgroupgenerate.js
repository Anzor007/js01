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

var catsGG = require('./03catsgroupgenerate.js');

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

function catName(catsGGList)
{/* - имен /**/
    var arraCatName = [] ;
    for (var i=0; i<n; i++)
    {
        arraCatName[i] = catsGGList[i].name;
        //console.log (" Cat Name =",arraCatName[i]);
     }
     //console.log (" Cat Name All=",arraCatName);
     return arraCatName;
}

function catOld(catsGGList,n0)
{/* - n самых старых котов (функция также принимает параметр n - максимальный размер результата)   /**/
    var t_arracatAge=[];
    for (var i0=0; i0<catsGGList.length; i0++)
    {
        t_arracatAge[i0]=catsGGList[i0];
    }
    t_arracatAge.sort((prev,next) => prev.age-next.age);
    var arrafin = t_arracatAge.slice(t_arracatAge.length-n0);
    return arrafin;
}

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

var n=10; //999;
const list = catsGG(n); //Const list = catsGroupGenerate(999) N - для теста
//console.log (" --catMen(list)--\n"); catMen(list);
//console.log (" --catName(list)--\n"); catName(list);
//console.log (" --catOld(list,2)--\n"); catOld(list,2);
//console.log (" --catKid(list,4)--\n"); catKid(list,4);

//module.exports = catMen;
module.exports = {catMen,catName,catOld,catKid};
