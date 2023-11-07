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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomId = createRandomIdFromRangeGenerator(1, 25);
const getRandomUrl = createRandomIdFromRangeGenerator(1, 25);
const getRandomCommentId = createRandomIdFromRangeGenerator(1, 750);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getComments = function() {
  return {
    id: getRandomCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  };
};

const publishPhoto = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, getComments)
});

const publishedPhotos = Array.from({length: PUBLISHED_PHOTO_COUNT}, publishPhoto);

window.console.log(publishedPhotos);
