import AppProjectCard from "../components/AppProjectCard";

export default function AppProjectsSection() {
    return (

        /* Projects section */
        <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]">

            {/* Title and button */}

            <div className="flex items-center justify-between">
                <h3 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted">PROJECTS</h3>
                <button className="mb-2 text-xs leading-4 font-medium text-brand cursor-pointer">VIEW ALL PROJECTS <span aria-hidden="true">→</span></button>
            </div>


            {/* Projects */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <AppProjectCard />
                <AppProjectCard />
                <AppProjectCard />
                <AppProjectCard />
            </div>

        </section>
    )
}