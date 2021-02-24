// ПЕРВЫЙ ИЗ ВАРИАНТОВ РЕШЕНИЯ ПО СМЕНЕ ЦВЕТА

// const h2El = document.querySelector('h2');
// const bgEl = document.querySelector('section');

// document.addEventListener('keydown', function(evt) {
//     if (evt.code == "Space") {
//         let color = '#';
//         color += Math.random().toString(16).slice(2, 8);

//         bgEl.style.backgroundColor = color;
//         h2El.innerText = color;
//         console.log(color)
//     }

// })
document.addEventListener("DOMContentLoaded", function () {
    let tabsContent = document.querySelectorAll(".tab__content");
    let tabsControl = document.querySelectorAll(".tab__item");

    tabsControl.forEach( elem => {
        elem.addEventListener("click", function () {
            showTabContent(elem.dataset.tabnumber);
            tabsControl.forEach(elem => {
                elem.classList.remove("tab__item--active");
            });
            this.classList.add("tab__item--active");
        });

    });

    function hideTabContent() {
        for (let i = 1; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");
        }
    };

    hideTabContent();

    function showTabContent (tabnumber) {
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");
        };
        tabsContent[tabnumber - 1].classList.remove("tab--hidden");
    };

});

// ВТОРОЙ ИЗ ВАРИАНТОВ РЕШЕНИЯ ПО СМЕНЕ ЦВЕТА
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');

document.addEventListener('keydown', function (evt) {
    if (evt.code == "Space") {
        let color = '#';
        for (var i = 0; i < 3; i++) {
            var sub = Math.floor(Math.random() * 256).toString(16);
            console.log(sub);
            color += (sub.length == 1 ? "0" + sub : sub);
        }

        bgEl.style.backgroundColor = color;
        h2El.innerText = color;

    }

})
// ТРЕТИЙ ИЗ ВАРИАНТОВ РЕШЕНИЯ ПО СМЕНЕ ЦВЕТА
// function get_random_color() 
// {
//     var color = "";
//     for(var i = 0; i < 3; i++) {
//         var sub = Math.floor(Math.random() * 256).toString(16);
//         color += (sub.length == 1 ? "0" + sub : sub);
//     }
//     return "#" + color;
// }

// function get_rand_color()
// {
//     var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
//     while(color.length < 6) {
//         color = "0" + color;
//     }
//     return "#" + color;
// }


// ГЕНЕРАТОР border-radius
// !не могу понять, как сделать так, чтобы не дублировать код для каждого угла прямоугольника.
// ! также не могу понять, почему если использую class="test-box" в html и css, 
// ! а в javascript пишу var div = document.getElementByClassname('test-box'); - то код не работает почему-то
document.getElementById('r1').oninput = TopLeftborderRadiusGenerator;

function TopLeftborderRadiusGenerator() {
    // прямоугольник
    var div = document.getElementById('test-box');
    // получаю textarea
    var outtopleft = document.getElementById('out-top-left');
    // console.log(this.value);
    div.style.borderTopLeftRadius = this.value + 'px';


    outtopleft.innerHTML = 'Top-Left Radius: ' + this.value + 'px;\n';
}

document.getElementById('r2').oninput = TopRightborderRadiusGenerator;

function TopRightborderRadiusGenerator() {
    // прямоугольник
    var div = document.getElementById('test-box');
    // получаю textarea
    var outtopright = document.getElementById('out-top-right');
    // console.log(this.value);
    div.style.borderTopRightRadius = this.value + 'px';


    outtopright.innerHTML = 'Top-Right Radius: ' + this.value + 'px;';
}

document.getElementById('r3').oninput = BottomLeftborderRadiusGenerator;

function BottomLeftborderRadiusGenerator() {
    // прямоугольник
    var div = document.getElementById('test-box');
    // получаю textarea
    let outbottomleft = document.getElementById('out-bottom-left');
    // console.log(this.value);
    div.style.borderBottomLeftRadius = this.value + 'px';


    outbottomleft.innerHTML = 'Bottom-Left Radius: ' + this.value + 'px;';
}


document.getElementById('r4').oninput = BottomRightborderRadiusGenerator;

function BottomRightborderRadiusGenerator() {
    // прямоугольник
    var div = document.getElementById('test-box');
    // получаю textarea
    let outbottomright = document.getElementById('out-bottom-right');
    // console.log(this.value);
    div.style.borderBottomRightRadius = this.value + 'px';


    outbottomright.innerHTML = 'Bottom-Right Radius: ' + this.value + 'px;';
}


// Форма

let phoneFields = document.querySelectorAll(".phoneInput");
let im = new Inputmask("+38 (099) 999-99-99");
im.mask(phoneFields);

new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 15
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
        }
    },
    messages: {
        name: {
            minLength: "не меньше 2-х символов"
        },
        email: {
            email: "надо добавить символ @"
        },
        phone: {
            required: "Напиши свой номер телефона, а не белиберду"
        }


    },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "mail.php", true);

        let formData = new FormData(form);

        xhr.addEventListener("load", function(){
            if( xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        console.log("Форма отправлена");
                        form.reset();
                        break;
                    case 404:
                        console.log("Ничего не вышло");
                        break;
                    default:
                        console.log("Error");
                        break;   
                    }
            }
        });
        
        xhr.send(formData);


    },
});
