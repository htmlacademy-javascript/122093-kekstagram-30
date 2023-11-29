import { getPhotoCards } from './data.js';
import {renderPictures} from'./miniature.js';

const data = getPhotoCards();
renderPictures(data);
