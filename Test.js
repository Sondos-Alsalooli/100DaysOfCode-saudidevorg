
/*
//day1 + day2
document.write("Welcome to JS World");
document.write("-----------------");

const smallNumbers= [1,2,3,4,5];
document.write(smallNumbers);
document.write("-----------------");
const GreatNumbers= [6,7,8,9,10];
document.write(GreatNumbers);
document.write("-----------------");

//Combine 2 arrays using spread operator ...
const NumbersUnder10 = [...smallNumbers, ...GreatNumbers];
document.write(NumbersUnder10);


//day3
//variables ES5
var a,b,c
a = 5;
b = 4;
c = 6;
a= 7;
document.write('ES5 ');
document.write(a + ',' + b + ',' + c);

/*Varibles ES6*/
/*var x = 10;

const y = 4;
let z = 6;

document.write(' ES6 ');
document.write(x + ',' + y + ',' + z);

*/


////day 5
//var x = 10;
//
//document.write('Hello, this is my first challenge and I will do it ' + x + ' times. <br> I will do it, I will learn JavaScript.');
//
//
//
////Day 6
//function تجربة(name)
//{
//  document.write( "مرحباَ " + name);
//}
//
//تجربة("سندس");

////Day 8
//let c =10; const b = 9;
//
//
//document.
//write(c + b);

//Day 9
// to get randome number between 1 and 10
//for(var i = 0; i< 10; i++)
//{
//var x = Math.random(); 
//document.write(x + '<br>');
//
//var y = Math.round(x * 10) ;
//document.write(y + '<br>');
//
// }

//Day 10
//var oldDateWithTime = new Date(2019, 8, 13, 15, 53, 30); 
//var dateToday = new Date();
//document.write(oldDateWithTime + '<br>');
//document.write(dateToday + '<br>');
//var elapsed = dateToday - oldDateWithTime; 
//document.write(elapsed + '<br>');
//document.write(oldDateWithTime.getFullYear()  + '<br>');
//document.write(oldDateWithTime.getMonth()  + '<br>');
//document.write(oldDateWithTime.getDate()  + '<br>');
//document.write(oldDateWithTime.getDay()  + '<br>');
//document.write(oldDateWithTime.getHours()  + '<br>');
//document.write(oldDateWithTime.getUTCHours()   + '<br>');
//document.write(oldDateWithTime.toString()  + '<br>');
//document.write(oldDateWithTime.toUTCString()  + '<br>');
//document.write(oldDateWithTime.toLocaleDateString()  + '<br>');
//document.write(oldDateWithTime.toLocaleTimeString()  + '<br>');
//document.write(oldDateWithTime.toISOString()  + '<br>');
// 

//Day 11+ Day 12
//window.alert('Hello');
//console.log('popup box is shown up');

//Day 13
//var s = "I am working on improving my skills";
//var s26 = s.charAt(26);
//var lastChar = s.charAt(s.length -1);
//var first = s.substring(0,12);
//var first2 =  s.slice(0,12);
//var lastWord = s.slice(-6);
//var sIndex = s.indexOf(s);
//var arr =[];
//arr.push(s.split(' '));
//var newS = s.replace('improving my skills', 'gaining new knowladge');
//var upper = s.toUpperCase();
////document.write(s);
//document.write('s=' + s +  ' s26=' + s26 + '<br> lastChar=' + lastChar +  '<br> first=' + first + '<br> first2=' + first2 +  '<br> lastWord=' + lastWord +  '<br> sIndex=' + sIndex + '<br> newS=' + newS +  '<br> upper=' + upper + '<br>');
//document.write(arr);
//

