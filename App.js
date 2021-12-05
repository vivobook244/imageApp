import React,{Component} from 'react'
import {View} from 'react-native'
import AppNavigator from './src/navigator/navigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/store/reducer';

export default class App extends Component{
  constructor(props){
    super(props)
    this.store = createStore(reducers);
    
  }

  render(){
    return(
      <Provider store={this.store} >
        <AppNavigator />
      </Provider>
    );
  }

}