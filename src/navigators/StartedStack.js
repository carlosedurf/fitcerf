import {createStackNavigator} from 'react-navigation-stack';

import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StartedName';
import StartedDias from '../screens/StartedDias';
import StarterNivel from '../screens/StarterNivel';
import StarterRecomendations from '../screens/StarterRecomendations';

export default createStackNavigator({
  StarterIntro,
  StarterName,
  StartedDias,
  StarterNivel,
  StarterRecomendations,
});
