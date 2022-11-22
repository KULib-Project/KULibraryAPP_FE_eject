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
const sci = () => {
  return (
    <View
      style={{
        backgroundColor: "#bff9ff",
        borderRadius: 3,
        width: "12%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>과학</Text>
    </View>
  );
};
const liter = () => {
  return (
    <View
      style={{
        backgroundColor: "#ffebbf",
        borderRadius: 3,
        width: "12%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>문학</Text>
    </View>
  );
};

// const data = ["data"];

function Studyclub({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get("https://library-2022.herokuapp.com/groupCommunity")
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
            key={item}
            onPress={() => navigation.navigate("Study Detail")}
          >
            <View style={styles.postBox}>
              <Text>{`${item.title}`}</Text>
              {liter()}
              <View style={styles.postSubBox}>
                {/* 기간 출력 줄여야 함 */}
                <Text>스터디 기간 {`${item.endJoinTime}`}~{`${item.endTime}`}</Text>
                <View style={styles.subInfo}>
                  <Text>D-29</Text>
                  {/* 현재 날짜~endJoinTime까지 카운트 다운 */}
                  {/* <TouchableOpacity>
                    <Text>참가하기</Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("MakeStudy")}
        style={styles.filterStyle}
      >
        <Text style={{ fontSize: 25, color: "white" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Studyclub;

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
    width: 50,
    position: "absolute",
    top: "300%",
    right: 20,
    height: 50,
    backgroundColor: "#02A2AB",
    borderRadius: 100,
  },
});
