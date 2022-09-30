import * as React from 'react';
import {Box, Button, Modal, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {useEffect} from "react";
import {setNullPersonalDataAC, setOpenModalAC} from "../../store/personal-info-reducer";
import {setNullDataAC} from "../../store/sign-up-reducer";

type CompleteModalType = {
    setStep: (step: number) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CompleteModal({setStep}: CompleteModalType) {

    const dispatch = useDispatch()

    const openModal = useSelector<AppRootStateType, boolean>(state => state.personalInfo.openModal)
    const firstName = useSelector<AppRootStateType, string>(state => state.personalInfo.firstName)
    const lastName = useSelector<AppRootStateType, string>(state => state.personalInfo.lastName)
    const mobilePhone = useSelector<AppRootStateType, string>(state => state.signUp.mobilePhone)
    const password = useSelector<AppRootStateType, string>(state => state.signUp.password)
    const email = useSelector<AppRootStateType, string>(state => state.signUp.email)
    const birthday = useSelector<AppRootStateType, string>(state => state.personalInfo.birthdayData)
    const ocean = useSelector<AppRootStateType, string>(state => state.personalInfo.favoriteOcean)
    const hobby = useSelector<AppRootStateType, string>(state => state.personalInfo.dataHobbiesKey)
    const gender = useSelector<AppRootStateType, string>(state => state.personalInfo.gender)

    const [open, setOpen] = React.useState(false);

    const handleClose = () => dispatch(setOpenModalAC(false));

    useEffect(() => {
        if (openModal) {
            setOpen(openModal)
        } else {
            setOpen(false)
        }
    }, [openModal])

    const handleClick = () => {
        dispatch(setNullDataAC())
        dispatch(setNullPersonalDataAC())
        setStep(1)
        setOpen(false)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Check the correctness of the entered data
                </Typography>
                <div id="modal-modal-description">
                    <ul>
                        <li>{firstName}</li>
                        <li>{lastName}</li>
                        <li>{mobilePhone}</li>
                        <li>{password}</li>
                        <li>{email}</li>
                        <li>{birthday}</li>
                        <li>{ocean}</li>
                        <li>{hobby}</li>
                        <li>{gender}</li>
                    </ul>
                    <Button style={{margin: '5px 0'}} onClick={handleClick} variant={'contained'}
                            color={'primary'}>
                        Ok
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}
