let arr = [];
let img = document.createElement("img");
for (let i = 1; i <= 4; i++) {
    arr.push(`img/${i}.png`)

}
console.log(arr);

let d = document.querySelector(".photo");
d.appendChild(img);


let m = 0;

function f() {
    img.setAttribute("src", arr[m]);
    m++;
    if (m > arr.length - 1) {
        m = 0;
    }
}
f();

function f1() {
    img.setAttribute("src", arr[m]);
    m--;
    if (m < arr.length - 1) {
        m = 0;
    }
}

f1();