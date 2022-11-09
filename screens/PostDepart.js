import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

function PostDepart({ navigation }) {
  // dropdown 메뉴 라벨 목록
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // 학과 선택
  const [items, setItems] = useState([
    { label: "데이터계산과학전공", value: 0 },
    { label: "반도체물리전공", value: 1 },
    { label: "전자및정보공학과", value: 2 },
    { label: "전자/기계융합과", value: 3 },
    { label: "미래모빌리티학과", value: 4 },
    { label: "인공지능사이버보안학과", value: 5 },
    { label: "신소재화학과", value: 6 },
    { label: "생명정보공학과", value: 7 },
    { label: "환경시스템공학과", value: 8 },
    { label: "지능형반도체공학과", value: 9 },
    { label: "디스플레이융합전공", value: 10 },
    { label: "컴퓨터융합소프트웨어학과", value: 11 },
    { label: "식품생명공학과", value: 12 },
    { label: "자유공학부", value: 13 },
    { label: "약학과", value: 14 },
    { label: "한국학부", value: 15 },
    { label: "중국학부", value: 16 },
    { label: "영미학전공", value: 17 },
    { label: "글로벌경영전공", value: 18 },
    { label: "디지털경영전공", value: 19 },
    { label: "표준/지식학과", value: 20 },
    { label: "정부행정학부", value: 21 },
    { label: "공공사회학전공", value: 22 },
    { label: "통일외교안보전공", value: 23 },
    { label: "경제정책학전공", value: 24 },
    { label: "빅데이터사이언스학부", value: 25 },
    { label: "스포츠과학전공", value: 26 },
    { label: "스포츠비즈니스전공", value: 27 },
    { label: "문화유산융합학부", value: 28 },
    { label: "미디어문예창작전공", value: 29 },
    { label: "문화콘텐츠전공", value: 30 },
    { label: "스마트도시학부", value: 31 },
  ]);

  const [isLoding, setIsLoding] = useState(false);

  const [id, setId] = useState(0);
  const [email, setEmail] = useState(0);
  //유저 id 변수
  const [title, setTitle] = useState("");

  //책 제목
  const [text, setText] = useState("");

  AsyncStorage.getItem("User", (error, result) => {
    const UserInfo = JSON.parse(result);
    setId(UserInfo.id);
    setEmail(UserInfo.email);
  });

  const postUser = () => {};

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
              <TouchableOpacity onPress={() => navigation.navigate("Depart")}>
                <Icon name="close" size={25} color="#222" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => postUser()}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>완료</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dropContainer}>
              <DropDownPicker
                style={styles.dropDown}
                open={open}
                items={items}
                value={value}
                setOpen={setOpen}
                setItems={setItems}
                setValue={setValue}
                placeholder="학과 선택"
                containerStyle={{ height: "7%", width: "80%" }}
              />
            </View>
            <View style={{ flex: 19, width: "90%", padding: "3%" }}>
              <TextInput
                multiline={true}
                style={styles.inputTitle}
                onChangeText={(title) => setTitle(title)}
                autoFocus={true}
                placeholder="책 제목"
              />
              <View style={[styles.postSubBox]}>
                <TextInput
                  multiline={true}
                  style={[styles.inputBody]}
                  autoFocus={true}
                  onChangeText={(text) => setText(text)}
                  // onChangeText={onChangeText}
                  // value={text}
                  placeholder="추천 이유"
                />

                <TouchableOpacity>
                  <Icon name="picture" size={20} color="#222" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default PostDepart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
  },
  topBtn: {
    flex: 1,
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-between",
    marginTop: "5%",
    padding: "3%",
  },
  postSubBox: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dropContainer: {
    //alignItems: "center",
    width: "55%",
    marginLeft: "2%",
  },
  dropDown: {
    alignItems: "center",
    justifyContent: "center",
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
