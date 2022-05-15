import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Square from "./Square";
import {connect } from "react-redux"

const GameBoard = (props) => {
  const [timeLeft,setTimeLeft]=useState(11)

  useEffect(()=>{
    if(!timeLeft) return
    const timerId=setInterval(()=>{
      setTimeLeft(timeLeft-1)
    },1000)
    return ()=>clearInterval(timerId)
  },[timeLeft])

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Merve'nin Kart Oyunu Uygulaması
      </Text>
      <Text style={styles.textScore}>{timeLeft}</Text>
      <Text style={styles.textScore}>{props.score}</Text>
      <View style={styles.game}>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:250
  },
  text: {
    fontWeight:'bold',
    color:'purple',
    fontSize:20
  },
  textScore:{
    fontWeight:'bold',
    color:'hotpink',
    fontSize:20,
    paddingTop:20,
  },
  game:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:300,
    paddingTop:50
  }
});

const mapStateToProps = state => {
  return{
    score:state.score
  }
}

export default connect(mapStateToProps) (GameBoard)
