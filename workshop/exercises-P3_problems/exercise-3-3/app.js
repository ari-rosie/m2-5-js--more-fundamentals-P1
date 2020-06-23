// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const buttons = document.querySelectorAll('button');

const toggleColor = (btn, color1, color2) => {
    (btn.style.backgroundColor === color1) ? btn.style.backgroundColor = color2 : btn.style.backgroundColor = color1;
}

const buttonEffect = (event) => {
    let {id} = event.target;
    let b = document.querySelector(`#${id}`);

    switch (id) {
        case 'btn-1':
            (b.style.opacity === '0') ? b.style.opacity = '1': b.style.opacity = '0';
            break;
        case 'btn-2':
            toggleColor(b, 'gold', 'crimson');
            break;
        case 'btn-3':
            toggleColor(b, 'gold', 'lightblue');
            break;
        case 'btn-4':
            b.classList.toggle('jitters');
            break;
        case 'reset':
            resetBtn();
            break;
        default:
            break;
    }
}

const resetBtn = () => {
    buttons.forEach(btn => {
        if (!btn.classList.contains("reset")) btn.style.backgroundColor = 'gold';
        if (btn.classList.contains('jitters')) btn.classList.remove('jitters');
        console.log(btn.classList.length);
        btn.style.opacity = '1';
        btn.addEventListener('click', buttonEffect);
    })
}

resetBtn();