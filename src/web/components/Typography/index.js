import connect from './TypographyContainer';
import Text from '../Text';
import Subtitle from '../Subtitle';
import Title from '../Title';

const TextImproved = connect(Text);
const SubtitleImproved = connect(Subtitle);
const TitleImproved = connect(Title);

export {
  TextImproved as Text,
  SubtitleImproved as Subtitle,
  TitleImproved as Title,
  connect as default,
};
