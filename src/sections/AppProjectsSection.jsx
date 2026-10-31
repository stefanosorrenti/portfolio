import AppProjectCard from "../components/AppProjectCard";
import projects from "../data/projects";

export default function AppProjectsSection() {
    return (

        /* Projects section */
        <div id="projects" className="border-b border-line md:py-2 lg:py-5">
            <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px] bg-canvas">

                {/* Title and button */}

                <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:mb-6">
                    <h3 className="text-xs leading-4 font-medium tracking-[0.24em] text-muted">PROGETTI</h3>
                    <button className="hidden min-h-11 items-center gap-2 py-2 text-xs leading-4 font-medium text-brand cursor-pointer md:gap-3 md:text-sm ">VEDI TUTTI I PROGETTI <span className="text-base md:text-lg" aria-hidden="true">→</span></button>
                </div>


                {/* Projects */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
                    {projects.map((project) => (
                        <AppProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </section>
        </div>
    )
}
