import AppProjectCard from "../components/AppProjectCard";

export default function AppProjectsSection() {
    return (

        /* Projects section */
        <section>

            {/* Title and button */}

            <div>
                <h3 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted">PROJECTS</h3>

                <button>VIEW ALL PROJECTS</button>
                
            </div>


            {/* Projects */}

            <div>
                <AppProjectCard />
            </div>

        </section>
    )
}