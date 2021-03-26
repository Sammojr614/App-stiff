import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Dimensions, StyleSheet, Text, TextInput, TouchableHighlight, View, Image, ImageBackground } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
   numb: 0,
   answer: 0,
   name: "",
   symbol: " "
  }
  yen = () =>{
    this.setState({
      name: "Yen",
      symbol: "¥",
      answer: Number(this.state.numb) * 0.0092 //Yen
    })
  }
  dodgeCoin = () =>{
    this.setState({
      name: "Doge Coin",
      symbol: "$",
      answer: Number(this.state.numb) * 19.39826203 //Doge coin
    })
  }
  ruple =()=>{
    this.setState({
      name:"Ruple",
      symbol:"₽",
      answer: Number(this.state.numb) * 0.013 //Ruple Conversion rate
    })
  }
  krone =()=>{
    this.setState({
      name:"Krone",
      symbol: 'Kr.',
      answer: Number(this.state.numb) * 0.16
    })
  }

 
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        onChangeText = {(numb) => this.setState({numb})}
        keyboardType ='numeric'
        value ={this.state.numb}
        style={styles.textinput}/>
        <Text style={{textAlign:'center', fontFamily:'Avenir', fontWeight:'bold'}}>
          Conversion:
        </Text>
        <Text style={styles.answerText}>
            {this.state.symbol} {this.state.answer}
        </Text>

      {/* Button 1 convert to Yen */}
       <View>
       <TouchableHighlight 
        onPress={this.yen}>
          <View style={styles.button}>
          <Text style={styles.text}>
            to Yen
          </Text>
          </View>
        </TouchableHighlight>
       </View>

        {/* Button 2 Convert to Dodge Coin */}
       <View style = {{marginTop: 25}}>
         <TouchableHighlight onPress={this.dodgeCoin}>
           <View style={styles.button}>
             <Text style={styles.text}>
                To Dodge Coin
             </Text>
           </View>
         </TouchableHighlight>
       </View>

        {/* Button 3 to Convert to Ruple */}
        <View style={{marginTop:25}}>
          <TouchableHighlight onPress={this.ruple}>
            <View style={styles.button}>
              <Text style={styles.text}>
                to Ruple 
              </Text>
            </View>
          </TouchableHighlight>
        </View>

        {/* Button 4 converting USD to krone  */}
        <View style={{marginTop:25}}>
          <TouchableHighlight onPress={this.krone}>
            <View style={styles.button}>
              <Text style={styles.text}>
                To Krone 
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },
  textinput:{
    height:deviceHeight/10,
    width:deviceWidth,
    backgroundColor:'gray',
    marginTop:100,
    borderRadius:50
  },
  button:{
    backgroundColor:'blue',
    height:deviceHeight/20,
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    borderRadius:50

  },
  text:{
    color:'white',
    fontFamily:'Avenir'
  },
  answerText:{
    marginLeft:0,
    marginTop:2,
    marginBottom:25,
    borderColor:'black',
    borderWidth:2

  }
})