import { noop } from '@tanstack/query-core/build/lib/utils';
import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    Image,
    Alert
  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Table, TableWrapper,Rows, Row, Cell,Cols } from 'react-native-table-component';
// function elementButton (value){
//     <TouchableOpacity onPress={() => _alertIndex(value)}>
//       <View style={styles.btn}>
//         <Text style={{fontSize:12,color:#333}}> das</Text>
//       </View>
//     </TouchableOpacity>
// };
// function _alertIndex(value) {
//     Alert.alert(`This is column ${value}`);
//   }

function BookDetail({navigation}){

         const HeadTable= ['No.', '소장처', '청구기호', '등록번호', '도서상태']
         const DataTable= [
            ['1', '세종학술정보원/인문자료실2/', '897.16 원태연 안', '151173550', '대출가능'],
            ['2', '세종학술정보원/인문자료실2/', '897.16 원태연 안', '151173550', '대출가능'],
          ]
          const widthArr= [30, 100, 100, 80, 80]
        //   도서가 대출 가능한 상태가 아닐 경우에 반납예정일과 예약을 보여주도록 할까?
        
        
return(
    
    <SafeAreaView>
        <ScrollView>
            <View style={styles.infoBox}>
                <Image style={{width:120,height:200}}
                source={{uri:"https://image.aladin.co.kr/product/39/41/cover/8984478342_1.jpg"}}
                />
                <View style={styles.textBox}>
                    {/* book info */}
                    <Text style={styles.title}>안녕</Text>
                    <View style={styles.infoText}>
                    <Text>자료유형: </Text>
                    <Text>개인저자: </Text>
                    <Text>서명/저자사항: </Text>
                    <Text>발행사항: </Text>
                    <Text>형태사항: </Text>
                    <Text>ISBN: </Text>
                    <Text>일반주기: </Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:50}}>
                {/* 소장 정보 */}
                <Text style={{fontSize:20,fontWeight:"bold",marginBottom:15}}>소장정보</Text>
                <View>
                <Table borderStyle={{borderWidth:1,borderColor: '#C1C0B9'}}>
          <Row style={styles.header} data={HeadTable} widthArr={widthArr} textStyle={{textAlign: 'center'}} />
          <Rows data={DataTable} widthArr={widthArr}  textStyle={{textAlign: 'center',paddingLeft:2,paddingRight:2}} />
            {/* 번호 누르면 리스트에 저장할 수 있게 터치 가능한 요소로 바꾸고 싶은데..일단 보류
            https://www.npmjs.com/package/react-native-table-component */}
        </Table>
                </View>

            </View>

        </ScrollView>
    </SafeAreaView>
)

}

export default BookDetail;

const styles= StyleSheet.create({
    infoBox:{
        display:'flex',
        flexDirection:"row",
        marginTop:"2%"
    },
    textBox:{
        marginLeft:10
        
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:14
    },
    infoText:{
        fontSize:18,
        display:'flex',
        flexDirection:"column",
        justifyContent:"space-between",
        height:160
    },
    header:{
        backgroundColor:"ivory",

    }
})
