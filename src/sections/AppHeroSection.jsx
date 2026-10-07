export default function AppHeroSection() {



    return (
        <section className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4" aria-label="Hero Section">
            <div><h1>COLONNA 1</h1></div>
            <div className="hidden lg:block"><h1>COLONNA 2</h1></div>
        </section>
    )
}