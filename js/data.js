import {getRandomInteger, getId} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Денис',
  'Вова',
  'Саша',
  'Маша',
  'Даша',
  'Ксюша',
  'Богдан',
  'Игорь',
  'Слава',
  'Влад',
  'Илья',
  'Дима'
];

const DESCRIPTIONS = [
  'какое то описание №1',
  'какое то описание №2',
  'какое то описание №3',
  'какое то описание №4',
  'какое то описание №5',
  'какое то описание №6',
  'какое то описание №7',
  'какое то описание №8',
  'какое то описание №9',
  'какое то описание №10'
];

const PUBLISHED_PHOTO_COUNT = 25;
const getCommentId = getId();
const getUrl = getId();
const getPhotoId = getId();

const getComments = function() {
  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

const getPhotoCard = function () {
  return {
    id: getPhotoId(),
    url: `photos/${getUrl()}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, getComments)
  };
};

const getPhotoCards = function () {
  return Array.from({length: PUBLISHED_PHOTO_COUNT}, getPhotoCard);
};

export {getPhotoCards};
