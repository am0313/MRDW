import FAQPage from "../pages/about/faq";
import PolicyPage from "../pages/about/policy";
import QNAPage from "../pages/about/qna";
import TermsPage from "../pages/about/terms";
import AboutPage from "../pages/about/about";

const aboutRoutes = [
    {
        path: "/about",
        children: [
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/about/qna",
                element: <QNAPage />
            },
            {
                path: "/about/faq",
                element: <FAQPage />
            },
            {
                path: "/about/terms",
                element: <TermsPage />
            },
            {
                path: "/about/policy",
                element: <PolicyPage />
            }
        ]
    }
];

export default aboutRoutes