// this variable has global scope
var boxClass = 'movingDiv';

// define functions in this file
function outputBox(num) {
    box = "<div class='movingDiv' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}