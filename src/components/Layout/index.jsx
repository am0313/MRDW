import React from "react";
import Nav from "./Nav";
import Right from "./Right";

function Layout({ children }) {
    return <div className="grid grid-cols-12 gap-4 bg-stone-200">
        <Nav />
        <div className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-7 xl:col-span-8">
            {children}
        </div>
        <Right />
    </div>;
}

export default Layout;
