export const ProductSkeleton = () => {
    return (
        <div aria-hidden="true" className="w-full animate-pulse space-y-4">
            <div className="h-48 bg-gray-300 rounded-md"></div>

            <div className="h-6 bg-gray-300 rounded-md w-2/4"></div>

            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
            <div className={'flex justify-between'}>
                <div className="h-5 bg-gray-300 rounded-md w-1/6"></div>
                <div className="h-5 bg-gray-300 rounded-md w-1/4"></div>
            </div>
        </div>
    );
};