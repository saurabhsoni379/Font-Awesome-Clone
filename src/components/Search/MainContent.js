import React from 'react'

const MainContent = () => {
    const icons = [
        { name: "0", class: "fa-thin fa-0" },
        { name: "0", class: "fa-solid fa-0" },
        { name: "0", class: "fa-regular fa-0" },
        { name: "0", class: "fa-light fa-0" },
        { name: "1", class: "fa-thin fa-1" },
        { name: "1", class: "fa-solid fa-1" },
        { name: "1", class: "fa-regular fa-1" },
        { name: "1", class: "fa-light fa-1" },
        { name: "2", class: "fa-thin fa-2" },
        { name: "2", class: "fa-solid fa-2" },
        { name: "2", class: "fa-regular fa-2" },
        { name: "2", class: "fa-light fa-2" },
        { name: "3", class: "fa-thin fa-3" },
        { name: "3", class: "fa-solid fa-3" },
        { name: "3", class: "fa-regular fa-3" },
        { name: "3", class: "fa-light fa-3" },
        { name: "4", class: "fa-thin fa-4" },
        { name: "4", class: "fa-solid fa-4" },
        { name: "4", class: "fa-regular fa-4" },
        { name: "4", class: "fa-light fa-4" },
        { name: "42-Group", class: "fa-brands fa-42-group" },
        { name: "5", class: "fa-thin fa-5" },
        { name: "5", class: "fa-solid fa-5" },
        { name: "5", class: "fa-regular fa-5" },
        { name: "5", class: "fa-light fa-5" },
        { name: "500-Px", class: "fa-brands fa-500px" },
        { name: "6", class: "fa-thin fa-6" },
        { name: "6", class: "fa-solid fa-6" },
        { name: "6", class: "fa-regular fa-6" },
        { name: "6", class: "fa-light fa-6" },
        { name: "7", class: "fa-thin fa-7" },
        { name: "7", class: "fa-solid fa-7" },
        { name: "7", class: "fa-regular fa-7" },
        { name: "7", class: "fa-light fa-7" },
        { name: "8", class: "fa-thin fa-8" },
        { name: "8", class: "fa-solid fa-8" },
        { name: "8", class: "fa-regular fa-8" },
        { name: "8", class: "fa-light fa-8" },
        { name: "9", class: "fa-thin fa-9" },
        { name: "9", class: "fa-solid fa-9" },
        { name: "9", class: "fa-regular fa-9" },
        { name: "9", class: "fa-light fa-9" },
        { name: "Accessible-Icon", class: "fa-brands fa-accessible-icon" },
        { name: "Accusoft", class: "fa-brands fa-accusoft" },
        { name: "Adn", class: "fa-brands fa-adn" },
        { name: "Adversal", class: "fa-brands fa-adversal" },
        { name: "Affiliatetheme", class: "fa-brands fa-affiliatetheme" },
        { name: "airbnb", class: "fa-brands fa-airbnb" },
        { name: "algolia", class: "fa-brands fa-algolia" },
        { name: "align-center", class: "fa-solid fa-align-center" },
    ];
    return (
        <>
            <div className="w-[80vw] pl-6 pr-2">
                {/* <!-- Main header --> */}
                <div className="flex justify-between pb-8 lg:pb-2">
                    <div className="font-bold"><span>16,150 Icons</span></div>
                    <div><span>Page 1 of 20</span></div>
                </div>
                {/* <!--Main Items --> */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cold-9 grid-flow-row gap-4 py-6">
                    {icons.map((element) => {
                        return (<div className=" custom-card-main">
                            <div className="space-y-4 ">
                                <div className="text-3xl"><i className={element.class}></i></div>
                                <div className="text-xs px-3">{element.name}</div>
                            </div>
                        </div>)
                    })}
                </div>
                {/* <!-- Pagination --> */}
                <div className="flex justify-center items-center py-8">
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md bg-[rgb(20,110,190)] text-white">1</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md hover:bg-gray-300 hover:text-[rgb(25,48,83)] text-[rgb(20,110,190)]">2</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md hover:bg-gray-300 hover:text-[rgb(25,48,83)] text-[rgb(20,110,190)]">3</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md ">...</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md ">20</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md hover:bg-gray-300 hover:text-[rgb(25,48,83)] text-[rgb(20,110,190)]">Next
                        &nbsp;&nbsp; <span className=' text-sm'><i className="fa-solid fa-chevron-right "></i></span></div>
                </div>
            </div>
        </>
    )
}

export default MainContent