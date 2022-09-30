import * as React from 'react';
import {Box, Button, Modal, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {useEffect} from "react";
import {setOpenModalAC} from "../store/personalInfo-reducer";


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

export default function CompleteModal() {
    const dispatch = useDispatch()



    const openModal = useSelector<AppRootStateType, boolean>(state => state.personalInfo.openModal)
    const [open, setOpen] = React.useState(false);
    const handleClose = () => dispatch(setOpenModalAC(false));

    useEffect(()=>{
        if(openModal){
            setOpen(openModal)
        } else {
            setOpen(false)
        }
    }, [openModal])

    return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your profile
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <ul>
                            {/*<li></li>*/}
                        </ul>
                    </Typography>
                </Box>
            </Modal>
    );
}
