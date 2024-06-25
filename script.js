const changeImage = function() {
    const imageEl = document.querySelector('#coord-image');

    console.log (imageEl);
    console.log (imageEl.src);

    const xCoord = '01';
    const yCoord = '11';

    const imageSrc = `images/out256_${xCoord}_${yCoord}.jpg`

imageEl.src = imageSrc;
 }

const buttonEl = document.querySelector('#image-changer');
buttonEl.addEventListener('click',changeImage); 

