$(document).ready(function() {
    // Event listener for adding a new item
    $('#button').on('click', function() {
      addItem();
    });
  
    // Event listener for pressing Enter key
    $('#input').on('keydown', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        addItem();
      }
    });
  
    // Event listener for marking an item as completed
    $('#list').on('dblclick', 'li', function() {
      $(this).toggleClass('strike');
    });
  
    // Event listener for deleting an item
    $('#list').on('click', 'crossOutButton', function() {
      $(this).parent().remove();
    });
  
    // Make the list sortable
    $('#list').sortable();
  
    // Function to add a new item
    function addItem() {
      let listItem = $('#input').val();
      if (listItem !== '') {
        let newItem = '<li>' + listItem + '<crossOutButton>X</crossOutButton></li>';
        $('#list').append(newItem);
        $('#input').val('');
      }
    }
  });
  