import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";

import Checkbox from "react-native-modest-checkbox";
import Icon from "react-native-vector-icons/AntDesign";


function Main({ navigation }) {
  const [isChecked, checked] = useState(true);
  // const [text, onChangeText] = React.useState("");
  const date = new Date();
  console.log(date.getMonth);
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : (date.getMonth() + 1).toString();
  const dayMap = new Map([
    [0, "일"],
    [1, "월"],
    [2, "화"],
    [3, "수"],
    [4, "목"],
    [5, "금"],
    [6, "토"],
  ]);
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />

        <View style={styles.searchBox}>
          {/* <TextInput
       style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="검색 키워드 입력"
      /> */}
          <TouchableOpacity
            style={styles.input}
            onPress={() => navigation.navigate("Search")}
          >
            <Text>도서 검색 이용하기</Text>
          </TouchableOpacity>
          <Icon
            style={styles.searchIcon}
            name="search1"
            size={25}
            color="#000"
          />
        </View>

        <View style={styles.libOpenContainer}>
          <Text
            style={[
              styles.libOpenText,
              { fontSize: 20, textAlign: "left", marginLeft: 5 },
            ]}
          >{`${date.getFullYear()}/${month}/${date.getDate()}(${dayMap.get(
            date.getDay()
          )}) 개관시간`}</Text>
          <Text />
          <View style={[styles.libOpen, { borderBottomWidth: 0.2 }]}>
            <View style={styles.libOpenBox01}>
              <Text style={styles.libOpenText}>중앙도서관</Text>
              <Text style={styles.libOpenText}>09:00 - 22:00</Text>
            </View>
            <View style={styles.libOpenBox}>
              <Text style={styles.libOpenText}>중앙도서관</Text>
              <Text style={styles.libOpenText}>(대학원)</Text>
              <Text style={styles.libOpenText}>09:00 - 22:00</Text>
            </View>
            <View style={styles.libOpenBox}>
              <Text style={styles.libOpenText}>백주년기념삼성관</Text>
              <Text style={styles.libOpenText}>09:00 - 22:00</Text>
            </View>
          </View>
          <View style={styles.libOpen}>
            <View style={[styles.libOpenBox01]}>
              <Text style={styles.libOpenText}>법학도서관</Text>
              <Text style={styles.libOpenText}>09:00 - 22:00</Text>
            </View>
            <View style={styles.libOpenBox}>
              <Text style={styles.libOpenText}>과학도서관</Text>
              <Text style={styles.libOpenText}>09:00 - 22:00</Text>
            </View>
            <View style={styles.libOpenBox}>
              <Text style={styles.libOpenText}>학술정보원</Text>
              <Text style={styles.libOpenText}>(세종)</Text>
              <Text style={styles.libOpenText}>09:00 - 22:00</Text>
            </View>
          </View>
        </View>

        <View style={styles.btnOrganize}>
          <TouchableOpacity style={styles.btnMain}>
            <Text
              style={styles.btnText}
              onPress={() => navigation.navigate("Golink")}
            >
              도서관 혜택 바로가기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnMain}>
            <Text
              style={styles.btnText}
              onPress={() => navigation.navigate("Board")}
            >
              자유게시판
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnOrganize}>
          <TouchableOpacity
            style={styles.btnMain}
            onPress={() => navigation.navigate("Depart")}
          >
            <Text style={styles.btnText}>학과별 추천도서</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMain}
            onPress={() => navigation.navigate("Studyclub")}
          >
            <Text style={styles.btnText}>스터디 그룹 모집 게시판</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 200 }}>
          <ScrollView style={styles.ListBox}>
            <View style={{ borderBottomWidth: 1 }}>
              <Text>Book List</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                borderBottomWidth: 0.5,
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: 5 }}>
                <Checkbox
                  checkedComponent={
                    <Icon name="star" size={25} color="yellow" />
                  }
                  uncheckedComponent={
                    <Icon name="staro" size={25} color="#222" />
                  }
                  label=""
                  onChange={(checked) => console.log("Checked!")}
                />
              </View>
              <TouchableOpacity style={{ marginLeft: -10 }}>
                <View style={[styles.bookLi]}>
                  <Text>오늘도 초록</Text>
                  <Text>청구 기호: 641.02 2020 3</Text>
                </View>
                <View style={styles.bookLi}>
                  <Text>중앙도서관/제3자료실(4층)</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", borderBottomWidth: 0.5 }}>
              <View style={{ flexDirection: "row", marginLeft: 5 }}>
                <Checkbox
                  checkedComponent={
                    <Icon name="star" size={25} color="yellow" />
                  }
                  uncheckedComponent={
                    <Icon name="staro" size={25} color="#222" />
                  }
                  label=""
                  onChange={(checked) => console.log("Checked!")}
                />
              </View>
              <TouchableOpacity style={{ marginLeft: -10 }}>
                <View style={styles.bookLi}>
                  <Text>오늘도 초록</Text>
                  <Text>청구 기호: 641.02 2020 3</Text>
                </View>
                <View style={styles.bookLi}>
                  <Text>중앙도서관/제3자료실(4층)</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      
    </TouchableWithoutFeedback>
 
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    backgroundColor: "#fff",
    width: "93%",
    height: "6%",
    padding: 5,
    marginTop:"12%",
    marginBottom: "6%",
    borderWidth: 3,
    borderColor: "#A82926",
    borderRadius: 7,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "12%",
  },
  searchIcon: {
    color: "#A82926",
  },
  btnMain: {
    margin: "1%",
    padding: "1%",
    width: "45%",
    height: 70,
    backgroundColor: "#02A2AB",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  btnOrganize: {
    flexDirection: "row",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",

    fontSize: 20,
  },
  libOpenContainer: {
    borderRadius: 7,
    backgroundColor: "#A82926",
    padding: "2%",
    paddingBottom: 0,
    margin: 0,
    alignItems: "baseline",
    justifyContent: "center",
  },
  libOpen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  libOpenBox: {
    flexDirection: "column",
    width: "30.7%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3%",
    marginTop: "3%",
    borderLeftWidth: 0.5,
  },
  libOpenBox01: {
    flexDirection: "column",
    width: "30.7%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3%",
    marginTop: "3%",
  },
  libOpenText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  bookLi: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
    width: "83%",
  },
  ListBox: {
    width: "82.9%",
    backgroundColor: "#fff",
    margin: 4,
    padding: "2%",
    borderRadius: 7,
  },
});
