import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './footer.module.scss'

function Right() {
    return (
        <aside className="hidden md:block col-span-3 lg:col-span-2">

            <footer className='px-2 flex flex-wrap gap-x-1 items-center justify-center'>
                <NavLink to="/about" className={style.link}>무릉도원이란?</NavLink>
                <NavLink to="/about/faq" className={style.link}>자주 묻는 질문</NavLink>
                <NavLink to="/about/qna" className={style.link}>1:1문의</NavLink>
                <NavLink to="/notice" className={style.link}>공지사항</NavLink>
                <NavLink to="/about/terms" className={style.link}>이용약관</NavLink>
                <NavLink to="/about/policy" className={style.link}>개인정보 처리방침</NavLink>
                <div className={style.inc}>© 주식회사 무릉도원</div>
            </footer>
        </aside>
    )
}

export default Right