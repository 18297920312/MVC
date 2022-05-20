import $ from 'jquery';
import './app2.css';

const $tabBar = $('.tab_bar');
const $tabContent = $('.tab_content');
$tabBar.on('click','li',(e) => {
    $(e.target).addClass('selected')
               .siblings().removeClass('selected');
    const index = $(e.target).index();
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active');
    console.log(index);
})
$tabBar.children().eq(0).trigger('click');