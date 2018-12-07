//=========Importing react-navigation components
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import List from './screens/List';
import Detail from './screens/Detail';

const RootNavigator = createStackNavigator({
       Home: List,
       Detail: Detail,
      },

    {
      defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: '#2a3daa',
      },
      headerTintColor: '#ffffff'
  }
  
});

export default createAppContainer(RootNavigator);
