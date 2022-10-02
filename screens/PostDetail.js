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
  TextInput,
} from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import axios from "axios";
import async from "async";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

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

  const getDetail = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else {
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
        <View key={c.cmt_id} style={styles.commentBox}>
          <Text>{`cmt_id: ${c.cmt_id}`}</Text>
          <Text>{`createdDate: ${c.createdDate}`}</Text>
          <Text>{`content: ${c.content}`}</Text>
        </View>;
      });
    }
  };
  return <View style={styles.commentContainer}>{getDetail()}</View>;
}

const styles = StyleSheet.create({
  commentContainer: {
    height: "80%",
    padding: 10,
    marginTop: 5,
  },
  commentBox: {
    marginTop: 50,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    justifyContent: "center",
  },
});
