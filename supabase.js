
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ovfuiacmewthrryvjpcj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92ZnVpYWNtZXd0aHJyeXZqcGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjczODUyMTksImV4cCI6MTk4Mjk2MTIxOX0.FAk0rToY14_yVF58B49Pw5wv_HI5uJcTvmA9B1T0vdE"
const supabaseClient = createClient(supabaseUrl, supabaseKey,{
    localStorage:AsyncStorage,
    detectSessionInUrl:false
})

const getAllStudies = async() => {
    
let { data: studyclub, error } = await supabaseClient.from('studyclub').select('*')

return {studyclub,error}
};

export {supabaseClient, getAllStudies};