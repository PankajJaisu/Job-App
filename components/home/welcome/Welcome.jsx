import React from 'react'
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Flatlist
  } from 'react-native'
import styles from './welcome.style'
import {useRouter} from 'expo-router';
import {icons,SIZES} from '../../../constants'
const Welcome = () => {
  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>Hello Pankaj</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
     </View>
     <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
        style={styles.searchInput}
        value=""
        onChange={()=>{}}
        placeholder="What are you looking for"/>
      
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image
         source={icons.search}
         resizeMode='contain'
         style={styles.searchBtnImage}
        >

        </Image>
      </TouchableOpacity>
     </View>
    </View>
  )
  
}

export default Welcome