// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

//DOM variables
const buttons = document.querySelectorAll('button');


const buttonEffect = btnId => {
    let button = document.querySelector(`#${btnId}`);
    
    switch (btnId) {
        case 'btn-1':
            button.style.opacity = '0%';
            break;
        case 'btn-2':
            button.style.backgroundColor = 'crimson';
            break;
        case 'btn-3':
            button.style.backgroundColor = 'lightblue';
            break;
        case 'btn-4':
            button.classList.toggle('jitters');
            break;               
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttonEffect(this.getAttribute('id'));
    });
});