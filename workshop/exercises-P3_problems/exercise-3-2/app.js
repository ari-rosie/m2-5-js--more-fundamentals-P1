// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

//DOM variables
const buttons = document.querySelectorAll('button');

//setting background color BTN2 and BTN3
const b2 = document.querySelector('#btn-2');
const b3 = document.querySelector('#btn-3');
b2.style.backgroundColor = 'gold';
b3.style.backgroundColor = 'gold';


const toggleColor = (button, color1, color2) => {
    (button.style.backgroundColor === color1) ? button.style.backgroundColor = color2 : button.style.backgroundColor = color1;
}
const buttonEffect = function(btnId) {
    let btn = document.querySelector(`#${btnId}`);
    switch (btnId) {
        case 'btn-1':
            (btn.style.opacity == '0') ? btn.style.opacity = '100%': btn.style.opacity = '0%';
            break;
        case 'btn-2':
            toggleColor(btn, 'gold', 'crimson');
            break;
        case 'btn-3':
            toggleColor(btn, 'gold', 'lightblue');
            break;
        case 'btn-4':
            btn.classList.toggle('jitters');
            break;      
    }
}


buttons.forEach(btn => {
        btn.style.opacity = '1';
        btn.addEventListener('click', function() {
        buttonEffect(this.getAttribute('id'));
    });

});