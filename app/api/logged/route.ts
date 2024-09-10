import * as  axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export const GET = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  console.log(req, res)
  return new Response('Hello, Next.js!', {
    status: 200
  })
}

const validateUser = async (email: string, password: string) => {
  var axios = require("axios").default;

    var options = {
      method: 'POST',
      url: process.env.AUTH0_TOKEN_URL,
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: new URLSearchParams({
        grant_type: 'password',
        username: email,
        password: password,
        client_id: process.env.AUTH0_CLIENT_ID as string,
        client_secret: process.env.AUTH0_CLIENT_SECRET as string,
        audience: process.env.AUTH0_AUDIENCE as string,
        scope: process.env.AUTH0_SCOPE as string
      })

    };
    let data
    try {
      data = await axios.request(options)
      return data
    } catch(e: any) {
      if(e.response.data.error === 'mfa_required') return {showMFA: true, mfaToken: e.response.data.mfa_token}
      return new Error("login error")
    }
}

export const POST = async (request: Request) => {
  const formData = await request.formData()
  const email = (formData.get('email') || '').toString()
  const password = (formData.get('password') || "").toString()
  let responseData = await validateUser(email, password) as any
  let data = responseData?.data || {showMFA: responseData.showMFA, mfaToken: responseData.mfaToken}
  return Response.json({  data })
}