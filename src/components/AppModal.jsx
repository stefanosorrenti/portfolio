import { useEffect, useState } from 'react';
export default function AppModal({ onClose, project }) {


    //USE STATE
    const [currentIndex, setCurrentIndex] = useState(0)

    //USE EFFECT
    useEffect(() => {

        if (!onClose) return

        const originalOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'
        document.documentElement.classList.add('bg-black/75')


        return () => {
            document.body.style.overflow = originalOverflow
            document.documentElement.classList.remove('bg-black/75')
        }

    }, [onClose])


    //FUNCTIONS

    function nextImg() {
        const lastIndex= project.images.length - 1
        if (currentIndex >= lastIndex) {
             return setCurrentIndex(0)
        }
        
        setCurrentIndex(currentIndex + 1)
    }

    function prevImg() {
    if (currentIndex <= 0) {
         return setCurrentIndex(project.images.length - 1);
    } 
        setCurrentIndex(currentIndex - 1);
    
}

    return (
        /* Modal backdrop */
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 md:items-center md:p-6 lg:p-10">
            {/* Modal content */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative flex max-h-[95dvh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl border border-line bg-surface shadow-2xl md:max-w-3xl md:rounded-2xl lg:max-w-6xl"
            >

                {/* Close button */}
                <button
                    type="button"
                    aria-label="Chiudi dettaglio progetto"
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-surface text-ink"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
                    </svg>
                </button>

                {/* Scrollable content */}
                <div className="overflow-y-auto overscroll-contain px-6 pt-12 md:px-8 md:pt-6 md:pb-6 lg:px-10 lg:pt-8 lg:pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
                        {/* Image and title */}
                        <div>
                            {/* Title and subtitle */}
                            <div>
                                <h5 id="project-modal-title" className="text-3xl leading-tight font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
                                    {project.title}.
                                </h5>
                                <p className="mt-1 text-sm leading-5 text-body lg:text-lg lg:leading-6">{project.subtitle} ({project.year}).</p>
                            </div>

                            {/* Image */}
                            <div className=" mt-5 mb-8 md:mb-24">
                                <figure className="aspect-5/3 overflow-hidden rounded-lg border border-line bg-soft">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={project.images[currentIndex]}
                                        alt="placeholder"
                                    />
                                </figure>
                                {/* Buttons and image carousel dots */}
                                <div className="flex items-center justify-center gap-4 p-3">

                                    <button onClick={prevImg} type="button" aria-label="Immagine precedente" className="inline-flex items-center justify-center rounded-full border size-10 border-line bg-surface/70 text-ink shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-5" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0 7-7m-7 7 7 7" />
                                        </svg>
                                    </button>

                                    {/* Dots */}
                                    <div className="flex items-center gap-2">
                                        {project.images.map((image, index) => (
                                            <span key={index} className={`inline-flex items-center justify-center rounded-full border size-2 border-line ${currentIndex == index ? 'bg-brand/70' : 'bg-surface/70'} text-ink shadow-sm`}></span>
                                        ))}

                                        
                                    </div>

                                    <button onClick={nextImg} type="button" aria-label="Immagine successiva" className="inline-flex items-center justify-center rounded-full border size-10 border-line bg-surface/70 text-ink shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-5" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-7-7m7 7-7 7" />
                                        </svg>
                                    </button>

                                </div>

                            </div>
                        </div>

                        {/* Project details */}
                        <div className={`flex flex-col ${!project.liveUrl && 'justify-around'} lg:border-l lg:border-line lg:pl-6`}>
                            <div className="flex flex-col md:flex-row md:border-b md:border-line lg:flex-col lg:border-b-0">
                                {/* Overview */}
                                <section className="border-b border-line pb-5 md:border-b-0 md:basis-[60%] lg:basis-auto lg:border-b lg:pb-5">
                                    <h6 className="text-[10px] leading-4 font-semibold tracking-[0.25em] text-muted uppercase">Overview</h6>
                                    <p className="mt-2 text-sm leading-relaxed text-body lg:text-base">{project.description}</p>
                                </section>

                                {/* Features */}
                                <section className="border-b border-line py-5 md:border-b-0 md:pt-0 lg:border-b lg:pt-5">
                                    <h6 className="text-[10px] leading-4 font-semibold tracking-[0.25em] text-muted uppercase">Funzionalità principali</h6>
                                    <ul className="mt-3 space-y-2 text-sm leading-5 text-body">

                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true">
                                                    <circle cx="12" cy="12" r="12" />
                                                    <path fill="none" stroke="white" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" d="m6.5 12 3.5 3.5 7.5-8" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}

                                    </ul>
                                </section>
                            </div>

                            {/* Technologies */}
                            <section className="border-b border-line py-5">
                                <h6 className="text-[10px] leading-4 font-semibold tracking-[0.25em] text-muted uppercase">Stack tecnologico</h6>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} className="rounded-full bg-badge px-4 py-2 text-xs leading-4 text-brand">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </section>


                            {/* Buttons */}
                            <div className="sticky bottom-3 z-10 p-4 rounded-2xl flex flex-col gap-3 border border-b-0 border-line bg-surface shadow-md md:static md:border-0 md:p-0  md:shadow-none">
                                <a className={`${project.liveUrl ? 'inline-flex' : 'hidden'} min-h-12 w-full items-center justify-center gap-3 rounded-md border border-brand bg-brand px-4 py-3 text-sm font-semibold text-white`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-5" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    Vedi progetto
                                </a>
                                <button type="button" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-faint bg-surface px-4 py-3 text-sm font-semibold text-ink">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                                        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.02 1.75 2.68 1.24 3.33.95.1-.73.4-1.23.71-1.51-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.09 1.15a10.8 10.8 0 0 1 5.62 0c2.15-1.45 3.09-1.15 3.09-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
                                    </svg>
                                    Vedi il codice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
