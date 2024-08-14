import logo from './logo.svg';
import './App.scss';

import { ReactComponent as Hands } from './svg/hands-holding-child-solid.svg';
import { ReactComponent as Briefcase } from './svg/briefcase-medical-solid.svg';
import { ReactComponent as Heart } from './svg/heart-circle-plus-solid.svg';
import { ReactComponent as House } from './svg/house-medical-solid.svg';

function App() {
  return (
    <div className="App">
       <nav>
        <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header class="parallax">
        <div class="header-content">
            <h1>Occupational Therapy Services</h1>
            <p>Enhancing Daily Living Skills for a Better Life</p>
        </div>
        <video 
          id="comp-lzskzrba9_video" 
          crossorigin="anonymous" 
          
          preload="auto" 
          loop="" 
          tabindex="-1" 
          autoplay
          src="https://video.wixstatic.com/video/11062b_305e15a73d8946558357a813354d31fa/720p/mp4/file.mp4"
          style={{
            height: 300
          }}
        /> 
    </header>

    <section id="about">
        <h2>About Us</h2>
        <p>We provide personalized occupational therapy services to help individuals improve their ability to perform everyday activities. Our dedicated team of therapists works with clients of all ages to achieve their goals and enhance their quality of life.</p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <div className="services">
        <div className="service-pill">
          <Hands />
          Assessment and Evaluation</div>
        <div className="service-pill">
            <Briefcase />
          Customized Therapy Plans</div>
        <div className="service-pill">
          <House />
          Rehabidivtation</div>
        <div className="service-pill">
          <Heart />
          Adaptive Equipment Training</div>
        <div className="service-pill">
          <Hands />
          Home and Community Integration</div>
      </div>
    </section>

    <section id="testimonials">
      <h2>What Our Clients Say</h2>
      <div class="testimonial">
          <blockquote>
              <p>"The occupational therapy services provided were life-changing for me. The personalized approach and dedication of the therapists helped me regain independence and confidence. Highly recommend!"</p>
              <footer>- Jane Doe</footer>
          </blockquote>
      </div>
      <div class="testimonial">
          <blockquote>
              <p>"I was impressed with the thorough assessment and customized therapy plan. The team was professional and supportive throughout my rehabilitation process."</p>
              <footer>- John Smith</footer>
          </blockquote>
      </div>
      <div class="testimonial">
          <blockquote>
              <p>"Exceptional care and attention to detail. The therapy sessions were tailored to my needs, and I saw significant improvements in my daily activities. Thank you for your excellent service!"</p>
              <footer>- Emily Johnson</footer>
          </blockquote>
      </div>
  </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Address: 123 Therapy Lane, Wellness City, TH 45678</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@occupationaltherapy.com</p>
    </section>

    <footer>
        <p>&copy; 2024 Occupational Therapy Services. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
