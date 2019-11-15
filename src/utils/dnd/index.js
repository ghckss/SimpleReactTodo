class DragNDrop {
  handleDrag = e => {
    const target = e.currentTarget;
    const list = target.parentNode;
    const x = e.clientX;
    const y = e.clientY;

    target.classList.add("drag-sort-active");

    const draggableFromPoint = document
      .elementFromPoint(x, y)
      .closest('[draggable="true"]');
    let swapItem = draggableFromPoint === null ? target : draggableFromPoint;

    if (list === swapItem.parentNode) {
      swapItem =
        swapItem !== target.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(target, swapItem);
    }
  };

  handleDragEnd = e => {
    e.target.classList.remove("drag-sort-active");
  };
}

export default DragNDrop;
