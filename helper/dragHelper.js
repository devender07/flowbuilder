// function call when user start dragging node form sidebar
// it take out node(object) from sidebar and store in event(e)
export const handleDragStart = (e, item) => {
    const dragItem = JSON.stringify(item);
    e.dataTransfer.setData('text/plain', dragItem);  // 'text/plain' specific name for using draggable api in android browser
}
// prevent default functiuonality
export const handleDragOver = (e) => {
    e.preventDefault();
}

// function call when dragged node dropped into node drop zone
export const handleDrop = (e) => {
    const droppedItem = JSON.parse(e.dataTransfer.getData('text/plain'))
    return droppedItem;
}