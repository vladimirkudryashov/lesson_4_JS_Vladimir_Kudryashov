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
    
   
    outtopright.innerHTML = 'Top-Right Radius: '+ this.value + 'px;';
}

document.getElementById('r3').oninput = BottomLeftborderRadiusGenerator;

function BottomLeftborderRadiusGenerator() {
    // прямоугольник
    var div = document.getElementById('test-box');
    // получаю textarea
    let outbottomleft = document.getElementById('out-bottom-left');
    // console.log(this.value);
    div.style.borderBottomLeftRadius = this.value + 'px';
    
   
    outbottomleft.innerHTML = 'Bottom-Left Radius: '+ this.value + 'px;';
}


document.getElementById('r4').oninput = BottomRightborderRadiusGenerator;

function BottomRightborderRadiusGenerator() {
    // прямоугольник
    var div = document.getElementById('test-box');
    // получаю textarea
    let outbottomright = document.getElementById('out-bottom-right');
    // console.log(this.value);
    div.style.borderBottomRightRadius= this.value + 'px';
    
   
    outbottomright.innerHTML = 'Bottom-Right Radius: '+ this.value + 'px;';
}
