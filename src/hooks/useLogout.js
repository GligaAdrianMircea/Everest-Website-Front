import { useGetAuthContex } from "./useGetAuthContex"

export const useLogout = () => {
    const { dispatch } = useGetAuthContex()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
    }
    return { logout }
}