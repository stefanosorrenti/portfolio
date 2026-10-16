export default function AppMyValuesSections() {
    return (
        <div className="border-b border-line md:py-2 lg:py-5 xl:py-7">
            <section
                className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas"
                aria-label="My values section"
            >
                <h3 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase md:mb-4 lg:mb-6 xl:mb-8">
                    My values
                </h3>

                <ul className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">

                    {/* Creativity */}

                    <li className="pb-6 md:pb-8 lg:py-3 lg:pr-6 xl:pr-10">
                        <div className="flex items-start gap-6 md:gap-7 lg:gap-4 xl:gap-6">

                            {/* Icon */}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-10 shrink-0 text-brand md:size-11 lg:size-12 xl:size-14"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M9 18h6v-2a7 7 0 1 0-6 0v2ZM9 21h6M10.5 23h3" />
                            </svg>

                            {/* Content */}

                            <div>
                                <h4 className="text-lg leading-snug font-semibold tracking-tight text-ink md:text-xl xl:text-2xl">
                                    Creativity
                                </h4>
                                <p className="mt-1 text-base leading-normal text-body md:mt-2 md:leading-relaxed xl:text-lg">
                                    I enjoy turning ideas into simple and effective solutions.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Precision */}
                    <li className="py-6 md:py-8 lg:px-6 lg:py-3 xl:px-10">
                        <div className="flex items-start gap-6 md:gap-7 lg:gap-4 xl:gap-6">
                            {/* Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-10 shrink-0 text-brand md:size-11 lg:size-12 xl:size-14"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="4.5" />
                            </svg>

                            {/* Content */}
                            <div>
                                <h4 className="text-lg leading-snug font-semibold tracking-tight text-ink md:text-xl xl:text-2xl">
                                    Precision
                                </h4>
                                <p className="mt-1 text-base leading-normal text-body md:mt-2 md:leading-relaxed xl:text-lg">
                                    My background in optics taught me to value accuracy in every detail.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Continuous Learning */}
                    <li className="pt-6 md:pt-8 lg:py-3 lg:pl-6 xl:pl-10">
                        <div className="flex items-start gap-6 md:gap-7 lg:gap-4 xl:gap-6">
                            {/* Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-10 shrink-0 text-brand md:size-11 lg:size-12 xl:size-14"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M3 12h4v8H3zM10 8h4v12h-4zM17 3h4v17h-4z" />
                            </svg>

                            {/* Content */}
                            <div>
                                <h4 className="text-lg leading-snug font-semibold tracking-tight text-ink md:text-xl xl:text-2xl">
                                    Continuous Learning
                                </h4>
                                <p className="mt-1 text-base leading-normal text-body md:mt-2 md:leading-relaxed xl:text-lg">
                                    I’m always exploring new tools, technologies and perspectives to improve.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
