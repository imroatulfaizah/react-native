/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//   <Text>Hello {this.props.name}</Text>
//       </View>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name="Kim Sojung"></Greeting>
//         <Greeting name="Jung Yerin"></Greeting>
//       </View>
//     );
//   }
// }

class Blink extends Component {
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText : !previousState.isShowingText}   
    ))
    ),1000);
}

//state object
state = { isShowingText: true };
render() {
  if (!this.state.isShowingText) {
    return null;
  }

  return (
    <Text>{this.props.text}</Text>
  );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love you sojung'/>
      </View>
    );
  }
}