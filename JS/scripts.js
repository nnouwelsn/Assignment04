/*eslint-env browser*/

//1.

/*var movies = ['Iron Man', 'Fury', 'Captan America: Winter Soldier', 'Avengers', 'Fifth Element'];
window.console.log(movies[1]);*/

//2-3.

/*var movies = new Array(5);
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';

window.console.log(movies[0]);

movies.push = 'Mad Max';

window.console.log(movies.length);*/

//4.

/*var movies =[];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';

delete movies[0];

window.console.log(movies);*/

//5.

/*var movies =[];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var i;
for (i=0; i < movies.length; i++){
    window.console.log(movies[i]);
}*/

//6.

/*var movies =[];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var index;
for (index in movies){
    window.console.log(movies[index]);
}*/

//7.

/*var movies =[];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var index;
for (index in movies){
    if (movies.hasOwnProperty(index)){
    window.console.log(movies[index]);}
}*/

//8.

/*var movies = [];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

document.write('Favorite Movies: <br> <br>');

for (var i = 0; i < movies.length; i++) {
    document.write(movies[i] + "<br >");
}

var terribleMovies = [];
terribleMovies[0] = 'Devil\'s Rejects';
terribleMovies[1] = 'Pet Cemetary';
terribleMovies[2] = 'Jungle';

document.write(' <br> Terrible Movies: <br> <br>');

for (var x = 0; x < terribleMovies.length; x++) {
    document.write(terribleMovies[x] + "<br >");
}*/

//9.

/*var movies = [];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var i;
for (i = 0; i < movies.length; i++) {
    (movies[i]);
}

var terribleMovies = [];
terribleMovies[0] = 'Devil\'s Rejects';
terribleMovies[1] = 'Pet Cemetary';
terribleMovies[2] = 'Jungle';

var x;
for (x = 0; x < terribleMovies.length; x++) {
    (terribleMovies[x]);
}

var allMovies;
allMovies = movies.concat(terribleMovies);

window.console.log(allMovies.reverse());*/

//10.

/*
var movies = [];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var i;
for (i = 0; i < movies.length; i++) {
    (movies[i]);
}

var terribleMovies = [];
terribleMovies[0] = 'Devil\'s Rejects';
terribleMovies[1] = 'Pet Cemetary';
terribleMovies[2] = 'Jungle';

var x;
for (x = 0; x < terribleMovies.length; x++) {
    (terribleMovies[x]);
}

var allMovies;
allMovies = movies.concat(terribleMovies);
console.log(allMovies.pop());*/

//11.

/*var movies = [];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var i;
for (i = 0; i < movies.length; i++) {
    (movies[i]);
}*/

/*var terribleMovies = [];
terribleMovies[0] = 'Devil\'s Rejects';
terribleMovies[1] = 'Pet Cemetary';
terribleMovies[2] = 'Jungle';

var x;
for (x = 0; x < terribleMovies.length; x++) {
    (terribleMovies[x]);
}

var allMovies;
allMovies = movies.concat(terribleMovies);

console.log(allMovies.shift());*/

//12.

/*var movies = [];
movies[0] = 'Iron Man';
movies[1] = 'Fury';
movies[2] = 'Captan America: Winter Soldier';
movies[3] = 'Avengers';
movies[4] = 'Fifth Element';
movies[5] = 'Mad Max';
movies[6] = 'Resident Evil';

var i;
for (i = 0; i < movies.length; i++) {
    (movies[i]);
}

var terribleMovies = [];
terribleMovies[0] = 'Devil\'s Rejects';
terribleMovies[1] = 'Pet Cemetary';
terribleMovies[2] = 'Jungle';

var x;
for (x = 0; x < terribleMovies.length; x++) {
    (terribleMovies[x]);
}

var allMovies;
allMovies = movies.concat(terribleMovies);

allMovies.splice(7, 9, 'How to Train your Dragon', 'Sweet Home Alabama', 'John Wick');

console.log(allMovies);*/

//13.

