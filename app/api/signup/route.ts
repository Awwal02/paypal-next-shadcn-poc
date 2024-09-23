import * as auth0 from './auth0'

const createUser = async (email: string, password: string) => {
    var webAuth = new (auth0 as any).WebAuth({
        // domain:   
        // clientID:     
      });
      
      webAuth.signup({ 
        connection: 'Username-Password-Authentication', 
        email: email, 
        password: password
      }, function (err: any) { 
        if (err) return alert('Something went wrong: ' + err?.message); 
          return alert('success signup without login!') 
      });
}

export const POST = async (request: Request) => {
    const formData = await request.formData()
    const email = (formData.get('email') || '').toString()
    const password = (formData.get('password') || "").toString()
    let responseData = await createUser(email, password) as any
    // let data = responseData?.data || {showMFA: responseData.showMFA, mfaToken: responseData.mfaToken}
    return Response.json({  responseData })
  }