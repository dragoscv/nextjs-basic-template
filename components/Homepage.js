import { useRouter } from "next/router";
import Head from "next/head";
import { homepageContent } from "../translations/homepageContent";




const Homepage = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { title, content } = homepageContent[locale];

    return(
        <>
        <Head>
            <title>{title}</title>
        </Head>
        {content.text1}
        </>
    )
}

export default Homepage