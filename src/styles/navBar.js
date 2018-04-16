import colors from './colors'

const dark = {
    navBarTextColor: colors.charcoal,
    navBarSubtitleFontFamily: 'AvenirNext-DemiBold',
    navBarTextFontSize: 30,
    navBarButtonColor: colors.charcoal,
    topBarElevationShadowEnabled: true,
    navBarBackgroundColor: colors.white
}

const light = {
    ...dark,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    navBarTransparent: true,
    drawUnderNavBar: true
}

export default {
    dark,
    light
}
