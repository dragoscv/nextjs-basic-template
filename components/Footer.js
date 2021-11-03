import { useRouter } from "next/router";
import { footerContent } from "../translations/footerContent";



const Footer = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { content } = footerContent[locale];

    return (
        <>
            {content.text1}
        </>
    )
}

export default Footer