//네비게이션 라이브러리 import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** https://bocoder.tistory.com/15 바텀 네비게이션 스타일 설정 참고 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import Iconicons from 'react-native-vector-icons/Ionicons'
import React from 'react';

//스크린 페이지 import
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen_N';
import PostDetail from './screens/PostDetail';
import Auth from './functions/auth';
import PostScreen from './screens/PostScreen';
import Show from './screens/PostShowScreen';
import Load from './screens/LoadingScreen';
import Forward from './screens/APITestForward';
import Middle from './screens/APITestMiddle';
import End from './screens/APITestEnd';
import Reading from "./screens/ReadingRoom";
import Main from "./pages/Main"
import Board from "./pages/Board"
import Depart from "./pages/Depart"
import Studyclub from "./pages/Studyclub"
import Golink from "./pages/Golink"
import Personal from './pages/Personal';
import Post from './pages/Post';
import ReadPost from './pages/ReadPost';

const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveBackgroundColor: '#555',
      tabBarInactiveBackgroundColor: '#c2c2c2'
  }}>
      <Tab.Screen name="Home1" component={HomeScreen} options={{
                    tabBarIcon: () => (
                        <Icon
                            name="home"
                            size={30}
                        />
                    ),
                    headerShown: false
                }}/>
      <Tab.Screen name="Main" component={Main}  options={{
                    tabBarIcon: () => (
                        <Icon
                            name="meh"
                            size={30}
                        />
                    ),
                    headerShown: false
                }}/>
      <Tab.Screen name="Login" component={LoginScreen} options={{
                    tabBarIcon: () => (
                        <Icon
                            name="adduser"
                            size={30}
                        />
                    ),headerShown: false
                }}/>
        <Tab.Screen name="Personal" component={Personal} options={{
            tabBarIcon: () => (
                <Icon
                    name="user"
                    size={30}
                />
            ), headerShown: false
        }}/>
    </Tab.Navigator>
  );
}



// export default App;
function App() {
  return (
    <NavigationContainer>
      {/* 네비게이션 설정 */}
      <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          
        />
        {/*  <Stack.Navigator initialRouteName="Home"> 초기 페이지 설정 */}
        {/* <Stack.Screen name="Home" -> 스크린 닉네임 이걸로 다른 페이지로 넘어가는 코드 짤 때 사용 component={HomeScreen}/> */}
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main}/>
        <Stack.Screen  name="Board" component={Board} />
        <Stack.Screen name="Depart" component={Depart} />
        <Stack.Screen name="Studyclub" component={Studyclub} />
        <Stack.Screen  name="Golink" component={Golink} />
        <Stack.Screen options={{ headerShown: false }} name="Post" component={Post} />
        <Stack.Screen options={{ headerShown: false }} name="Read Post" component={ReadPost} />
        <Stack.Screen options={{ headerShown: false }}  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen  name="Detail" component={DetailScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Auth" component={Auth} />
        
        <Stack.Screen name="PostOri" component={PostScreen} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="Reading" component={Reading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;