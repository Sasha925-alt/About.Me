const list = document.getElementById('list');
const cards = document.querySelectorAll('.add1');
console.log(list, cards);

// Стиль
btnAdd.onclick = () => list.classList.add('add');
btnRemove.onclick = () => list.classList.remove('add');
btnToggle.onclick = () => list.classList.toggle('add');


btnFlex.onclick = () => {
  cards.forEach(card => card.classList.add('flex'));
};


btnPhoto.onclick = () => {
  const old = document.getElementById('photo');
  if (old) return old.remove();

  const img = document.createElement('img');
  img.id = 'photo';
  img.src = './images/LIKE.png';
  img.classList.add('img');
  list.appendChild(img);
};

btnMore.onclick = () => {
  const old = document.getElementById('more');
  if (old) return old.remove();

  const box = document.createElement('div');
  box.id = 'more';
  box.classList.add('p');
  box.innerHTML = `
    <h3>More about me</h3>
    <p>I love fishing and sports. I want to become a web developer.</p>
    <a href="https://github.com/Sasha925-alt">My GitHub</a>
  `;
  list.appendChild(box);
};