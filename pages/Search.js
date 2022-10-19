import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, View,StyleSheet,TouchableOpacity,TextInput,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'



function Search({ navigation }) {
    const [keyword, setKeyword] = useState('');
  return (
    <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.exitBtn} onPress={()=>{setKeyword(''),navigation.navigate("Main")}}><Text>취소</Text></TouchableOpacity>
    <View style={styles.searchBox}>
      <TextInput
        multiline={true}
        style={styles.inputKeyword}
        autoFocus={true}
        value={keyword}
        onChangeText={keyword => setKeyword(keyword)}
        placeholder="키워드"
      />
      <TouchableOpacity onPress={()=>navigation.navigate("SearchRes")}>
     <Icon style={styles.searchIcon} name="search1" size={25} color="#000"/>
     </TouchableOpacity>
     </View>
     <Text style={{padding: 10, fontSize: 24}}>
        {keyword}
      </Text>
     {/* useState로 키워드 값 받아서 onChange 사용 아래에 출력 */}
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Search;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#c2c2c2"
    },
    exitBtn:{
        flexDirection:"column",
        alignItems:"flex-end",
        marginRight:"4%"
    },
    inputKeyword:{
        backgroundColor:"#fff",


    },
    searchBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        padding:"3%",
        margin:"3%",
        borderRadius:5
    }
})
