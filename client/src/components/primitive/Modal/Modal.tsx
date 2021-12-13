import React, { useState } from 'react';
import { useLanguageText } from '../../../hooks/language';
import Input from '../Input/Input';
import './Modal.css';

const formData = [
    ['managementName', 'managementAddress', 'district', 'governate', 'floor', 'managerName'],
    ['centralName', 'district', 'governate', 'managerName']
];

const Modal = ({visible, setVisible, submit} : any) => {
    const central = useLanguageText('central');
    const admin = useLanguageText('admin');
    const handleFormSubmit = (e : any) => {
        e.preventDefault();
        const mapping : any = modalType === 0 ? {
            0: 'adminName',
            1: 'adminAddress',
            2: 'district',
            3: 'governate',
            4: 'floor',
            5: 'manager'
        } : {
            0: 'central',
            1: 'district',
            2: 'governate',
            3: 'manager'
        };
        const data : any = {empType: modalType};
        let flag = false;
        Array.prototype.forEach.call(e.target.elements, (element, index : any) => {
            const num = mapping[index];
            if(num && !element.value) 
                flag = true;
            data[num] = element.value;
          })
        if(!flag)
            submit(data);
    }
    const stopPropogation = (e : any) => e.stopPropagation();
    const [modalType, setModalType] = useState(0);
    if(!visible) return null;
    return (
        <div className="modal-container" onClick={() => setVisible(false)}>
            <div onClick={stopPropogation} className="modal-inner-container">
                <div>
                    <button onClick={() => setModalType(0)} className={`form-button form-button-${modalType === 0}`}>{admin} </button>
                    <button onClick={() => setModalType(1)} className={`form-button form-button-${modalType === 1}`}>{central}</button>
                </div>
                <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleFormSubmit}>
                    {formData[modalType].map(form => <Input label={form} />)}
                    <button className="form-button form-button-true">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;