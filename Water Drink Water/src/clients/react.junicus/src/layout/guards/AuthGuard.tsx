import {useStore} from "stores/store.ts";
import router from "router";
import {ReactNode} from "react";

interface AuthGuardProps {
    children: ReactNode
}

const AuthGuard = ({children}: AuthGuardProps) => {
    const {accountStore: {isLoggedIn}} = useStore()

    if (!isLoggedIn) router.navigate('/login');

    return <>{children}</>
}

export default AuthGuard