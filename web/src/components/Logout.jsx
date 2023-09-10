
import Cookies from "js-cookie";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Logout = () => {

    const [loading, setLoading] = useState(false)

    function LoadingLogout() {
        return (
            <div className="d-flex p-1">
                <Spinner animation="border" variant="primary me-3" /><p className="fw-bold mt-1">Fazendo logout...</p>
            </div>
        );
    }
    const handleLogout = () => {
        setLoading(true)
        Cookies.remove('token')

        setTimeout(() => {
            window.location.href = '/'
        }, 2000)
    };


    return (
        <div>
            {loading ? (
                <LoadingLogout />
            ) : (
                <Button className="p-3 fw-bold text-danger bg-transparent" onClick={handleLogout}>
                    Sair
                </Button>
            )}
        </div>
    );
}

export default Logout