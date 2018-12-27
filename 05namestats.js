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

var catsGG999 = require('./03catsgroupgenerate.js');

function nameStats(cotolist)
{
    var arraN = {name:[] } ;

    for (var i = 0; i < cotolist.length; i++)
    {
        arraN.name[i]= cotolist[i].name;
    }
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
}
//var n=9;
//const list = catsGG999(n);
//nameStats(list);

/*
function nameStats0(cotolist)
{
for (var i5 = 0; i5 < arraN.name.length-1; i5++)
{
    var y=arraN.name[i5];
    ameN.nam=arraN.name.filter(function(x){return x===arraN.name[i5];});
    ameN.cou=ameN.nam.length;
    console.log(" ameN",ameN);
}

//console.log(" arraN",arraN);
//console.log(" amen",ameN);
}

*/
module.exports = nameStats;
