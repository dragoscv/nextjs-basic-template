import Link from 'next/link'
import { useRouter } from "next/router";
import { headerContent } from '../../translations/headerContent'

const Logo = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { content } = headerContent[locale];

    return(
        <>
        <Link href="/">{content.textLogo}</Link>
        </>
    )
}

export default Logo