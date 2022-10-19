import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function ReadingRoom() {
  // dropdown 메뉴 라벨 목록
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

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
      // Complete loading
      // 일반적인 상황에서는 출력이 잘 되나, 다른 스크린으로 이동했다가 재진입하면 undefined 에러가 발생, why?
      return reading.readingRoom.map((room) => (
        <TouchableOpacity key={room.id} style={styles.group}>
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

  return (
    <View>
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
      </View>
      <ScrollView style={styles.roomContainer}>
        <PrintReadingRoom />
      </ScrollView>
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
    height: "80%",
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
});
