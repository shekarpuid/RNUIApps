import React from 'react'
import {Text} from 'react-native'
// CarmenSans-Regular, Roboto-Regular, CocoGothic, CocoGothic-Bold
export default props => <Text {...props} style={[{fontFamily: 'CarmenSans-Regular'}, props.style]}>{props.children}</Text>