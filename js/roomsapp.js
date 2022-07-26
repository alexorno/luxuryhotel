const roomDetailsName = document.querySelectorAll('.details-spoiler');
    const roomDetail = document.querySelectorAll('.rooms .additional-text');

    for (let i = 0; i < 2; i++){
        roomDetailsName[i].addEventListener('click', function () {
            roomDetail[i].classList.toggle('active');
        });
    }