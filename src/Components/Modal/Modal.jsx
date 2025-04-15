import React from 'react'
import Modal from 'react-modal';
import style from './Modal.module.css'
import Form, { Formtype } from '../Form/Form';
Modal.setAppElement("#root");
function Modals({isOpen,children,contentLabel,setIsOpen,data}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={(prev) => {setIsOpen(!prev)}}
        className={style.modal}
        contentLabel={contentLabel}
      >
        <Form type={Formtype.booking} data={data} bdata={data}
              // setData={setExpense}
              handleCancel={() => {
                setIsOpen(false); 
                // setExpense({
                //   id: null,
                //   title: "",
                //   amount: null,
                //   category: "",
                //   date: "",
                // })
              }} setIsOpen={setIsOpen}
              // handleSubmit={handleEdit} 
              >
            </Form>
        {children}
      </Modal>
    </div>
  )
}

export default Modals