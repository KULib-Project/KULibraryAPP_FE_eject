import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

export default function PostDetail({ navigation, route }) {
  // API 쿼리 값 저장
  const [comments, setComments] = useState();
  /** 댓글 입력 값 저장 */
  const [cmtcontent, setCmtcontent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [inputComment, setInputComment] = useState(false);
  const [ccoment, setCComent] = useState(-1);
  const ccomentMap = new Map();

  /**
   * 선택한 게시글의 세부 정보를 파싱해오는 함수
   * 댓글 입력 이벤트가 발생하면 갱신할 수 있도록 함
   */
  useEffect(() => {
    setIsLoading(true);
    console.log(route.params);
    axios
      .get(
        `https://library-2022.herokuapp.com/community/detail?id=${route.params.itemData.id}`
      )
      .then((response) => {
        setComments(response.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
    setInputComment(false);
  }, [inputComment]);

  /**
   * 댓글 입력 이벤트 동작 함수
   */
  const postComment = (cmt_id = -1) => {
    // 공란 입력 방지
    if (cmtcontent === "") {
      return;
    }

    // 댓글 json
    const cmtInfo = {
      content: cmtcontent,
      email: route.params.itemData.email,
      board_id: route.params.itemData.id,
    };

    // 대댓글 json
    const ccmtInfo = {
      content: cmtcontent,
      email: route.params.itemData.email,
      board_id: route.params.itemData.id,
      cmt_id: cmt_id,
    };

    // 대댓글 여부 판단
    const info = cmt_id > -1 ? ccmtInfo : cmtInfo;
    console.log("댓글 json", info);
    axios
      .post("https://library-2022.herokuapp.com/comments/save", info)
      .then((res) => {
        console.log(res.data);
      })
      .catch(console.error)
      .finally(() => {
        setInputComment(true);
        // 대댓글 입력 판정 초기화
        setCComent(-1);
        setCmtcontent("");
      });
  };

  /**
   * 게시글과 댓글 View 출력
   * @returns 게시글 Detail View + 댓글 View
   */
  const GetCommunity = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <View style={{ height: "80%", width: "90%" }}>
          {console.log("comments", comments)}
          <ScrollView>
            <Text style={styles.textTitle}>
              {comments.communityDetail[0].title}
            </Text>
            <Text style={styles.textContent}>
              {comments.communityDetail[0].content}
            </Text>
            {/*댓글 출력*/}
            {comments.commentsList.map((c) => (
              <View key={c.cmt_id} style={styles.commentBox}>
                {console.log("c: ", c)}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "4%",
                    paddingTop: "1%",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    최정대
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "16%",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setCComent(c.cmt_id);
                        console.log(ccoment);
                      }}
                    >
                      <Text>대댓글</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>:</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.textComment}>{c.content}</Text>
                <View
                  style={{
                    marginTop: 25,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
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
                      ></View>
                    </View>
                    <Text style={styles.textComment}>
                      대댓글의 내용이다 키킷키키키키키키킷킷 키릿키ㅣㅅ리
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.topBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("Show")}>
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

      <GetCommunity />

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
              onChangeText={(cmt) => setCmtcontent(cmt)}
              value={cmtcontent}
              placeholder="댓글을 입력해주세요"
              autoFocus={true}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              postComment(ccoment);
            }}
            style={styles.commentSubit}
          >
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
    paddingBottom: "4%",
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
    marginBottom: -38,
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
    paddingRight: "3%",
  },
});
