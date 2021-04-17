import { lazy } from 'react'
import { createPortal } from 'react-dom'

const ModalBackground = lazy(() => import(/* webapckChunkName: "ModalBackground" */'../../../../BaseComponents/BaseModal/ModalBackground/Background'))
const Modal = lazy(() => import(/* webapckChunkName: "Modal" */ '../../../../BaseComponents/BaseModal/Modal/Modal'))

const Nutrients = () => {
    return (
        <>
            {createPortal(
                <ModalBackground />,
                document.getElementById('modal-backdrop')
            )}
            { createPortal(
                <Modal />,
                document.getElementById('modal')
            )}
        </>
    )
}

export default Nutrients