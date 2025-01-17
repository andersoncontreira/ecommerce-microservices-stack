// Components
import LoginForm from "../../components/public/forms/login/LoginForm.tsx";
import { useAuth } from "../../contexts/AuthContext.tsx";

const Login = () => {
    const {isAuthenticated} = useAuth()

    console.log("Login.isAuthenticated", isAuthenticated);

    return (
        <>
            {/* <Hero page="contact" /> */}
            <LoginForm></LoginForm>
        </>
    );
}

export default Login;