const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { ContactDetails } from './pages/ContactDetails.jsx'
import { ContactIndex } from './pages/ContactIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { store } from './store/store.js'

export class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <section className="app">
                        {/* <AppHeader /> */}

                        <main className="main-layout">
                            <Routes>
                                <Route element={<HomePage />} path="/"></Route>
                                <Route element={<ContactIndex />} path="/contacts"></Route>
                                <Route element={<ContactDetails />} path="/contacts/:contactId"></Route>
                            </Routes>
                        </main>

                    </section>
                </Router>
            </Provider>
        )
    }
}