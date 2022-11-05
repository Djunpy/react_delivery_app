import React from "react";

export const Helmet = ({ title, children }) => {
    document.title = `DjFood- ${title}`;
    return <div className="w-full">{children}</div>;
};
