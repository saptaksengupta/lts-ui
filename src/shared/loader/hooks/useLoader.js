import React, { useState } from 'react';

const useLoader = (initialMode = false) => {

    const [isshown, setIsshown] = useState(initialMode)

    const showLoader = () => setIsshown(true);

    const hideLoader = () => setIsshown(false);

    return [isshown, showLoader, hideLoader];

} 

export default useLoader;