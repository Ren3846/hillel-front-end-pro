// Створити класс  Person class з властивостями name, age, і occupation.
// Створити в  Person  метод introduction котрий повертає текст "Hi, my name is John. I'm 25 years old and I work as a software engineer."
// Створіть класс Form котрий в конструкторі очікує html форму.

// В Form створіть метод handleSubmitкотрий дістає значення з полів форми, та створією нового представника класу Person , і виводить представлення себе( introduction) в  DOM.
// Коли по html формі відбувся submit подія викликайте метод handleSubmit
// Форма повинна мати поля name, age, і occupation, та кнопку підтвердження.
// Усі поля обов'язкові до заповнення, мінімальна довжина імені 10 символів,
// Після успішного додавання користувача форма повинна очиститись і знову бути готова до роботи

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduction() {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`;
  }
}

class Form {
  constructor(formElement) {
    this.formElement = formElement;

    this.nameInput = formElement.querySelector('#name');
    this.ageInput = formElement.querySelector('#age');
    this.occupationInput = formElement.querySelector('#occupation');

    this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const person = new Person(
      this.nameInput.value,
      this.ageInput.value,
      this.occupationInput.value,
    );
    this.displayPerson(person);
    this.reset();
  }

  displayPerson(person) {
    const introductionElement = document.createElement('p');
    introductionElement.textContent = person.introduction();
    document.body.appendChild(introductionElement);
  }

  reset() {
    this.formElement.reset();
  }
}

const formElement = document.querySelector('#person-form');
const form = new Form(formElement);
