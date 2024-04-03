import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Banner from "../../components/Images/Banner/Banner";
import Search from "../../components/Search/Search";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <About />
            <Search />
            <Contact />
        </>
    )
}