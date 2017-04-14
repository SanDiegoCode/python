var on = false;

function toggleSolution() {
    if (on) {
        document.getElementById("solution").style.display = 'none';

    } else {
        document.getElementById("solution").style.display = '';


    }
    on = !on;
}
