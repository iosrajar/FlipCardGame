import React,{useState} from 'react';
import styles from "../Utils/Styles";
import {
    View,
    Text,
    Button
  } from 'react-native';

  const Header = (props) => {
    return(
        <View style={{...styles.headerview}}>
            <View style={{...styles.headerleft}} >
                <Button title="Restart" onPress={props.restartback}/>
            </View> 
            <View ></View>
            <View style={{...styles.headerright}} >
                <Text style={{...styles.headertext}}> STEPS    {props.count}</Text>
            </View>
        </View>
    );
  }

  export default Header;