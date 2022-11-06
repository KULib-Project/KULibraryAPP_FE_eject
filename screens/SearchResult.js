import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import DefaultQueryData from "../LibAPIQuery.js";
import XMLParser from "react-xml-parser";

function SearchRes({ navigation, route }) {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(true);
    setKeyword(route.params.keyword);
    console.log(route.params.keyword);
    const API = new DefaultQueryData("list", "total", keyword);
    const query = API.getURL();
    const option = {
      url: query,
      method: "GET",
    };

    // TODO: Network Error 해결
    // Rendering 문제? method 문제? 아니면 responseType 문제?
    axios
      .request(option)
      .then((res) => {
        const data = res;
        const resultData = new XMLParser().parseFromString(data).children;
        console.log(resultData);
        setResult(resultData);
      })
      .catch((error) => {
        console.log("error: " + error);
      })
      .finally(() => setIsLoding(false));
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.topBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Icon name="arrowleft" size={20} color="#222" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: "1%",
            }}
          >
            메인으로
          </Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            multiline={false}
            textAlignVertical="center"
            style={[styles.inputKeyword]}
            onChangeText={(keyword) => setKeyword(keyword)}
            value={keyword}
            autoFocus={false}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SearchRes", { keyword: keyword })
            }
          >
            <Icon
              style={styles.searchIcon}
              name="search1"
              size={25}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containPerPart}>
          <Text>소장 도서</Text>
          <View style={styles.perPart}>
            <TouchableOpacity style={styles.oneBook}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: "https://i.guim.co.uk/img/media/423d3ddf306e98864c1d887c1dcf290421cd21a7/0_169_4912_6140/master/4912.jpg?width=700&quality=85&auto=format&fit=max&s=864393ed1c322fc5ddcb2766c3c945e6",
                }}
              />
              <View
                style={{ justifyContent: "space-between", marginLeft: "2%" }}
              >
                <View>
                  <Text>제목</Text>
                  <Text>저자</Text>
                </View>
                <View style={{ flexDirection: "row", height: "20%" }}>
                  <Text>소장처:</Text>
                  {sci()}
                  {edu_sejong()}
                  {cent_law()}
                  {cent()}
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>더보기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const sci = () => {
  return (
    <View
      style={{
        backgroundColor: "#bff9ff",
        borderRadius: 3,
        width: "12%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>과학</Text>
    </View>
  );
};
const edu_sejong = () => {
  return (
    <View
      style={{
        backgroundColor: "#ffebbf",
        borderRadius: 3,
        width: "22%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>학술(세종)</Text>
    </View>
  );
};
const cent_law = () => {
  return (
    <View
      style={{
        backgroundColor: "#d48e8e",
        borderRadius: 3,
        width: "22%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>중앙(법학)</Text>
    </View>
  );
};
const cent = () => {
  return (
    <View
      style={{
        backgroundColor: "#ffbfbf",
        borderRadius: 3,
        width: "12%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>중앙</Text>
    </View>
  );
};

export default SearchRes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    alignItems: "center",
  },
  main: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  topBtn: {
    height: 30,
    flexDirection: "row",
    width: "96%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "3%",
  },
  inputKeyword: {
    width: "95%",
    backgroundColor: "#fff",
  },
  searchBox: {
    width: "96%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "3%",
    marginTop: "2%",
    marginBottom: "3%",
    borderRadius: 5,
  },
  containPerPart: {
    width: "96%",
    height: "60%",
    justifyContent: "space-between",
  },
  perPart: {
    width: "100%",
    height: "93%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
  },
  oneBook: {
    width: "96%",
    height: "23%",
    margin: "3%",
    paddingBottom: "1%",
    borderBottomWidth: 1,
    borderColor: "#bbb",
    flexDirection: "row",
  },
  imageStyle: {
    width: "20%",
    height: "96%",
  },
});
