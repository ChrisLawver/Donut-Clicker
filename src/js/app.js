let fredModal = document.getElementById("fred");
let fredLink = document.getElementById("fred-link");
let inspirationModal = document.getElementById("inspiration");
let inspirationLink = document.getElementById("inspiration-link");
let contactModal = document.getElementById("contact");
let contactLink = document.getElementById("contact-link");
let exitFred = document.querySelectorAll(".close")[0];
let exitInspiration = document.querySelectorAll(".close")[1];
let exitContact = document.querySelectorAll(".close")[2];

//Opens modal boxes
function openModal(modalSelect) {
    modalSelect.style.display = "block";
}

fredLink.addEventListener("click", function () {
    openModal(fredModal);
});
inspirationLink.addEventListener("click", function () {
    openModal(inspirationModal);
});
contactLink.addEventListener("click", function () {
    openModal(contactModal);
});

//Closes modal boxes
function closeModal(modalSelect) {
    modalSelect.style.display = "none";
}

exitFred.addEventListener("click", function () {
    closeModal(fredModal);
});
exitInspiration.addEventListener("click", function () {
    closeModal(inspirationModal);
});
exitContact.addEventListener("click", function () {
    closeModal(contactModal);
});
