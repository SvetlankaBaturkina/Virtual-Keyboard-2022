let keysContainer;
let main;
let keyElement;

function init () {
     // Создание main элементов
    let h1 = document.createElement('h1');
        h1.innerText = 'Virtual Keyboard';
    let textarea = document.createElement('textarea');
        main = document.createElement('div');
        keysContainer = document.createElement('div');    
            
    // Добавление attributes/classes main элементам        
        h1.classList.add('title');
        textarea.classList.add('use-keyboard-input');
        main.classList.add("keyboard", "keyboard--hidden");
        keysContainer.classList.add("keyboard__keys");

    // Добавление элементов в DOM
        document.body.append(h1);
        document.body.append(textarea);
        main.appendChild(keysContainer);
        document.body.appendChild(main);
        keysContainer.append(createKeys());
            
    //let keys = keysContainer.querySelectorAll(".keyboard__key");
};

function createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
        "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "slash", "delete",
        "caps_lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift", "up", "ru",
        "ctrl", "win", "alt", "space", "alt", "ctrl", "left", "down", "right"
    ];
    // Создание HTML для кнопок клавиатуры
    const createIconHTML = (icon_name) => {
        return `<span class="material-icons">${icon_name}</span>`;
    };
    keyLayout.forEach(key => {
        keyElement = document.createElement("button");
    const insertLineBreak = ["backspace", "delete", "enter", "en"].indexOf(key) !== -1;

    // Добавление attributes/classes кнопкам клавиатуры
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");

    // Добавление кнопок клавиатуры в DOM
        keysContainer.appendChild(keyElement);
            switch (key) {
                case "`":
                    keyElement.classList.add("keyboard__key--backquote");
                    keyElement.innerHTML = "`";
                    break;
                case "backspace":
                    keyElement.classList.add("keyboard__key--backspace");
                    keyElement.innerHTML = "backspace";
                    break;
                case "slash":
                    keyElement.classList.add("keyboard__key--slash");
                    break;
                case "tab":
                    keyElement.classList.add("keyboard__key--tab");
                    keyElement.innerHTML = "tab";
                    break;
                case "caps_lock":
                    keyElement.classList.add("keyboard__key--caps_lock");
                    keyElement.innerHTML = "caps lock";
                    break;
                case "enter":
                    keyElement.classList.add("keyboard__key--enter");
                    keyElement.innerHTML = "enter";
                    break;
                case "space":
                    keyElement.classList.add("keyboard__key--space");
                    break;
                case "left":
                    keyElement.classList.add("keyboard__key--left");
                    break;
                case "up":
                    keyElement.classList.add("keyboard__key--up");
                    break;
                case "down":
                    keyElement.classList.add("keyboard__key--down");
                    break; 
                case "right":
                    keyElement.classList.add("keyboard__key--right");
                    break;
                case "shift":
                    keyElement.classList.add("keyboard__key--shift");
                    keyElement.innerHTML = "shift";
                    break;
                case "ctrl":
                    keyElement.classList.add("keyboard__key--ctrl");
                    keyElement.innerHTML = "ctrl";
                    break;
                 case "ru":
                    keyElement.classList.add("keyboard__key--ru");
                    keyElement.setAttribute("data-language", "ru");
                    keyElement.innerHTML = "ru";
                    break;
                default:
                    keyElement.textContent = key.toLowerCase();
                    break;
            };
        fragment.appendChild(keyElement);
        if (insertLineBreak) {
            fragment.appendChild(document.createElement("br"));
        };
    });
        return fragment;
};

    // Загрузка страницы
    window.addEventListener("DOMContentLoaded", function () {
    init();
    createKeys();
});
