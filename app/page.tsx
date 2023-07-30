import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import UpComingMovieSection from "./components/UpComingMovieSection";
export default async function Home() {
    return (
        <main className="lg:flex-1 w-full">
            <div className="hidden lg:block">
                <Search size={40} />
            </div>
            <HeroSection />
            <section>
                <UpComingMovieSection />
            </section>
        </main>
    );
}
