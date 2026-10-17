
let isOpen = { skills: false, certificates: false 
};

function toggleSkills(type, btn) /*هنا تضيف اي اسم بتاع دفات */{
    let more = document.querySelector('.more-' + type);

    if(more.style.maxHeight === '0px' || more.style.maxHeight === ''){
        more.style.maxHeight = more.scrollHeight + 'px'; // دي احسن بتقيس الطول براها
        btn.innerText = 'See Less';
        isOpen[type] = true;
    } else {
        more.style.maxHeight = '0px';
        btn.innerText = 'See More';
        isOpen[type] = false;
    }
}