//Day 14
// Print Fibonacci numbers from 1 to 10
//var x, z;
//function f(y) {
//  if(y==0 || y==1) 
//      z = 1;
//  else
//   z= f(y-1) + f(y-2);
//  return z;
//}
//
//for(x= 1; x<=10; x++)
//  {
//    document.write('<br>');
//   document.write(f(x))
//   }
//
////Day 15
//var now = new Date();
//var birthYear = 1995;
//if(now.getFullYear() - birthYear >= 18 )
//  {
//  document.write('Adult');
//  }
//else
//  {
//  if(now.getFullYear() - birthYear < 18  && now.getFullYear() - birthYear > 12 )
//    document.write('Teen');
//    else
//      document.write('Child');
//  }
//Day 16
//var n = 4 ;
//if (n == 1) {
//document.write("You have 1 new message.") ;
//}
//else if (n == 2) {
//document.write("You have 2 new messages.") ;
//}
//else if (n == 3) {
//document.write("You have 3 new messages.");
//}
//else {
//document.write("You have new messages.") ;
//}

//Day 17
//var n = 90;
//switch(true) {
//case (n%2 == 0):
// document.write(n + " is even number");
//case (n%3 == 0):
// document.write("<br>" + n+ " is dividable by 3");
//  case (n%5 == 0):
// document.write("<br>" + n+ " is dividable by 5");
//
//default:
// document.write("<br>" + n+ " is a number");
// break;
//}

//Day 18 + Day 19
//if(browser === 'Edge')
// alert( "You've got the Edge!" );//Day 18 + Day 19
//if else(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
// alert( 'Okay we support these browsers too' );
//else
// alert( 'We hope that this page looks ok!' );

//Day 20
//var count =0;
//while (count < 10) 
//{
//  document.write('<br>');
//  document.write(count);
//  count ++
//}

//Day 21
//var count =0;
//do {
// document.write(count);
//}while (count++ < 10  &&  count > 1);

//Day 22
//var i=1; 
//var j=10; 
//var multi;
//for(; i < 5 ; i++, j--){
//multi = i * j;
//document.write(i + '*' + j + '=' +  multi+"<br>");
//}

//Day 23
//var x = 0;
//var z = 1;
//labelCancelLoops: while (true) {
// document.write("multiplication Table for " + (x + 1) + "<>");
// x += 1;
// z = 1;
// while (true) {
// document.write( x + '*' + z + '=' + x * z +'<br>');
// z += 1;
// if (z === 11 && x === 11) {
// break labelCancelLoops;
// } else if (z === 11) {
// break;
// }
// }
//}


////Day 24
//var x = 0;
//var z = 1;
//document.write("multiplication Table Of even numbers <br>");
//labelCancelLoops: while (true) {
//  if(x%2 == 0) 
//     document.write("multiplication Table for " + (x +2)  + "<br>");
// x += 1;
// z = 1;
//  if(x%2 != 0)
//   continue labelCancelLoops;
// while (true) {
// document.write( x + '*' + z + '=' + x * z +'<br>');
// z += 1;
// if (z === 11 && x === 11) {
// break labelCancelLoops;
// } else if (z === 11) {
// break;
// }
// }
//}
//Day 25 + Day 26
//for (var i=1; i<=5; i++)
//{
// var x= i;
//  var z = i*i;
//  document.write('i=' + i);
//  document.write('<br>');
//  
//  labelToContinue: while(z <= 10 && z > 0) { 
//    z = z + 2; 
//    if(z%2 !== 0) {
//        // document.write('Skipped');
//        // document.write('<br>');
//        continue labelToContinue;
//      }
//    else
//      {
//        document.write('z=' +z);
//        document.write('<br>');
//      }
//     
//  }
//  lableToBreak: while(x > 0 && x <= 5) {
//    if(i >= 5)
//      {
//        document.write('It is greater than 4');
//        break lableToBreak;
//      }
//    document.write('x=' + x);
//    document.write('<br>');  
//     x = x - 1;
//   }
//    document.write('---------------------------------');
//    document.write('<br>');
//}

//Day 27
//function spellMyName(name) {
//  document.write('full name is:' + name + '<br>');
//  var i = name.length;
//  if(i > 0)
//    {
//   for(var x=0 ; x< i; x++)
//     {
//         document.write((x+1) +'=' + name.charAt(x) + '<br>');
//       if(x == 4)
//         return;
//     }
//    }
//
//}
//spellMyName('Sondos');
//document.write('-------------------------<br>');
//document.write(spellMyName('Sondos')); 


