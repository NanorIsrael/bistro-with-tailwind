import Header from './ components/Header';
import Home from "./Home";

function App() {

    function Footer() {
        return (
            <footer>
                <p className={'text-center text-sm'}>&copy; 2022 Gv development, All rights reserved.</p>
            </footer>
        )
    }

    return (
        <div className="text-gray-600 font-body flex ">
            <div className={'md:grid md:grid-cols-3'}>
                <header className={'md:col-span-1 md:flex md:justify-end'}>
                    <Header/>
                </header>
                <main className={"px-16 py-6 bg-gray-100 md:grid col-span-2 pb-56 h-full pt-10"}>
                    <Home/>
                </main>
                <Footer/>
            </div>
         </div>
    );
}

export default App;
