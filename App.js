//네비게이션 라이브러리 import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/** https://bocoder.tistory.com/15 바텀 네비게이션 스타일 설정 참고 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
// import Test from "./save/Test";
//스크린 페이지 import
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen_N";
import Auth from "./functions/auth";
import Show from "./screens/PostShowScreen";
import Reading from "./screens/ReadingRoom";
import Main from "./screens/Main";
import Board from "./screens/PostShowScreen";
import Depart from "./screens/Depart";
import Studyclub from "./screens/StudyclubScreen";
import StudyclubDetail from "./screens/StudyclubDetail";
import Golink from "./screens/Golink";
import Personal from "./screens/Personal";
import Post from "./screens/PostScreen";
import ReadPost from "./screens/ReadPost";
import MainT from "./screens/MainT";
import Search from "./screens/SearchScreen";
import SearchRes from "./screens/SearchResult";
import BookDetail from "./screens/BookDetail";
import DepartDetail from "./screens/DepartDetail";
import PostDepart from "./screens/PostDepart";
import MakeStudy from "./screens/MakeStudyclub";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#555",
        tabBarInactiveBackgroundColor: "#c2c2c2",
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => <Icon name="meh" size={30} />,
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="MainT"
        component={Test}
        options={{
          tabBarIcon: () => <Icon name="meh" size={30} />,
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={30} />,
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          tabBarIcon: () => <Icon name="user" size={30} />,
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
}

// export default App;
function App() {
  return (
    <NavigationContainer>
      {/* 네비게이션 설정 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainT"
          component={MainT}
        />
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="Depart" component={Depart} />
        <Stack.Screen name="Studyclub" component={Studyclub} />
        <Stack.Screen name="Golink" component={Golink} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchRes"
          component={SearchRes}
        />
        <Stack.Screen name="Book Detail" component={BookDetail} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Post"
          component={Post}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Read Post"
          component={ReadPost}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Study Detail"
          component={StudyclubDetail}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Depart Detail"
          component={DepartDetail}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Login " component={LoginScreen} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="PostDepart" component={PostDepart} />
        <Stack.Screen name="MakeStudy" component={MakeStudy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
