// CPS Clicker Logic
let clickCount = 0;
let cpsInterval;
let startTime;

function startCPSClicker() {
    clickCount = 0;
    document.getElementById('clickCount').innerText = clickCount;
    
    cpsInterval = setInterval(() => {
        clickCount++;
        document.getElementById('clickCount').innerText = clickCount;
    }, 1000);
}

function stopCPSClicker() {
    clearInterval(cpsInterval);
    alert(`Your CPS: ${clickCount}`);
}

// Reaction Test Logic
let reactionStartTime;
let reactionTimeout;

function startReactionTest() {
    alert("Get ready to click!");
    reactionTimeout = Math.random() * 2000 + 1000; // random timeout between 1s and 3s
    setTimeout(showClickPrompt, reactionTimeout);
}

function showClickPrompt() {
    alert("Click now!");
    reactionStartTime = new Date();
}

function checkReactionTime() {
    const reactionTime = new Date() - reactionStartTime;
    alert(`Your reaction time: ${reactionTime} ms`);
}

// HTML Elements (Assumed)
// <button onclick="startCPSClicker()">Start CPS Clicker</button>
// <button onclick="stopCPSClicker()">Stop CPS Clicker</button>
// <div>Click Count: <span id="clickCount">0</span></div>
// <button onclick="startReactionTest()">Start Reaction Test</button>
// <button onclick="checkReactionTime()">Check Reaction</button>