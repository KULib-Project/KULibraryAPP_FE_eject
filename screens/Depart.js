import React from 'react';
import { FlatList,View,StyleSheet,ScrollView,Text,TouchableOpacity,StatusBar } from 'react-native';



const data=['date']


function Depart({ navigation }) {
  return (
    <View>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <FlatList
      inverted={-1}
      data={data}
      style={{display:'flex',flexDirection:'column'}}
      renderItem={({item}) => ( 
      <TouchableOpacity
      onPress={() => navigation.navigate("Read Post")}
      >
          <View style={styles.postBox}>
            <Text>제목</Text>
            <Text>간단한 요약</Text>
            <View style={styles.postSubBox}>
              <Text>작성 시간 | 작성자</Text>
              <View style={styles.subInfo}>
                <Text>조횟수</Text>
                <Text>댓글수</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> )}/>
      <TouchableOpacity 
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Post")}
          style={styles.touchableOpacityStyle}>
            <View style={styles.postBtn}>
              <Text>글쓰기</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          activeOpacity={0.7}
          onPress={() => alert('필터 버튼')}
          style={styles.filterStyle}>
              <Text>필터</Text>
          </TouchableOpacity>
    </View>
  );
}

export default Depart;

const styles = StyleSheet.create({
  postBox: {
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 80,
    padding: "2%",
    paddingLeft: "2%",
    borderBottomWidth: 0.2,
  },
  postSubBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subInfo: {
    width: "24%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postBtn: {
    backgroundColor: "#fff",
    borderRadius: 40,
    width: "20%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: "-300%",
  },
  filterStyle:{
      borderWidth: 1,
      borderColor: '#02A2AB',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      position: 'absolute',
      top: 590,
      right: 20,
      height: 70,
      backgroundColor: '#02A2AB',
      borderRadius: 100,
  },
  
})
