# Project @the-package-name

## Why use it

This application allows to read react-native bridge.

What is this bridge?

The Bridge allows communication between the js of a react application and the peripheral language. In the case of android, the bridge makes a link between JS and Java and in the case of IOS a link between JS and Swift

The messages that navigate in this bridge are in JSON format. They have 4 attributes: type, module, method and argurments (args)

This application will then allow you to display its messages in a console and offers other possibilities such as reading the TreeView of application. This tree is reconstructed using the data intercepted in the bridge.

## How to use it ?

-   Install it with `yarn add @the-package-name` or `npm install --save-dev @the-package-name`
-   Setup the RNConnector in your `index.js`
```javascript
import { AppRegistry } from 'react-native';
import { RNConnector } from '@the-package-name';
import App from './App';

// Setup the connector
RNConnector.stream({ server: 'http://192.168.1.149:3000' });

AppRegistry.registerComponent('RNTest', () => App);
```
-   Run the server with `npm run serve` or `yarn serve`

## Commande

- `npm run serve [--port -p 3000]` or `yarn serve [--port -p 3000]` 


