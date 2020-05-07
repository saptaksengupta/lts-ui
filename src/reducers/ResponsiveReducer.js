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

export const getDeviceBasedOnWindow = (windowDetails) => {
    return SUPPORTED_DEVICES.MOBILE;
}

