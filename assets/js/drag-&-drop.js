const dropItems = document.querySelector('.container');

new Sortable(dropItems, {
  animation: 300,
  chosenClass: 'sortable-chosen', // Class name for the chosen item
  dragClass: 'sortable-drag', // Class name for the dragging item

  store: {
    // We keep the order of the list
    set: (sortable) => {
      const order = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, order.join('|'));
    },

    // We get the order of the list
    get: (sortable) => {
      const order = localStorage.getItem(sortable.options.group.name);
      return order ? order.split('|') : [];
    },
  },
});
