import { lazy } from 'react'

const ModalBackground = lazy(() => import(/* webapckChunkName: "ModalBackground" */'../../../../BaseComponents/BaseModal/ModalBackground/Background'))
const Modal = lazy(() => import(/* webapckChunkName: "Modal" */ '../../../../BaseComponents/BaseModal/Modal/Modal'))

const Nutrients = () => {
    return (
        <>
            <ModalBackground />
            <Modal />
        </>
    )
}

export default Nutrients