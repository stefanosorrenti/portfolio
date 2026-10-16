export default function AppProjectCard() {
    return (

        /* Project card */

        <div className="flex flex-col rounded border border-line bg-surface p-2 font-sans md:p-3">
            {/* Image */}
            <div className="aspect-video w-full shrink-0 overflow-hidden rounded-sm">
                <img className="h-full w-full object-cover" src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="placeholder" />
            </div>

            {/* Title and buttons */}
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 px-2 pt-3 pb-2 md:pt-4">
                <h2 className="flex-1 text-lg leading-snug font-bold tracking-tight text-ink md:text-xl">TITOLO</h2>
                <div>
                    <a href="#" aria-label="View project" className="inline-flex size-9 cursor-pointer items-center justify-center text-brand md:size-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </a>
                </div>
            </div>


            {/* Description */}
            <p className="px-2 text-sm leading-normal wrap-break-word text-body md:text-base md:leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non saepe, tempore autem, sunt ab voluptas odit ratione cum qui accusamus quod.
            </p>


            {/* Technologies */}
            <div className="mt-auto flex flex-wrap gap-2 px-2 pt-4 pb-2 md:pt-5">
                <span className="rounded-full bg-badge px-3 py-2 text-xs leading-4 text-brand lg:text-sm lg:leading-5">React</span>
                <span className="rounded-full bg-badge px-3 py-2 text-xs leading-4 text-brand lg:text-sm lg:leading-5">JavaScript</span>
                <span className="rounded-full bg-badge px-3 py-2 text-xs leading-4 text-brand lg:text-sm lg:leading-5">CSS</span>
            </div>
        </div>
    )
}
