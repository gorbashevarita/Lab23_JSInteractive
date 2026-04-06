const form = document.getElementById("form");
const name = document.getElementById("name");
const age = document.getElementById("age");
const town = document.getElementById("town");
const hobbi = document.getElementById("hobbi");
const show = document.getElementById("show");
const clean = document.getElementById("clean");
const output = document.getElementById("output");

show.addEventListener("click", () => {
    form.style.border = "none";
    output.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
        output.textContent = "Ошибка: Введите имя!";
        form.style.border = "2px solid #ff6b6b";
        name.focus();
        isValid = false;
    }

    const ageValue = age.value.trim();
    if (ageValue === "") {
        output.textContent = "Ошибка: Введите возраст!";
        form.style.border = "2px solid #ff6b6b";
        age.focus();
        isValid = false;
    } else {
        const age1 = Number(ageValue);
        if (age1 < 1 || age1 > 120) {
            output.textContent = "Ошибка: Введите корректный возраст (от 1 до 120)!";
            form.style.border = "2px solid #ff6b6b";
            age.focus();
            age.value = "";
            isValid = false;
        }
    }

    if (town.value.trim() === "") {
        output.textContent = "Ошибка: Введите город!";
        form.style.border = "2px solid #ff6b6b";
        town.focus();
        isValid = false;
    }

    if (hobbi.value.trim() === "") {
        output.textContent = "Ошибка: Введите хобби!";
        form.style.border = "2px solid #ff6b6b";
        hobbi.focus();
        isValid = false;
    }
    if (isValid) {
        output.textContent =`Имя: ${name.value.trim()}\nВозраст: ${age.value}\nГород: ${town.value}\nХобби: ${hobbi.value}`;
    }
});

clean.addEventListener("click", () => {
    form.reset();
    form.style.border = "none";
    output.textContent = "";
});