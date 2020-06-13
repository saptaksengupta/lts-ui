export const ResponsiveReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DEVICE':
            return {
                device: getDeviceBasedOnWindow()
            }
        default:
            return state;
    }
}


export const SUPPORTED_DEVICES = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    SMALL_PC: 'small_pc',
    LEARGE_PC: 'learge_pc'
}

export const MEDIA_QUIRES = {
    sm: '(max-width: 800px)',
    lg: '(max-width: 990px)'
}

export const getDeviceBasedOnWindow = () => {
    const isSmall = window.matchMedia(MEDIA_QUIRES.sm).matches;
    return isSmall ? SUPPORTED_DEVICES.MOBILE : SUPPORTED_DEVICES.SMALL_PC;
}

