import React from 'react'
import { TouchableOpacity } from 'react-native'
import Text from './Text'

export default function RightButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text.sm bold color='blue'>{props.children}</Text.sm>
        </TouchableOpacity>
    )
}
