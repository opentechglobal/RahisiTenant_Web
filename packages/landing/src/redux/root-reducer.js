import { combineReducers } from 'redux';
import Auth from '../authentication/reducer';
import App from './app/reducer';
import Mails from './mail/reducer';
import Calendar from './calendar/reducer';
import Box from './box/reducer';
import Notes from './notes/reducer';
import Todos from './todos/reducer';
import Contacts from './contacts/reducer';
import Cards from './card/reducer';
import Chat from './chat/reducers';
import DynamicChartComponent from './dynamicEchart/reducer';
import Ecommerce from './ecommerce/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import Invoices from './invoice/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import YoutubeSearch from './youtubeSearch/reducers';
import Articles from './articles/reducers';
import Investors from './investors/reducers';
import scrumBoard from './scrumBoard/reducer';
import drawer from './drawer/reducer';
import modal from './modal/reducer';
import quiz from './quiz/reducer';
import profile from './profile/reducer';
import githubSearch from './githubSearch/reducers';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  Box,
  Notes,
  Todos,
  Contacts,
  Cards,
  Chat,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  YoutubeSearch,
  Articles,
  Investors,
  scrumBoard,
  modal,
  quiz,
  drawer,
  profile,
  githubSearch,
});
