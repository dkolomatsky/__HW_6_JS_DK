// Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника. Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.

class WorkeR {
  constructor(name,surname,rate,days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary(){
  return document.getElementById('salary').innerHTML += `Заробітня плата працівника ${this.name} становить: ${this.rate * this.days} гривень.`;
  }
}

const worker1 = new WorkeR('Петя', 'Іванов', 1000, 20);
worker1.getSalary(); // вивід: Заробітня плата працівника Петя становить: 20000 гривень.

// Реалізуйте клас MyString, який матиме такі методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка. 
class MyString{
  constructor(string){
    this.string = string;
  };
  reverse(string){
  string = Array.from(this.string);
    string = string.reverse().join('');
    return string;
  };
  ucFirst(string){
    string = Array.from(this.string);
    const firstLetter = string[0].toUpperCase();
    string.splice(0,1,firstLetter);
    string = string.join('');
    return string;
  };
  ucWords(string){
    string = this.string.split(' ');
    console.log(string);

  };
}

const string = new MyString('мене звати дмитро')
document.write(string.reverse() + '<br>'); // виведе: ортимд итавз енем
document.write(string.ucFirst() + '<br>'); // виведе: Мене звати дмитро
string.ucWords();