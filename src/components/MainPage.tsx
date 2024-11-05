'use client'

import { useState, useRef } from 'react';
import { scroller, Element } from 'react-scroll';
import Home from "@/components/sections/Home";
import GuestPage from "@/components/sections/GuestSection";
import DatePage from "@/components/sections/DateSection";
import SchedulesSection from "@/components/sections/SchedulesSection";
import PlaceSection from "@/components/sections/PlaceSection";
import DetailsSection from "@/components/sections/DetailsSection";
import InfoDressSection from "@/components/sections/InfoDressSection";
import DressSection from "@/components/sections/DressSection";
import EndSection from "@/components/sections/EndSection";

import throttle from 'lodash/throttle';

interface MainPageProps {
    guest: string
}

const MainPage: React.FC<MainPageProps> = ({ guest }) => {
    const sections = [
        'inicio', 'invitado', 'fecha', 'agenda', 'el lugar', 'detalles', 'info', 'la ropa', 'end'
    ];
    const [currentSection, setCurrentSection] = useState(0);
    const isScrolling = useRef(false);

    const handleScroll = (direction: 'up' | 'down') => {
        if (isScrolling.current) return;

        isScrolling.current = true; // Bloquea temporalmente el desplazamiento
        if (direction === 'down' && currentSection < sections.length - 1) {
            setCurrentSection(currentSection + 1);
        } else if (direction === 'up' && currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }

        scroller.scrollTo(sections[currentSection], {
            duration: 600,
            delay: 0,
            smooth: 'easeInOutQuart',
        });

        setTimeout(() => {
            isScrolling.current = false; // Desbloquea después de 800 ms
        }, 800);
    };

    const handleWheel = throttle((e: React.WheelEvent) => {
        if (Math.abs(e.deltaY) > 160) { // Ajusta el umbral de sensibilidad
            handleScroll(e.deltaY > 0 ? 'down' : 'up');
        }
    }, 800);

    const touchStartY = useRef<number | null>(null)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchStartY.current !== null) {
            handleScroll(touchStartY.current - touchEndY > 0 ? 'down' : 'up');
        }
        touchStartY.current = null;
    };

    return (
        <main
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden"
        >
            <Element name="inicio">
                <Home />
            </Element>
            <Element name="invitado">
                <GuestPage guest={guest} />
            </Element>
            <Element name="fecha">
                <DatePage />
            </Element>
            <Element name="horarios">
                <SchedulesSection />
            </Element>
            <Element name="lugar">
                <PlaceSection />
            </Element>
            <Element name="detalles">
                <DetailsSection />
            </Element>
            <Element name="infoVestido">
                <InfoDressSection />
            </Element>
            <Element name="vestimenta">
                <DressSection />
            </Element>
            <Element name="fin">
                <EndSection />
            </Element>
        </main>
    );
};

export default MainPage;