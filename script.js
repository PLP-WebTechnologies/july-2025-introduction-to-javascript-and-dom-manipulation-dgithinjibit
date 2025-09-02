// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a dynamic message based on a word from an array
function generateDynamicMessage(keywords) {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    const selectedWord = keywords[randomIndex];
    return `Embrace ${selectedWord}. Adapt to win.`;
}

// 🎯 Part 1: Mastering JavaScript Basics
const ctaButton = document.getElementById('cta-button');
const dynamicText = document.getElementById('dynamic-text');
const featureList = document.getElementById('feature-list');
const countdownTimer = document.getElementById('countdown-timer');
const dynamicBg = document.getElementById('dynamic-bg');

let isFutureUnleashed = false;
const keywords = ["Decentralization", "Innovation", "Sovereignty", "Autonomy"];

function updateIntroText() {
    if (isFutureUnleashed) {
        dynamicText.textContent = generateDynamicMessage(keywords);
        ctaButton.textContent = "Future Unleashed!";
        dynamicText.classList.add('highlight');
    } else {
        dynamicText.textContent = "Web4 is more than just a buzzword. It's a paradigm shift where data ownership is returned to the user, and decentralized applications (dApps) thrive on blockchain technology. Click the button below to see the future in action!";
        ctaButton.textContent = "Unleash the Future!";
        dynamicText.classList.remove('highlight');
    }
}

// ❤️ Part 2: JavaScript Functions
function createFeatureListItem(feature, color) {
    const li = document.createElement('li');
    li.textContent = feature;
    li.style.borderColor = color; // Dynamic border color
    return li;
}

function getCountdown(targetDate) {
    const now = new Date();
    const distance = targetDate - now;

    if (distance < 0) {
        return "Launch successful!";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


// 🔁 Part 3: JavaScript Loops
const principles = ["Decentralization", "Security", "User Ownership", "Transparency", "Interoperability", "Trust"];

principles.forEach(principle => {
    const randomColor = getRandomColor();
    const listItem = createFeatureListItem(principle, randomColor);
    featureList.appendChild(listItem);
});

// Out-of-the-box idea: A continuous loop that changes the background gradient.
// This gives a subtle, dynamic visual effect.
setInterval(() => {
    const newColor1 = getRandomColor();
    const newColor2 = getRandomColor();
    dynamicBg.style.background = `radial-gradient(circle at top left, ${newColor1}, transparent),
                                  radial-gradient(circle at bottom right, ${newColor2}, transparent)`;
}, 5000); // Changes colors every 5 seconds

// A while loop for the countdown timer.
const launchDate = new Date("October 1, 2025 10:00:00");
const countdownInterval = setInterval(() => {
    const countdownText = getCountdown(launchDate);
    countdownTimer.textContent = countdownText;

    if (countdownText === "Launch successful!") {
        clearInterval(countdownInterval);
        countdownTimer.classList.add('highlight');
    }
}, 1000);


// 🌐 Part 4: Mastering the DOM with JavaScript
ctaButton.addEventListener('click', () => {
    isFutureUnleashed = !isFutureUnleashed;
    updateIntroText();

    // Out-of-the-box idea: Animate the button on click.
    ctaButton.style.transform = 'scale(1.1) rotate(5deg)';
    setTimeout(() => {
        ctaButton.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
});

// DOM Interaction 2: Change the page title on hover over the header.
const header = document.querySelector('header');
header.addEventListener('mouseover', () => {
    document.title = 'Web4: Dynamic & Evolving';
});

header.addEventListener('mouseout', () => {
    document.title = 'Web4: The Decentralized Future';
});

// DOM Interaction 3: Animate each list item on scroll.
// This is a common but effective way to make a page feel modern and responsive.
const featureItems = document.querySelectorAll('#feature-list li');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the item is visible

// Initial styles to be animated.
featureItems.forEach(item => {
    item.style.transform = 'scale(0.8)';
    item.style.opacity = '0';
    item.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    observer.observe(item);
});
