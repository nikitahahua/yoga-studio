import LogoType from "../logoType";
import {RiMoneyDollarBoxLine} from "react-icons/ri";
import Burger from "../burger";
import {MdOutlineEmail} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import {AiOutlineNotification} from "react-icons/ai";

const Home = () => {
    return (
        <header className={'w-full flex flex-col'}>
            <div className={'w-full bg-secondary p-2 lg:h-12 md:h-auto'}>
                <div className={' items-center justify-center flex lg:hidden'}>
                    <MdOutlineEmail className={'mr-1'}/>
                    <p> yoga@gmail.com</p>
                </div>
                <div className={' items-center justify-center flex lg:hidden'}>
                    <BsTelephone className={'mr-1'}/>
                    <p> 050-111-1111</p>
                </div>
                <div className={' items-center justify-center flex lg:hidden'}>
                    <AiOutlineNotification className={'mr-1'}/>
                    <p> Вул. Володимирська 18 /2</p>
                </div>
            </div>
            <div className={'flex justify-between items-center px-20'}>
                <LogoType/>
                <div className={'flex'}>
                    <RiMoneyDollarBoxLine className={'mr-5 w-9 h-auto hidden lg:block'}/>
                    <Burger/>
                </div>
            </div>
        </header>
    );
};

export default Home;