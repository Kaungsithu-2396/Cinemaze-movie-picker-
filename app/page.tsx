import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import UpComingMovies from "./components/UpComingMovies";
export default async function Home() {
    return (
        <main className="lg:flex-1 w-full">
            <div className="hidden lg:block">
                <Search size={40} />
            </div>
            <HeroSection />
            <section>
                <UpComingMovies />
            </section>
        </main>
    );
}
