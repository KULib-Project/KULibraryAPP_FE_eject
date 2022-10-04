import React from "react";
import { Button, View } from "react-native";

//앱 처음 페이지에 보여지는 화면 각 버튼에 네비게이션 설정
function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Auth" onPress={() => navigation.navigate("Auth")} />
      <Button title="Post" onPress={() => navigation.navigate("Post")} />
      <Button
        title="Post Detail"
        onPress={() => navigation.navigate("PostDetail")}
      />
      <Button title="Show Post" onPress={() => navigation.navigate("Show")} />
      <Button
        title="Reading Room"
        onPress={() => navigation.navigate("Reading")}
      />
      <Button
        title="API Test Forward"
        onPress={() => navigation.navigate("Forward")}
      />
      <Button
        title="API Test Middle"
        onPress={() => navigation.navigate("Middle")}
      />
      <Button title="API Test End" onPress={() => navigation.navigate("End")} />
      <Button title="Main" onPress={() => navigation.navigate("Main")} />
      <Button title="Link" onPress={() => navigation.navigate("Golink")} />
    </View>
  );
}

export default HomeScreen;
