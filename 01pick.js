/* ---------------------------------------------------------------------------- /**/
/* Задача 1                                                                     /**/
/* Написать функцию pick(list), где list - массив,                              /**/
/* которая возвращает произвольный элемент из list.                             /**/
/* Подсказки: Math.random, list.length                                          /**/
/* ---------------------------------------------------------------------------- /**/
function pick(mass)
{
   return mass[Math.floor(Math.random() * mass.length)];
}

var list = [ 'qq','ww','ee','rr','tt','yy','uu','ii']; 
console.log(" ");
console.log("list           = ",list);
console.log("list.length    = ",list.length);
console.log("pick(list)     = ",pick(list));
console.log(" ");