function sortEvents() {
    let sortValue = document.getElementById("sort").value;
    let eventBox = document.getElementById("events");
    let eventList = Array.from(eventBox.children);

    if (sortValue === "name") {
        eventList.sort(function(a, b) {
            return a.dataset.name.localeCompare(b.dataset.name);
        });
    } else {
        eventList.sort(function(a, b) {
            return new Date(a.dataset.date) - new Date(b.dataset.date);
        });
    }

    eventBox.innerHTML = "";

    eventList.forEach(function(event) {
        eventBox.appendChild(event);
    });
}

function showImage(btn){
    const card = btn.closest(".card");
    const img = card.querySelector(".project-img");

    if (img.style.display === "block") {
        img.style.display = "none";
        btn.innerText = "View";
    } else {
        img.style.display = "block";
        btn.innerText = "Hide";
    }
}

// past events
function showImage(btn){
    const card = btn.closest(".event-card");
    const img = card.dataset.img;
    const imageTag = card.querySelector(".event-img");

    if(imageTag.style.display === "block"){
        imageTag.style.display = "none";
        btn.innerText = "View Image";
    } else {
        imageTag.src = img;
        imageTag.style.display = "block";
        btn.innerText = "Hide Image";
    }
}
function showImage(btn){
    const card = btn.parentElement;
    const img = card.querySelector(".event-img");
    const imgPath = card.getAttribute("data-img");

    // toggle logic
    if (img.style.display === "block") {
        img.style.display = "none";
        btn.innerText = "View Image";
    } else {
        img.src = imgPath;
        img.style.display = "block";
        btn.innerText = "Hide Image";
    }
}
function toggleImage(button) {
    const card = button.closest(".event-card");
    const img = card.querySelector(".event-img");
    const imgPath = card.getAttribute("data-img");

    img.src = imgPath;
    img.classList.toggle("show");

    if (img.classList.contains("show")) {
        button.textContent = "Hide Image";
    } else {
        button.textContent = "View Image";
    }
}



