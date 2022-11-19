import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Button
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";
const sci=()=>{
    return(
        <View style={{backgroundColor:"#bff9ff",borderRadius:3,width:"12%",height:"30%",alignItems:"center",justifyContent:"center",marginRight:"2%"}}>
            <Text style={{fontSize:13,fontWeight:"bold"}}>과학</Text>
        </View>
    )
  }

// 대댓글 할 때 포인트 넣어주자
function StudyclubDetail({ navigation, route }) {


  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.topBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Studyclub")}>
            <Icon name="arrowleft" size={25} color="#222" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: "3%",
            }}
          >
            스터디 게시판
          </Text>
        </View>
        <View>
        <View style={{ height: "80%", width: "90%" }}>
         
          <ScrollView>
            <View style={styles.titleBox}>
            <Text style={styles.textTitle}>
              스터디명
            </Text>
            <Text>작성 22/11/15 대충 시간</Text>
            </View>
            <View>
            <Text style={{fontWeight:"600"}}>모집 기간: ~ 22/12/3</Text>
            <Text style={{fontWeight:"600"}}>진행 기간: 22/12/5 ~ 23/1/5 </Text>
            <Text style={styles.textContent}>
              스터디 상세설명
            </Text>
        
            </View>
            <View style={styles.tagBox}>
            {sci()}
            {sci()}
            </View>
            
        
       
        
          </ScrollView>
        </View>
        
        </View>
    </View>
  );
}

export default StudyclubDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBtn: {
    height: 30,
    flexDirection: "row",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textTitle: {
    paddingTop: "7%",
    paddingBottom: "2%",
    fontSize: 30,
    fontWeight: "bold",
  },
  textContent: {
    marginTop:"5%",
    fontSize: 20,
  },
  titleBox:{
    width:"98%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-end"
  },
  tagBox:{
    width:"98%",
    height:90,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
  }
});
