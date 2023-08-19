document.getElementById("nameBtn").addEventListener("click", showMessage);

function showMessage() {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
        document.getElementById("nameInput").classList.add("hidden");
        const displayName = document.getElementById("displayName");
        displayName.textContent = name;
        document.getElementById("messageDisplay").classList.remove("hidden");
        createHeartAnimations(); // Add this line
    }
}

function createHeartAnimations() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        const xPos = Math.random() * container.offsetWidth;
        const yPos = Math.random() * container.offsetHeight;
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;
        container.appendChild(heart);
    }
}


document.getElementById("nameBtn").addEventListener("click", showMessage);

function showMessage() {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
        document.getElementById("nameInput").classList.add("hidden");
        const displayName = document.getElementById("displayName");
        displayName.textContent = name;
        document.getElementById("messageDisplay").classList.remove("hidden");
        createHeartAnimations();

        setTimeout(function() {
            document.getElementById("connectButton").classList.remove("hidden");
        }, 3000); // Show the "Connect" button after 3 seconds
    }
}

// document.getElementById("instagramBtn").addEventListener("click", function() {
//     window.location.href = "https://www.instagram.com/direct/t/17846812686027781/";
// });

// document.getElementById("whatsappBtn").addEventListener("click", function() {
//     window.location.href = "https://wa.me/your_whatsapp_number";
// });







