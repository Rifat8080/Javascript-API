import './style.css';

const mylist = [
  {
    description: 'Mohammad : 100',
    index: 1,
  },
  {
    description: 'Yakub : 96',
    index: 2,
  },
  {
    description: 'Yusuf : 95',
    index: 3,
  },
  {
    description: 'Musa : 90',
    index: 4,
  },
];

const getmylist = () => {
  const listGroup = document.querySelector('.score-record');
  mylist.map((item) => {
    const listElement = document.createElement('li');
    listElement.classList = 'score-list';
    listElement.id = `${item.index}`;
    listElement.innerText = item.description;
    return listGroup.appendChild(listElement);
  });
};

window.addEventListener('load', getmylist);
