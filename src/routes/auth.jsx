import JoinPage from "../pages/join";
import LoginPage from "../pages/login";

const authRoutes = [
    {
        path: "/auth",
        children: [
            {
                path: "/auth/login",
                element: <LoginPage />
            },
            {
                path: "/auth/join",
                element: <JoinPage />
            }
        ]
    }
];

export default authRoutes