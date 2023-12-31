import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const bigPictureButtonClose = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentCountDisplayed = document.querySelector('.social__comment-shown-count');
const commentCountAll = document.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = document.querySelector('.social__comments');

let arrayComents = [];
let arrayPhotos = [];
let socialCommentCounter = 0;

const getArrayPhotosPopup = (pictures) => {
  arrayPhotos = structuredClone(pictures);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.classList.remove('hidden');
  socialCommentCounter = 0;
  arrayComents = [];
  socialComments.innerHTML = '';
};

const onBigPictureButtonCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const createCommentsElements = (pictureData) => {
  const comments = pictureData.comments;

  comments.forEach(({avatar, name, message}) => {
    let element = `<li class="social__comment">
        <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
        <p class="social__text">${message}</p>
      </li>`;
    element = new DOMParser().parseFromString(element, 'text/html').querySelector('li');
    arrayComents.push(element);
  });
};

const fillBigPicture = ({url, likes, description, comments}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
};

const renderCommentsBigPicture = () => {
  const maxCounter = socialCommentCounter + 5;
  const commentElements = arrayComents.slice(socialCommentCounter, maxCounter);

  commentElements.forEach((_, i) => {
    socialComments.append(commentElements[i]);
    socialCommentCounter += 1;
  });

  if (socialCommentCounter === arrayComents.length) {
    commentsLoader.classList.add('hidden');
  }

  commentCountDisplayed.textContent = socialCommentCounter;
  commentCountAll.textContent = arrayComents.length;
};

const onPicturesContainerClick = (event) =>{
  const targetId = event.target.parentNode.id;
  const pictureData = arrayPhotos.find((element) => element.id === Number(targetId));

  if (event.target.classList[0] === 'picture__img'){
    openBigPicture();
    fillBigPicture(pictureData);
    createCommentsElements(pictureData);
    renderCommentsBigPicture();
  }
};

const onCommentsLoaderClick = () => {
  renderCommentsBigPicture();
};

picturesContainer.addEventListener('click', onPicturesContainerClick);
bigPictureButtonClose.addEventListener('click', onBigPictureButtonCloseClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {getArrayPhotosPopup};
