const list = document.querySelector('#list');
const listItems = [].concat(...list.children);

listItems.forEach((li, i) => {
  li.addEventListener('click', () => {
    swap(li, i);
  });

  function swap(li, i) {

    let newL = listItems.splice(i, 1);
    newL.unshift(li);

    console.log(li);
    // return newL;
  }

});
