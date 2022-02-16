// ДЗ:
//
//     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname, 'main','online'), {recursive: true},(err)=>{
 if (err) {
  console.log(err);
  throw err;
 }
});

fs.mkdir(path.join(__dirname, 'main','inPerson'),(err)=>{
 if (err) {
  console.log(err);
  throw err;
 }
});

const userOnline = [
    {name: "Andrii", age: 22, city: "Lviv" },
    {name: "Viktotia", age: 26, city: "Kiev" }
]

const userInPerson = [
    {name: "Sofia", age: 25, city: "Lytsk" },
    {name: "Lera", age: 28, city: "London" }
]

fs.writeFile(path.join(__dirname,'main','online','online.txt'), 'data' ,(err)=>{
 if (err){
  console.log(err);
  throw err;
 }
})

fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),'data',(err)=>{
 if (err){
  console.log(err);
  throw err;
 }
})
for (const user of userInPerson) {
 fs.writeFile(path.join(__dirname,'main','online','online.txt'), `NAME: ${user.name}\nAGE: ${user.age}\nCITY: ${user.city}\n\n`, {flag:'a'} ,err => {
  if (err){
   console.log(err);
   throw err;
  }
 })
}

for (const user of userOnline) {
    fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'), `NAME: ${user.name}\nAGE: ${user.age}\nCITY: ${user.city}\n\n`, {flag:'a'} ,err => {
        if (err){
            console.log(err);
            throw err;
        }
    })
}
let change = () =>{
    fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'utf8', (err, data)=> {
        if (err) {
            console.log(err)
            throw err
        }
        let onlineData = data
        fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                throw err
            }

            let inPersonData = data;
            fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${inPersonData}`, {flag:'w'} , (err) => {
                if (err) {
                    console.log(err)
                    throw err
                }
                fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${onlineData}`, {flag: 'w'} ,(err) => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                })
            })
        })
    })}

change()