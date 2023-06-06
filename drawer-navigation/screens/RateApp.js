import { View, Text, SafeAreaView, StyleSheet, Image, Alert } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function RateApp() {
  const [defaultRating, setdefaultRating] = useState(4)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])

  const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
  const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
  
  const CustomRatingBar = () => {
    return(
      <View style = {styles.customRatingBarStyle}>
        {
          maxRating.map((item, key)=>{
            return(
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setdefaultRating(item)}
              >
              <Image style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? {uri : starImgFilled}
                    : {uri : starImgCorner}
                }
              />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Please Rate Us</Text>
        <CustomRatingBar/>
          <Text style={styles.textStyle}>
            {defaultRating + ' / ' + maxRating.length}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => Alert.alert('Rating', 'Thank you for rating us '+(defaultRating) + ' star/s')}
          >
          <Text>Rate</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    padding:10,
    justifyContent:'center'
  },
  textStyle: {
    textAlign:'center',
    fontSize: 20,
    marginTop: 20
  },
  customRatingBarStyle: {
    justifyContent:'center',
    flexDirection:'row',
    marginTop:30
  },
  starImgStyle: {
    width:40,
    height:40,
    resizeMode:'cover'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems:'center',
    marginTop:30,
    padding:15,
    backgroundColor: 'green',

  }

});