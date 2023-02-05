import React from "react";

function Card({ children }) {
    return <div className="dark:bg-stone-400 bg-white border border-stone-400 rounded-xl p-4">
        {children}
    </div>;
}

export default Card;
