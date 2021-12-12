// JS
const flexContainer = document.getElementById('grid');

function drawGrid(size=16){
  // get flex-container size divide it by size 
  // size = number of flex-items 
  // -> size 16 results in a 16 x 16 flex-items grid
  const flexItemSize = (document.getElementById('grid').clientWidth / size);
  
  // test
  // alert(flexItemSize);
  
  // loop through grid ( size x size ) and generate the flex-items
  for(let i=1; i<= size*size; i++){
    // create div container ( i.e. flex-item)
    let flexItem = document.createElement('div');
    // append flexItem to container
    flexContainer.appendChild(flexItem);
    // add css class to all flex-items
    flexItem.classList.add('flex-item');
    // adjust height and width of flex-item
    flexItem.style.height = flexItemSize + 'px';
    flexItem.style.width = flexItemSize + 'px';
  };
};

// TEST
drawGrid(64);