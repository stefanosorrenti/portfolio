import AppAboutSection from "../sections/AppAboutSection";
import AppHeroSection from "../sections/AppHeroSection";
import AppMyValuesSections from "../sections/AppMyValuesSections";
import AppProjectsSection from "../sections/AppProjectsSection";

export function AppHomePage() {



    return (
        <>
            <AppHeroSection />
            <AppAboutSection />
            <AppMyValuesSections />
            <AppProjectsSection />
        </>
    )
}