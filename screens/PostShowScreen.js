import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const PostList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get("https://library-2022.herokuapp.com/community")
      .then(function (response) {
        //console.log(response);
        setData(response.data);
        console.log(data);
      })
      .catch(console.error)
      .finally(() => setIsLoding(false));
  }, []);

  const RenderBoard = () => {
    if (isLoding) {
      <Text>Loading...</Text>;
    } else {
      return data.map((post) => (
        //아이템 리스트
        <TouchableOpacity
          key={post.id}
          onPress={() => {
            navigation.navigate("PostDetail", { itemData: post });
          }}
        >
          <View style={styles.postBox}>
            <Text>{`${post.title}`}</Text>
            <Text>{`${post.content}`}</Text>
            <View style={styles.postSubBox}>
              <Text>
                {`${post.created_date}`} | {`${post.name}`}
              </Text>
              <View style={styles.subInfo}>
                <Text>{`조회수 ${post.view_count}  `}</Text>
                <Text>댓글수</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ));
    }
  };

  return (
    <SafeAreaView>
      <View>
        <ScrollView style={styles.postContainer}>{RenderBoard()}</ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Post")}
          style={styles.touchableOpacityStyle}
        >
          <View style={styles.postBtn}>
            <Text>글쓰기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default PostList;

const styles = StyleSheet.create({
  postContainer: {
    padding: 5,
    height: "80%",
  },
  postBox: {
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 80,
    padding: 7,
    paddingLeft: 20,
    borderBottomWidth: 0.2,
  },
  postSubBox: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subInfo: {
    width: 90,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postBtn: {
    backgroundColor: "#fff",
    borderRadius: 40,
    width: 60,
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
    width: 330,
    // height: 100,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    marginTop: "100%",
  },
});
