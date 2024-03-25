const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { ContactDetails } from './pages/ContactDetails.jsx'
import { HomePage } from './pages/HomePage.jsx'
export class App extends React.Component {

    render() {
        return (
            // <Provider store={store}>
            <Router>
                <section className="app">
                    {/* <AppHeader /> */}

                    <main className="main-layout">
                        <Routes>
                            <Route element={<HomePage />} path="/"/>
                            <Route element={<ContactDetails />} path="/contact/:id"/>
                        </Routes>
                    </main>

                </section>
            </Router>


            // </Provider>
        )
    }
}