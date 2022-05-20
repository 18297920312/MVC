import $ from 'jquery';
import './app4.css';

const $circle = $('#app4 .circle');
$circle.on('mouseenter',() => {
    $circle.addClass('bian');
}).on('mouseleave',() => {
    $circle.removeClass('bian')
})