import React from 'react'
import Modal from './Modal'
import hero2 from './images/profile.png'

const WhatsAppModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="dialog-container font-bold" id="dialogContainer">
                <div className="dialog-content flex flex-col items-center justify-between">
                    <h1 className='text-black'>Contact Us on What's App</h1>
                    <div className="waqr">
                        <img style={{ borderRadius: 15 }} height="300" width="300" src={hero2} alt="" />
                    </div>
                    <p className='text-black'>Or</p>
                    <p><a className='text-black  underline hover:text-buttons' href="https://wa.link/u43ybj" target="_blank">Click Here</a></p>

                </div>
            </div>
        </Modal>
    )
}

export default WhatsAppModal