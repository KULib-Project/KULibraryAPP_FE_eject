import React from 'react';
import { KeyboardAvoidingView,StyleSheet,TouchableOpacity,Text, View,StatusBar } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



function ReadPost({ navigation }) {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
    > 
    <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.topBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("Board")}>
                {/* <Text style={{fontSize:30}}>⬅︎</Text> */}
                <Icon name="arrowleft" size={25} color="#222" /> 
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:"bold",textAlign:"center",marginLeft:"3%"}}>자유게시판</Text>
        </View>
        
        <View style={{height:"80%", width:"90%"}}>
            
            <ScrollView>
            <Text style={styles.textTitle}>Title</Text>
            <Text style={styles.textContent}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</Text>
<View style={styles.commentBox}>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingBottom:"4%",paddingTop:"1%"}}>
    <Text style={{fontSize:18, fontWeight:"bold"}}>전채원</Text>
    <View style={{flexDirection:'row',justifyContent:"space-between",width:"16%",alignItems:"center"}}>
    <TouchableOpacity><Text>대댓글</Text></TouchableOpacity>
    <TouchableOpacity><Text>:</Text></TouchableOpacity>
    </View>
    </View>
    <Text style={styles.textComment}>댓글의 내용이다 키킷키키키키키키킷킷 키릿키ㅣㅅ리</Text>
</View>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Icon name="enter" size={25} color="#222" style={{transform: [{rotateY: '180deg'}]}}/>
<View style={styles.recommentBox}>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingBottom:"4%"}}>
    <Text style={{fontSize:18, fontWeight:"bold"}}>전채원</Text>
    <View style={{flexDirection:'row',justifyContent:"space-between",width:"20%",alignItems:"center"}}>
    <TouchableOpacity><Text>대댓글</Text></TouchableOpacity>
    <TouchableOpacity><Text>:</Text></TouchableOpacity>
    </View>
    </View>
    <Text style={styles.textComment}>대댓글의 내용이다 키킷키키키키키키킷킷 키릿키ㅣㅅ리</Text>
</View>
</View>
      </ScrollView>  
      </View>
      <View style={styles.inputCommentBox}>
        {/* 댓글 줄이 늘어남에 따라 상자가 점점 커지도록 */}
        <View style={styles.inputCommentSubBox}>

    <View style={{width:"90%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      
      <TextInput 
      multiline={true}
      textAlignVertical="center"
      style={[styles.inputComment]}
      placeholder="댓글을 입력해주세요"
      autoFocus={true}
      /></View>
      <TouchableOpacity 
      style={styles.commentSubit}
      ><Text style={{fontSize:15,color:"#A82926",fontWeight:"bold"}}>입력</Text></TouchableOpacity>
      </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

export default ReadPost;

const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
},
topBtn:{

    height:30,
    flexDirection:"row",
    width:"90%",
    justifyContent:"flex-start",
    alignItems:"center"
},
textTitle:{
    paddingTop:"7%",
    paddingBottom:"2%",
 fontSize:30,
 fontWeight:"bold"
},
textContent:{
fontSize:20
},
textComment:{
    fontSize:20
},
commentBox:{
padding:"10%",
paddingLeft:0
},
recommentBox:{
    width:"88%",
    padding:"4%",
    backgroundColor:"#ccc",
    borderRadius:10,
    },
inputCommentBox:{
width:"99%",
padding:"4%",
paddingTop:"4%",
paddingBottom:0,
borderTopWidth:0.2,
borderColor:"#ccc",
},
inputCommentSubBox:{
flexDirection:"row",
backgroundColor:"#ccc",
borderRadius:10,
justifyContent:"space-between",
alignItems:"center"
},
inputComment:{
    width:"100%",
    height:50,
    textAlign:"left",
    fontSize:20,
    padding:"2%",
    paddingTop:"4%"

},
commentSubit:{
    // padding:"3%",
    paddingRight:"3%",
}
})