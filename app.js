var result;
var clearBtn = document.querySelector('.clear');
function generateButtons() {
    var buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(function (letter) {
        return "\n        <button\n          class=\"btn\"\n          id='" + letter + "'\n          onClick=\"GenerateLetter('" + letter + "')\"\n        >\n          " + letter + "\n        </button>\n      ";
    }).join('');
    document.querySelector('.letter').innerHTML += buttonsHTML;
}
var GenerateLetter = function (chosenLetter) {
    var i = '';
    console.log(i);
    document.querySelector('.output').innerHTML += chosenLetter;
};
generateButtons();
clearBtn.addEventListener('click', function () {
    document.querySelector('.output').innerHTML = "";
});
