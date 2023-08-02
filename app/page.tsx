import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import UpComingMovieSection from "./components/UpComingMovieSection";
import TopRatedMovies from "./components/TopRatedMovies";
import LatestMovies from "./components/LatestMovies";
export default async function Home() {
    return (
        <main className="lg:flex-1 w-full">
            <div className="hidden lg:block">
                <Search size={40} />
            </div>
            <section className="">
                <HeroSection />
            </section>
            <section>
                <UpComingMovieSection />
            </section>
            <section>
                <TopRatedMovies />
            </section>
          <section>
                <LatestMovies />
            </section>  
        </main>
    );
}
