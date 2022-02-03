// MENU
const buttonGroupVertical = document.querySelector(".btn-group-vertical");

buttonGroupVertical.style.display = "flex";
buttonGroupVertical.style.flexDirection = "row";
buttonGroupVertical.style.width = "50%";
buttonGroupVertical.style.justifyContent = "space-between";

const buttonSecondaryArray = document.querySelectorAll(".btn, .btn-secondary");

buttonSecondaryArray.forEach((button) => {
    button.style.width = "auto";
    button.style.borderRadius = "10px";
    button.style.marginRight = "7px";
});

// HEADER
document.querySelector('.btn-primary').style.border = 'none';
document.querySelector('.jumbotron').style.textAlign = 'end';
document.querySelector('.btn-primary').style.backgroundColor = 'var(--green)';
document.querySelector('.jumbotron').style.backgroundColor = '#6c757d';
document.querySelector('.jumbotron').style.color = '#fff';


// CARDS
const cardTitles = Array.from(document.querySelectorAll(".card-title"));
const cards = Array.from(document.querySelectorAll(".card"));

cardTitles.forEach((title) => {
  const closestCard = title.closest("div.card");
  closestCard.dataset["title"] = title.textContent;
});

const title = document.querySelector('[data-title="Animais"] .btn');
title.classList.remove("btn-primary");
title.classList.add("btn-success");

const insertBefore = (node, newNode) => {
  const current = node.parentElement;
  current.insertBefore(newNode, node);
};

const insertAfter = (node, newNode) => {
  const current = node.parentElement;
  current.insertBefore(newNode, node.nextSibling);
};

insertBefore(cards[0].offsetParent, cards[3].offsetParent);

insertAfter(cards[2].offsetParent, cards[1].offsetParent);

// LIST
const listGroup = document.querySelector(".list-group");

const createLi4 = document.createElement("li");
const createTextLi4 = document.createTextNode("Quarto item");
createLi4.classList.add("active");
createLi4.classList.add("list-group-item");
createLi4.appendChild(createTextLi4);

const createLi5 = document.createElement("li");
const createTextLi5 = document.createTextNode("Quinto item");
createLi5.classList.add("list-group-item");
createLi5.appendChild(createTextLi5);

listGroup.appendChild(createLi4);
listGroup.appendChild(createLi5);

const listGroupItemActive = listGroup.firstElementChild;

listGroupItemActive.classList.remove("active");