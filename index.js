import 'react-native-gesture-handler';
import 'src/i18n';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainNavigation from './src/nav/MainNavigation';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => MainNavigation);
