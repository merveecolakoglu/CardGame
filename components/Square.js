import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { addScore } from "../redux";
import {connect } from "react-redux"

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const randomTime = Math.random() * 20000;
  let timerId

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, 800);
    }, randomTime);
    setTimeout(endGame, 11 * 1000);
  }, []);

  function endGame() {
    clearInterval(timerId);
    setIsGameOver(true);
  }

  return (
    <TouchableOpacity onPress={moleActive?props.addScore:null}>
      <SafeAreaView style={moleActive ? styles.mole : styles.square}>
        <View>
          {isGameOver && <Text>X</Text>}
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    minHeight: 80,
    minWidth: 80,
    margin: 10,
    backgroundColor: "pink",
  },
  mole: {
    flex: 1,
    minHeight: 80,
    minWidth: 80,
    margin: 10,
    backgroundColor: "plum",
  },
});

const mapStateToProps =state => {
  return{
    score:state.score
  }
}

const mapDispatchToProps =dispatch =>{
  return{
    addScore:()=>dispatch(addScore())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Square);
