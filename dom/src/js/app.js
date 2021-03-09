function genPosition() {
  return Math.floor(Math.random() * (16 - 0)) + 0;
}

const parentDiv = document.getElementsByClassName('wrapper')[0];
const firstIndex = genPosition();
const img = document.createElement('img');
img.src = '../images/goblin.png';

for (let i = 0; i < 4 * 4; i += 1) {
  const div = document.createElement('div');
  parentDiv.appendChild(div);
  if (firstIndex === i) div.appendChild(img);
}

function setActive() {
  const activeDiv = document.images[0].parentElement;
  activeDiv.removeChild(img);

  const childDivs = parentDiv.children;
  const index = genPosition();
  childDivs[index].appendChild(img);
}

const timerId = setInterval(setActive, 1500);
setTimeout(() => { clearInterval(timerId); }, 5000);
