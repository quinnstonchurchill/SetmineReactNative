// import { StyleSheet } from 'react-native'
import PlatformStyleSheet from './PlatformStylesheet'
import colors from './colors'
import * as dims from './dims'

const styles = PlatformStyleSheet.create({
    // containers
    container: {
        flex: 1
    },
    page: {
        backgroundColor: colors.background,
        flex: 1
    },
    // layouts
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    column: {
        flexDirection: 'column'
    },
    alignLeft: {
        alignItems: 'flex-start'
    },
    alignRight: {
        alignItems: 'flex-end'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerSelf: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    // cell
    cell: {
        flexDirection: 'row',
        padding: dims.spacing2x
    },
    borderBottom: {
        flex: 1,
        marginLeft: dims.spacing2x,
        marginRight: dims.spacing2x,
        backgroundColor: colors.border,
        height: 1
    },
    // colors
    overlay: {
        position: 'absolute',
        backgroundColor: colors.charcoal,
        opacity: 0.5,
        width: dims.screenWidth,
        height: dims.screenHeight
    },
    // shadows
    shadow1: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 1.5
            },
            shadowOpacity: 0.07,
            shadowRadius: 8
        },
        android: {
            elevation: 1
        }
    },
    shadow2: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.1,
            shadowRadius: 11
        },
        android: {
            elevation: 2
        }
    },
    shadow3: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 0.16,
            shadowRadius: 12
        },
        android: {
            elevation: 3
        }
    },
    shadow4: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowOpacity: 0.21,
            shadowRadius: 14
        },
        android: {
            elevation: 4
        }
    },
    shadow5: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 5
            },
            shadowOpacity: 0.14,
            shadowRadius: 25
        },
        android: {
            elevation: 5
        }
    }
});

export default styles
