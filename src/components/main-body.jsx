import { motion } from 'framer-motion'
import '../components/main-body.css'

export function MainBody() {

    return (
        <>
            <div className='content'>
                <div className='title-text'>
                    <motion.h3 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className='welcome-text'>Welcome to
                    </motion.h3>
                    <div className='title'>
                        <motion.h1 
                            initial={{ opacity: 0, x: -500 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }} 
                            className='main-title'>NIT
                        </motion.h1>
                        <motion.h1 
                            initial={{ opacity: 0, x: 500 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='main-title'>Nagaland
                        </motion.h1>
                    </div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className='subtitle'>Student Council
                    </motion.h2>
                </div>
          
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, threshold: 0.2 }}
                    className='explore'>
                    <h2>Explore NIT Nagaland</h2>
                    <div className="video-container">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/dAVd5ImwvDs" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, threshold: 0.2 }}
                    className='about'>
                    <h2>About NIT Nagaland</h2>
                    <p>Established in 2010 under the mentorship of NIT Silchar, NIT Nagaland is an Institute of National Importance located in Chumukedima. The campus, set amidst serene hills, became operational in 2012 and spans over 290 acres.

                    NIT Nagaland is one of the 31 NITs designated as Institutes of National Importance.  It is fully funded by the Ministry of Education and governed by the NIT Nagaland Society.

                    The institute currently offers undergraduate programs in six engineering disciplines including Computer Science, Electrical & Electronics, Electronics & Communication, Civil, Mechanical, and Electronics & Instrumentation Engineering. It also offers postgraduate programs in Power Systems, VLSI Design, Communication Engineering, Computer Science, and Physics, along with integrated M.Sc. and PhD programs across departments.

                    NIT Nagaland fosters a culture of innovation, ethical leadership, and social responsibility. Its vision is to advance knowledge through quality education and research, cultivating invention that improves the human condition and contributes to a sustainable future.

                    NIT Nagaland continues to evolve as a hub of excellence in the Northeast, empowering students to become globally competent professionals and responsible citizens.</p>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='explore-btn'>
                        Explore more..
                    </motion.button>
                </motion.div>
            </div>
        </>
    )
}