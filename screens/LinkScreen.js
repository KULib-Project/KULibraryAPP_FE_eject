import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  Linking,
} from "react-native";

/**
 *
 * 나중에 배열로 배경에 맞춰서 텍스트 컬러도 변경하던가, 아니면 하얀 글씨에 적합한
 * 배경 컬러만 배열에 넣어서 사용하면 될 듯!
 */
const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};
/**
 *
 * 우선 크게 자료이용과 연구지원 탭이 있고 그 안에 세부 탭
 * 버튼으로 자료 이용과 연구 지원 탭을 오가게 할까?
 * 아니면 음..
 */

const linkBox = (title, description, link) => {
  const [timesPressed, setTimesPressed] = useState(0);
  return (
    <Pressable
      onPress={() => {
        timesPressed >= 1
          ? [Linking.openURL(`${link}`), setTimesPressed(0)]
          : setTimesPressed((current) => current + 1);
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#C05B50" : "#D15B53",
        },
        styles.golinkBox,
      ]}
    >
      {({ pressed }) =>
        pressed ? (
          <Text style={styles.explainText}>{description}</Text>
        ) : (
          <Text style={styles.titleText}>{title}</Text>
        )
      }
      {/* <Text>상호대차·신청</Text>
       <Text>본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출</Text> */}
    </Pressable>
  );
};
const twoLink = (one, two) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {one}
      {two}
    </View>
  );
};
function Golink({ navigation }) {
  /**
   * 현재 문제점! 하나의 요소로 스택을 쌓으니까 한 버튼 설명보고 다음 버튼 누르면 넘어감!
   * 어떻게 하지..? 바보 같은 방법으로는 스택을 다 하나씩 쓰는건데!!!!
   * 지금 이 부분은 함수 내부에서 스택을 쌓으니까 해결됨!!
   */
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainSub}>
          <Text style={styles.mainSubText}>자료 이용</Text>
        </View>
        {twoLink(
          linkBox(
            "강의 수업 자료",
            "강의 수업에 필요한 교재나 참고서 등을 교수/강사가 선정하여 도서관에서 자료를 이용할 수 있도록 지정한 인쇄본 자료",
            "https://library.korea.ac.kr/datause/lecture_class/guide/"
          ),
          linkBox(
            "데이터베이스",
            "각종 학술지 접속 주소들",
            "https://library.korea.ac.kr/datause/database/database-search-s/"
          )
        )}
        {twoLink(
          linkBox(
            "전자저널",
            "전자저널 및 전자책 검색",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
        {twoLink(
          linkBox(
            "상호대차 신청",
            "본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
        {twoLink(
          linkBox(
            "상호대차 신청",
            "본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
        {twoLink(
          linkBox(
            "상호대차 신청",
            "본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
        <View style={styles.mainSub}>
          <Text style={styles.mainSubText}>연구 자료</Text>
        </View>
        {twoLink(
          linkBox(
            "상호대차 신청",
            "본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
        {twoLink(
          linkBox(
            "상호대차 신청",
            "본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
        {twoLink(
          linkBox(
            "상호대차 신청",
            "본교 도서관에 소장되어 있지 않은 도서를 협력기관을 통해 대출",
            "https://library.korea.ac.kr/datause/ill/guide/"
          ),
          linkBox(
            "원문복사 신청",
            "본교 도서관에 소장되어 있지 않은 자료의 복사를 의뢰하여 제공",
            "https://library.korea.ac.kr/datause/dds/guide/"
          )
        )}
      </ScrollView>
    </View>
  );
}

export default Golink;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    alignItems: "center",
    justifyContent: "center",
  },
  mainSub: {
    width: 390,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A82926",
  },
  mainSubText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  golinkBox: {
    width: 160,
    height: 90,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  explainText: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: 1.5,
    fontWeight: "900",
    textAlign: "justify",
  },
  titleText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
