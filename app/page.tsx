import HeroSection from "./components/HeroSection";

import Search from "./components/Search";
export default async function Home() {
    return (
        <main className="lg:flex-1 w-screen">
            <Search />
            <HeroSection />
            <div className="h-screen"></div>
        </main>
    );
}
