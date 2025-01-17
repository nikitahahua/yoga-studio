import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useEffect, useState} from "react";
import {Link} from "react-router";
import {WebRoutes} from "@/constants";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

const Burger = () => {
    const [open, setOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const largeSize = "1024px"

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < parseInt(largeSize)) {
                setIsTablet(true);
            } else {
                setIsTablet(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <Dialog>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                {
                    isTablet ?
                        <DialogTrigger>
                            <div className={'flex flex-col justify-center  group hover:cursor-pointer'}>
                    <span
                        className={`bg-secondary_dark h-1 w-8 mb-1 translate-x-[7px] duration-300 group-hover:translate-x-[0px] ${open && '-rotate-[45deg]  translate-y-[100%] '}`}></span>
                                <span
                                    className={`bg-secondary_dark h-1 w-8 mb-1  translate-x-[4px] duration-300 group-hover:translate-x-[0px] ${open && 'hidden'}`}></span>
                                <span
                                    className={`bg-secondary_dark h-1 w-8 mb-1 ${open && 'rotate-[45deg]  -translate-y-[90%] translate-x-[20%]'}`}></span>
                            </div>
                        </DialogTrigger>
                        :
                        <DropdownMenuTrigger>
                            <div className={'flex flex-col justify-center  group hover:cursor-pointer'}>
                    <span
                        className={`bg-secondary_dark h-1 w-8 mb-1 translate-x-[7px] duration-300 group-hover:translate-x-[0px] ${open && '-rotate-[45deg]  translate-y-[100%] '}`}></span>
                                <span
                                    className={`bg-secondary_dark h-1 w-8 mb-1  translate-x-[4px] duration-300 group-hover:translate-x-[0px] ${open && 'hidden'}`}></span>
                                <span
                                    className={`bg-secondary_dark h-1 w-8 mb-1 ${open && 'rotate-[45deg]  -translate-y-[90%] translate-x-[20%]'}`}></span>
                            </div>
                        </DropdownMenuTrigger>
                }
                {
                    isTablet ?
                        <DialogContent>
                            <div>
                                <Link to={WebRoutes.HOME}>
                                    Меню
                                </Link>
                            </div>
                            <div>
                                <Link to={WebRoutes.FIRST_VISIT}>
                                    Перший візит
                                </Link>
                            </div>
                            <div>
                                <Link to={WebRoutes.SCHEDULE}>
                                    Розклад занять
                                </Link>
                            </div>
                            <div>На свіжому повітрі</div>
                            <div>Наші ціни</div>
                            <div>Контакти</div>
                            <div>Наші інструктори</div>
                            <div>
                                <Link to={WebRoutes.CALCULATOR}>
                                    Калькулятор цілей
                                </Link>
                            </div>
                        </DialogContent>
                        : <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <Link to={WebRoutes.HOME}>
                                    Меню
                                </Link>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <Link to={WebRoutes.FIRST_VISIT}>
                                    Перший візит
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={WebRoutes.SCHEDULE}>
                                    Розклад занять
                                </Link></DropdownMenuItem>
                            <DropdownMenuItem>На свіжому повітрі</DropdownMenuItem>
                            <DropdownMenuItem>Наші ціни</DropdownMenuItem>
                            <DropdownMenuItem>Контакти</DropdownMenuItem>
                            <DropdownMenuItem>Наші інструктори</DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={WebRoutes.CALCULATOR}>
                                    Калькулятор цілей
                                </Link></DropdownMenuItem>
                        </DropdownMenuContent>
                }
            </DropdownMenu>
        </Dialog>
    );
};

export default Burger;