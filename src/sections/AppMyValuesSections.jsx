export default function AppMyValuesSections() {
    return (
        <section
            className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas"
            aria-label="My values section"
        >
            <h3 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase">
                MY VALUES
            </h3>

            <ul className="grid divide-y divide-line lg:-ml-8 lg:grid-cols-3 lg:divide-x lg:divide-y-0">

                {/* Creativity */}

                <li className="pb-6 lg:py-2 lg:pr-8 lg:pl-8">
                    <div className="flex items-start gap-6">

                        {/* Icon */}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-10 shrink-0 text-brand"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M9 18h6v-2a7 7 0 1 0-6 0v2ZM9 21h6M10.5 23h3" />
                        </svg>

                        {/* Content */}

                        <div>
                            <h4 className="text-lg leading-snug font-semibold tracking-tight text-ink">
                                Creativity
                            </h4>
                            <p className="mt-1 text-base leading-normal text-body lg:text-[13.5px]">
                                I enjoy turning ideas into simple and effective solutions.
                            </p>
                        </div>
                    </div>
                </li>

                {/* Precision */}
                <li className="py-6 lg:py-2 lg:pr-8 lg:pl-12">
                    <div className="flex items-start gap-6">
                        {/* Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-10 shrink-0 text-brand"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="4.5" />
                        </svg>

                        {/* Content */}
                        <div>
                            <h4 className="text-lg leading-snug font-semibold tracking-tight text-ink">
                                Precision
                            </h4>
                            <p className="mt-1 text-base leading-normal text-body lg:text-[13.5px]">
                                My background in optics taught me to value accuracy in every detail.
                            </p>
                        </div>
                    </div>
                </li>

                {/* Continuous Learning */}
                <li className="pt-6 lg:py-2 lg:pl-12">
                    <div className="flex items-start gap-6">
                        {/* Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-10 shrink-0 text-brand"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M3 12h4v8H3zM10 8h4v12h-4zM17 3h4v17h-4z" />
                        </svg>

                        {/* Content */}
                        <div>
                            <h4 className="text-lg leading-snug font-semibold tracking-tight text-ink">
                                Continuous Learning
                            </h4>
                            <p className="mt-1 text-base leading-normal text-body lg:text-[13.5px]">
                                I’m always exploring new tools, technologies and perspectives to improve.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}
