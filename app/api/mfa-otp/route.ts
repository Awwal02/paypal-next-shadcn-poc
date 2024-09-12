import * as  axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const validateUserOtp = async (otp: string, mfaToken: string) => {
  var axios = require("axios").default;

    var options = {
      method: 'POST',
      url: 'https://dev-q3y4z1etwkxqxi43.us.auth0.com/oauth/token',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: new URLSearchParams({
        mfa_token: mfaToken,
        otp,
        grant_type: process.env.AUTH0_GRANT_TYPE_MFA as string,
        client_id: process.env.AUTH0_CLIENT_ID as string,
        client_secret: process.env.AUTH0_CLIENT_SECRET as string,
        audience: process.env.AUTH0_AUDIENCE as string,
        scope: process.env.AUTH0_SCOPE as string
      })

    };
    let data;
    try {
      data = await axios.request(options)
      return data
    } catch(e: any) {
      if(e.response.data.error === 'mfa_required') return {showMFA: true, ...data}
      return new Error("login error")
    }
}

export const POST = async (request: Request) => {
  const formData = await request.formData()
  const otp = (formData.get('otp') || '').toString()
  const mfaToken = (formData.get('mfaToken') || '').toString()
  let responseData = await validateUserOtp(otp, mfaToken) as any
  let data = responseData?.data 
  return Response.json({  data })
}