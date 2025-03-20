const pets = [
    {
      "name": "Дженнифер",
      "img": "../../assets/images/pets-jennifer.jpg",
      "type": "Собака",
      "breed": "Лабрадор-ретривер",
      "description": "Дженнифер — милая двухмесячная лабрадорша, которая терпеливо ждет, когда найдет новый дом навсегда. Эта девочка очень любит выходить на улицу, чтобы побегать и поиграть, но не колеблясь будет играть дома, если у нее есть ее любимые игрушки.",
      "age": "2 месяца",
      "inoculations": ["нет"],
      "diseases": ["нет"],
      "parasites": ["нет"]
    },
    {
      "name": "София",
      "img": "../../assets/images/pets-sophia.jpg",
      "type": "Собака",
      "breed": "Ши-тцу",
      "description": "Меня зовут София, и я ищу свой постоянный дом, чтобы прожить лучшие годы своей жизни. Я полна энергии. Каждый день я учусь чему-то новому, например, как ходить на поводке, ходить в горшок на улице, лаять и играть с игрушками, но мне все еще нужна практика.",
      "age": "1 месяц",
      "inoculations": ["парвовирус"],
      "diseases": ["нет"],
      "parasites": ["нет"]
    },
    {
      "name": "Вуди",
      "img": "../../assets/images/pets-woody.jpg",
      "type": "Собака",
      "breed": "Золотистый ретривер",
      "description": "Вуди — симпатичный мальчик 3,5 лет. Вуди знает основные команды и является умным щенком. Поскольку он сильнее, он многому научится во время вашей дрессировки. Вуди будет счастливее, когда найдет новую семью, которая сможет проводить с ним много времени.",
      "age": "3 года 6 месяцев",
      "inoculations": ["аденовирус"],
      "diseases": ["подвижность правой задней ноги снижена"],
      "parasites": ["нет"]
    },
    {
      "name": "Скарлетт",
      "img": "../../assets/images/pets-scarlet.jpg",
      "type": "Собака",
      "breed": "Джек-рассел-терьер",
      "description": "Скарлетт — счастливая, игривая девочка, которая заставит вас смеяться и улыбаться. Она быстро привязывается и станет преданным компаньоном для одинокого человека или прекрасной семейной собакой, так как она любит проводить время со своим хозяином.",
      "age": "3 месяцев",
      "inoculations": ["парагрипп"],
      "diseases": ["нет"],
      "parasites": ["нет"]
    },
    {
      "name": "Чарли",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Собака",
      "breed": "Джек-рассел-терьер",
      "description": "Этому милому мальчику, Чарли, три года, и он любит взрослых и детей. Он не любит многих других собак, поэтому ему лучше всего подойдет дом с одной собакой. У Чарли много энергии, он любит бегать и играть. Мы думаем, что огороженный двор сделает его очень счастливым.",
      "age": "3 года",
      "inoculations": ["бордетелла бронхисептика", "лептоспироз"],
      "diseases": ["глухота", "слепота"],
      "parasites": ["вши", "блохи"]
    }
];
const cardsCont = document.querySelector('.cards-cont');
const allPagesPetsFunc = () => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < pets.length; j++) {
            arr.push(pets[j]);
        }
    }
    return arr;
}
const allPagesPets = allPagesPetsFunc();

function main(num, num2) {
	cardsCont.innerHTML = '';
    for (let i = num; i <= num2; i++) {
        cardsCont.innerHTML += `
        <div class="card">
            <img src="${allPagesPets[i].img}" alt="" class="img-card">
            <div class="name">${allPagesPets[i].name}</div>                    
            <button class="learn-more nans">Узнать больше</button>
        </div>
        `;
    }
}
main(0, 7);

const nextBtn = document.querySelector('.next-ar');
const prevBtn = document.querySelector('.prev-ar');
const nextAllBtn = document.querySelector('.next-all-ar');
const prevAllBtn = document.querySelector('.prev-all-ar');
const navigNum = document.querySelector('.navig-num');

nextBtn.addEventListener('click', () => {
    if (+navigNum.textContent !== 5) {
		navigNum.innerHTML = `${+navigNum.textContent + 1}`;
		prevBtn.removeAttribute('disabled');
		prevAllBtn.removeAttribute('disabled');
	} else {
		navigNum.innerHTML = `${+navigNum.textContent + 1}`;
		nextBtn.setAttribute('disabled', '');
		nextAllBtn.setAttribute('disabled', '');
	}
});

prevBtn.addEventListener('click', () => {
	if (+navigNum.textContent !== 2) {
		navigNum.innerHTML = `${+navigNum.textContent - 1}`;
		nextBtn.removeAttribute('disabled');
		nextAllBtn.removeAttribute('disabled');
	} else {
		navigNum.innerHTML = `${+navigNum.textContent - 1}`;
		prevBtn.setAttribute('disabled', '');
		prevAllBtn.setAttribute('disabled', '');
	}
});

nextAllBtn.addEventListener('click', () => {
	navigNum.innerHTML = '6';
	nextBtn.setAttribute('disabled', '');
	nextAllBtn.setAttribute('disabled', '');
	prevBtn.removeAttribute('disabled');
	prevAllBtn.removeAttribute('disabled');
});

prevAllBtn.addEventListener('click', () => {
	navigNum.innerHTML = '1';
	prevBtn.setAttribute('disabled', '');
	prevAllBtn.setAttribute('disabled', '');
	nextBtn.removeAttribute('disabled');
	nextAllBtn.removeAttribute('disabled');
});

const adMemuBtn = document.querySelector('.menu');
const html = document.querySelector('html');
const menu = document.querySelector('ul');
const menuLi = document.querySelectorAll('li');
const header = document.querySelector('.header-container');
let num = 1;

function adMenu() {
    if (num % 2) {
        menu.style.right = '0';
        adMemuBtn.style.transform = 'rotate(90deg)';
        num++;
    } else {
        menu.style.right = '-320px';
        adMemuBtn.style.transform = 'rotate(0deg)';
        num++;
    }
}
adMemuBtn.addEventListener('click', adMenu);
menuLi.forEach((el) => el.addEventListener('click', adMenu));

const card = document.querySelectorAll('.card');
const modalWindow = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-button');
const petName = document.querySelector('.pet-name');
const petImage = document.querySelector('.image');
const petAge = document.querySelector('.span-li-age');
const petInocul = document.querySelector('.span-li-ino');
const petDis = document.querySelector('.span-li-dis');
const petParas = document.querySelector('.span-li-par');
const petBreed = document.querySelector('.breed');
const petDescription = document.querySelector('.description');

function openModal() {
    const thisCard = this.children[1].textContent;
    for (let i = 0; i < pets.length; i++) {
        if (thisCard === pets[i].name) {
            modalWindow.style.display = 'block';
            petName.innerHTML = `${pets[i].name}`;
            petImage.src = `${pets[i].img}`;
            petBreed.innerHTML = `${pets[i].breed}`;
            petDescription.innerHTML = `${pets[i].description}`;
            petAge.innerHTML = `${pets[i].age}`;
            petParas.innerHTML = `${pets[i].parasites}`;
            petDis.innerHTML = `${pets[i].diseases}`;
            petInocul.innerHTML = `${pets[i].inoculations}`;
        }
    }
}
card.forEach((el) => el.addEventListener('click', openModal));

function closeModal() {
    modalWindow.style.display = 'none';
}
modalBtn.addEventListener('click', closeModal);