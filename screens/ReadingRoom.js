import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function ReadingRoom() {
  // dropdown 메뉴 라벨 목록
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 도서관 선택
  const [items, setItems] = useState([
    { label: "도서관 선택 | 서울캠퍼스", value: 0 },
    { label: "도서관 선택 | 세종캠퍼스", value: 1 },
  ]);

  // API 쿼리 값 저장
  const [reading, setReading] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 임시로 mock 서버와 param 방식으로 연결
  // 서버에서 선택된 도서관의 열람실 정보를 불러옴
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://f9071a3a-7d0c-4ec1-adf2-c3cec616b3b9.mock.pstmn.io/readingroom?library_id=1`
      )
      .then((res) => {
        // Set Fetch Data
        console.log(res.data);
        setReading(res.data);
        return res.data;
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // 열람실 목록 출력
  const PrintReadingRoom = () => {
    // Print Loading Screen
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return reading.readingRoom.map((room) => (
        <TouchableOpacity
          key={room.id}
          style={styles.group}
          onPress={() => setIsModalVisible(true)}
        >
          <View style={styles.roomBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.roomName}>{`${room.readingRoom_name}`}</Text>
              <Text style={styles.time}>00:00 ~ 24:00</Text>
            </View>

            <View style={styles.stateContainer}>
              <Text style={styles.roomRemain}>
                Total: {`${room.totalNum}`} / Available:{" "}
                {`${room.availableNum}`}
              </Text>
              <View style={styles.label}>
                <Text style={styles.roomState}>배정가능</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ));
    }
  };

  const ReadingModal = () => {
    // Print Loading Screen

    //1. 현재 도서관 위치(서울, 세종)   //2. 열람실 위치(유선노트북열람실, 일반열람실)
    //2. 현재 시간 보여주기 (2022년 11월 21일(월) | 08:32:05)
    //3. 총좌석 258 사용중 214 사용가능 (258-214) 좌석
    //4. 배정가능좌석, 사용중, 장애인석, 장애인배려석, 수리
    return reading.readingRoom.map((room) => (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsModalVisible(!isModalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    ));
  };

  const currentTime = () => {
    const date = new Date();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          isModalVisible(!isModalVisible);
        }}
      >
        <ReadingModal />
      </Modal>
      <View style={styles.dropContainer}>
        <DropDownPicker
          style={styles.dropDown}
          open={open}
          items={items}
          value={value}
          setOpen={setOpen}
          setItems={setItems}
          setValue={setValue}
          placeholder="도서관 선택 | "
          containerStyle={{ height: "7%", width: "95%" }}
        />
        <ScrollView style={styles.roomContainer}>
        <PrintReadingRoom />
        </ScrollView>
      </View>
      
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  dropContainer: { alignItems: "center", marginTop: 5 },
  dropDown: {
    alignItems: "center",
    justifyContent: "center",
  },
  roomContainer: {
    height: "100%",
    width:"100%",
    padding: 10,
    marginTop: 5,
  },
  group: {
    width: "100%",
    height: "40%",
    margin: 3,
  },
  roomBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roomName: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 5,
  },
  stateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    width: "15%",
    height: 23,
    backgroundColor: "#36BC9B",
    margin: 5,
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  roomState: {
    color: "white",
  },
  time: {
    margin: 5,
    justifyContent: "flex-end",
  },
  roomRemain: {
    margin: 5,
  },
  newContatiner: {
    height: "80%",
    width: "80%",
    backgroundColor: "#ffffff",
  },
  container: {
    zIndex: 3,
    height: "100%",
    width: "100%",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});