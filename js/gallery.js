'use strict';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryContainer = document.querySelector(".gallery");

// task3
const galleryItemsMarkup = images
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

galleryContainer.innerHTML = galleryItemsMarkup;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
});

//task 4
const galleryContainer = document.querySelector(".gallery");

Object.assign(galleryContainer.style, {
  display: 'flex',
  flexWrap: 'wrap',          
  justifyContent: 'flex-start', 
  gap: '24px 24px',          
  padding: '24px 156px',     
  listStyle: 'none',
  margin: '0',
  boxSizing: 'border-box',
});

const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
  Object.assign(item.style, {
    margin: '0',               
    boxSizing: 'border-box',
  });

  const img = item.querySelector(".gallery-image");
  Object.assign(img.style, {
    width: '360px',
    height: '200px',
    display: 'block',
    borderRadius: '0',         
    cursor: 'pointer',
  });
});

//task5
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); 

  const clickedImage = event.target; 
  if (clickedImage.nodeName !== 'IMG') return; 

  const largeImageSrc = clickedImage.dataset.source; 
  console.log(largeImageSrc); 
});

//task7
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); 

  const clickedImage = event.target;
  if (clickedImage.nodeName !== 'IMG') return; 
  const largeImageSrc = clickedImage.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageSrc}" alt="${clickedImage.alt}" />
  `);

  instance.show();
});
