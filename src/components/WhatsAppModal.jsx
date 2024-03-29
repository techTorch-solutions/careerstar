import React from 'react'
import Modal from './Modal'
import qr from './images/qr.jpeg'

const WhatsAppModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="dialog-container font-bold" id="dialogContainer">
                <div className="dialog-content flex flex-col items-center justify-between">
                    <h1 className='text-black'>Contact Us on What's App</h1>
                    <div className="waqr">
                        <img style={{ borderRadius: 15 }} height="300" width="300" src={qr} alt="" />
                    </div>
                    <p className='text-black'>Or</p>
                    <p><a className='underline hover:text-black text-buttons cursor-pointer' target="_blank">Click Here</a></p>

                </div>
            </div>
        </Modal>
    )
}

export default WhatsAppModal