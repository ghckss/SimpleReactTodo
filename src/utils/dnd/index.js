class DragNDrop {
  element = null;

  handleDragStart = e => {
    this.element = e.currentTarget;
    e.dataTransfer.setData("target", e.currentTarget.outerHTML);
  };

  handleDragEnter = e => {};

  handleDragOver = e => {
    e.preventDefault();
  };

  handleDragLeave = e => {};

  handleDrop = e => {
    if (this.element !== e.currentTarget) {
      const dropHTML = e.dataTransfer.getData("target");
      e.currentTarget.parentNode.removeChild(this.element);
      e.currentTarget.insertAdjacentHTML("afterend", dropHTML);
      const dropElem = e.currentTarget.nextSibling;
      this.addDnDHandlers(dropElem);
    } else {
      return false;
    }
  };

  handleDragEnd = e => {};

  addDnDHandlers = element => {
    element.addEventListener("dragstart", e => this.handleDragStart(e));
    element.addEventListener("dragenter", e => this.handleDragEnter(e));
    element.addEventListener("dragover", e => this.handleDragOver(e));
    element.addEventListener("dragleave", e => this.handleDragLeave(e));
    element.addEventListener("drop", e => this.handleDrop(e));
    element.addEventListener("dragend", e => this.handleDragEnd(e));
  };
}

export default DragNDrop;
