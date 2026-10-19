export default function AppModal({ onClose }) {
    return (

        /* Modal backdrop */
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            {/* Modal content */}
            <div className="bg-surface m-4 rounded-lg p-4 grid grid-cols-1 xl:m-0 lg:grid-cols-2 gap-4">

                {/* Img and title*/}

                <div>

                    <button className="block ml-auto md:hidden" onClick={onClose}>X</button> {/* Close button */}

                    {/* Title */}
                    <div>
                        <h5 className="text-2xl font-bold text-ink">Title <span className="text-brand">brand.</span></h5>
                        <p className="text-body">Breve sottotitolo del progetto</p>
                    </div>

                    {/* Image */}
                    <div>
                        <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="placeholder" />
                    </div>

                </div>

                {/* Content */}

                <div>

                    {/* Overview */}
                    <div className="text-muted border-b border-line pb-4">
                        <h6 className="flex items-center justify-between">
                            Overview
                            <button className="hidden lg:inline text-ink" onClick={onClose}>X</button> {/* Close button */}
                        </h6>
                        <p>Descrizione dettagliata del progetto</p>
                    </div>


                    {/* Features */}
                    <div className="border-b border-line pb-4">
                        <h6 className="text-muted">Funzionalità principali</h6>
                        <ul>
                            <li className="text-ink">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-brand inline-block mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Funzionalità 1
                            </li>

                            <li className="text-ink">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-brand inline-block mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Funzionalità 2
                            </li>

                            <li className="text-ink">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-brand inline-block mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Funzionalità 3
                            </li>

                        </ul>
                    </div>


                    {/* Technologies */}
                    <div className="border-b border-line pb-4">
                        <h6 className="text-muted">Stack tecnologico</h6>
                        <ul>
                            <li>Technology 1</li>
                            <li>Technology 2</li>
                            <li>Technology 3</li>
                        </ul>
                    </div>


                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 bg-brand text-white rounded-[3px] basis-full">View project</button>
                        <button className="px-4 py-2 basis-full border border-faint text-ink">View code</button>
                    </div>
                </div>
            </div>

        </div>
    )
}