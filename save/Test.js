import React, { useEffect ,useState} from "react";
import{FlatList, View} from 'react-native';
import { getAllStudies } from "../supabase";

function Test(){
const [studyData,setStudyData]=useState([]);
const loadAllStudies = async() =>{
    const{studies, error} = await getAllStudies();
    setStudyData(studies);
}
useEffect(()=>{
    loadAllStudies();
});
    return(
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={studyData}
            renderItem={({item})=><Item{...item}/>}
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

export default Test;