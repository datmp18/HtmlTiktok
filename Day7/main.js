const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');


$next.addEventListener('click', () => {
    const item = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(item[0]);
},
);
$prev.addEventListener('click',
    () => {
        const item = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(item[item.length - 1]);
    }
)