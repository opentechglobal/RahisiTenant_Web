import { all } from 'redux-saga/effects';
import authSagas from '../authentication/sagas';
import contactSagas from './contacts/saga';
import invoicesSagas from './invoice/saga';
import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import ecommerceSaga from './ecommerce/saga';
import cardsSagas from './card/saga';
import chatSagas from './chat/sagas';
import youtubeSearchSagas from './youtubeSearch/sagas';
import githubSagas from './githubSearch/sagas';
import articles from './articles/sagas';
import investors from './investors/sagas';
import scrumBoardSaga from './scrumBoard/saga';
import quizSaga from './quiz/saga';

import profileSaga from './profile/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    contactSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    ecommerceSaga(),
    cardsSagas(),
    invoicesSagas(),
    chatSagas(),
    youtubeSearchSagas(),
    articles(),
    investors(),
    scrumBoardSaga(),
    quizSaga(),
    profileSaga(),
    githubSagas(),
  ]);
}
