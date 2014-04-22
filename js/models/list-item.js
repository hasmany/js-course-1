(function () {
// captial letter is object constructor !!
  var ListItem = function () {
    // The "private" data
    var items = [];

    // Add the .on and .trigger methods to the new object being created
    Robin.extend(this, Robin.Events);

    this.create = function (listItem) { // listItem is an object
      // TODO  // creates a list item

//       Add the new item to the "private" array
// Trigger a create event so that all presenters can know about the new item
// When it works, you should see the new item show up on the page.

      // trigger: function (listItem) {
      //   var i, l, args;
      //   args = Array.prototype.slice.call(listItem, 1);
      //   for (i = 0, l = this.events[eventName].length; i < l; i++) {
      //     this.events[eventName][i].apply(null, args);
      //   }
      // }

      items.push(listItem);
      this.trigger('create',listItem);
    };

    this.destroy = function (index) {
      // TODO  // destory an item at index

//       In models/list-item.js, implement the destroy method. You will need to:

// Remove the item from the array (HINT: Use the .splice array method)
// Trigger a destroy event, and pass along the index of the deleted item
// When it works, you should see the item be removed from the page.

      items.splice(index,1)
      this.trigger('destroy',index)

    };

    this.update = function (index, name, priority) {
      // TODO EXTENSION
      this.trigger('update', items[index], index);
    };

  };

  // Create a global modal instance. Later we'll learn a better place to put this
  window.listItems = new ListItem();

})();
