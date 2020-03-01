import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preload from '../screens/Preload';
import StartedStack from './StartedStack';
import AppTab from './AppTab';

const MainStack = createStackNavigator(
  {
    Preload,
    StartedStack,
    AppTab,
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainStack);
