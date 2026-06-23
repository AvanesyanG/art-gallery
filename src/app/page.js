import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import Marquee from "@/components/Marquee/Marquee";
import Description from "@/components/Description/Desctiption";
import TextReveal from "@/components/TextReveal/TextReveal";
import Projects from "@/components/Projects/Projects";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Gallery from "@/components/Gallery/Gallery";
import FloatingImages from "@/components/FloatingImages/FloatingImages";
import Zoom from "@/components/Zoom/Zoom";
import ArtStats from "@/components/ArtStats/ArtStats";
import FinalSection from "@/components/FinalSection/FinalSection";
import ImageStack from "@/components/ImageStack/ImageStack";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <main className={styles.main}>
            <Intro />
            <Marquee />
            <Description />
            <TextReveal />
            <Projects />
            <HorizontalScroll />
            <Gallery />
            <FloatingImages />
            <Zoom />
            <ArtStats />
            <FinalSection />
            <ImageStack />
            <Footer />
        </main>
    );
}
