import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../../nextmaterial/src/web/old/components/Container';
import Title from '../../nextmaterial/src/web/old/components/Title';
import Text from '../../nextmaterial/src/web/old/components/Text';
import Sidebar from '../../nextmaterial/src/web/old/components/Sidebar';

const children = (
  <Container>
    <Title>Titre de la page</Title>
    <Text>
      Commodo consectetur laboris adipisicing cupidatat qui irure laboris in sint adipisicing.
      Aliquip ex ad velit culpa. Consectetur labore commodo deserunt ea elit mollit nostrud occaecat
      et proident. Esse adipisicing tempor mollit cillum dolore laborum eiusmod esse sunt amet
      culpa. Aliquip irure exercitation in est eu dolor mollit consectetur pariatur ullamco ex nisi
      id. Labore magna est ad magna nisi ullamco cupidatat dolor.
    </Text>
  </Container>
);

storiesOf('Sidebar', module)
  .add('basic sidebar', () => <Sidebar content={<div>Sidebar Content</div>}>{children}</Sidebar>)
  .add('with color', () => (
    <Sidebar color="#F00" content={<div>Sidebar Content</div>}>
      {children}
    </Sidebar>
  ))
  .add('with width', () => (
    <Sidebar width="300px" content={<div>Sidebar Content</div>}>
      {children}
    </Sidebar>
  ));
