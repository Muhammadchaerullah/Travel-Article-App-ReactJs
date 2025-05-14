export default function HomeSearchHotel() {
    const dummyArray = 10;
    return (
        <>
        <div className="w-full px-5 lg:px-0">
        <div className="mx-auto max-w-6xl">
            <h1 className="text-sm lg:text-2xl font-bold">
                Top Destionation
            </h1>
            <div className="overflow-x-auto">
                <div className="w-max flex gap-5 py-5 scroll-smooth snap-x snap-mandatory">
                    {Array.from({length : dummyArray}).map((_,i) => (
                        <div key={i} className="bg-white w-[500px] h-40 snap-center">

                        </div>
                    ))}
                </div>
            </div>
            </div>
            <div>
                
            </div>
        </div>
        </>
    )
    
}