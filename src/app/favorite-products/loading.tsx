export default function Loading() {
    return (
        <section aria-labelledby={'favorites-skeleton'} aria-busy="true"
                 aria-live="polite" className={'w-full'}>
            <h1 className="text-2xl font-bold mb-4">Favorite Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {Array.from({length: 3}).map((_, index) => (
                    <div
                        aria-hidden="true"
                        key={index}
                        className="flex items-start border border-gray-200 rounded-lg shadow-md p-4 gap-4 animate-pulse"
                    >
                        <div className="w-20 h-20 bg-gray-200 rounded-md"></div>

                        <div className="flex-1 flex flex-col gap-2">
                            <div className="w-2/3 h-4 bg-gray-200 rounded-md"></div>

                            <div className="w-1/4 h-4 bg-gray-200 rounded-md"></div>

                            <div className="w-1/5 h-3 bg-gray-200 rounded-md"></div>

                            <div className="w-1/3 h-4 bg-gray-200 rounded-md"></div>

                            <div className="w-1/4 h-3 bg-gray-200 rounded-md"></div>

                            <div className="w-1/5 h-3 bg-gray-200 rounded-md"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
                            <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
