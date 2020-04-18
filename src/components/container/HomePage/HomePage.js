import React, { Fragment } from 'react';

import CurvedHeader from './CurvedHeader';
import LoginForm from './LoginForm';

import { ContainerLayoutColumn } from '../../styled/CommonUtils';

const HomePage = () => {
    return (
        <Fragment>
            <CurvedHeader />
            <ContainerLayoutColumn>
                <LoginForm></LoginForm>
            </ContainerLayoutColumn>
        </Fragment>
    )
}

export default HomePage;