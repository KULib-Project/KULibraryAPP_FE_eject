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
            "전자책•이러닝",
            "전자책과 각종 온라인 교육 제공",
            "https://library.korea.ac.kr/datause/ebook/ebook-guide/"
          )
        )}
        {twoLink(
          linkBox(
            "컬렉션",
            "자주 사용되는 자료를 주제별, 종류별로 정리해 놓은 자료 모음",
            "https://library.korea.ac.kr/datause/collection/"
          ),
          linkBox(
            "아카이빙",
            "학위논문, 고서(귀중서/일반), 고지도 등의 원문 콘텐츠를 이용",
            "https://library.korea.ac.kr/datause/archiving/"
          )
        )}
        {twoLink(
          linkBox(
            "독서 캠페인",
            "독서 장려 캠페인",
            "https://library.korea.ac.kr/datause/campaign/rebook20/"
          ),
          linkBox(
            "검색•대출•반납",
            "도서의 검색/대출/반납 관련 안내사항",
            "https://library.korea.ac.kr/datause/search-loan-return/loan/"
          )
        )}
        {twoLink(
          linkBox(
            "교외 접속",
            "교내에서만 이용할 수 있는 전자정보(웹 기반 학술 DB, 전자저널 등)를 교외에서도 이용",
            "https://library.korea.ac.kr/datause/proxy/guide/"
          ),
          linkBox(
            "FRIC",
            "외국학술지의 원문복사서비스를 무료로 제공",
            "https://library.korea.ac.kr/datause/fric/guide/"
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
            "국중/국회 원문이용",
            "국회도서관 및 국립중앙도서관 원문을 무료로 이용",
            "https://library.korea.ac.kr/datause/nat-assem-library/"
          ),
          linkBox(
            "타도서관 이용",
            "이용을 원하시는 기관에서 자료협조 의뢰서 작성(로그인 후 이용가능)",
            "https://library.korea.ac.kr/datause/other-library/request/?mod=list&pageid=1&target=&keyword=&start_date=&end_date="
          )
        )}
        {twoLink(
          linkBox(
            "고서자료 이용",
            "소장한 원본 고서를 열람하고자 할 때 간편하게 신청",
            "https://library.korea.ac.kr/datause/old-books/guide/"
          ),
          linkBox(
            "멀티미디어 자료 제작 신청",
            "본교 교원 및 행정부서를 대상으로 ‘멀티미디어 자료 제작 서비스’를 무료로 제공",
            "https://library.korea.ac.kr/datause/makerspace/guide/"
          )
        )}
        <View style={styles.mainSub}>
          <Text style={styles.mainSubText}>연구 자료</Text>
          <Text style={styles.mainSubText}>학술 정보 큐레이션</Text>
        </View>
        {twoLink(
          linkBox(
            "경제학",
            "경제학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/econ/"
          ),
          linkBox(
            "교육학",
            "교육학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/edu/"
          )
        )}
        {twoLink(
          linkBox(
            "노어노문학",
            "노어노문학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/ru/"
          ),
          linkBox(
            "미디어학",
            "미디어학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/media"
          )
        )}
        {twoLink(
          linkBox(
            "법학",
            "법학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/law/"
          ),
          linkBox(
            "심리학",
            "심리학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/psy/"
          )
        )}
        {twoLink(
          linkBox(
            "언어학",
            "언어학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/lingu/"
          ),
          linkBox(
            "정치외교학",
            "정치외교학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/politics/"
          )
        )}
        {twoLink(
          linkBox(
            "컴퓨터학",
            "컴퓨터학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/cs/"
          ),
          linkBox(
            "한국사학",
            "한국사학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/kh/"
          )
        )}
        {twoLink(
          linkBox(
            "행정학",
            "행정학 학술정보큐레이션 서비스",
            "https://sics.korea.ac.kr/pa/"
          ),
          linkBox(" ", " ", " ")
        )}
        <View style={styles.mainSub}>
          <Text style={styles.mainSubText}>연구 지원 도구</Text>
        </View>
        {twoLink(
          linkBox(
            "등재저널리스트",
            "참고문헌 수집과 관리",
            "https://library.korea.ac.kr/research/journal-list/"
          ),
          linkBox(
            "서지관리도구",
            "서지관리 프로그램 제공(EndNote/Mendeley Reference Manager)",
            "https://library.korea.ac.kr/research/writing-guide/endnote/"
          )
        )}
        {twoLink(
          linkBox(
            "표절예방도구",
            "논문 및 과제에 대한 유사도 점검 솔루션",
            "https://library.korea.ac.kr/research/turnitin/guide/"
          ),
          linkBox(
            "연구윤리",
            "연구자가 연구수행의 전 과정에서 알고 실천해야 할 가치나 규범",
            "https://library.korea.ac.kr/research/research-ethics/research-ethics/"
          )
        )}
        {twoLink(
          linkBox(
            "OA 논문 게재료 지원",
            "연구성과를 자유롭게 공유하여 확산할 수 있도록 Open Access 논문 출판을 지원",
            "https://library.korea.ac.kr/oa-publishing/"
          ),
          linkBox(
            "정보이용교육",
            "다양한 정보이용교육 신청",
            "https://library.korea.ac.kr/research/education/guide-2/"
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
