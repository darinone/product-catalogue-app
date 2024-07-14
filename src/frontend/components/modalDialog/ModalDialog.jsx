import React from 'react';
import ReactDOM from 'react-dom';
import './ModalDialog.css';

const ModalDialog = ({ show, onClose, productData }) => {
    if (!show) return null;

    const { characteristics, imageUrl, description, name, category, price } = productData;

    const characteristicsInfo = () => {
        let result;
        switch (category) {
            case 'Fashion':
                result = (
                    <>
                        <p>{characteristics.color}</p>
                        <p>{characteristics.size}</p>
                        <p>{characteristics.season}</p>
                    </>
                );
                break;
            case 'Mobile devices':
                result = (
                    <>
                        <p>{characteristics.cpu}</p>
                        <p>{characteristics.processor}</p>
                        <p>{characteristics.color}</p>
                    </>
                );
                break;
            case 'Software':
                result = (
                    <>
                        <p>{characteristics.type}</p>
                        <p>{characteristics.operationSystem}</p>
                    </>
                );
                break;
            default:
                result = (
                    <>
                        <p>{characteristics.type}</p>
                        <p>{characteristics.operationSystem}</p>
                    </>
                );
        }
        return result;
    }

    return ReactDOM.createPortal(
        <div className="ModalDialog" onClick={onClose}>
            <div className="ModalDialogContentContainer" onClick={e => e.stopPropagation()}>
                <h2 style={{ textAlign: 'center'}}>{name}</h2>
                <div className="ModalDialogContentStyle">
                    <img src={imageUrl} alt="altImage" className="ModalImage"/>
                    <div>
                        <h3>Description:</h3>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h3>Characteristics:</h3>
                        {characteristicsInfo()}
                    </div>
                </div>
                <div className="ModalDialogButtons">
                    <button className="ModalDialogSubmitButton" onClick={onClose}>{`Buy $${price}`}</button>
                    <button className="ModalDialogCloseButton" style={{ backgroundColor: "white"}} onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModalDialog;
