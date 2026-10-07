import { Link } from "react-router-dom";

export default function AppHeroSection() {



    return (
        /* Hero Section */

        <section className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4" aria-label="Hero Section">

            {/* Description column */}

            <div>

                {/* Title and description */}

                <div>
                    <small>DIFFERENT BACKGROUND. SAME VISION.</small>
                    <h1>From optics<br />to code.</h1>
                    <p>I'm Stefano Sorrenti, a Junior Full Stack Web Developer with a creative
                        mind, an eye for detail and a constant desire to learn.
                    </p>
                </div>


                {/* Links */}

                <div>
                    <Link>View Project</Link>
                    <Link>Download CV</Link>
                </div>


                
            </div>

            {/* Potrait column */}

            <div className="hidden lg:block"><h1>COLONNA 2</h1></div>

        </section>

    )
}