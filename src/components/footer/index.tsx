import {RiMoneyDollarBoxLine} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className={'w-full lg:bg-secondary h-auto lg:h-12 justify-center items-center flex'}>
            <p className={'hidden lg:flex'}>
                yoga@gmail.com 050-111-1111 Вул. Володимирська 18 /2
            </p>
            <RiMoneyDollarBoxLine className={'w-16 h-auto block lg:hidden mb-12'}/>
        </footer>
    );
};

export default Footer;