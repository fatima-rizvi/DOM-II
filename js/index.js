// Create listeners for 10 types of events

//mouseover 
const letsGoSection = document.querySelector('.content-section:nth-of-type(1)');
const mapImg = letsGoSection.querySelector('img');
mapImg.addEventListener('mouseover', function(event) {
    switchMap();
});

//mouseenter

const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseenter', function(event){
    changeHeaderImg();
});

//keydown
const body = document.querySelector('body');
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const destination1 = document.querySelector('.destination:nth-of-type(1)')
const destination2 = document.querySelector('.destination:nth-of-type(2)')
const destination3 = document.querySelector('.destination:nth-of-type(3)')
const bottomButton1 = destination1.querySelector('.btn')
const bottomButton2 = destination2.querySelector('.btn')
const bottomButton3 = destination3.querySelector('.btn')
body.addEventListener('keydown',function(event) {
    if (event.key === '`'){
        darkModeColors();
    }
});

//resize
window.addEventListener('resize', function(event) {
    changePink();
})

//dblclick
const inverseSection = document.querySelector('.content-section:nth-of-type(2)');
const adventureImg = inverseSection.querySelector('img');
const adventureHeader = inverseSection.querySelector('h2');
const adventureText1 = inverseSection.querySelector('p');
const adventureText2 = adventureText1.nextElementSibling;
adventureImg.addEventListener('dblclick', function(event) {
    becomeGarfield();
})

//mousedown
const contentDestination = document.querySelector('.content-destination');
const destinationImage = contentDestination.querySelector('img');
destinationImage.addEventListener('mousedown', function(event){
    console.log('Hi');
    destinationImage.style.visibility = 'hidden';
});

//contextmenu
document.addEventListener('contextmenu', function(event) {
    body.style.backgroundImage = `url("https://www.publicdomainpictures.net/pictures/90000/velka/question-marks-background.jpg")`;
});

//click

document.addEventListener('click', function(event) {
    colorReset();
});

//copy 

document.addEventListener('copy', function(event) {
    body.style.backgroundImage = `url("https://markbondffl.files.wordpress.com/2016/01/stop-plagiarism.jpg")`;
})

//dragstart
adventureImg.addEventListener('dragstart', function(event) {
    adventureImg.setAttribute('src','https://accuform-img2.akamaized.net/files/damObject/Image/huge/MEQM613.jpg');
})

//Helper functions
function changeHeaderImg () {
    headerImg.setAttribute('src','https://kids.scholastic.com/content/dam/scholastic/kids/header/the-magic-school-bus/msb_header2.jpg');
}

function darkModeColors () {
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
    header.style.color = 'black';
    header.style.backgroundColor = 'green';
    footer.style.color = 'black';
    footer.style.backgroundColor = 'green';
    bottomButton1.style.backgroundColor = 'green';
    bottomButton2.style.backgroundColor = 'green';
    bottomButton3.style.backgroundColor = 'green';
}

function changePink () {
    body.style.color = 'maroon';
    body.style.backgroundColor = 'pink';
    header.style.color = 'white';
    header.style.backgroundColor = 'maroon';
    bottomButton1.style.backgroundColor = 'maroon';
    bottomButton2.style.backgroundColor = 'maroon';
    bottomButton3.style.backgroundColor = 'maroon';
    footer.style.color = 'white';
    footer.style.backgroundColor = 'maroon';
}

function becomeGarfield () {
    adventureImg.setAttribute('src','https://www.interviewmagazine.com/wp-content/uploads/2019/04/garfield_fendi.jpg');
    adventureHeader.textContent = "Hi! I'm Garfield";
    adventureText1.textContent = "I'm just your average, ordinary cat... for instance, I'm crazy about nature's most perfect food... LASAGNA! I dream of a day when lasagna is a pizza topping.";
    adventureText2.textContent = "All I ever do is eat and sleep, eat and sleep, eat and sleep. There must be more to a cat's life than that. But I hope not. Did you know that I can sleep with my eyes open?";
}

function switchMap() {
    mapImg.setAttribute('src','https://i.pinimg.com/originals/65/80/d2/6580d2bed791e628011f75973b5c788d.jpg');
}

function colorReset () {
    body.style.backgroundImage = '';
    body.style.color = 'black';
    body.style.backgroundColor = 'white';
    header.style.color = 'black';
    header.style.backgroundColor = 'white';
    footer.style.color = 'black';
    footer.style.backgroundColor = '#FFEBCD';
    bottomButton1.style.backgroundColor = '#17A2B8';
    bottomButton2.style.backgroundColor = '#17A2B8';
    bottomButton3.style.backgroundColor = '#17A2B8';
};