import { View,Text,StyleSheet,Pressable } from "react-native"
import { useState } from "react"

const App = ()=>{

const[color,setColor]=useState(`rgb(127,0,255)`)

const onPressHandler=()=>{
const randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
setColor(randomColor)
}

const onPressHandler1=()=>{
  setColor('rgb(0,0,0)')
}


return <View style={[styles.container,{backgroundColor:color}]}>
 <Pressable onPress={onPressHandler}><Text style={styles.text}>Press Me</Text></Pressable>
 <Pressable onPress={onPressHandler1}><Text style={styles.text1}>Reset</Text></Pressable> 
</View>
}
export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    allignItems:"center",
    backgroundColor:`rgb(127,0,255)`
  },
  text:{
   padding:20,
   paddingHorizontal:10,
   paddingVertical:10,
   fontSize:20,
   borderRadius:20,
   backgroundColor:"rgb(127,23,255)",
   color:"#FFF"
  },
  text1:{
    padding:20,
    marginVertical:10,
    paddingHorizontal:10,
    paddingVertical:10,
    fontSize:20,
    borderRadius:20,
    backgroundColor:"rgb(127,23,255)",
    color:"#FFF"
   }

})










//By default the flex direction is Column.
// Axis-Main Axis || Cross Axis
// (justifyContent)--Column   (works on main axis)
// (allignItems)--Row          (works on cross axis)
//flex is the ratio number