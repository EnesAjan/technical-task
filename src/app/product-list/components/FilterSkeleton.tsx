export const FiltersSkeleton = () => {
    return (
        <div
            className={
                'flex w-full mb-10 gap-5 sticky top-0 bg-white z-10 p-4 shadow-md before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gray-200'
            }
        >
            <div className="w-1/2 h-10 bg-gray-200 rounded-md animate-pulse"></div>

            <div className="w-1/6 h-10 bg-gray-200 rounded-md animate-pulse"></div>

            <div className="w-1/6 h-10 bg-gray-200 rounded-md animate-pulse"></div>

            <div className="w-1/6 h-10 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
    );
};
