import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/AntDesign";

const Post = ({ navigation }) => {
  const [isLoding, setIsLoding] = useState(false);
  const [id, setId] = useState(0);
  const [email, setEmail] = useState(0);
  //유저 id 변수
  const [title, setTitle] = useState("");
  //post 제목
  const [text, setText] = useState("");
  //post 내용
  const [date, setDate] = useState("");
  //post 날짜
  useEffect(() => {
    setIsLoding(true);
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
    return () => setIsLoding(false); // cleanup function
  }, []);
  AsyncStorage.getItem("User", (error, result) => {
    const UserInfo = JSON.parse(result);
    setId(UserInfo.id);
    setEmail(UserInfo.email);
  });
  const postUser = () => {
    //글 post해서 db에 데이터 넘겨주는 파트
    //현재 문제점, 데이터를 입력해도 null만 뜬다. 게시글 등록 완료라고는 뜨지만 등록이 안됨.
    axios
      .post("https://library-2022.herokuapp.com/community/save", {
        email: email,
        content: text,
        title: title,
        user_id: id,
      })
      .then(function (response) {
        console.log(email, title, text, id);
        console.log("게시글 등록 완료");
        navigation.replace("Home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.topBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Show")}>
            <Icon name="close" size={25} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => postUser()}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>완료</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 19, width: "90%" }}>
          <KeyboardAvoidingView
            // style={styles.rootContainer}
            behavior="padding"
            enabled
          >
            <TextInput
              style={styles.inputTitle}
              onChangeText={(title) => setTitle(title)}
              placeholder={"제목을 입력하세요"}
              autoComplete={"off"}
              autoCapitalize={"none"}
            />
            <View style={[styles.postSubBox]}>
              <TextInput
                multiline={true}
                style={[styles.inputBody]}
                onChangeText={(text) => setText(text)}
                placeholder="내용을 입력해주세요"
                autoComplete={"off"}
                autoCapitalize={"none"}
              />

              <TouchableOpacity>
                <Icon name="picture" size={25} color="#222" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  topBtn: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  postSubBox: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputTitle: {
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: 20,
    fontWeight: "900",
    paddingTop: "4%",
    paddingBottom: "4%",
  },
  inputBody: {
    fontSize: 16,
    height: "90%",
    textAlignVertical: "top",
  },
});
