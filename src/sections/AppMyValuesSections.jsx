export default function AppMyValuesSections() {

    return (


        /* My values list */

        <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]" aria-label="My values section">


            <h3 className="mb-[9px] block text-[11px] leading-[14px] font-medium tracking-[0.32em] text-outline">MY VALUES</h3>

            <ul className="grid items-start gap-[27px] lg:grid-cols-12">

                {/* Creativity */}

                <li className="lg:col-span-4">

                    <div className="flex gap-3.5">

                        {/* Icon */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>

                        {/* Content */}

                        <div>
                            <h4 className="text-lg font-semibold">Creativity</h4>
                            <p className="text-muted">
                                I enjoy turning ideas into simple and effective solutions.
                            </p>
                        </div>

                    </div>

                </li>

                {/* Precision */}

                <li className="lg:col-span-4">

                    <div className="flex gap-3.5">

                        {/* Icon */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        {/* Content */}

                        <div>
                            <h4 className="text-lg font-semibold">Precision</h4>
                            <p className="text-muted">
                                My background in optics taught me to value accuracy in every detail.
                            </p>
                        </div>
                    </div>

                </li>


                {/* Continuous Learning */}
                <li className="lg:col-span-4">
                    <div className="flex gap-3.5">

                        {/* Icon */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>

                        {/* Content */}

                        <div>
                            <h4 className="text-lg font-semibold">Continuous Learning</h4>
                            <p className="text-muted">
                                I’m always exploring new tools, technologies and perspectives to improve.
                            </p>
                        </div>

                    </div>

                </li>

            </ul>

        </section>

    )
}