import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
     if (open) {
    dialog.current.showModal()
  } else {
    dialog.current.close()
  }
  // Remembering, the dependencies are props or state values that cause the component to be rendered again, in this case, a state
  }, [open])

  return createPortal(
    // We need the onClose to close it while pressing ESC
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
