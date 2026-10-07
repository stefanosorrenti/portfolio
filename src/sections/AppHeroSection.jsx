import { Link } from "react-router-dom";

export default function AppHeroSection() {



    return (
        /* Hero Section */

        <section className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4" aria-label="Hero Section">

            {/* Description column */}

            <div>

                {/* Title and description */}

                <div>
                    <small className="text-muted">DIFFERENT BACKGROUND. SAME VISION.</small>
                    <h1 className="text-3xl font-bold ">From optics<br /><span className="text-brand">to code.</span></h1>
                    <p className="text-lg text-muted">
                        I'm Stefano Sorrenti, a Junior Full Stack Web Developer with a creative
                        mind, an eye for detail and a constant desire to learn.
                    </p>
                </div>


                {/* Links */}

                <div>
                    <Link className="bg-brand text-white px-4 py-2 rounded">View Projects</Link>
                    <Link className="border border-muted px-4 py-2 rounded">Download CV</Link>
                </div>



            </div>

            {/* Potrait column */}

            <div className="hidden lg:block"><h1>COLONNA 2</h1></div>

        </section>

    )
}