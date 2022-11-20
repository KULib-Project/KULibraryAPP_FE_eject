import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import DefaultQueryData from "../LibAPIQuery.js";
import { parseString } from "xml2js";

function SearchRes({ navigation, route }) {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  // 10개씩 더 불러오기
  const [page, setPage] = useState(10);

  // 화면에 출력될 최대 제목 길이
  const MAX_TITLE_LENGTH = 35;
  const MAX_AUTHOR_LENGTH = 38;

  const getSearchAPI = async (query) => {
    fetch(query)
      .then((res) => res.text())
      .then((res) => {
        parseString(res, function (err, result) {
          const jsonString = JSON.stringify(result);
          const json = JSON.parse(jsonString);
          setResult(json);
          // console.log(json.result.list[0].data);
        });
      })
      .catch((err) => {
        console.log("fetch", err);
      })
      .finally(() => {
        setIsLoding(false);
      });
  };

  useEffect(() => {
    setIsLoding(true);
    setKeyword(route.params.keyword);
    // console.log(route.params.keyword);
    const API = new DefaultQueryData("list", "total", keyword);
    // const query = API.getURL();
    const query =
      "https://d7295ed3-b743-4309-862a-40f00b5adf88.mock.pstmn.io/test.xml";

    console.log(query);
    getSearchAPI(query);
  }, [page]);

  const PrintResult = () => {
    if (isLoding) {
      return <Text>로딩중...</Text>;
    } else {
      return (
        <ScrollView>
          {result.result.list[0].data.slice(0, page).map((book) => (
            <View key={book.$.num}>
              <TouchableOpacity
                style={styles.oneBook}
                key={book.$.num}
                onPress={() => {
                  navigation.navigate("Book Detail", { itemData: book });
                }}
              >
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: "https://i.guim.co.uk/img/media/423d3ddf306e98864c1d887c1dcf290421cd21a7/0_169_4912_6140/master/4912.jpg?width=700&quality=85&auto=format&fit=max&s=864393ed1c322fc5ddcb2766c3c945e6",
                  }}
                />
                <View
                  style={{ justifyContent: "space-between", marginLeft: "2%" }}
                >
                  <Text>
                    {book.DISP01[0].length > MAX_TITLE_LENGTH
                      ? "제목: " +
                        book.DISP01[0].substr(15, MAX_TITLE_LENGTH) +
                        "..."
                      : "제목: " + book.DISP01[0]}
                  </Text>
                  <Text>
                    {book.DISP03[0].length > MAX_AUTHOR_LENGTH
                      ? "저자: " +
                        book.DISP03[0].substr(28, MAX_AUTHOR_LENGTH) +
                        "..."
                      : "저자: " + book.DISP03}
                    {console.log(book.DISP03[0].length)}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      height: "20%",
                    }}
                  >
                    <Text>소장처:</Text>
                    {sci()}
                    {edu_sejong()}
                    {cent_law()}
                    {cent()}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity
            style={styles.moreInfo}
            onPress={() => setPage(page + 10)}
          >
            <Text>더보기</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
  };

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
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => navigation.navigate("Search")}
        >
          <Text>{keyword}</Text>
          <Icon
            style={styles.searchIcon}
            name="search1"
            size={25}
            color="#000"
          />
        </TouchableOpacity>
        <View style={styles.containPerPart}>
          <Text>소장 도서</Text>
          <View style={styles.perPart}>
            <PrintResult />
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
    height: "80%",
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
    width: "89%",
    height: 85,
    marginTop: 10,
    paddingBottom: "1%",
    borderBottomWidth: 1,
    borderColor: "#bbb",
    flexDirection: "row",
    marginLeft: "4%",
  },
  imageStyle: {
    width: "20%",
    height: "100%",
  },
  moreInfo: {
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});
