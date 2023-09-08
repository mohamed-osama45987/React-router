import { Route, Routes } from "react-router-dom"

// import my pages
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SignUpPage from './pages/SignUp'
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import Protected from "./components/Protected"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>

            <Route path="/about" element={
                <Protected isAuth={false}>
                    <AboutPage />
                </Protected>
            }></Route>

            {/* Contact Routes */}
            <Route path="/contact" element={<ContactPage />}>
                <Route path="user" element={<div>User Profile</div>}></Route>

            </Route>



            <Route path="/sign-up" element={<SignUpPage />}></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    )
}

export default App