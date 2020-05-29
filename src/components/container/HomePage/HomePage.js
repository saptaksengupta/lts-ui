import React, { Fragment, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import CurvedHeader from './CurvedHeader';
import LoginForm from './LoginForm';

import { ContainerLayoutRow } from '../../styled/CommonUtils';
import { AuthContext } from '../../../context/AuthContext';
import { ResponsiveContext } from '../../../context/ResponsiveContext';
import { SUPPORTED_DEVICES } from '../../../reducers/ResponsiveReducer'


const HomePage = () => {
    const { responsiveState } = useContext(ResponsiveContext);
    const currentDevice = responsiveState.device;
    const { authState } = useContext(AuthContext);


    if (authState.user) {
        return <Redirect exact to='/user/todo-board' />
    }

    return (
        <Fragment>
            <ContainerLayoutRow alignment="center" style={{ height: '100%' }}>
                {currentDevice === SUPPORTED_DEVICES.MOBILE ? '' : <CurvedHeader />}
                <LoginForm></LoginForm>
            </ContainerLayoutRow>
        </Fragment>
    )
}

export default HomePage;