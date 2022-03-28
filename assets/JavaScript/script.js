const fileUrl = 'assets/JSON/places.json';
let places;
let elements = [];
let parent = document.querySelectorAll('.cards-container');
let modal = document.querySelector('.modal');

// Uses async/await method
// Fetches the JSON file
async function grabData() {
        let response = await fetch(fileUrl);
        places = await response.json();
}

grabData()
    .then(() => {
        createCards();
        cardListener();
    })
    .catch(err => console.error(err))
;

// Uses .then/.catch method
// fetch(fileUrl)
//     .then(response => response.json())
//     .then((data) => {
//         places = data;
//         createCards();
//         cardListener();
//     })
//     .catch(err => console.error(err))
// ;


//Creates all the cards based on the size of the JSON file
function createCards() {
    for (let i = 0; i < places.length; i++) {
        elements.push([]);
    }
    for (let i = 0; i < places.length; i++) {
        for (let j = 0; j < places[i].length; j++) {
            let html = `
            <div class="card m-2 cardhover" style="width: 19.3rem;" data-bs-toggle="modal" data-bs-target="#exampleModal" data-ds-row="${i}" data-ds-col="${j}">
                <img style="height:15rem;" src="assets/Images/${places[i][j].type}/${places[i][j].img}" class="card-img-top" alt="${places[i][j].name}">
                <div class="card-body d-flex align-items-center justify-content-center">
                    <h5 class="card-title">${places[i][j].name}</h5>
                </div>
            </div>`;
            elements[i][j] = html;
        }
    }
    for (let i = 0; i < places.length; i++) {
        parent[i].innerHTML = elements[i].join('');
    }
    for (let i = 0; i < places.length; i++) {
        parent[i + places.length].innerHTML = elements[i].join('');
    }
}   

//Add an event listener to each card
function cardListener() {
    for (let i = 0; i < parent.length; i++) {
        for (let j = 0; j < parent[i].children.length; j++) {
            parent[i].children[j].addEventListener('click', function() {
                let rowPos = this.getAttribute('data-ds-row');
                let colPos = this.getAttribute('data-ds-col');
                updateModal(rowPos, colPos);
            });
        }
    }
}

//Update the Modal's info
function updateModal(row, col) {
    modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${places[row][col].name}</h5>
                <button type="button" class="btn-close"         data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-start">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-9">
                            <iframe src="${places[row][col].map}" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div class="col-sm-3">
                            Hello
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    `
}