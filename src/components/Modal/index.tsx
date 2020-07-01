import React from 'react';
import { Modal } from 'antd';


interface ModalProps {
  visible: boolean;
  handleModalClose: () => void;
  children: React.ReactNode;

}

const ModalBox: React.FC<ModalProps> = ({visible, handleModalClose, children}) => {


  return (
    <div>
        <Modal
          title="Product Details"
          visible={visible}
          onOk={handleModalClose}
          onCancel={handleModalClose}
        >
          {children}
        </Modal>
      </div>

  )
}

export default ModalBox;
