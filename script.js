document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.all');
    const image = document.querySelector('.image');
    const summary = document.querySelector('.summary');
    const education = document.querySelector('.education');
    const experience = document.querySelector('.experience');
    const container = document.querySelector('.container');
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');
    const container3= document.querySelector('.container3');
    const name1 = document.querySelector('.name');
    const li1 = document.querySelector('.li1 a');  
    const li2 = document.querySelector('.li2 a');
    const li3 = document.querySelector('.li3 a');

    function mouseout1() {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.3s';
    }

    function mouseout2() {
        logo.style.transform = 'scale(1)';
    }
    console.log(logo);
    logo.addEventListener('mouseover', mouseout1);
    logo.addEventListener('mouseout', mouseout2);
    console.log(logo);

    function hideContent() {
        image.style.display = 'none';
        summary.style.display = 'none';
        education.style.display = 'none';
        experience.style.display = 'none';
        name1.style.display = 'none';
    }

    function content_summary() {
        hideContent();
        container2.style.display='none';
        container3.style.display='none';
        container1.classList.remove('hidden');
        container1.style.textAlign = 'left';
        container1.style.display = 'block';
    }

    function content_education() {
        hideContent();
        container1.style.display='none';
        container3.style.display='none';
        container.style.maxWidth='600px'
        container2.classList.remove('hidden');
        container2.style.textAlign = 'left';
        container2.style.display = 'block';
    }
    function content_experience() {
        hideContent();
        container1.style.display='none';
        container2.style.display='none';
        container.style.maxWidth='600px'
        container3.classList.remove('hidden');
        container3.style.textAlign = 'left';
        container3.style.display = 'block';
    }

    // Lắng nghe sự kiện click
    li1.addEventListener('click', (event) => {
        event.preventDefault();  // Ngăn chặn hành động mặc định của liên kết
        content_summary();
    });
    li2.addEventListener('click', (event) => {
        event.preventDefault();  // Ngăn chặn hành động mặc định của liên kết
        content_education();
    });
    li3.addEventListener('click', (event) => {
        event.preventDefault();  // Ngăn chặn hành động mặc định của liên kết
        content_experience();
    });
});