//Day 28
// var x=6; var z=0;
//
// function devid(a, b){
//    if(a != 0 && b != 0)
//    { 
//        var f =a/b;    document.write(f);
//    }
//   else if(a == 0 && b != 0 )
//     document.write(0);
//   else
//     throw "not a correct expression";
// }
//
// devid(x,z);
// devid(x,z);

//Day 29
//function findFactors() {
//  var x, r;
// var z=  Number(prompt('Enter a composite  number', ''));
//  if( ((z % 2 == 0 ) || (z % 3 == 0) || (z % 5 == 0) || (z % 7 == 0)) && (z !== 2  && z !==3 && z !==5 && z !==7))
//    x =  'Composite';
//  else
//    x= 'Prime'
//  document.write('Entered number is' + x);
//  
//    try{
//     y = z;
//        document.write('<br>' + 'Entered number\'s factors:'+ '<br>')
//     while(((z % 2 == 0 ) || (z % 3 == 0) || (z % 5 == 0) || (z % 7 == 0)))
//        {
//            if(z%2 == 0) {
//                 document.write(2 + '<br>')
//                 z = z/2; }
//            else if(z%3 == 0) {
//                 document.write(3 + '<br>')
//                 z = z/3; }
//            else if(z%5 == 0) {
//                 document.write(5 + '<br>')
//                 z = z/5;}
//            else if(z%7 == 0) {
//                 document.write(7 + '<br>')
//                 z = z/7;}
//        if((z % 2 != 0 ) && (z % 3 != 0) && (z % 5 != 0) && (z % 7 != 0) && z != 1)
//            document.write(z + '<br>')
//                
//        
//        }}
//     catch(e) {
//      document.write('error');
//     }
//     finally {
//       document.write('That is it');
//     }
//}
//findFactors();

//Day 30
// Creating Objects using Decorator function
//var CourseCreator =  function(obj, name, duration, price) {
//    obj.name = name;
//    obj.duration = duration;
//    obj.price = price;
//return obj;
//}
//var arr = [];
//JavaScriptCourse = CourseCreator({}, 'JS', 3, 300);
//DataAnalysiaCourse = CourseCreator({}, 'DA', 3, 500);
//arr.push(JavaScriptCourse);
//arr.push(DataAnalysiaCourse);
//
//arr.forEach(function(val,index) { 
//    document.write('Course ' + val["name"] + ' Costs ' + val.price + '<br>');
//})
////
////document.write(DataAnalysiaCourse.price);
////document.write(JavaScriptCourse.price);
//
//Day 31
//var Book = function(name, pages){
//  this.name = name;
//  this.pages= pages;
//  this.MoveToPage =  function(x){
//    document.write('Current Page is ' + x)
//  }
//}
//
//var WutheringHeights = new Book('Wuthering Heights', 406);
//WutheringHeights.MoveToPage(20);

//Day 32 + Day 33
//function DevideNumbers() {
//
//var x =  Number(prompt('Enter the first number', ''));
//var z =  Number(prompt('Enter the seconed  number', ''));
//   try{
//      var y = Number(x/z);
//       if(y !=  'Infinity')
//            document.write('Result =' + y);
//       else
//           throw('Can\'t devided by 0 ')
//      }
//    catch(e) {
//     document.write(e);
//    }
//    finally {
//      document.write('<br> Try again');
//    }
//}

//Day 34
////ES5 Function
//var name = 'general';
//printObjects = function(obj) {
//    document.write(obj.name);
//}
////ES6 function
//const printGlobaObjects = () =>  document.write(this.name);
//
//var person = {
//  name: 'Sondos'
//}
//printGlobaObjects();
//document.write('<br>');
//printObjects(person);
//
//
//DevideNumbers();
//Day 35
//
//var Person = function(name, major) {
//  this.name = name;
//  this.major = major;
//}
//
//var sondos = new Person("Sondos", "CS");
//document.write(sondos.major);