/*var employee1 = [];
employee1['empId'] = '0001';
employee1['name'] = 'Sally';
employee1['position'] = 'Branch Manager';
employee1['department'] = 'Main';
employee1['current employee'] = true;

var employee2 = [];
employee2['empId'] = '0002';
employee2['name'] = 'Mike';
employee2['position'] = 'Teller';
employee2['department'] = 'Branch 2020';
employee2['current employee'] = false;

var employees = [employee1, employee2]; 


window.console.log(employees[1]['name']);*/

//14.

/*var employee1 = [];
employee1['empId'] = '0001';
employee1['name'] = 'Sally';
employee1['position'] = 'Branch Manager';
employee1['department'] = 'Main';
employee1['current employee'] = true;

var employee2 = [];
employee2['empId'] = '0002';
employee2['name'] = 'Mike';
employee2['position'] = 'Teller';
employee2['department'] = 'Branch 2020';
employee2['current employee'] = false;

var employees = [employee1, employee2];

var i;

for (i = 0; i < employees.length; i += 1) {
    window.document.write(employees[i]['name'] + ' ');
}*/

//15. !

/*var employee1 = [];
employee1['empId'] = '0001';
employee1['name'] = 'Sally';
employee1['position'] = 'Branch Manager';
employee1['department'] = 'Main';
employee1['current employee'] = true;

var employee2 = [];
employee2['empId'] = '0002';
employee2['name'] = 'Mike';
employee2['position'] = 'Teller';
employee2['department'] = 'Branch 2020';
employee2['current employee'] = true;

var employee3 = [];
employee3['empId'] = '0003';
employee3['name'] = 'Nancy';
employee3['position'] = 'Teller';
employee3['department'] = 'Branch 2050';
employee3['current employee'] = false;

var employees = [employee1, employee2, employee3];

var i;
for (i = 0; i < employees.length; i += 1) {
    if (employees['current employee'] === true) {
        window.document.write(employees[i]['name'] + ' ');
    }
}*/

//16.

/*var movies = [['Gone in 60 Seconds', 1], ['Lord of the Rings', 2], ['The Fast and Furious', 3], ['Transporter', 4], ['Resident Evil', 5]];

for (var i = 0; i < movies.length; i++) {
    var list = movies[i];
    for (var j = 0; j < list; j++) {
        list.filter(function (item) {
            return typeof item === 'string';
        });
    }
}

window.console.log([j]);*/

//17.

//18.

//19.

//20.

//The Product Inventory Management System

/*var inventory = [
    [
        1001,
       'bike',
        '(10)',
        '$' + 69.99 + '\n'
    ],
    [
        1002,
        'tent',
        '(15)',
        '$' + 199.99 + '\n'
    ],
    [
        1003,
        'chair',
         '(35)',
        '$' + 29.99 + '\n'
    ],

     [
        1004,
        'net',
        '(5)',
        '$' + 16.99 + '\n'
     ],
        [
        1005,
        'fishing pole',
        '(100)',
        '$' + 59.99
        ]

];

window.console.log(inventory);

var $ = function (id) {
        'use strict';
    return window.document.getElementById(id);
};


function viewInventory() {
        'use strict';
    localStorage.getItem(inventory);
    $('show-view').value = inventory.join('');
}

function updateInventory() {
        'use strict';
    var sku = window.prompt('Enter a SKU');
    var quan = window.prompt('Enter Item Quantity');
    if (sku == 1001) {
        inventory[0][2] = quan;
    } else if (sku == 1002) {
        inventory[1][2] = quan;
    } else if (sku == 1003) {
        inventory[2][2] = quan;
    } else if (sku == 1004) {
        inventory[3][2] = quan;
    } else if (sku == 1004) {
        inventory[3][2] = quan;
    } else {
        alert('Please enter a valid SKU');
    }
}

function closeInventory() {
        'use strict';
    $('show-view').value = '';
    inventory.length = 0;
    localStorage.inventory = '';
}

window.addEventListener('load', function () {
        'use strict';
    $('view').addEventListener('click', viewInventory);
});
window.addEventListener('load', function () {
        'use strict';
    $('update').addEventListener('click', updateInventory);
});
window.addEventListener('load', function () {
        'use strict';
    $('exit').addEventListener('click', closeInventory);
});*/
