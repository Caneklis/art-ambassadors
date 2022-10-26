function resizeGridItem(item) {
  const grid = document.querySelector('.news__list');
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
  );

  // const rowGap = parseInt(
  //   window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
  // );
  const rowGap = window.getComputedStyle(grid).getPropertyValue('grid-row-gap');
  const rowSpan = Math.ceil(
    (item.querySelector('.news__list-article a').getBoundingClientRect()
      .height +
      rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = 'span ' + rowSpan;

  console.log(rowHeight);
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName('news__list-item');
  for (let i = 0; i < allItems.length; i++) {
    resizeGridItem(allItems[i]);
    const test = parseInt(
      window.getComputedStyle(allItems[i]).getPropertyValue('height')
    );

    // console.log(test);
  }
}

function resizeInstance(instance) {
  const item = instance.elements[0];
  resizeGridItem(item);
}

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    window.onload = resizeAllGridItems();
    window.addEventListener('resize', resizeAllGridItems);
  });
});

// window.onload = resizeAllGridItems();
// window.addEventListener('resize', resizeAllGridItems);

// const allItems = document.getElementsByClassName('news__list-item');
// for (let x = 0; x < allItems.length; x++) {
//   imagesLoaded(allItems[x], resizeInstance);
// }

// const allItems = document.getElementsByClassName('news__list-item');
// for (let i = 0; i < allItems.length; i++) {
//   () => {
//     allItems[i], resizeInstance;
//   };
// }
