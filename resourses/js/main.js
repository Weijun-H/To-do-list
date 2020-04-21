// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        console.log("111");
    }
});


function addItem(value) {
    addItemToDOM(value);
    document.getElementById('item').value = '';


}