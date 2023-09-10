const ToastErro = () => {

    const exibirToastErro = () => {
        setToastErro(true);
    
        setTimeout(() => {
          setToastErro(false);
        }, 3000);
      };

    return (
        <Toast
            show={toastErro}
            onClose={() => setToastErro(false)}
            className="position-absolute toastEmail bg-danger text-white"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Credenciais Incorretas!
            </Toast.Body>
          </Toast>
    )   
}