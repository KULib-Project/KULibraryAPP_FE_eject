import React from 'react';
import { StyleSheet,Text,ScrollView, View,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import Icon from 'react-native-vector-icons/FontAwesome'

function Post({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.topBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("Board")}>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>완료</Text>
            </TouchableOpacity>
        </View>
        
        <View style={[styles.postBox]}>
        <TextInput
        multiline={true}
        style={styles.inputTitle}
        // maxLength={4} //최대 글자수 제한 가능
        // onChangeText={onChangeText}
        // value={text}
        placeholder="제목"
      />
      <View style={[styles.postSubBox]}>
        <TextInput
        multiline={true}
        style={[styles.inputBody]}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="내용을 입력해주세요"
      />
        <TouchableOpacity>
            <Text>📷</Text>
        </TouchableOpacity>
        
        </View>
        
        </View>
    </View>
  );
}

export default Post;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff"
    },
    topBtn:{
        height:30,
        flexDirection:"row",
        width:330,
        justifyContent:"space-between",
        
    },
    postBox:{
        flex:0.85,
        flexDirection:"column",
        alignItems:"flex-start",
        padding:20,
        paddingTop:0,
    
    },
    postSubBox:{
        height:900,
        width:330,
        flexDirection:"column",
        paddingTop:0,
        alignItems:"flex-start",
        justifyContent:"flex-start",
    
    },
    inputTitle:{
        height:50,
        width:330,
        textAlignVertical:"center",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    },
    inputBody:{
        height:600,
        width:330,
        textAlignVertical:"top"
        
    },

})