//Day 36

//var Person = function(name, major, degree) {
//  this.name = name;
//  this.major = major;
//  this.degree = degree;
//}
//
//var sondos = new Person("Sondos", "CS", "BS");
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major);
//delete sondos.degree
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major);
//Day 37
//var Person = function(name, major, degree) {
//  this.name = name;
//  this.major = major;
//  this.degree = degree;
//}
//
//var sondos = new Person("Sondos", "CS", "BS");
//
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major);
//delete sondos.degree
//document.write('<br>' + sondos.major + ' has ' + sondos.degree + ' in '+ sondos.major + '<br>');
//document.write("degree" in  sondos);
//document.write('<br>');
//document.write(Person.hasOwnProperty("degree"));


//Day 38
//var person = {
// firstName: "Sondos",
// lastName: "Alsalooli",
// language: "EN",
// get langGet(){ 
//  return this.language}, 
// set langSet(value) { 
// this.language = value; }
//};
//
//const lang = person.langSet = 'AR';
//document.getElementById('div1').innerHTML = lang;

//Day 39 + Day 40
// Using setter and getter

//var Course = {
// Subject: "ALGORITHM",
// CoordinatorName: 'Noura',
// NOofHours: "30",
// NoofStudents: "20",
// set setSubject(val) {
//     this.Subject = val;
// },
// get getSubject() {
//    return this.Subject;
// },
// set setCoordinatorName(val) {
//     this.CoordinatorName = val;
// },
// get getCoordinatorName() {
//    return this.CoordinatorName;
// },
// set setNOofHours(val) {
//     this.NOofHours = val;
// },
// get getNOofHours() {
//    return this.NOofHours;
// }, 
// set setNoofStudents(val) {
//         this.NoofStudents = val;
// },
// get getNoofStudents() {
//    return this.NoofStudents;
// }
//
//};
//
////Using Inheritance
//function courseClass(Subject, CoordinatorName, NOofHours, NoofStudents) {
//    this.Subject = Subject;
//    this.CoordinatorName = CoordinatorName;
//    this.NOofHours = NOofHours;
//    this.NoofStudents = NoofStudents;
//}
//let count = 0;
//document.getElementById('Subject').value = Course.getSubject;
//document.getElementById('CoordinatorName').value = Course.getCoordinatorName;
//document.getElementById('NOofHours').value = Course.getNOofHours;
//document.getElementById('NoofStudents').value = Course.getNoofStudents;
//
//function setValueOfControls(e, cor) {
//    console.log(e);
//    if(e == "0")
//    {   
//        document.getElementById('Subject').value = Course.getSubject;
//        document.getElementById('CoordinatorName').value = Course.getCoordinatorName;
//        document.getElementById('NOofHours').value = Course.getNOofHours;
//        document.getElementById('NoofStudents').value = Course.getNoofStudents; 
//        var corSubject, corCoordinatorName, corNOofHours, corNoofStudents;
//        corSubject = cor.Subject;
//        corCoordinatorName = cor.CoordinatorName;
//        corNOofHours = cor.NOofHours;
//        corNoofStudents = cor.NoofStudents;
//        creatNewDiv(corSubject, corCoordinatorName, corNOofHours,corNoofStudents);
//    }
//    else {
//         document.getElementById('Subject1').value = '';
//        document.getElementById('CoordinatorName1').value = '';
//        document.getElementById('NOofHours1').value = '';
//        document.getElementById('NoofStudents1').value = '';    
//        var corSubject, corCoordinatorName, corNOofHours, corNoofStudents;
//        corSubject = cor.Subject;
//        corCoordinatorName = cor.CoordinatorName;
//        corNOofHours = cor.NOofHours;
//        corNoofStudents = cor.NoofStudents;
//        creatNewDiv(corSubject, corCoordinatorName, corNOofHours,corNoofStudents);
//    }
//}
//
//function creatNewDiv(corSubject, corCoordinatorName, corNOofHours,corNoofStudents) {
// 
//      var div = document.createElement('div');
//        var corSubject, corCoordinatorName, corNOofHours, corNoofStudents;
//       var divHTML = '<div class="div"><label>Subject</label> <label></label>&Subject1 </div> <div class="div"><label>Coordinator Name</label> &CoordinatorName1</div><div class="div"><label>NO of Hours</label> &NOofHours1</div><div class="div"><label>No of Students</label> &NoofStudents1</div><hr/>';
//        divHTML = divHTML.replace("&Subject1", corSubject);
//        divHTML = divHTML.replace("&CoordinatorName1", corCoordinatorName);
//        divHTML = divHTML.replace("&NOofHours1", corNOofHours);
//        divHTML = divHTML.replace("&NoofStudents1", corNoofStudents);
//        div.innerHTML = divHTML;
//        document.getElementById('DynamicControls').append(div);
//};
//
//function setValues(e) {
//    console.log(e);
//      if(e == "0")
//    {    
//        Course.setSubject = document.getElementById('Subject').value;
//        Course.setCoordinatorName = document.getElementById('CoordinatorName').value;
//        Course.setNOofHours = document.getElementById('NOofHours').value;
//        Course.setNoofStudents = document.getElementById('NoofStudents').value;
//        setValueOfControls(e, Course);
//    }
//   else
//    {    
//        var courseIns = new courseClass(document.getElementById('Subject1').value, document.getElementById('CoordinatorName1').value,
//                    document.getElementById('NOofHours1').value,   document.getElementById('NoofStudents1').value                 
//                                       )
//        setValueOfControls(e, courseIns);
//    }
//}
//
//document.getElementById('SetValues').addEventListener('click', setValues.bind(this,0));
//document.getElementById('SetValues1').addEventListener('click', setValues.bind(this,1));

