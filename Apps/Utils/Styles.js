import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373740',
        paddingHorizontal: 20
    },
    centeredstyle: {
        alignItems: 'center',
        justifyContent:'center'
    },
    headerview:{
        width:"100%",
        height:"10%",
        flexDirection:"row", 
        justifyContent:"space-between" ,
        alignItems:"center",
        padding:5
    },
    headerleft:{ 
        width:"25%",
        justifyContent:"flex-start",
    },
    headerright:{ 
        width:"30%",
        justifyContent:"flex-end"
    },
    headertext:{
        color:"white",
        fontSize:20,
    },
    cardrowcontainer:{
        flexDirection:"row",
        width:"100%",
        height:"22%",
        padding:"3%",
        justifyContent:"space-between"
    },
    cardcontainer:{
        width:"30%",
        height:"100%",
    },
    cardback:{
        width:"100%",
        height:"100%",
        backgroundColor:"#00b8ff",
        borderWidth:4,
        borderColor:"white",
        borderRadius:8,
    },
    cardfront:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        borderWidth:2,
        borderColor:"#00b8ff",
        borderRadius:5,
    },
    cardtextback:{
        color:"white",
        fontSize:20,
        textAlign:"center"
    },
    cardtextfront:{
        color:"black",
        fontSize:20,
        textAlign:"center"
    },
    countertext:{
        color:"#00b8ff",
        fontSize:10,
        textAlign:"left",
    },
    mnurightext:{
        color:"white",
        fontSize:13,
        textAlign:"right"
    },
    mnulefttext:{
        color:"#00b8ff",
        fontSize:10,
        textAlign:"left"
    },

})