const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];
const adMemuBtn = document.querySelector('.menu');
const html = document.querySelector('html');
const menu = document.querySelector('ul');
const menuLi = document.querySelectorAll('li');
const header = document.querySelector('.header-container');
let num = 1;

function adMenu() {
    if (num % 2) {
        menu.style.right = '0';
        num++;
        adMemuBtn.style.transform = 'rotate(90deg)';
    } else {
        menu.style.right = '-320px';
        adMemuBtn.style.transform = 'rotate(0deg)';
        num++;
    }
}
adMemuBtn.addEventListener('click', adMenu);
menuLi.forEach((el) => el.addEventListener('click', adMenu));

// const modalWindow = document.querySelector('.modal');
// const modalBtn = document.querySelector('.modal-button');
// let card = document.querySelectorAll('.card');
// const petName = document.querySelector('.pet-name');
// const petImage = document.querySelector('.image');
// const petAge = document.querySelector('.span-li-age');
// const petInocul = document.querySelector('.span-li-ino');
// const petDis = document.querySelector('.span-li-dis');
// const petParas = document.querySelector('.span-li-par');
// const petBreed = document.querySelector('.breed');
// const petDescription = document.querySelector('.description');

// function openModal() {
//     const thisCard = this.children[1].textContent;
//     for (let i = 0; i < pets.length; i++) {
//         if (thisCard === pets[i].name) {
//             modalWindow.style.display = 'block';
//             petName.innerHTML = `${pets[i].name}`;
//             petImage.src = `${pets[i].img}`;
//             petBreed.innerHTML = `${pets[i].breed}`;
//             petDescription.innerHTML = `${pets[i].description}`;
//             petAge.innerHTML = `${pets[i].age}`;
//             petParas.innerHTML = `${pets[i].parasites}`;
//             petDis.innerHTML = `${pets[i].diseases}`;
//             petInocul.innerHTML = `${pets[i].inoculations}`;
//         }
//     }
//     overflow.style.right = '0';
//     html.classList.add('html');
// }
// card.forEach((el) => el.addEventListener('click', openModal));

// function closeModal() {
//     modalWindow.style.display = 'none';
//     overflow.style.right = '-100%';
//     html.classList.remove('html');
// }
// overflow.addEventListener('click', closeModal);
// modalBtn.addEventListener('click', closeModal);

// const cardCont = document.querySelector('.cards-cont');
// const leftBtn = document.querySelector('.btn-left-one');
// const rigthBtn = document.querySelector('.btn-left-two');

// leftBtn.addEventListener('click', () => {
//     cardCont.innerHTML = '';
//     pets.sort(() => Math.random() - 0.5);
//     for (let i = 5; i < pets.length; i++) {
//         cardCont.innerHTML += `
//         <div class="card">
//             <img src="${pets[i].img}" alt="" class="img-card">
//             <div class="name">${pets[i].name}</div>                    
//             <button class="learn-more nans">Learn more</button>
//         </div>
//         `;
//     }
//     card = document.querySelectorAll('.card');
//     card.forEach((el) => el.addEventListener('click', openModal));
// });

// rigthBtn.addEventListener('click', () => {
//     cardCont.innerHTML = '';
//     pets.sort(() => Math.random() - 0.5);
//     for (let i = 5; i < pets.length; i++) {
//         cardCont.innerHTML += `
//         <div class="card">
//             <img src="${pets[i].img}" alt="" class="img-card">
//             <div class="name">${pets[i].name}</div>                    
//             <button class="learn-more nans">Learn more</button>
//         </div>
//         `;
//     }
//     card = document.querySelectorAll('.card');
//     card.forEach((el) => el.addEventListener('click', openModal));
// });
