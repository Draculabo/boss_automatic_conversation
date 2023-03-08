import Conversation from './utils/Conversation';
import './main.tsx';
import { CheckPage } from './utils/CheckPage';
import { Publish } from './utils/Publish';
CheckPage.isDetail() && new Publish().start();
