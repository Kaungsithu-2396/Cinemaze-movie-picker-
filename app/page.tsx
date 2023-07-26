import HeroSection from "./components/HeroSection";

import Search from "./components/Search";
export default async function Home() {
    return (
        <main className="flex-1">
            <Search />
            <HeroSection />
        </main>
    );
}
