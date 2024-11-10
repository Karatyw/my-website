function registerUser() {
    // Получаем значения из полей формы
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверяем, что все поля заполнены
    if (username && email && password) {
        alert("Регистрация прошла успешно!\nИмя пользователя: " + username + "\nEmail: " + email);
        
        // Очищаем форму после успешной регистрации
        document.getElementById('registrationForm').reset();
        
        return false; // Предотвращаем отправку формы
    } else {
        alert("Пожалуйста, заполните все поля.");
        return false;
    }
}
