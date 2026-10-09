export default function AppProjectCard() {
    return (
        <div>
            {/* Image */}
            <div className="aspect-video overflow-hidden">
                <img className="h-full w-full object-cover" src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg" alt="placeholder" />
            </div>

            {/* Title and buttons */}
            <div>
                <h2>TITOLO</h2>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>

                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>

                </button>
            </div>


            {/* Description */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non saepe, tempore autem, sunt ab voluptas odit ratione cum qui accusamus quod. Eum quas corporis officiis, aliquam labore laudantium in.
            </p>


            {/* Technologies */}
            <div>
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
            </div>
        </div>
    )
}