//Day 41
//function Product (id, price, name) {
//};
//   
//p = new Product();
//console.log(Object.prototype.isPrototypeOf(p)); //true, all objects point to Object

//Day 42
//function Product (id, price, name) {
//    this.id = id;
//    this.name = name;
//    this.price = price;
//
//};
//   
//p = new Product(1, 90, 'Jacket'); 
//p2 = new Product(2, 120, 'shirt');
//
//
//Product.prototype.discount = function(prec) {
//    return this.price - this.price * prec;
//}
//
//console.log(p.discount(0.2));
//console.log(p2.discount(0.3));
//console.log(p2.discount === p2.discount);
//
////Day 43 + Day 44
//
//var arrOfProducts = [];
//arrOfProducts.push(p);
//arrOfProducts.push(p2);
//
//function func(value, index){
//    console.log('Product ' + value.id+ ' originally costs ' + value.price + ' but now it costs ' + value.discount(0.2))
//}
//
//arrOfProducts.forEach(func);
//
////Day 45
//
////Using another approach
//for(var i =0; i< arrOfProducts.length;i++)
//    {
//        console.log('Product ' + arrOfProducts[i].id+ ' originally costs ' + arrOfProducts[i].price + ' but now it costs ' + arrOfProducts[i].discount(0.2))
//    }

//Day 46 + Day 47

//function Student(name, GPA){
//    this.name = name;
//    this.GPA = GPA;
//}
//
//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
//var GPA = [4.8, 4.5, 5, 4, 4.9];
//var studentsList = [];
//
//function addStudent(value, index){
//     let st = new Student(names[index], GPA[index]);
//     studentsList.push(st);
//    }
//
//
//names.forEach(addStudent);
//
//
//function showStudents(value){
//    console.log('Sudent Name: ' + value.name+ ' - GPA: ' + value.GPA )
//}
//
//studentsList.forEach(showStudents);


//Day 48
//var arr = new Array(2);
//console.log(arr.length);
//arr.length = 4;
//console.log(arr.length);


//Day 49
//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
//
//names[0] = 'Ruba'; //change value of index 0
//names[names.length+1]  = 'Sara'; // Skip one index and then Add element 
//console.log(names);

