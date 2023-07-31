
  import axios from "axios"
  import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess} from "../features/authSlice"
  import { useDispatch } from "react-redux"
  import { useNavigate } from "react-router-dom"


const useAuthCall = () => {
    
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const login = async (userInfo) => {
        const BASE_URL = "https://13537.fullstack.clarusway.com/"
        
        dispatch(fetchStart())
    
        try {
            const { data } = await axios.post(`${BASE_URL}account/auth/login`, userInfo)
            dispatch(loginSuccess(data))
            navigate("/stock")
            console.log(data)
        } catch (error) {
          dispatch(fetchFail)
        console.log(error)
        }
    }
   
    const register = async (userInfo) => {
      const BASE_URL = "https://13537.fullstack.clarusway.com/"
      
      dispatch(fetchStart())

    try {
      const { data } = await axios.post(`${BASE_URL}account/auth/register`, userInfo)
      dispatch(registerSuccess(data))
      navigate("/stock")
      console.log(data)
  } catch (error) {
    dispatch(fetchFail)
  console.log(error)
  }
}

const logout = async () => {
  const BASE_URL = "https://13537.fullstack.clarusway.com/"
  
  dispatch(fetchStart())

try {
  const { data } = await axios.post(`${BASE_URL}account/logout`)
  dispatch(logoutSuccess(data))
  navigate("/")
  console.log(data)
} catch (error) {
dispatch(fetchFail)
console.log(error)
}
}





  
  return { login, register, logout }
}

export default useAuthCall