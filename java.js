function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            alert(message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false")
//-------//
function toggleDropdown(btn) {
    btn.closest('.dropdown').classList.toggle('active');
}

function setValue(element, targetId) {
    var selectedValue = element.getAttribute('value');
    document.getElementById(targetId).innerText = selectedValue;


    var options = element.closest('.dropdown').querySelectorAll('.dropdown-content a');
    options.forEach(function(option) {
        option.classList.remove('selected');
    });

    element.classList.add('selected');

    element.closest('.dropdown').classList.remove('active');
}//-------//
function toggleDropdown(btn) {
    btn.closest('.dropdown').classList.toggle('active');
}

function setValue(element, targetId) {
    var selectedValue = element.getAttribute('value');
    document.getElementById(targetId).innerText = selectedValue;

    // Remove the 'selected' class from all options
    var options = element.closest('.dropdown').querySelectorAll('.dropdown-content a');
    options.forEach(function(option) {
        option.classList.remove('selected');
    });


    element.classList.add('selected');

    element.closest('.dropdown').classList.remove('active');
}
//-----------//
function changeColor(clickedLabel) {
    var rating = parseInt(clickedLabel.previousElementSibling.value);

    var labels = document.querySelectorAll('.rating-container label');
    labels.forEach(function(label) {
        var labelRating = parseInt(label.previousElementSibling.value);
        label.style.backgroundColor = labelRating <= rating ? '#34d399' : '#f3f4f6';
    });
}//----------//