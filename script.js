var global = 0;

function addOne() {
    global ++;
}
function showNum() {
    alert(`You clicked ${global} times`);
}