//Day 50
//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
//
//delete names[0] ;
//console.log(names);
//names.length = 0;
//console.log(names);

//Day 51

//var names = ['Sara', 'Ghada', 'Nouf', 'Amal', 'Sondos'];
////Using for loop
//console.log('names before sort');
//for(var i =0; i< names.length; i++)
//    {
//        console.log( ' - ' + names[i]);
//    } 
//
//
//names.sort();
//console.log('names after sort');
//function afterSort(value){
//    console.log(' - ' + value)
//}
//
//names.forEach(afterSort);

//Day 52
//var mainArr = new Array(10);
//
//console.log(mainArr.length);
//for(var i = 0; i < mainArr.length; i++)
//    {
//        mainArr[i] = new Array(10);
//    }
//
//
//for(var x = 0; x < mainArr.length; x++)
//    {
//        for(var y = 0; y < mainArr[x].length; y++){
//            var col = y+1;
//            var row = x +1
//            mainArr[x][y] = col * row;
//        }
//    }
//
//
//function  showAllElements(value, index){
//    const i = index +1;
//    console.log( i + ' Multiplication Table -- ' + value); 
//}

//mainArr.forEach(showAllElements);

//showAllElements[3][4];

//Day 53 + Day 54
//
//document.addEventListener("DOMContentLoaded", function() {   setEventListner()});
//
//
//var DataEntity = {
//    ArrEmployee: [],
//    DeleteEmp: function(id) {
//        this.ArrEmployee.splice(id,1);
//    }
//
//}
//
//let Employee = document.getElementById('Employee').value;
//let Job = document.getElementById('JobRole').value;
//let Experince = document.getElementById('Experience').value;
//
//var Controller = {
// AddEmp: function(Employee, Job, Experince){
//       View.showNewEmp(View.GetLastID(), Employee, Job, Experince);
//       DataEntity.ArrEmployee[DataEntity.ArrEmployee.length] = [Employee, Job, Experince];
//   },
//
//    FilterEmp: function(Exp){
//        // console.log(DataEntity.FilterArrEmployee(Exp));
//         View.FilterEmp(Exp);
//   },
//
//    RmvFilterEmp: () => { View.RmvFilter()},
//    DeleteEmp: function(id) {
//        DataEntity.DeleteEmp(id);
//        View.DeleteEmp(id);
//    }
//    
// 
//    
//}
//
//var View = {
//    table : document.getElementById('DynamicEmpData'),
//    GetLastID: function(){
//        var id;
//        if(this.table.rows.length <=1)
//            {
//             id =0;   
//        }
//        else{
//            console.log(this.table.rows[this.table.rows.length - 1 ].id);
//            id = parseInt(this.table.rows[this.table.rows.length - 1 ].id) + 1; 
//        }
//        return id;
//    },
//    showNewEmp: function(ID, Employee, Job, Experince){
//            console.log('judd');
//
//       var tr = document.createElement('tr');
//       var Employeetd = document.createElement('td');
//       var Jobtd = document.createElement('td');
//       var Experincetd = document.createElement('td');
//       var deletetd = document.createElement('td');
//        Employeetd.innerHTML = Employee;
//        Jobtd.innerHTML = Job;
//        Experincetd.innerHTML = Experince;
//        deletetd.innerHTML = 'Delete';
//        
//        tr.appendChild(Employeetd);
//        tr.appendChild(Jobtd);
//        tr.appendChild(Experincetd);
//        tr.appendChild(deletetd);
//        tr.id = ID;
//        
//        deletetd.addEventListener('click', Controller.DeleteEmp.bind(this,  tr.id));
//
//        //tr.setAttribute("id", ID);
//        this.table.appendChild(tr);
//    },
//    
//    FilterEmp: function(exp){
//        this.RmvFilter();
//            for(var i = 1, row; row = document.getElementById('DynamicEmpData').rows[i]; i++)  
//                {
//                    if (exp != row.cells[2].innerText)
//                        {
//                            console.log('hide' +row.id);
//                            document.getElementById(row.id).classList.add('hidden');
//                        }
//               }
//      },
//    
//  RmvFilter: function() {
//        
//         for(var i = 1, row; row = this.table.rows[i]; i++)  
//                {
//                    document.getElementById(row.id).classList.remove('hidden');
//                }
//        },
//    DeleteEmp: function(id) {
//            document.getElementById(id).remove();  
//    }
//}
//
//
//function setEventListner() {
//    document.getElementById('AddEmployee').addEventListener('click',function() { Controller.AddEmp(document.getElementById('Employee').value, document.getElementById('JobRole').value, document.getElementById('Experience').value)});
//    
//    document.getElementById('ExperienceFilterBtn').addEventListener('click',function() { 
//        Controller.FilterEmp(document.getElementById('ExperienceFilter').value)});
//    
//    document.getElementById('RmvExperienceFilterBtn').addEventListener('click',function() { 
//        Controller.RmvFilterEmp()});
//      
//}


