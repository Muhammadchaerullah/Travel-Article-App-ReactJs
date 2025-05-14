import SearchHotel from './SearchHotel';
export default function SearchEngine() {
    return(
        <>
        <div className="w-full max-auto max-w-6xl bg-white xl:-mt-20 xl:z-50 flex flex-col lg:flex-row gap-5 p-3">
                <div className='flex-1'>
                    <SearchHotel/>
                </div>
                <div>
                    <SearchHotel/>
                </div>
                <div>
                    <SearchHotel/>
                </div>
                <div>
                    <SearchHotel/>
                </div>
            </div>
        </>
    )
}