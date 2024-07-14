import React, { useState } from 'react';
import ModalDialog from "../modalDialog/ModalDialog";
import './ProductComponent.css';

const ProductComponent = ({ productData }) => {
    const [showModalDialog, setShowModalDialog] = useState(false);
    const { imageUrl, category, name, price } = productData;

    const handleOpenModal = () => setShowModalDialog(true);
    const handleCloseModal = () => setShowModalDialog(false);

    return (
        <div
            className="ProductComponent"
            onClick={() => handleOpenModal()}
        >
            <img src={imageUrl} alt="altImage" className="ProductImage"/>
            <div>{category}</div>
            <h2>{name}</h2>
            <p>{`$${price}`}</p>

            <ModalDialog
                show={showModalDialog}
                onClose={handleCloseModal}
                productData={productData}
            />
        </div>
    );
};

export default ProductComponent;
