import Logo from "./header/Logo"
import HamburgerMenu from "./header/HamburgerMenu"
import Search from "./header/Search"
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./header/ThemeSwticher"), {
    ssr: false,
});

const Header = () => {
    return (
        <>
            <div className="flex-1">
                <div className="flex flex-row p-2">
                    <div className="p-2">
                        <Logo />
                    </div>
                    <div className="flex-1">
                        <Search />
                    </div>
                    <div className="flex-2 p-2">
                        <ThemeSwitcher />
                    </div>
                    <div className="flex-2">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header