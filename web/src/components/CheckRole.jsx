import Cookies from "js-cookie"
import jwt_decode from "jwt-decode"

const CheckRole = () => {
    const token = Cookies.get('token')

    if (!token) {
        console.log("Você não possui nenhum token")
        return null
    }

    try {
        const decodedToken = jwt_decode(token)
        const role = decodedToken.role
        return role
    } catch (error) {
        console.error("Erro ao decodificar o token:", error)
        return null
    }

}

export default CheckRole