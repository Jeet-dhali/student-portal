import {Navbar} from './components/header.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
        <div className='content'>
          <div className='title-text'>
            <h3 className='welcome-text'>Welcome to</h3>
            <h1 className='main-title'>NIT Nagaland</h1>
            <h2 className='subtitle'>Student Council</h2>
          </div>
          
        

        <div className='explore'>
          <h2>Explore NIT Nagaland</h2>
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/dAVd5ImwvDs" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div className='about'>
          <h2>About NIT Nagaland</h2>
          <p>Established in 2010 under the mentorship of NIT Silchar, NIT Nagaland is an Institute of National Importance located in Chumukedima. The campus, set amidst serene hills, became operational in 2012 and spans over 290 acres.

          NIT Nagaland is one of the 31 NITs designated as Institutes of National Importance.  It is fully funded by the Ministry of Education and governed by the NIT Nagaland Society.

          The institute currently offers undergraduate programs in six engineering disciplines including Computer Science, Electrical & Electronics, Electronics & Communication, Civil, Mechanical, and Electronics & Instrumentation Engineering. It also offers postgraduate programs in Power Systems, VLSI Design, Communication Engineering, Computer Science, and Physics, along with integrated M.Sc. and PhD programs across departments.

          NIT Nagaland fosters a culture of innovation, ethical leadership, and social responsibility. Its vision is to advance knowledge through quality education and research, cultivating invention that improves the human condition and contributes to a sustainable future.

          NIT Nagaland continues to evolve as a hub of excellence in the Northeast, empowering students to become globally competent professionals and responsible citizens.</p>

          <button className='explore-btn'>Explore more..</button>
        </div>
      </div>
    </>
  )
}

export default App
