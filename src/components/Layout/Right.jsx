import React from 'react'
import { NavLink } from 'react-router-dom'

function Right() {
    return (
        <div className="hidden md:block col-span-3 lg:col-span-2">

            <footer>
                <NavLink to="/about">무릉도원이란</NavLink>
                <NavLink to="/about/faq">자주 묻는 질문</NavLink>
                <NavLink to="/about/qna">1:1문의</NavLink>
                <NavLink to="/notice">공지사항</NavLink>
                <NavLink to="/about/terms">이용약관</NavLink>
                <NavLink to="/about/policy">개인정보 처리방침</NavLink>
                <p>주식회사 무릉도원</p>
            </footer>
        </div>
    )
}

export default Right