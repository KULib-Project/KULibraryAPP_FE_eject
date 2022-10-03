import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Image,
  Button,
  StatusBar,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

export default function PostDetail({ navigation, route }) {
  // API 쿼리 값 저장
  const [comments, setComments] = useState();
  /** 댓글 입력 값 저장 */
  const [ccontent, setcontent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ea6717d8-601b-42a2-b0e6-1c5f0ea9f1a1.mock.pstmn.io/id=1")
      .then((response) => {
        setComments(response.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const getCommunity = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <View style={{ height: "80%", width: "90%" }}>
          <ScrollView>
            <Text style={styles.textTitle}>
              {comments.communityDetail[0].title}
            </Text>
            <Text style={styles.textContent}>
              {comments.communityDetail[0].content}
            </Text>
            {/*댓글 출력*/}
            {getComments()}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Icon
                name="enter"
                size={25}
                color="#222"
                style={{ transform: [{ rotateY: "180deg" }] }}
              />
              <View style={styles.recommentBox}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "4%",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    전채원
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "20%",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <Text>대댓글</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>:</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.textComment}>
                  대댓글의 내용이다 키킷키키키키키키킷킷 키릿키ㅣㅅ리
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  };

  const getComments = () => {
    /**
     * "createdDate":"2022-07-19T22:21:01",
     * "modifiedDate":"2022-07-19T22:21:01",
     * "cmt_id":1,
     * "content":"대댓글 테스트2",
     * "commentDepth":0,
     * "commentGroup":null,
     * "commentCount":1,
     * "commentDel":"YES"
     */
    return comments.comment.commentsList.map((c) => {
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "4%",
            paddingTop: "1%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>전채원</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "16%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text>대댓글</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>:</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textComment}>{`${c.content}`}</Text>
      </View>;
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.topBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("Show")}>
          {/* <Text style={{fontSize:30}}>⬅︎</Text> */}
          <Icon name="arrowleft" size={25} color="#222" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginLeft: "3%",
          }}
        >
          자유게시판
        </Text>
      </View>

      {getCommunity()}

      <View style={styles.inputCommentBox}>
        {/* 댓글 줄이 늘어남에 따라 상자가 점점 커지도록 */}
        <View style={styles.inputCommentSubBox}>
          <View
            style={{
              width: "90%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              multiline={true}
              textAlignVertical="center"
              style={[styles.inputComment]}
              placeholder="댓글을 입력해주세요"
              autoFocus={true}
            />
          </View>
          <TouchableOpacity style={styles.commentSubit}>
            <Text
              style={{ fontSize: 15, color: "#A82926", fontWeight: "bold" }}
            >
              입력
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBtn: {
    height: 30,
    flexDirection: "row",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textTitle: {
    paddingTop: "7%",
    paddingBottom: "2%",
    fontSize: 30,
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 20,
  },
  textComment: {
    fontSize: 20,
  },
  commentBox: {
    padding: "10%",
    paddingLeft: 0,
  },
  recommentBox: {
    width: "88%",
    padding: "4%",
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  inputCommentBox: {
    width: "99%",
    padding: "4%",
    paddingTop: "4%",
    paddingBottom: 0,
    borderTopWidth: 0.2,
    borderColor: "#ccc",
  },
  inputCommentSubBox: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputComment: {
    width: "100%",
    height: 50,
    textAlign: "left",
    fontSize: 20,
    padding: "2%",
    paddingTop: "4%",
  },
  commentSubit: {
    // padding:"3%",
    paddingRight: "3%",
  },
});
