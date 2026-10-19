export default function AppModal({ onClose }) {
    return (

        /* Modal backdrop */
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">


            {/* Container */}
            <div className="container mx-auto">

                {/* Modal content */}
                <div className="bg-surface rounded-lg p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* Img and title*/}

                    <div>
                        <button onClick={onClose}>X</button> {/* Close button */}

                        {/* Title */}
                        <div>
                            <h5>Title</h5>
                            <p>Breve sottotitolo del progetto</p>
                        </div>

                        {/* Image */}
                        <div>
                            <img src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="placeholder" />
                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        {/* Overview */}
                        <div>
                            <h6>Overview</h6>
                            <p>Descrizione dettagliata del progetto</p>
                        </div>


                        {/* Features */}
                        <div>
                            <h6>Funzionalità principali</h6>
                            <ul>
                                <li>Funzionalità 1</li>
                                <li>Funzionalità 2</li>
                                <li>Funzionalità 3</li>
                            </ul>
                        </div>


                        {/* Technologies */}
                        <div>
                            <h6>Technologies</h6>
                            <ul>
                                <li>Technology 1</li>
                                <li>Technology 2</li>
                                <li>Technology 3</li>
                            </ul>
                        </div>


                        {/* Buttons */}
                        <div>
                            <button>View project</button>
                            <button>View code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}