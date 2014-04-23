$(function () {

  var $root = $('form.new-puppy');

// View Interaction

  $root.on('submit', function (e) {
    // TODO
    e.preventDefault();
    // create an object
    // save the forum inputs into the values of the object
    newPuppy = {

      name: $('.name',$root).val(),
      image_url : $('.image',$root).val()
    };

    puppies.create(newPuppy);
  });

});


// Use the data from the form inputs to build an object.
// Call the model's create function so that the model can store the newly created object.
// When it works, you should see a Spawned puppy: message in the console.

// select html with form and class new-puppy


// root is pointing to the form


// when form is submitted save the values of the form as an object


// presnter pass the newly created object to the model???

// by called .create!



