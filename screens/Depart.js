import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import axios from "axios";
// const data = ["date"];

function Depart({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get("https://library-2022.herokuapp.com/subjectCommunity")
      .then(function (response) {
        setData(response.data);
      })
      .catch(console.error)
      .finally(() => setIsLoding(false));
  }, []);

  const RenderBoard = () => {
    if (isLoding) {
      <Text>Loading...</Text>;
    } else {
      return (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      );

   
    }
  };
  return (
    <View>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <FlatList
        inverted={-1}
        data={data}
        style={{ display: "flex", flexDirection: "column" }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Depart Detail")}
          >
            <View style={styles.postBox}>
              <Text>{`${item.title}`}</Text>
              <Text>{`${item.content}`}</Text>
              <View style={styles.postSubBox}>
                <Text>{`${item.created_date}`} | {`${item.name}`}</Text>
                <View style={styles.subInfo}>
                  <Text>조회수: {`${item.view_count}`}</Text>
                  <Text>학과</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("PostDepart")}
        style={styles.touchableOpacityStyle}
      >
        <View style={styles.postBtn}>
          <Text>글쓰기</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => alert("필터 버튼")}
        style={styles.filterStyle}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          필터
        </Text>
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
  filterStyle: {
    borderWidth: 1,
    borderColor: "#02A2AB",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    top: "640%",
    right: 20,
    height: 70,
    backgroundColor: "#02A2AB",
    borderRadius: 100,
  },
});
