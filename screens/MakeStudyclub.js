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
import DatePicker from "react-datepicker";

function MakeStudy({ navigation }) {
  // dropdown 메뉴 라벨 목록
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // 스터디 분야 선택
  const [items, setItems] = useState([
    { label: "문학", value: 0 },
    { label: "공학", value: 1 },
    { label: "예술", value: 2 },
    { label: "사회", value: 3 },
    { label: "자연", value: 4 },
    { label: "체육", value: 5 },
    { label: "기타", value: 6 },
  ]);

  const [isLoding, setIsLoding] = useState(false);

  const [id, setId] = useState(0);
  const [email, setEmail] = useState(0);

  // 스터디 이름
  const [title, setTitle] = useState("");
  // 스터디 기간
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  AsyncStorage.getItem("User", (error, result) => {
    const UserInfo = JSON.parse(result);
    setId(UserInfo.id);
    setEmail(UserInfo.email);
  });

  const PostUser = () => {};

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
              <TouchableOpacity onPress={() => PostUser()}>
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
                placeholder="스터디 대주제"
                containerStyle={{ height: "7%", width: "80%" }}
              />
            </View>
            <View style={{ flex: 19, width: "90%", padding: "3%" }}>
              <TextInput
                multiline={true}
                style={styles.inputTitle}
                onChangeText={(title) => setTitle(title)}
                autoFocus={true}
                placeholder="스터디 이름"
              />
              <View>
                <Text style={styles.inputBody}>스터디 기간</Text>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </View>
              <View style={[styles.postSubBox]}>
                <TextInput
                  multiline={true}
                  style={[styles.inputBody]}
                  autoFocus={true}
                  onChangeText={(text) => setText(text)}
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

export default MakeStudy;

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
