function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}


const SPRINKLE_HEIGHT = 16;
const SPRINKLE_WIDTH = 5;
const COLORS = ["#FFFFFF", "#EDE730", "#8D5636", "#f03e3e", "#0b7285"];
const DENSITY = 0.00035;
const CHUNK = 1;



document.querySelectorAll(".sprinkles").forEach(cont => {
    const count = Math.floor(DENSITY * cont.clientHeight * cont.clientWidth);
    const xValues = shuffle([...Array(count).keys()].map(i => i / count * cont.clientWidth));
    let i = 0;

    function addPoint() {
        if (i >= count) return;
        for (let j = 0; j < CHUNK; j++, i++) {
            const node = document.createElement("div");
            node.classList.add("sprinkle");
            node.style.height = `${SPRINKLE_HEIGHT}px`;
            node.style.width = `${SPRINKLE_WIDTH}px`;
            node.style.transform = `translateX(${xValues[i]}px) translateY(${Math.random() * (cont.clientHeight - 0.8 * 3 * SPRINKLE_HEIGHT) + 0.8 * SPRINKLE_HEIGHT}px) rotate(${Math.random() * 360}deg)`;
            node.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
            cont.appendChild(node);
        }
        setTimeout(addPoint, 1000 / (count / CHUNK));
    }

    addPoint();
});