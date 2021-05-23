
import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, 
  FlatList,
  Alert
} from 'react-native';
import Card from "../Components/Card"
import Header from "../Components/Header"
import styles from "../Utils/Styles";
import * as Constants from '../Utils/Constants'


const Gamescreen = () => { 
    
    const [cardA, setCardA] = useState(0); 
    const [cardB, setCardB] = useState(0); 
    const [cardAid, setCardAid] = useState(0); 
    const [cardBid, setCardBid] = useState(0); 
    const [cardcount, setCardcount] = useState(0);  
    const [cardvaluelist, setCardvaluelist] = useState([]);
    const [congrats,setCongrats] = useState(false);
    
    useEffect(() => { 
        console.log("useEffect mount",cardvaluelist);
        if(cardvaluelist.length==0){
            generatenumbers();
        }  
    },[]);

    useEffect(() => { 
        if(cardA!=0 && cardB!=0){
            const timer = setTimeout(() => {
                validatecards(cardA,cardB);
            }, Constants.FLIP_DELAY_VALUE);
            return () => clearTimeout(timer);
        }
        if(cardvaluelist.length>0 && !congrats){iscomplete();} 
    });

    const RandomNumber = () =>{
        var rnumber=Math.floor(Math.random() * 100) + 1 ;
        return rnumber;         
    } 

    const generatenumbers = () => { 
        let arr = Array(Constants.CARD_PAIRS_VALUE).fill(0).map(()=>({"value":RandomNumber(),"status":false,"flip":null}));
        let arra = JSON.parse(JSON.stringify(arr));
        let arrb = JSON.parse(JSON.stringify(arr));
        arrfull = arra.concat(arrb);
        let shuffledar = arrfull.sort(() => Math.random() - 0.5);
        setCardvaluelist(shuffledar);
    }

    const iscomplete = () => {
        
        var cardvalues = cardvaluelist;
        if(cardvalues.length==0 || cardcount==0 ) return;
        var pendingcount=cardvalues.filter((el)=>el.status==false);
        if(pendingcount.length==0 && !congrats) {
            setCongrats(true);
            Alert.alert(  
                'Congratulations!',  
                'You win the game by '+cardcount+' steps',  
                [  
                    {  
                        text: 'Try another round',  
                        onPress: () => restartgame(), 
                    },    
                ]  
            );  
        }  
    }

    const changecardvalue = (id,value) => {
        
        if(cardA==0) {
            setCardA(value);
            setCardAid(id);
            var cardvalues = resetflips(cardvaluelist)
            cardvalues=updatecardstatus(cardvalues,id,true,"flip");
            setCardcount(cardcount+1);
            setCardvaluelist(cardvalues);
        }
        else if(cardB==0) {
            setCardB(value);
            setCardBid(id);
            var cardvalues = resetflips(cardvaluelist)
            cardvalues=updatecardstatus(cardvalues,id,true,"flip");
            setCardcount(cardcount+1);
            setCardvaluelist(cardvalues); 
        }
    }

    const resetflips = (cardvalueslist) => {
        var cardvlaues = cardvalueslist;
        cardvlaues =  cardvlaues.map(el => ({...el, "flip": null}));
        return cardvlaues;
    }

    const updatecardstatus = (cardvalueslist,id,status,flip) => { 
        var cardvlaues = cardvalueslist;
        if(flip=="flip") cardvlaues[id].flip=status; 
        cardvlaues[id].status=status;
        return cardvlaues; 
    }

    const validatecards = (valueA,valueB) => {
        if(valueA!=valueB && valueA!=0 && valueB!=0){ 
            var cardvalues = resetflips(cardvaluelist)
            cardvalues = updatecardstatus(cardvalues,cardAid,false,"flip");
            cardvalues = updatecardstatus(cardvalues,cardBid,false,"flip"); 
            setCardvaluelist(cardvalues);
        } 
        else if(valueA==valueB && valueA!=0 && valueB!=0){
            var cardvalues = resetflips(cardvaluelist)
            cardvalues = updatecardstatus(cardvalues,cardAid,true,"reset");
            cardvalues = updatecardstatus(cardvalues,cardBid,true,"reset"); 
            setCardvaluelist(cardvalues);
        }
        setCardA(0);
        setCardAid(0);
        setCardB(0);
        setCardBid(0);
    }

    const restartgame = () => {
        setCardcount(0);
        generatenumbers();
        setCongrats(false);
    }

    const cardsforrow = Constants.CARD_PAIRS_VALUE*3/6;
     

    return( 
        <SafeAreaView style={{...styles.container}}>
            <Header count={cardcount} restartback={restartgame}/>
            <FlatList
                horizontal={false}
                numColumns={cardsforrow}
                data={cardvaluelist}
                renderItem={({ item, index}) => (<Card id={index} value={item.value} status={item.status}  cardvalidate={changecardvalue} flip={item.flip}/>)}
                keyExtractor={item => item.index}
                scrollEnabled={false}
            />

        </SafeAreaView>
    );
}

export default Gamescreen;