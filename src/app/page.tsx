import { LocaleProvider } from "@/i18n/LocaleProvider";
import ScrollProgress from "@/components/home/ScrollProgress";
import CursorField from "@/components/home/CursorField";
import SiteHeader from "@/components/home/SiteHeader";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import SelectedWork from "@/components/home/SelectedWork";
import About from "@/components/home/About";
import ContactFooter from "@/components/home/ContactFooter";
import ProPortalKonami from "@/components/home/ProPortalKonami";

export default function Home() {
  return (
    <LocaleProvider>
      <ScrollProgress />
      <CursorField />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <About />
        <ContactFooter />
      </main>
      <ProPortalKonami />
    </LocaleProvider>
  );
}
