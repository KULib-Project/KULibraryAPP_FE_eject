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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ea6717d8-601b-42a2-b0e6-1c5f0ea9f1a1.mock.pstmn.io/id=1")
      .then((response) => {
        setComments(response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getDetail = () => {
    if (!isLoading) {
      const id = route.params.itemData.id;
      console.log(id);
      console.log("==========================");
      console.log(comments);
      comments.comment.commentsList.map((c) => {
        console.log("댓글댓글" + c.content);
      });
      console.log("++++++++++++++++++++++++++");
    }
  };
  return <View>{getDetail()}</View>;
}
