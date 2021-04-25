import logo from './logo.svg';
import './App.css';
import { Header } from './Sections/Header/Header';
import { Home } from './Sections/Home/Home';
import { About } from './Sections/About/About';
import { Team } from './Sections/Team/Team';
import { Statements } from './Sections/Statement/Statement';
import { Services } from './Sections/Services/Services';
import { Works } from './Sections/Work/Work';
import { Testimonials } from './Sections/Testimonial/Testimonial';
import { Pricing } from './Sections/Pricing/Pricing';
import { Stats } from './Sections/Stats/Stats';
import { Client } from './Sections/Client/Client';
import { Blog } from './Sections/Blog/Blog';
import { Contacts } from './Sections/Contacts/Contacts';
import { GoogleMap } from './Sections/GoogleMap/GoogleMap';
import { Footer } from './Sections/Footer/Footer';

function App() {

  return (
    <div className="">
    
		<div id="pre">
			<div id="status">
				
			</div>
		</div>
	
    <Header />
    <Home />
    <About />
    <Team />
    <Statements />
    <Services />
    <Works />
    <Testimonials />
		<Pricing />	
	  <Stats />
    <Client />
    <Blog />
    <Contacts />
    <GoogleMap />
    <Footer />
  	
    </div>
  );
}

export default App;
