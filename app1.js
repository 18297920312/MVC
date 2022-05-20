import $ from 'jquery';
import "./app1.css";

const $num = $('#num');
let n = parseInt($num.text());
if(localStorage.getItem('n') !== null){
    n = parseFloat(localStorage.getItem('n'));
    $num.text(n);
}
console.log(typeof(n));
$('#add').on('click',() => {
    // let n = parseInt($num.text());
    n += 3;
    localStorage.setItem('n',n)
    $num.text(n);
    console.log(typeof n);
})

$('#minus').on('click',() => {
    // let n = parseInt($num.text());
    n -= 3;
    localStorage.setItem('n',n)
    $num.text(n);
})

$('#mult').on('click',() => {
    // let n = parseInt($num.text());
    n *= 3;
    localStorage.setItem('n',n)
    $num.text(n);
})

$('#div').on('click',() => {
    // let n = parseInt($num.text());
    n /= 3;
    localStorage.setItem('n',n)
    $num.text(n);
})