// Завдання: Генератор випадкових паролів
// Опис: Написати функцію, яка генерує випадковий пароль заданої довжини. Пароль повинен містити:
// - Літери (a-z, A-Z)
// - Цифри (0-9)
// - Спеціальні символи (!@#$%^&*)
// Технічні вимоги:
// - Функція повинна приймати один аргумент — довжину пароля.
// - Якщо аргумент не переданий, використовувати значення за замовчуванням (8 символів).
// - Пароль повинен бути випадковим при кожному виклику функції.
// Приклад роботи функції:
// console.log(generatePassword(12)); // Наприклад: "aB4!gH@2sZ9%"
// console.log(generatePassword());   // Наприклад: "Xz9@qT1#"
// Додаткові рівні складності (необов'язково):
// - Додай можливість вибирати набір символів (тільки літери, тільки цифри тощо).
// - Напиши валідацію, щоб користувач не міг ввести довжину менше 4.

function generatePassword({
  length = 8,
  useLetters = true,
  useNumbers = true,
  useSymbols = true,
}) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  let allChars = "";
  if (useLetters) allChars += letters;
  if (useNumbers) allChars += numbers;
  if (useSymbols) allChars += symbols;

  if (!allChars.length) {
    throw new Error("Необхідно обрати хоча б один тип символів для пароля.");
  }

  if (length < 4) {
    throw new Error("Мінімальна довжина пароля - 4 символи.");
  }

  let password = "";

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * allChars.length);

    password += allChars[randomIndex];
  }

  return password;
}

const password = generatePassword({
  length: 8,
  useLetters: true,
  useNumbers: true,
  useSymbols: true,
});

console.log("password:", password);
