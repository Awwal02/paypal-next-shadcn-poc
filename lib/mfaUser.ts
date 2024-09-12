import axios from "axios";
import { isBrowser } from "./windowChecker";

export const loginUser = async (email: string, password: string,router: any) => {
    //router.push('/mfa-selection')
    const FormData = require('form-data');
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/logged',
      data : data
    };
    try {
        let response = await axios.request(config)
        console.log(response.data.data.showMFA)
        if(isBrowser()) {
        window?.sessionStorage?.setItem('mfaValidateToken', response.data.data.mfaToken)
        }
        router.push('/verify-user')
        return response
    } catch(e) {
           console.log(e);
    }
      // router.push('/mfa-selection')
    // await mfaUser(response)
    // setShowOtp(true)
    // setResponse(response)
  }