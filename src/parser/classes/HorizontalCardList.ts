import Parser from '../index';
import { YTNode } from '../helpers';
import SearchRefinementCard from './SearchRefinementCard';
import Button from './Button';

class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards;
  header;
  previous_button;
  next_button;

  constructor(data: any) {
    super();
    this.cards = Parser.parseArray<SearchRefinementCard>(data.cards, SearchRefinementCard);
    this.header = Parser.parseItem(data.header);
    this.previous_button = Parser.parseItem<Button>(data.previousButton, Button);
    this.next_button = Parser.parseItem<Button>(data.nextButton, Button);
  }
}

export default HorizontalCardList;