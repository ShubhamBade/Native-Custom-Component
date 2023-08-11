import { View, Text } from 'react-native'
import React from 'react'

const SubmitButton = ({
    width,
    height,
    bgcolor,
    title,
    titleColor,
    titleSize,
    borderRadius
}) => {
  return (
    <View style={{
        width:width,
        height:height,
        backgroundColor:bgcolor,
        justifyContent:"center",
        alignItems:'center',
        alignSelf:'center'
    }}>
      <Text style={{
        color:titleColor,
        fontSize:titleSize
      }}>SubmitButton</Text>
    </View>
  )
}

export default SubmitButton