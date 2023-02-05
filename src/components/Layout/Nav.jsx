import React from "react";
import { NavLink, useNavigate } from "react-router-dom"

function Nav() {
    const navRoutes = [
        { path: "/gather", name: "모집 중" },
        { path: "/browse", name: "둘러보기" },
        { path: "/notice", name: "공지사항" },
    ]

    const linkStyle = "absolute top-0 left-0 right-0 bottom-0 flex items-center px-10"

    const navigate = useNavigate();

    const handleOnClickLogin = () => {
        navigate("/auth/login")
    }
    const handleOnClickjoin = () => {
        navigate("/auth/join")
    }


    return <nav className="hidden sm:col-span-4 sm:flex md:col-span-3 xl:col-span-2 h-[100vh] flex-col bg-white">
        <NavLink className="w-full text-center py-4 font-gugi" to="/">무릉도원</NavLink>
        <div className="flex mx-auto my-4">
            <button className="rounded-l-md bg-gray-900 border-gray-900 gorder-r-0 text-white w-24 h-10" onClick={handleOnClickLogin}>로그인</button>
            <button className="rounded-r-md border-l-0 border-gray-400 border w-24 h-10" onClick={handleOnClickjoin}>회원가입</button>
        </div>

        <div className="h-full flex flex-col justify-between">
            <ul>
                {navRoutes.map((i) => <li key={i.path} className="w-full h-12 relative">
                    <NavLink to={i.path} className={({ isActive }) =>
                        isActive ? `bg-stone-200 ${linkStyle}` : linkStyle
                    }>{i.name}</NavLink>
                </li>)}

                <hr className="mx-8 border-stone-200" />

                <li className="w-full h-12 relative">
                    <NavLink to="/settings" className={({ isActive }) =>
                        isActive ? `bg-stone-200 ${linkStyle}` : linkStyle
                    }>
                        설정
                    </NavLink>
                </li>
            </ul>
            <div>
                <input type="text" />
                <div>what</div>
            </div>
        </div>
    </nav>;
}

export default Nav;
