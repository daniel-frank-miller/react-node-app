import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons'

const FacebookSignIn=()=>(
    <div>
        <LoginSocialFacebook appId='649508573972113' onResolve={(response)=>{
            console.log(response)
        }} onReject={(error)=>{
            console.log(error)
        }}>
            <FacebookLoginButton/>
        </LoginSocialFacebook>
    </div>
)

export default FacebookSignIn