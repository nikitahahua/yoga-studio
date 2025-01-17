import Logo from "../../assets/logo.tsx";
import {Link} from "react-router";
import {WebRoutes} from "@/constants";

const LogoType = () => {
    return (
        <Link to={WebRoutes.HOME} className={'flex items-center'}>
            <Logo/>
            <h1 className={'text-2xl font-semibold ml-2'}>yoga <span className={'text-secondary_dark'}>center</span></h1>
        </Link>
    );
};

export default LogoType;