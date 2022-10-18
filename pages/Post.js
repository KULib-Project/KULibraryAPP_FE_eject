import React from 'react';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, SafeAreaView,TouchableOpacity,StyleSheet,Text,ScrollView, View,TextInput,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'


function Post({ navigation }) {

  return (
  
    <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >

    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="transparent" barStyle="dark-content" />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
    <View style={styles.inner}>
        <View style={styles.topBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("Board")} >
            <Icon name="close" size={25} color="#222" /> 
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontWeight:"bold",fontSize:14}}>완료</Text>
            </TouchableOpacity>
        </View>
 
        <View style={{flex:19,width:"90%",padding:"3%"}}>       
        <TextInput
        multiline={true}
        style={styles.inputTitle}
        autoFocus={true}
        // maxLength={4} //최대 글자수 제한 가능
        // onChangeText={onChangeText}
        // value={text}
        placeholder="제목"
      />
      <View style={[styles.postSubBox]}>
        <TextInput
        multiline={true}
        style={[styles.inputBody]}
        autoFocus={true}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="내용을 입력해주세요"
      />

        <TouchableOpacity>
        <Icon name="picture" size={20} color="#222" /> 
        </TouchableOpacity>
        </View>
        
       
        </View>
        <View style={{ flex : 1 }} />
        </View>
        </TouchableWithoutFeedback>
    </SafeAreaView> 
    

</KeyboardAvoidingView>
  );
}

export default Post;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"baseline",
        justifyContent:"center",
        backgroundColor:"#fff"
    },
    inner: {
      flex: 1,
      justifyContent: "flex-end",
  },
    topBtn:{
        flex:1,
        flexDirection:"row",
        width:"98%",
        justifyContent:"space-between",
        marginTop:"5%",
        padding:"3%"
    },
    postSubBox:{
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },
    inputTitle:{
        textAlignVertical:"center",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        fontSize:20,
        fontWeight:"900",
        paddingTop:"4%",
        paddingBottom:"4%"
    },
    inputBody:{
        fontSize:16,
        height:"90%",
        textAlignVertical:"top",

    },

})