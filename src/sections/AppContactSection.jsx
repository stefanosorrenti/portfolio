export default function AppContactSection() {
    return (

        /* Contact Section */
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="container mx-auto grid gap-8 bg-canvas px-[27px] py-9 lg:min-h-[125px] lg:grid-cols-3 lg:gap-[27px] lg:pt-[10px] lg:pb-[28px]"
        >

            {/* Title */}
            <div className="">
                <span className="mb-[9px] block text-[11px] leading-[14px] font-medium tracking-[0.32em] text-muted uppercase">
                    Let&apos;s connect
                </span>
                <h2
                    id="contact-title"
                    className="text-[30px] leading-[0.98] font-bold tracking-[-0.04em] text-ink sm:text-[32px]"
                >
                    Let&apos;s build <br /> something <span className="text-brand">great.</span>
                </h2>
            </div>


            {/* Description */}
            <div className="flex items-end">
                <p className="max-w-[420px] text-sm leading-[1.45] text-body lg:text-[13.5px] lg:leading-[1.35]">
                    I&apos;m open to new opportunities, collaboration
                    <br className="hidden lg:block" /> or just a nice conversation about tech, ideas or optics.
                    <br className="hidden lg:block" />
                    Feel free to reach out!
                </p>
            </div>


            {/* Links */}
            <div className="flex items-end justify-start gap-3 lg:justify-center">
                <a
                    href=""
                    aria-label="GitHub"
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-outline/35 text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                        <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.96 10.96 0 0 1 5.76 0C17.03 4.98 18 5.29 18 5.29c.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.42-2.72 5.39-5.31 5.68.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                    </svg>
                </a>

                <a
                    href=""
                    aria-label="LinkedIn"
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-outline/35 text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                        <path d="M5.37 7.98H1.58V20h3.79V7.98ZM3.47 2A2.2 2.2 0 1 0 3.47 6.4 2.2 2.2 0 0 0 3.47 2ZM20 13.11c0-3.62-1.93-5.3-4.51-5.3a3.9 3.9 0 0 0-3.55 1.95h-.05V7.98H8.25V20h3.79v-5.95c0-1.57.3-3.09 2.25-3.09 1.92 0 1.94 1.8 1.94 3.2V20H20v-6.89Z" />
                    </svg>
                </a>

                <a
                    href=""
                    aria-label="Email"
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-outline/35 text-ink transition-colors duration-150 hover:border-brand hover:text-brand"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5 stroke-current" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75V6.75Zm.75.75 7.5 6 7.5-6" />
                    </svg>
                </a>
            </div>

        </section>


    )
}
