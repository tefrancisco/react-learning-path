import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
      // We need to know wether the modal opened or not and when
      // Initial is triggered when the modal is inserted into the DOM,
      // it allow us to create a starting state for it
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}

      initial='hidden'
      animate='visible'
      exit='hidden'
      open 
      className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
