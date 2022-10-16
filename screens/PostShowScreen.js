import React, { useEffect, useState } from "react";
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
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get("https://library-2022.herokuapp.com/community")
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
      return data.map((post) => (
        //아이템 리스트
        <TouchableOpacity
          key={post.id}
          onPress={() => {
            navigation.navigate("PostDetail", { itemData: post });
          }}
        >
          {console.log(post)}
          <View style={styles.postBox}>
            <Text>{`${post.title}`}</Text>
            <Text>{`${post.content}`}</Text>
            <View style={styles.postSubBox}>
              <Text>
                {`${post.created_date}`} | {`${post.name}`}
              </Text>
              <View style={styles.subInfo}>
                <Text>{`조회수 ${post.view_count}  `}</Text>
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
          style={styles.postBtn}
          onPress={() => navigation.navigate("Post")}
        >
          <View style={styles.touchableOpacityStyle}>
            <Text>글쓰기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default PostList;

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
    flexDirection: "column",
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

    marginTop: "2%",
  },
  touchableOpacityStyle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: "-10%",
  },
});
