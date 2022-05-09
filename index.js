    // Объект для смены языка клавиатуры 
const i18Obj = {
    'en': {
          '`': '`',
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6',
          '7': '7',
          '8': '8',
          '9': '9',
          '0': '0',
          '-': '-',
          '=': '=',
          'backspace': 'backspace',
          'tab': 'tab',
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6',
          '7': '7',
          '8': '8',
          '9': '9',
          '0': '0',
          '-': '-',
          '=': '=',
          'q': 'q',
          'w': 'w',
          'e': 'e',
          'r': 'r',
          't': 't',
          'y': 'y',
          'u': 'u',
          'i': 'i',
          'o': 'o',
          'p': 'p',
          '[': '[',
          ']': ']',
          'slash': 'slash',
          'delete': 'delete',
          'caps lock': 'caps lock',
          'a': 'a',
          's': 's',
          'd': 'd',
          'f': 'f',
          'g': 'g',
          'h': 'h',
          'j': 'j',
          'k': 'k',
          'l': 'l',
          ';': ';',
          "'": "'",
          'enter': 'enter',
          'shift': 'shift',
          'z': 'z',
          'x': 'x',
          'c': 'c',
          'v': 'v',
          'b': 'b',
          'n': 'n',
          'm': 'm',
          ',': ',',
          '.': '.',
          '/': '/',
          'up': 'up',
          'ru': 'ru',
          'ctrl': 'ctrl',
          'win': 'win',
          'alt': 'alt',
          'space': " ",
          'left': 'left',
          'down': 'down',
          'right': 'right',
        },
        
        'ru': {
          '`': 'ё',
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6',
          '7': '7',
          '8': '8',
          '9': '9',
          '0': '0',
          '-': '-',
          '=': '=',
          'backspace': 'backspace',
          'tab': 'tab',
          'q': 'й',
          'w': 'ц',
          'e': 'у',
          'r': 'к',
          't': 'е',
          'y': 'н',
          'u': 'г',
          'i': 'ш',
          'o': 'щ',
          'p': 'з',
          '[': 'х',
          ']': 'ъ',
          'delete': 'delete',
          'slash': 'slash',
          'caps lock': 'caps lock',
          'a': 'ф',
          's': 'ы',
          'd': 'в',
          'f': 'а',
          'g': 'п',
          'h': 'р',
          'j': 'о',
          'k': 'л',
          'l': 'д',
          ';': 'ж',
          "'": "э",
          'enter': 'enter',
          'shift': 'shift',
          'z': 'я',
          'x': 'ч',
          'c': 'с',
          'v': 'м',
          'b': 'и',
          'n': 'т',
          'm': 'ь',
          ',': 'б',
          '.': 'ю',
          '/': '.',
          'up': 'up',
          'ru': 'en',
          'ctrl': 'ctrl',
          'win': 'win',
          'alt': 'alt',
          'space': " ",
          'left': 'left',
          'down': 'down',
          'right': 'right',
        }
};

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init () {
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

        keysContainer.querySelectorAll(".keyboard__key");

    // Добавление элементов в DOM
        document.body.append(h1);
        document.body.append(textarea);
        main.appendChild(keysContainer);
        document.body.appendChild(main);
        keysContainer.append(this.createKeys());

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
        element.addEventListener("focus", () => {
            this.open(element.value, currentValue => {
                element.value = currentValue;
            });
        });
    });
    },

    createKeys() {
    const keyLayoutEn = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
        "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "slash", "delete",
        "caps_lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift", "up", "ru",
        "ctrl", "win", "alt", "space", "alt", "ctrl", "left", "down", "right"
    ];

    // Создание HTML для кнопок клавиатуры
    const fragment = document.createDocumentFragment();
    const createIconHTML = (icon_name) => {
        return `<span class="material-icons">${icon_name}</span>`;
    };
 
    keyLayoutEn.forEach(key => {
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
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value += '\`';
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "backspace":
                    keyElement.classList.add("keyboard__key--backspace");
                    keyElement.innerHTML = "backspace";
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "slash":
                    keyElement.classList.add("keyboard__key--slash");
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value += '\\';
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "delete":
                    keyElement.classList.add("keyboard__key--delete");
                    keyElement.innerHTML = "delete";
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value = this.properties.value.substring(-1, this.properties.value.length-1);
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "tab":
                    keyElement.classList.add("keyboard__key--tab");
                    keyElement.innerHTML = "tab";
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value += '   ';
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "caps_lock":
                    keyElement.classList.add("keyboard__key--caps_lock");
                    keyElement.innerHTML = "caps lock";
                    keyElement.addEventListener("click", (event) => {
                        this.toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--enter");
                    keyElement.innerHTML = "enter";
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value += "\n";
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--space");
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value += " ";
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "left":
                    keyElement.classList.add("keyboard__key--left");
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "up":
                    keyElement.classList.add("keyboard__key--up");
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "down":
                    keyElement.classList.add("keyboard__key--down");
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "right":
                    keyElement.classList.add("keyboard__key--right");
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "shift":
                    keyElement.classList.add("keyboard__key--shift");
                    keyElement.innerHTML = "shift";
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                case "ctrl":
                    keyElement.classList.add("keyboard__key--ctrl");
                    keyElement.innerHTML = "ctrl";
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                 case "ru":
                    keyElement.classList.add("keyboard__key--language");
                    keyElement.setAttribute("data-language", "ru");
                    keyElement.innerHTML = "ru";
                    keyElement.addEventListener("click", (event) => {
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;

                 case "en":
                        keyElement.classList.add("keyboard__key--language");
                        keyElement.setAttribute("data-language", "en");
                        keyElement.innerHTML = "en";
                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener("click", (event) => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this.triggerEvent("oninput");
                        Keyboard.activeElement ();
                        event.target.classList.add('keyboard__key--animate');
                    });
                    break;
            };

        fragment.appendChild(keyElement);
        if (insertLineBreak) {
            fragment.appendChild(document.createElement("br"));
        };

    // Добавление attributes кнопкам клавиатуры для смены языка клавиатуры
        keyElement.setAttribute("data-i18", keyElement.innerHTML);
    });

    return fragment;
    },

    activeElement () {
        let keys = document.querySelectorAll('.keyboard__key');
        keys.forEach(keyElement => {
            keyElement.classList.remove('keyboard__key--active');
            keyElement.classList.remove('keyboard__key--animate');
        });
    },

    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
    }
};

    // Перевод клавиатуры на русский / английский язык
function getTranslate () {
    const allElenemtData = document.querySelectorAll('[data-i18]');
        language = document.querySelector('.keyboard__key--language');
        if (lang === 'ru') {
            translate (allElenemtData);
        };

        language.addEventListener('click', () => {
            translate (allElenemtData);
        });
};

function translate (allElenemtData) {
    allElenemtData.forEach((element) => {
        element.textContent = i18Obj[language.innerHTML][element.dataset.i18];
        if (language.textContent === 'en') {
            lang = 'ru';
        } else {
            lang = 'en';
        };
        setLocalStorage ();
    });
};

    // Загрузка страницы
window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
    getLocalStorage ();
    getTranslate ();
});

    // Перезагрузка страницы
window.addEventListener('beforeunload', setLocalStorage);

    // Local Storage отправить данные
function setLocalStorage () {
    localStorage.setItem('lang', lang);
};

    // Local Storage получить данные
function getLocalStorage () {
    lang = localStorage.getItem('lang');
};











