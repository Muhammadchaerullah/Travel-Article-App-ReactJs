import SearchEngine from "../components/search/SearchEngine";
import HomeSearchHotel from "../components/HomeSearchHotel";
import AboutHomePage from "../components/AboutHomePage";
const Home = () => { 
    return (
        <>
        <title>Home - Travellergram</title>
        <main className="flex flex-col gap-5">
            <header className="relative isolate overflow-hidden w-full hidden md:block">
            <img
                src="/img/header.png"
                alt="travellergram-header"
                className="block inset-0 w-full object-cover object-center"
                loading="lazy"
            />
            </header>
            <div className="px-5">
                <div className="block md:hidden bg-blue-800 text-white p-5">
                    <h1 className="text-2xl font-bold mb-2">Find your next trips</h1>
                    <p className="text-sm">Search low price on hotels much more...</p>
                </div>
            </div>
            <section className="flex justify-center items-center px-5">
                <SearchEngine/>
            </section>
            <section className="flex flex-col gap-5 px-5 lg:px-0 lg:flex-row">
                <div className="bg-white w-full h-40 border border-slate-100">
                    
                </div>
                <div className="bg-white w-full h-40 border border-slate-100">

                </div>
                <div className="bg-white w-full h-40 border border-slate-100">

                </div>
            </section>
            <div>
              <HomeSearchHotel/>  
            </div>
            <section className="w-full mx-auto max-w-6xl px-5 lg:px-0">
                <AboutHomePage />
            </section>
        </main>
        </>
    );
};

export default Home