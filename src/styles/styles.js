import { StyleSheet } from 'react-native'
import colors from './colors'
import * as config from './config'

const styles = StyleSheet.create({
    // layouts
    container: {
        flex: 1
    },
    page: {
        backgroundColor: colors.background,
        paddingLeft: config.paddingX,
        paddingRight: config.paddingX,
        flex: 1
    },
    // shadows
    shadow1: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1.5
        },
        shadowOpacity: 0.07,
        shadowRadius: 8
    },
    shadow2: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 11
    },
    shadow3: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.16,
        shadowRadius: 12
    },
    shadow4: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.21,
        shadowRadius: 14
    },
    shadow5: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.14,
        shadowRadius: 25
    }
})

export default styles
