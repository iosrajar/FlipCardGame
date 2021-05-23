import React,{useState,useEffect,useRef} from 'react';
import styles from "../Utils/Styles";
import * as Constants from '../Utils/Constants'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Animated
  } from 'react-native';

  

  const Card = (props) => { 
    const [cardwidth, setwidth] = useState(6*33/Constants.CARD_PAIRS_VALUE+"%");
    const [cardheight,setheight] = useState(6*20/Constants.CARD_PAIRS_VALUE+"%");

    const setcard = (id,status,value) => { 
        if(!status){
            props.cardvalidate(id,value); 
        }
            
    }

    useEffect(() => { 
        if(props.flip!=null) flipAnimation(props.flip);
    });

    let animatedValue = new Animated.Value(10);

    const flipAnimation = (flipstatus) => { 
      if(!flipstatus)  {
        Animated.timing(animatedValue, {
            toValue: 180,
            duration:800, 
            useNativeDriver: true,
          }).start();
      }
      else {
        Animated.timing(animatedValue, {
            toValue: 180,
            duration:800, 
            useNativeDriver: true,
          }).start();
      }
       
    };

    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '0deg'],
    });
    
    const frontInterpolate = animatedValue.interpolate({
        inputRange: [180,360],
        outputRange: ['0deg', '180deg'],
    });
 
    
    return(
        <View style={{width:cardwidth, height:"92%",  padding:"2%"}}>
            <TouchableWithoutFeedback style={{width:"100%",height:"100%"}} onPress={() => setcard(props.id,props.status, props.value)} >
                <Animated.View style={props.status
                ?{transform: [{ rotateY: frontInterpolate }],...styles.cardfront,...styles.centeredstyle}
                :props.flip==null?{transform: [{ rotateY: setInterpolate }],...styles.cardback,...styles.centeredstyle}
                :{transform: [{ rotateY: backInterpolate }],...styles.cardback,...styles.centeredstyle}}>
                    <Text style={props.status?{...styles.cardtextfront}:{...styles.cardtextback}}>{props.status?props.value:"?"}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
  }

  export default Card;