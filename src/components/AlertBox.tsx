import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AlertBox = () => {
    const alert = useSelector((state) => {
        return state.alert
    });
    console.log(alert)
    return (
        <Alert>{alert.message}</Alert>

    )
}

export default AlertBox