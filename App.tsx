import { View, Text } from 'react-native'
import React from 'react'
import {SubmitButton} from 'react-native-shared-component'

const App = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <SubmitButton
      width={300}
      height={50}
      bgcolor={"orange"}
      title={"Submit Button"}
      titleColor={"blue"}
      titleSize={40}
      borderRadius={10}
      />
    </View>
  )
}

export default App