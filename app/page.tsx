import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Search from "./components/Search";
export default async function Home() {
    return (
        <main className="flex justify-between">
            <Nav />
            <div className=" flex-1">
                <Search />
                <HeroSection />
            </div>
        </main>
    );
}
