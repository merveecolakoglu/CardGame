import React from 'react'
import {StyleSheet,SafeAreaView,View,Text} from "react-native";
import Square from "./components/Square";
import GameBoard from "./components/GameBoard";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return(
    <Provider store={store}>
      <GameBoard/>
    </Provider>
  )
}

export default App;
