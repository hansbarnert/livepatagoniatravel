import { useState } from "react";
import { Tour } from "../types/tour";
import { useLanguage } from "../contexts/LanguageContext";
type Props = {
    tour: Tour;
};


const TourCard = ({ tour }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const { language, t } = useLanguage();
    const shouldTruncate = tour.description.length > 250;
    const displayedText = expanded
        ? tour.description
        : tour.description.slice(0, 250);

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover"
                />
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 h-full">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify mb-2">
                        {displayedText}
                        {shouldTruncate && !expanded && "..."}
                    </p>

                    {shouldTruncate && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-orange-500 font-bold text-sm mt-1 focus:outline-none"
                        >
                            {expanded ? (language === 'en' ? 'Español' : 'English') : null}

                        </button>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4">
                    <div>
                        {/* <span className="text-2xl font-bold text-gray-900">{tour.price}</span>
                        <span className="text-gray-500 text-sm">{t("tours.person")}</span> */}
                    </div>
                    <a href="#contact">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                            {t("tours.book")}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TourCard