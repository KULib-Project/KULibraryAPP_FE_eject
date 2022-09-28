import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
/** https://www.npmjs.com/package/react-native-modest-checkbox#usage
 *
 * 체크 박스 참고
 */

import Checkbox from "react-native-modest-checkbox";
import Icon from "react-native-vector-icons/AntDesign";

function Main({ navigation }) {
  const [isChecked, checked] = useState(true);
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="검색 키워드 입력"
        />
        {/* 버튼 요소 추가해야함 */}
        <Icon style={styles.searchIcon} name="search1" size={25} color="#000" />
      </View>
      <View style={styles.libOpenContainer}>
        <Text
          style={[
            styles.libOpenText,
            { fontSize: 20, textAlign: "left", marginLeft: 5 },
          ]}
        >
          2022/09/26(월) 개관시간
        </Text>
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
            onPress={() => navigation.navigate("Show")}
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
                checkedComponent={<Icon name="star" size={25} color="yellow" />}
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
                checkedComponent={<Icon name="star" size={25} color="yellow" />}
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
    width: 345,
    height: 40,
    padding: 5,
    marginBottom: 30,
    marginTop: 50,
    borderWidth: 3,
    borderColor: "#A82926",
    borderRadius: 7,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchIcon: {
    color: "#A82926",
  },
  btnMain: {
    margin: 2,
    padding: 2,
    width: 170,
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
    padding: 7,
    paddingBottom: 0,
    margin: 2,
  },
  libOpen: {
    flexDirection: "row",
  },
  libOpenBox: {
    flexDirection: "column",
    width: 110,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    borderLeftWidth: 0.5,
  },
  libOpenBox01: {
    flexDirection: "column",
    width: 110,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  libOpenText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  bookLi: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
    width: 280,
  },
  ListBox: {
    width: 344,
    backgroundColor: "#fff",
    margin: 4,
    padding: 10,
    borderRadius: 7,
  },
});
