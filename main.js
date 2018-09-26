let celebs = [
    {
        title: "Queen",
        name: "Elizabeth I",
        bio: "Queen of England and Ireland. She was the daughter of Henry VIII and Anne Boleyn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Darnley_stage_3.jpg/330px-Darnley_stage_3.jpg",
        lifespan: {
          birth: 1533,
          death: 1603
        }
    },
    {
        title: "Duchess",
        name: "Elizabeth the Queen Mother",
        bio: "The wife of King George VI. She was Queen consort of the United Kingdom from her husband's accession in 1936 until his death in 1952",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Queen_Elizabeth_the_Queen_Mother_portrait.jpg/330px-Queen_Elizabeth_the_Queen_Mother_portrait.jpg",
        lifespan: {
          birth: 1900,
          death: 2002
        }
    },
    {
        title: "Princess",
        name: "Margaret",
        bio: "The younger daughter of King George VI and Queen Elizabeth and the only sibling of Queen Elizabeth II",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Princess_Margaret_1965b_%28cropped%29.jpg/330px-Princess_Margaret_1965b_%28cropped%29.jpg",
        lifespan: {
          birth: 1930,
          death: 2002
        }
    },
    {
        title: "King",
        name: "George VI",
        bio: "King of the United Kingdom and the Dominions of the British Commonwealth from 11 December 1936 until his death in 1952. He was the last Emperor of India and the first Head of the Commonwealth.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/King_George_VI_of_England%2C_formal_photo_portrait%2C_circa_1940-1946.jpg/330px-King_George_VI_of_England%2C_formal_photo_portrait%2C_circa_1940-1946.jpg",
        lifespan: {
          birth: 1895,
          death: 1952
        }
    }
]

let celebCardEl = document.getElementsByClassName('card');


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
            newString += `<div class="even card" id="${cardIndex}">`
            newString +=    `<h5 class="name${i}">${celebs[i].title} ${celebs[i].name}</h5>`
            newString +=    `<img class="img${i}" style="width: 275px; height: 325px;" src="${celebs[i].image}" alt="Card image cap">`
            newString +=    `<p class="bio${i} card-text">${celebs[i].bio}</p>`
            newString +=    `<p class="life${i}">${celebs[i].lifespan.birth} - ${celebs[i].lifespan.death}</p>`
            newString += `</div>`;
            printToDom(newString, "celebCards");
        } else {
            newString += `<div class="odd card" id="${cardIndex}">`
            newString +=    `<h5 class="name${i}">${celebs[i].title} ${celebs[i].name}</h5>`
            newString +=    `<img class="img${i}" style="width: 275px; height: 325px;" src="${celebs[i].image}" alt="Card image cap">`
            newString +=    `<p class="bio${i} card-text">${celebs[i].bio}</p>`
            newString +=    `<p class="life${i}">${celebs[i].lifespan.birth} - ${celebs[i].lifespan.death}</p>`
            newString += `</div>`;
            printToDom(newString, "celebCards");
        } celebCardClick();
    }
}

const celebCardClick = () => {
    for (let i = 0; i < celebCardEl.length; i++) {
        celebCardEl[i].addEventListener('click', (e) => {
            let element = e.target;
            console.log(element);
            if (element.classList.contains('card')) {
                element.style.border = "4px dotted black";
            } else {
                element.parentNode.style.border = "4px dotted black";
            }
        })
    }
}

// FUNCTIONS
celebCardBuilder();