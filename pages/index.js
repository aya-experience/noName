import React from 'react';
import Main from '../src/web/layout/Main';
import TreeNavigator from '../src/web/widget/TreeNavigator';

const tree = {
  root: {
    className: 'Hello',
    id: 1,
    props: {
      className: 'toto',
      pseudo: 'alfed',
    },
    children: [
      {
        className: 'Hello',
        id: 2,
        props: {
          className: 'toto',
          pseudo: 'alfed',
          bigArray: ['TOTO', 4, 5, 6, ['roxor', 5, 5]],
        },
        children: [
          {
            className: 'Hello',
            id: 7,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 8,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 9,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
            children: [],
          },
        ],
      }, {
        className: 'Hello',
        id: 3,
        props: {
          className: 'toto',
          pseudo: 'alfed',
        },
        children: [
          {
            className: 'Hello',
            id: 10,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 11,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
            children: [],
          },
        ],
      }, {
        className: 'Hello',
        id: 4,
        props: {
          className: 'toto',
          pseudo: 'alfed',
        },
        children: [
          {
            className: 'Hello',
            id: 13,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 4,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 5,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
            children: [],
          },
        ],
      }, {
        className: 'Hello',
        id: 5,
        props: {
          className: 'toto',
          pseudo: 'alfed',
        },
        children: [
          {
            className: 'Hello',
            id: 16,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 17,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
            children: [],
          },
        ],
      }, {
        className: 'Hello',
        id: 6,
        props: {
          className: 'toto',
          pseudo: 'alfed',
        },
        children: [
          {
            className: 'Hello',
            id: 18,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 19,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
          },
          {
            className: 'Hello',
            id: 20,
            props: {
              className: 'toto',
              pseudo: 'alfed',
            },
            children: [],
          },
        ],
      },
    ],
  },
};

const index = () => (
  <Main title="TreeView">
    <TreeNavigator tree={tree.root} />
  </Main>
);
export default index;
