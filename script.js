

//SELECTORS
let homeBtn = document.querySelector(".home-content");
let productsBtn = document.querySelector(".products-content");
let contactBtn = document.querySelector(".contact-content");
let aboutBtn = document.querySelector(".about-content");
let mainContent = document.querySelector(".main");

let productsDeck = document.createElement("div");
productsDeck.classList.add("card-group");

window.addEventListener("load", async () => {
  HomeGenerate();
});

async function getProducts(){
    let url = "http://localhost:8001/products";
    try {
        let res = await fetch(url);
        console.log(res)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getProductById(id){
    let url = `http://localhost:8001/products/${id}`;
    try {
        let res = await fetch(url);
        console.log(res)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


homeBtn.addEventListener("click", () => {
  HomeGenerate();
});

productsBtn.addEventListener("click", async () => {
  console.log("Products btn clicked");
  ProductsGenerate();
});

contactBtn.addEventListener("click", () => {
  console.log("Contact Button Clicked!");
  mainContent.innerHTML = "<h1>This is my Contact Page</h1>";
});

aboutBtn.addEventListener("click", () => {
  console.log("About Button Clicked!");
  mainContent.innerHTML = "<h1>This is my About Page</h1>";
});

async function ShowDetails(id) {
  console.log("Details ", id);
  let p = await getProductById(id);
  mainContent.innerHTML = `
            <div class="card" style="max-width: 18rem; margin: 0 13px 10px 0">
            <input type="hidden" value="${p[0].id}">
                <img src="${p[0].imgurl}" class="card-img-top" alt="${p[0].title}">
                <div class="card-body">
                <h5 class="card-title">${p[0].title}</h5>
                <p class="card-text">${p[0].synopsis}</p>
                <a href="#" class="btn btn-primary" onclick="BackToProducts()">Back</a>
                </div>
            </div>
            `;
}

function BackToProducts() {
  ProductsGenerate();
}

function HomeGenerate() {
  mainContent.innerHTML = "";
  mainContent.innerHTML = `<div class="p-5 mb-4 bg-light rounded-3">
                                <div class="container-fluid py-5">
                                <h1 class="display-5 fw-bold">Home Page</h1>
                                <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                                <button class="btn btn-primary btn-lg" type="button">Movie Store</button>
                                </div>
                            </div>
        `;
}

async function ProductsGenerate() {
  mainContent.innerHTML = "";
  productsDeck.innerHTML = "";
  let products = await getProducts();
  
    products.forEach(p => {
        console.log(p.title);
        let productsTemplate = `
        <div class="card" style="min-width: 18rem; margin: 0 13px 10px 0">
        <input type="hidden" value="${p.id}">
            <img src="${p.imgurl}" class="card-img-top" alt="${p.title}">
            <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.synopsis}</p>
            <a href="#" class="btn btn-primary" onclick="ShowDetails(${p.id})">More Info...</a>
            </div>
        </div>
    `;
        productsDeck.insertAdjacentHTML("beforeend", productsTemplate);

    });
    mainContent.appendChild(productsDeck);

}

// let products = [
//     {
//         MovieId: 1,
//         Title:"The Shining",
//         Genre : "Horror",
//         Synopsis:"Writer Jack Torrance takes a job as a winter caretaker of the Overlook Hotel in the remote Colorado mountains. He moves in, along with his wife Wendy and son Danny, in the hope that the isolation will cure his writer’s block. But as the weather isolates them, Jack descends into madness. And then apparitions from the hotel’s past appear, imploring Jack to kill his family.",
//         ImgUrl : "https://pics.filmaffinity.com/the_shining-453129380-large.jpg"

//     },
//     {
//         MovieId : 2,
//         Title : "Ran",
//         Genre : "Drama",
//         Synopsis : "A reinterpretation of William Shakespeare's 'King Lear'. The Lear counterpart is an elderly 16th-century warlord (Tatsuya Nakadai), who announces that he's about to divide his kingdom equally among his three sons. In his dotage, he falls prey to the false flattery of his treacherous sons (Akira Terao and Jinpachi Nezu), while banishing his youngest son (Daisuke Ryu), the only member of the family who loves him enough to tell him the unvarnished truth. Thanks to his foolish pride, his domain collapses under its own weight as the sons battle each other over total control.",
//         ImgUrl : "https://pics.filmaffinity.com/ran-397228667-large.jpg"
//     },
//     {
//         MovieId : 3,
//         Title : "Fight Club",
//         Genre : "Action",
//         Synopsis : "A nameless disillusioned young urban male (Edward Norton) fights insomnia by attending disease support groups until he meets a kindred spirit -and soap salesman (Brad Pitt). Together they form Fight Club, where young men can exert their frustrations and angst upon one another.",
//         ImgUrl : "https://pics.filmaffinity.com/fight_club-320750671-large.jpg"
//     },
//     {
//         MovieId : 4,
//         Title : "The Adventures of Picasso",
//         Genre : "Comedy",
//         Synopsis : "Already in his childhood, Pablo Picasso shows talent for painting and is sent to the Academy of Arts in Madrid. He becomes a painter but has to live in Paris in poverty. But one day he is discovered by a rich American millionaire and starts to earn money. But he wastes his talent by painting plates. He meets the famous people of the 1920s; Gertrude Stein, Alice B. Toklas, Appolinaire, Hitler and Churchill",
//         ImgUrl : "https://pics.filmaffinity.com/picassos_aventyr-145972801-large.jpg"
//     },
//     {
//         MovieId : 5,
//         Title : "The Hateful Eight",
//         Genre : "Thriller",
//         Synopsis : "In THE HATEFUL EIGHT, set or eight or twelve years after the Civil War, a stagecoach hurtles through the wintry Wyoming landscape. The passengers, bounty hunter John Ruth (Russell) and his fugitive Daisy Domergue (Leigh), race towards the town of Red Rock where Ruth, known in these parts as “The Hangman,” will bring Domergue to justice.",
//         ImgUrl : "https://pics.filmaffinity.com/the_hateful_eight-549467052-large.jpg"
//     },

// ]
