import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../../nextmaterial/src/web/old/components/Box';
import Subtitle from '../../nextmaterial/src/web/old/components/Subtitle';

storiesOf('Box', module).add('Basic box', () => (
  <Box>
    <Subtitle>Hello world</Subtitle>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa arcu, interdum eget
      tristique ac, porta ut magna. Suspendisse potenti. Mauris congue tortor vitae magna tincidunt
      tincidunt. Suspendisse a bibendum odio. Fusce a faucibus lacus. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sagittis sed neque id
      condimentum. Sed dictum aliquet libero ut placerat. Aliquam quis tincidunt mauris.
    </p>
  </Box>
));
