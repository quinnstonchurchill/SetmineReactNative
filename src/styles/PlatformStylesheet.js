import { Platform, StyleSheet } from 'react-native'

/**
 * helper for automatically applying platform specific styles
 */

/* usage

const styles = PlatformStyleSheet.create({
    container: {
        backgroundColor: 'white,
        ios: {
            fontFamily: ‘Arial’,
        },
        android: {
            fontFamily: ‘Roboto’,
        },
    },
});

*/
const PlatformStyleSheet = {
    create(styles) {
        const styleKeys = Object.keys(styles)
        const keptStyles = {}

        styleKeys.forEach((key) => {
            const { ios, android, ...style } = styles[key]
            keptStyles[key] = { ...style, ...Platform.select({ ios, android }) }
        })

        return StyleSheet.create(keptStyles)
    },
}

export default PlatformStyleSheet
