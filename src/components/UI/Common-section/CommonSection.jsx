import React from "react";

const CommonSection = ({ title }) => {
    return (
        <section className="common__section">
            <div className=" relative p-2">
                <h2 className=" absolute translate-x-2/4 translate-y-2/4 top-2/4 right-2/4 text-white/40 text-xl  sm:text-2xl md:text-3xl text-center">
                    {title}
                </h2>
            </div>
        </section>
    );
};

export default CommonSection;
