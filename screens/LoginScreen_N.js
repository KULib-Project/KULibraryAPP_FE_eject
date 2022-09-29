import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Button,
  Platform,
} from "react-native";
import axios from "axios";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const iosKeys = {
  kConsumerKey: "7XmyJIpyoR1cwlKpQVPB",
  kConsumerSecret: "0fjIeLW6Kb",
  kServiceAppName: "KULibrary",
  kServiceAppUrlScheme: "testapp" // only for iOS
};

const androidKeys = {
  kConsumerKey: "7XmyJIpyoR1cwlKpQVPB",
  kConsumerSecret: "0fjIeLW6Kb",
  kServiceAppName: "KULibrary",
};

const initials = Platform.OS === "ios" ? iosKeys : androidKeys;

export default function LoginScreen({ navigation }) {
  const [isLoding, setIsLoding] = useState(false);
  const [naverToken, setNaverToken] = React.useState(null);
  const [response, setResponse] = useState();
  const [nUser, setNUser] = useState("");

  useEffect(() => {
    const token = AsyncStorage.getItem("User", (err, result) => {
      setNaverToken(result);
    });
  }, []);
  useEffect(() => {
    if (naverToken !== null) {
      console.log("useEffect");
      getUserProfile();
    }
    return () => setIsLoding(false); // cleanup function
  }, [response]);

  // 로그인 실행
  const naverLogin = (props) => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        if (err) {
          reject(err);
          setResponse(err);
          return;
        }
        setResponse(token);
        resolve(token);
      });
    });
  };

  storageData = async () => {
    await AsyncStorage.setItem(
      "User",
      JSON.stringify({
        id: nUser.id,
        token: naverToken,
        email: nUser.email,
        name: nUser.name,
      }),
      () => {
        console.log("유저정보 저장 완료");
        console.log(nUser.id);
      }
    );
  };

  // 토큰 이용해서 프로필 정보 파싱
  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === "024") {
      Alert.alert("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
    setNUser(profileResult.response);
    console.log("setNuser: " + nUser);
    giveNaverUser(naverToken, profileResult);
  };

  // 유저 정보 DB에 저장
  const giveNaverUser = async (accessToken, nUser) => {
    const giveUser = await axios
      .post("https://library-2022.herokuapp.com/auth/google/user", {
        accessToken: `"${accessToken}"`,
        userInfo: {
          id: `"${JSON.stringify(nUser.id)}"`,
          email: `"${JSON.stringify(nUser.email)}"`,
          name: `"${JSON.stringify(nUser.name)}"`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          console.log("11111");
          console.log(response.status);

          storageData();
          navigation.navigate("Home");
        }
        ///데이터베이스에 있을 경우 ( 기존 회원 )
        else if (response.status == 201) {
          console.log("22222");
          console.log(response.status);

          storageData();
          navigation.navigate("Home");
        }
      })
      .catch(console.error)
      .finally(() => setIsLoding(false));
  };

  // 로그아웃
  const naverLogout = async () => {
    NaverLogin.logout();
    setNaverToken("");
    await AsyncStorage.clear();
    console.log("사용자 데이터가 삭제되었습니다.");
    console.log(
      AsyncStorage.getItem("User", (error, result) => {
        const UserInfo = JSON.parse(result);
        console.log(UserInfo);
        navigation.replace("Load");
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="네이버 아이디로 로그인하기"
        onPress={() => naverLogin(initials)}
      />
      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}

      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
