import AppAboutSection from "../sections/AppAboutSection";
import AppContactSection from "../sections/AppContactSection";
import AppHeroSection from "../sections/AppHeroSection";
import AppMyValuesSections from "../sections/AppMyValuesSections";
import AppProjectsSection from "../sections/AppProjectsSection";
import AppTechStackSection from "../sections/AppTechStackSection";

export function AppHomePage() {



    return (
        <>
            <AppHeroSection />
            <AppAboutSection />
            <AppMyValuesSections />
            <AppProjectsSection />
            <AppTechStackSection />
            <AppContactSection />
        </>
    )
}