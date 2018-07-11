# Project @rn-debugger

## Why use it

This application allows to read react-native bridge.

What is this bridge?

The Bridge allows communication between the js of a react application and the peripheral language. In the case of android, the bridge makes a link between JS and Java and in the case of IOS a link between JS and Swift

The messages that navigate in this bridge are in JSON format. They have 4 attributes: type, module, method and argurments (args)

This application will then allow you to display its messages in a console and offers other possibilities such as reading the TreeView of application. This tree is reconstructed using the data intercepted in the bridge.

## How to use it ?

-   Install it with `yarn add @rn-debugger/native-connector --dev` 
 
    or  `npm install --save-dev @rn-debugger/native-connector`
-   Setup the RNConnector in your `index.js`

```javascript
import { AppRegistry } from 'react-native';
import RNConnector from '@rn-debugger/native-connector/dist/RNConnector';
import App from './App';


RNConnector.stream({ server: 'http://[Your Ip address]:3000' });

AppRegistry.registerComponent('RNTest', () => App);
```

- Install the @rn-debugger/cli with 

    `npm install -g @rn-debugger/cli`
    
- Run the tool in your terminal with `rn-debugger`