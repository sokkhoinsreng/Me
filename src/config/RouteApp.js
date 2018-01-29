import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '.././screen/HomeScreen'
import FeedbackScreen from '../screen/FeedbackScreen'
import DataEmployee from '../screen/DataEmployee';
import PreViewScreen from '../screen/PreviewScreen';
import PreViewChoiceScreen from '../screen/PreviewChoiceScreen';
import DataClient from '../screen/DataClient';
import MenuScreen from '../screen/MenuScreen';

const RootNavigator = StackNavigator({
  Menu:{
    screen: MenuScreen,
    navigationOptions:{
      gesturesEnabled:false
    }
  },
  Home: {
    screen: HomeScreen,
    
  },
  Feedback:{
      screen: FeedbackScreen,
  },
  PreviewScreen:{
    screen: PreViewScreen,
   
  },
  PreviewChoice:{
    screen: PreViewChoiceScreen,
  },
  DataClient:{
    screen: DataClient,
  },
  DataEmployee:{
    screen: DataEmployee,
  },
},
navigationOptions = {
    headerMode: 'none',
  },
);

export default RootNavigator;