let celebs = [
    {
        title: "Tennis Player",
        name: "Arthur Ashe",
        bio: "Arthur Robert Ashe Jr. was an American professional tennis player who won three Grand Slam titles. Ashe was the first black player selected to the United States Davis Cup team and the only black man ever to win the singles title at Wimbledon, the US Open, and the Australian Open. He retired in 1980.",
        image: "https://thenypost.files.wordpress.com/2018/08/arthur_ashe.jpg?quality=90&strip=all&strip=all",
        lifespan: {
            birth: 1943,            
            death: 1993
        }
    },
    {
        title: "Tennis Player",
        name: "Maria Bueno",
        bio: "She was a Brazilian professional tennis player. During her career in the 1950s and 1960s, she won 19 Grand Slam titles, making her the most successful South American female tennis player in history, and the only one to ever win Wimbledon.",
        image: "http://images0.naharnet.com/images/212308/w460.jpg?1528521773",
        lifespan: {
            birth: 1939,
            death: 2018
        }
    },
    {
        title: "Tennis Player",
        name: "Maureen Connolly",
        bio: "She was an American tennis player, the winner of nine Grand Slam singles titles in the early 1950s. In 1953, she became the first woman to win all four Grand Slam tournaments during the same calendar year. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Maureen_Connolly_1953.jpg/220px-Maureen_Connolly_1953.jpg",
        lifespan: {
            birth: 1934,
            death: 1969
        }
    },
    {
        title: "Tennis Player",
        name: "Vitas Gerulaitis",
        bio: "He was a Lithuanian American professional tennis player. In 1975, Gerulaitis won the men's doubles title at Wimbledon, partnering with Sandy Mayer.During his career Gerulaitis won 25 top-level singles titles and 8 doubles titles.",
        image: "https://tennistipster.files.wordpress.com/2013/07/standard-vitas-g-2.jpg",
        lifespan: {
            birth: 1954,
            death: 1994
        }
    }
]

const celebCardEl = document.getElementsByClassName('card');
const bio = document.getElementsByClassName('cardText');
const inputText = document.getElementById('editText');

const writeToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const celebCardBuilder = () => {
    let newString = "";
    for (let i = 0; i < celebs.length; i++) {
        let cardIndex = celebs.indexOf(celebs[i]) + 1;
        if (cardIndex % 2) {
            newString += `<div class="card even" id="${cardIndex}">`
            newString += `<h3 class="name${i}">${celebs[i].name}</h3>`
            newString += `<h5 class="title${i}">${celebs[i].title}</h5>`
            newString += `<img class="img${i}" style="width: 200px; height: 250px;" src="${celebs[i].image}" alt="Card image cap">`
            newString += `<p class="cardText" id="bio${i}">${celebs[i].bio}</p>`
            newString += `<p class="card-life">${celebs[i].lifespan.birth} - ${celebs[i].lifespan.death}</p>`
            newString += `</div>`;
            printToDom(newString, "celebCards");
        } else {
            newString += `<div class="card odd" id="${cardIndex}">`
            newString += `<h3 class="name${i}">${celebs[i].name}</h3>`
            newString += `<h5 class="title${i}">${celebs[i].title}</h5>`
            newString += `<img class="img${i}" style="width: 200px; height: 250px;" src="${celebs[i].image}" alt="Card image cap">`
            newString += `<p class="cardText" id="bio${i}">${celebs[i].bio}</p>`
            newString += `<p class="card-life">${celebs[i].lifespan.birth} - ${celebs[i].lifespan.death}</p>`
            newString += `</div>`;
            printToDom(newString, "celebCards");
        } celebCardClick();
    }
}

const celebCardClick = () => {
    removeBorder();
    for (let i = 0; i < celebCardEl.length; i++) {
        celebCardEl[i].addEventListener('click', (e) => {
            if (e.target.classList.contains('card')) {
                e.target.classList.toggle('border');
                document.getElementById('editText').focus();
            } else if (e.target.parentNode.classList.contains('card')){
                e.target.parentNode.classList.toggle('border');
                document.getElementById('editText').focus();
            } updateText();
        })
    }
}

const removeBorder = () => {
    for (let i = 0; i < celebCardEl.length; i++) {
            celebCardEl[i].classList.remove('border');
        }
}

const updateText = () => {
    inputText.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.target.value = '';
            inputText.blur();
        }else {
            for (let i = 0; i < celebCardEl.length; i++) {
            const celebCard = celebCardEl[i];
            if (celebCard.classList.contains('border')) {
                celebCard.childNodes[3].innerHTML = e.target.value;
            }
            }
        }
    })
}

// FUNCTIONS
celebCardBuilder();