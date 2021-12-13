// JS
const flexContainer = document.getElementById('grid');

// function to get flex-items id 
function getFlexItemId(event){
  // console.log(event.target.id);
  return event.target.id;
}

// function to paint (set dif background color) the flex-items
function paintGrid(e,color){
  if(e.buttons == 1){
    if(e.target.classList == 'flex-item'){
      let flexItem = e.target;
      flexItem.style.backgroundColor = color;
    };
  }else{
    return;
  };
};

// function to add a grid to its parent container
function drawGrid(size=16){
  // get flex-container size divide it by size 
  // size = number of flex-items 
  // -> size 16 results in a 16 x 16 flex-items grid
  const flexItemSize = (document.getElementById('grid').clientWidth / size);
  
  // test
  console.log(flexItemSize);
  
  // loop through grid ( size x size ) and generate the flex-items
  for(let i=1; i<= size*size; i++){
    // create div container ( i.e. flex-item)
    let flexItem = document.createElement('div');
    // append flexItem to container
    flexContainer.appendChild(flexItem);
    // add css class to all flex-items
    flexItem.classList.add('flex-item');
    // add css id's
    flexItem.id = 'flex-item-' + i;
    // adjust height and width of flex-item
    flexItem.style.height = flexItemSize + 'px';
    flexItem.style.width = flexItemSize + 'px';
  };
};

// TEST
flexContainer.addEventListener('mousedown', event => {
  console.log(getFlexItemId(event));
  paintGrid(event, 'black');
  if(event.buttons == 1){
    window.addEventListener('mouseover', (e) => {
      paintGrid(e, 'black');
    });
  };
});

// flexContainer.addEventListener('mouseover', getFlexItemId);

drawGrid(64);