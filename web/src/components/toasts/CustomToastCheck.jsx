import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap"
import { RiCheckboxCircleFill } from "react-icons/ri"

const CustomToastCheck = ({  message, duration}) => {

const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

    return(
            <Toast    
            className={`position-absolute toastEmail bg-success text-white ${show ? 'show' : ''}`}
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              {message}
            </Toast.Body>
          </Toast>
    )
}

export default CustomToastCheck