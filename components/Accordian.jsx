"use-client";

import React, { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            question: "Lorem ipsum Lorem ?",
            answer: "Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem",
        },
        {
            question: "Lorem ipsum Lorem ?",
            answer: "Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem",
        },
        {
            question: "Lorem ipsum Lorem ?",
            answer: "Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem",
        },
        {
            question: "Lorem ipsum Lorem ?",
            answer: "Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem",
        },
    ];

    return (
        <div className="accordion-container space-y-4 p-4 mb-14 mt-5">
            {accordionData.map((item, index) => (
                <div
                    key={index}
                    className="accordion-item border rounded-md shadow-md overflow-hidden bg-white"
                >
                    <div
                        className="accordion-header flex justify-between items-center p-4 h-[106px] cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="text-xl font-semibold px-5">{item.question}</h3>
                        <span className="text-lg text-maroon pr-5">
                            {activeIndex === index ? "▲" : "▼"}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content pb-5 px-5 ml-4">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
