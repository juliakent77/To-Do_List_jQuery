
// var todoForm = document.getElementById('todo-form');
// var todoList = document.getElementById('todo-list');


var todoForm = $('todo-form');
var todoList = $('todo-list');

$('submit').click(function(event) {
  event.preventDefault();
  var elem = $(event.target);

  var todo = elem.todoInput.value;

  var li = $(add.('li'));
  var input = $(add.('input'));
  var p = $(add.('p'));
  var deleteButton = $(add.('button'));
  var clearDiv = $(add.('div'));

  li.className = $('fadeIn');
  input.type = $('checkbox');
  p.innerHTML = $(todo);
  deleteButton.innerHTML = $('Delete');
  clearDiv.className = $('clearfix');

  $(deleteButton).click function(event) {
    $(elem).parent().remove();
  };

  $('li').append(input);
  $('li').append(p);
  $('li').append(deleteButton);
  $('li').append(clearDiv);

  $('todoList').append(li);

  elem.todoInput.value = '';
});
