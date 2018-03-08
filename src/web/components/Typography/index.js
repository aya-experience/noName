import connect from './TypographyContainer';
import Text from '../Text';
import Subtitle from '../Subtitle';
import Title from '../Title';

export default {
  Text: connect(Text),
  Subtitle: connect(Subtitle),
  Title: connect(Title),
};
