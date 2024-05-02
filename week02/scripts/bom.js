const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const delete_button = document.createElement('button');
li.textContent = input.value;
delete_button.textContent = 'X';
list.append(delete_button);
list.append(li);

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {}
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });
input.value = '';
input.focus();