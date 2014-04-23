(function () {

  var $root = $("#puppy-showcase")
    , puppyTemplate = $("#templates .puppy").html(), puppyTemplate2 = $("#templates .rank").html()


// View Interaction

  // Using event delegation on the $root because the
  // because the image is in the template to be rendered.
  $root.on('click', '.vote-image', function (e) {
    // TODO
    var pupId = $(this).closest(".puppy").data("id")
    console.log(pupId);
    puppies.castVote(pupId);
    // is the object



// On presenters/showcase.js we have a .vote-image click handler.
// This is the callback function that will run when we vote for a specific puppy. You will need to:

// Grab the correct id of the clicked puppy
// Hint: In the puppy template, what value does the data-id
// attribute have?
// Vote for the puppy!
// Hint: What method in our puppy model takes care of this?
// When it works, you should see a Vote cast for: message
// in the console

  });


// Model Interaction

  puppies.on("create", function (puppy) {
    console.log('Spawned puppy:', puppy);
    // TODO
// var newListItemHtml = Robin.render(itemTemplate, item);
    // $view.append(newListItemHtml);
     // so you can render the object, add it in the template
     // append the html to the selecotr
    var newPuppyHtml = Robin.render(puppyTemplate,puppy)
    $root.append(newPuppyHtml)
//When you call the create function in the model how does it let the presenter know what to render?
//What two functions do we need to use to convert the object into html and attach it to the DOM?


  });

  puppies.on('vote-cast', function (puppy) {
    console.log('Vote cast for:', puppy);
    // TODO
    // find image using data
     // var pupId = $((".puppy").data("id")

      // $("ul[data-group='Companies']

      // $("[data-id='" + puppy.id + "']").find('.vote-count').text(puppy.votes)
// understand both ways.
$("[data-id='" + puppy.id + "']").find('.vote-count').html(Robin.render(puppyTemplate2, puppy))

  });

})();

$( "body" ).data( "foo" )

// <a class="slide-link" href="#" data-slide="0">1</a>
// <a class="slide-link" href="#" data-slide="1">2</a>
// <a class="slide-link" href="#" data-slide="2">3</a>
// How can I add a class to the element which has a data-slide attribute value of 0 (zero)?

// I have tried many different solutions but nothing worked. An example:

// $('.slide-link').find('[data-slide="0"]').addClass('active');


// Take the given object puppy and use its id property to find the
// correct html element on the page to update its vote count
// Hint: Your template has a data-id attribute.
// Try googling jquery select by data attribute value
// Update that html element's .vote-count text with the correct vote count.
// When it works, you should see the correct number of times you have voted for a puppy right below its image on the page.















