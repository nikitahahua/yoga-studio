import {BrowserRouter as Router, Routes, Route} from "react-router";
import {WebRoutes} from "./constants";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Home from "@/pages/home";
import Schedule from "@/pages/schedule";
import Calculator from "@/pages/calculator";

function App() {

    return (
        <Router>
            <div className={'min-h-screen w-auto flex flex-col'}>
                <Header/>
                <main className={'flex-1 md:pb-auto relative'}>
                    {/*<AppSidebar/>*/}
                    <Routes>
                        <Route path={WebRoutes.HOME} element={<Home/>}/>
                        <Route path={WebRoutes.SCHEDULE} element={<Schedule/>}/>
                        <Route path={WebRoutes.CALCULATOR} element={<Calculator/>}/>
                        <Route path={WebRoutes.NOT_FOUND} element={<h1>Not Found</h1>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App