//Day 55
//
//var alphabetArr = new Array(26);
////document.write(alphabetArr.length);
//
//for(var i=97,x= 0; i<123, x < alphabetArr.length; x++)
//    alphabetArr[x] = String.fromCharCode(i++) 
//
//document.write(alphabetArr);
//document.write('<br> -------------------- <br>');
//
//
//document.write(alphabetArr.join());
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> reverse Array: '+ alphabetArr.reverse());
//document.write('<br> -------------------- <br>');
//
//
//var subArr = [];
//subArr = alphabetArr.slice(0,5);
//document.write('original array: ' + alphabetArr);
//document.write( '<br> sub Array: '+ subArr);
//
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> concat Array: '+ alphabetArr.concat(subArr));
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> sort Array: '+ alphabetArr.sort());
//document.write('<br> -------------------- <br>');
//
////Day 56
//
//document.write('<br> Splice Array: '+ alphabetArr.splice(0,1, '1'));
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> push Array: '+ alphabetArr.push(2));
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> pop Array: '+ alphabetArr.pop());
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//document.write('<br> unshift Array: '+ alphabetArr.shift());
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');
//
//
//
//document.write('<br> unshift Array: '+ alphabetArr.unshift('a'));
//document.write('<br> Full Array: '+ alphabetArr);
//
//document.write('<br> -------------------- <br>');


//Day 57
//document.write('<br> Array to string: '+ alphabetArr.toString());
//
//document.write('<br> -------------------- <br>');
//
//
//var correspondingArr = new Array(26);
//let s = alphabetArr.join('');
//
//function showCharCode(value, index, arr)
//{
//    correspondingArr[index] = s.charCodeAt(index);
//    if(value == 'z')
//            document.write('<br> corresponding Array : '+ correspondingArr);
//}
//
//
//
//alphabetArr.forEach(showCharCode);
//document.write('<br> Array : '+ alphabetArr);
//
//
//document.write('<br> -------------------- <br>');


//Day 58

var arr = [4,9,16,25, 4, 36];

document.write('<br> map Array: '+ arr.map(Math.sqrt));
document.write('<br> -------------------- <br>');


document.write('<br> filter Array: '+ arr.filter(function(n) { return n > 10 }));
document.write('<br> -------------------- <br>');


document.write('<br> every Array: '+ arr.every(function(n) { return n%2==0 }));
document.write('<br> -------------------- <br>');

document.write('<br> some Array: '+ arr.some(function(n) { return n%2==0 }));
document.write('<br> -------------------- <br>');



document.write('<br> reduce Array: '+ arr.reduce(function(total, num) { return total - num;}));
document.write('<br> -------------------- <br>');


document.write('<br> reduce right Array: '+ arr.reduceRight( function(total, num) { return total - num;}));
document.write('<br> -------------------- <br>');


document.write('<br>index of Array: '+ arr.indexOf(4));
document.write('<br> -------------------- <br>');

document.write('<br>last index of Array: '+ arr.lastIndexOf(4));
document.write('<br> -------------------- <br>');






