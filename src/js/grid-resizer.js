function resizeGridItem(item) {
  const grid = document.getElementsByClassName('news__list')[0];
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
  );
  const rowSpan = Math.ceil(
    (item.querySelector('.news__list-article').getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName('news__list-item');
  for (let i = 0; i < allItems.length; i++) {
    resizeGridItem(allItems[i]);
  }
}

function resizeInstance(instance) {
  const item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener('resize', resizeAllGridItems);

// const allItems = document.getElementsByClassName('news__list-item');
// for (let i = 0; i < allItems.length; i++) {
//   () => {
//     allItems[i], resizeInstance;
//   };
// }
