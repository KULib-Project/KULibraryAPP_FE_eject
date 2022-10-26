import React from 'react';
import {SafeAreaView,TouchableOpacity,StyleSheet, View,Image,Text } from 'react-native';



function Personal({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{height:650,justifyContent:'space-between',flexDirection:"column"}}>
        <View style={styles.profileBoxOut}>
            {/* 인적사항 편집 버튼 */}
        <TouchableOpacity style={styles.editBtn}><Text>edit</Text></TouchableOpacity>
        <View style={styles.profileBox}>
        <Image
        style={styles.profile}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
        }}
      />
      
      <View style={styles.profileTextBox}>
    
      <Text>전채원</Text>
      <Text>컴퓨터융합소프트웨어학과(공개)</Text>
      <Text>qqww212@korea.ac.kr(비공개)</Text>
      </View>
        </View>
        </View>
        <View>
            <TouchableOpacity>
                <Text>내 리스트 보기</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.logingBtn}>
            {/* 로그인 상태일 시 안보이게 해야함~~ */}
            <TouchableOpacity><Text>로그인</Text></TouchableOpacity>
            {/* 로그인 상태 아닐 시 안보이게 해야 함~~ */}
            <TouchableOpacity><Text>로그아웃</Text></TouchableOpacity>
            <TouchableOpacity><Text>탈퇴하기</Text></TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  );
}

export default Personal;

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#c2c2c2",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    profileBox:{
        flexDirection:"row",
        width:350,
        alignItems:'center',
        justifyContent:"flex-start",
        backgroundColor:"#fff",
        borderRadius:7,
        padding:15,
    },
    profileBoxOut:{
        flexDirection:"column",
        width:350,
        alignItems:'center',
        justifyContent:"flex-start",
        backgroundColor:"#fff",
        borderRadius:7,
        padding:15,
    },
    profile:{
        width: 100,
        height: 100,
        borderRadius:100,
    },
    profileTextBox:{
        marginLeft:20,

    },
    editBtn:{
        flexDirection:"row",
        width:330,
        alignItems:"center",
        justifyContent:"flex-end",
        marginRight:20
    },
    logingBtn:{
        flexDirection:"column",
        height:100,
        alignItems:"center",
        justifyContent:'space-between',

    }
})