import Navbar from './navbar'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
	return (
		<>
		<Header />
		<Navbar />
		<main>{children}</main>
		<Footer />
		</>
	)
}