import React ,{useState}from 'react';
import {Image, KeyboardAvoidingView,StyleSheet,SafeAreaView,Text,TouchableOpacity,Button, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
const sci=()=>{
    return(
        <View style={{backgroundColor:"#bff9ff",borderRadius:3,width:"12%",height:"100%",alignItems:"center",justifyContent:"center",marginLeft:"2%"}}>
            <Text style={{fontSize:13,fontWeight:"bold"}}>과학</Text>
        </View>
    )
}
const edu_sejong=()=>{
    return(
        <View style={{backgroundColor:"#ffebbf",borderRadius:3,width:"22%",height:"100%",alignItems:"center",justifyContent:"center",marginLeft:"2%"}}>
            <Text style={{fontSize:13,fontWeight:"bold"}}>학술(세종)</Text>
        </View>
    )
}
const cent_law=()=>{
    return(
        <View style={{backgroundColor:"#d48e8e",borderRadius:3,width:"22%",height:"100%",alignItems:"center",justifyContent:"center",marginLeft:"2%"}}>
            <Text style={{fontSize:13,fontWeight:"bold"}}>중앙(법학)</Text>
        </View>
    )
}
const cent=()=>{
    return(
        <View style={{backgroundColor:"#ffbfbf",borderRadius:3,width:"12%",height:"100%",alignItems:"center",justifyContent:"center",marginLeft:"2%"}}>
            <Text style={{fontSize:13,fontWeight:"bold"}}>중앙</Text>
        </View>
    )
}
function SearchRes({ navigation }) {
    const [keyword, setKeyword] = useState('기존 검색 단어가 뜨게 하자고..~~');
  return (
    <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
    <SafeAreaView style={styles.container}>
      <View style={styles.topBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <Icon name="arrowleft" size={20} color="#222" /> 
            </TouchableOpacity>
            <Text style={{fontSize:15, fontWeight:"bold",textAlign:"center",marginLeft:"1%"}}>메인으로</Text>
        </View>
        <TouchableOpacity style={styles.searchBox} onPress={()=>navigation.navigate("Search")}>
        <Text>{keyword}</Text>
     <Icon style={styles.searchIcon} name="search1" size={25} color="#000"/>
     </TouchableOpacity>
     <View style={styles.containPerPart}>
     <Text>소장 도서</Text>
     <View style={styles.perPart}>
     <TouchableOpacity style={styles.oneBook} onPress={() => navigation.navigate("Book Detail")} >
     <Image
            style={styles.imageStyle}
            source={{ uri: "https://i.guim.co.uk/img/media/423d3ddf306e98864c1d887c1dcf290421cd21a7/0_169_4912_6140/master/4912.jpg?width=700&quality=85&auto=format&fit=max&s=864393ed1c322fc5ddcb2766c3c945e6" }}
          />
          <View style={{justifyContent:"space-between", marginLeft:"2%"}}>
          <View>
        <Text>제목</Text>
        <Text>저자</Text>
        </View>
        <View style={{flexDirection:"row", height:"20%"}}>
        <Text>소장처:</Text>
        {sci()}
        {edu_sejong()}
        {cent_law()}
        {cent()}
        </View>
        </View>
     </TouchableOpacity>
     <TouchableOpacity><Text>더보기</Text></TouchableOpacity>
     </View>
     </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default SearchRes;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#c2c2c2",
        alignItems:"center"
    },
main:{
    flexDirection:"row",
    justifyContent:"flex-start",
},
topBtn:{

    height:30,
    flexDirection:"row",
    width:"96%",
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:"3%"
},
inputKeyword:{
    backgroundColor:"#fff",



},
searchBox:{
    width:"96%",
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#fff",
    padding:"3%",
    marginTop:"2%",
    marginBottom:"3%",
    borderRadius:5
},
containPerPart:{
    width:"96%",
    height:"60%",
    justifyContent:"space-between"
},
perPart:{
    width:"100%",
    height:"93%",
    backgroundColor:"#fff",
    alignItems:"center",
    borderRadius:5

},
oneBook:{
    width: "96%",
    height: "20%",
    margin:"3%",
    paddingBottom:"1%",
    borderBottomWidth:1,
    borderColor:"#bbb",
    flexDirection:"row"

},
imageStyle:{
    width: "20%",
    height: "96%",
}
})