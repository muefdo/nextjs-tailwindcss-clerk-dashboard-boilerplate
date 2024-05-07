"use client"

import React, { useEffect, useState } from 'react'
import UpgradePopUp from './upgrade-popup';

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);



    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;


    return (
        <>
            <UpgradePopUp />
        </>
    )
}

export default ModalProvider