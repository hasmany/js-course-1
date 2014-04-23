(function () {

  var idCounter = 0; // id is zero
  var generateId = function () { // function will return 'puppy string'
    idCounter += 1; // also increased the counter
    return 'puppy_' + idCounter;
  };

  var getIdIndexOf = function (array, id) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i].id === id) { // goes through arrayy if is id, return index
        return i;
      }
    }
    return -1; // why return -1 ?
  };
   // object constructor
  var Puppy = function () {
    // The "private" variable
    var puppies = [];
    var index = 0;

    Robin.extend(this, Robin.Events);

    // CRUD type functions
    this.create = function (pup) {
      pup.id = generateId();
      pup.votes = 0;
      puppies.push(pup);

      this.trigger("create", pup);
    };

    // Data manipulation type functions
    this.castVote = function (id) {
      var index = getIdIndexOf(puppies, id);
      var puppy = puppies[index];
      puppy.votes += 1;
      // this tells the presenter - Hey! This add thing just happened in the model
      this.trigger("vote-cast", puppy);
    };

    this.getSortedArray = function () {
      // TODO EXTENSION
    };

  };

  window.puppies = new Puppy();

})();
