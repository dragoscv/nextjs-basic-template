import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className="flex flex-col h-screen">
                <Header></Header>
                <div className="flex-1"><main>{children}</main></div>
                <Footer />
            </div>
        </>
    )
}

export default Layout