import React, { Fragment, useEffect, useContext } from 'react';

import CurvedHeader from './CurvedHeader';
import LoginForm from './LoginForm';

import { ContainerLayoutColumn, ContainerLayoutRow } from '../../styled/CommonUtils';
import { ResponsiveContext } from '../../../context/ResponsiveContext';
import { SUPPORTED_DEVICES } from '../../../reducers/ResponsiveReducer'


const HomePage = () => {
    const { responsiveState } = useContext(ResponsiveContext);
    const currentDevice = responsiveState.device;
    return (
        <Fragment>
            <ContainerLayoutRow alignment="center" style={{height: '100%'}}>
                {currentDevice === SUPPORTED_DEVICES.MOBILE ? '' : <CurvedHeader />}
                <LoginForm></LoginForm>
            </ContainerLayoutRow>
        </Fragment>
    )
}

export default HomePage;