import "./about.css";
import NavBar from "../navbar/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <Heading />
      <Content />
      <Contacts />
    </>
  );
}

function Heading() {
  return (
    <div className="about-heading">
      <h1>Meet the Team</h1>
    </div>
  );
}

function Content() {
  return (
    <div className="about-content">
      <p>Welcome to our corner of the digital world! We are Ibraheem Omer and Huzaifa Ejaz, final year students in our 8th semester at Beaconhouse National University (BNU), School of Computer and Information Technology. Currently, we're on a quest to earn our BSc (Hons) degree in Computer Science with a specialization in Data Science.</p>
      <p>Individually, we bring unique passions and skill sets to the table. Ibraheem Omer is deeply immersed in the realm of Generative AI, constantly exploring its possibilities and pushing its boundaries. On the other hand, Huzaifa Ejaz thrives in the dynamic world of Web Development, where his creativity and technical prowess intersect to craft immersive digital experiences.</p>
      <p>As students dedicated to honing our craft and exploring the forefront of technology, we're excited to share our journey with you. Whether you're a fellow enthusiast, a curious learner, or a prospective collaborator, we invite you to join us as we navigate the ever-evolving landscape of computer science and technology.</p>
      <p>Thank you for visiting our project website, and we look forward to connecting with you!</p>
    </div>
  );
}

function Contacts() {
  return (
    <div className="contacts-container">
      <div className="about-person-one">
        <img src="assets/images/About Us/Ibraheem Omer.jpeg" alt="Ibraheem Omer" className="round-image" />
        <div className="contact-info">
          <p className="name">Ibraheem Omer</p>
          <p className="email">ibraheemomer.01@gmail.com</p>
        </div>
      </div>

      <div className="about-person-two">
        <img src="assets/images/About Us/Huzaifa Ejaz.jpeg" alt="Huzaifa Ejaz" className="round-image" />
        <div className="contact-info">
          <p className="name">Huzaifa Ejaz</p>
          <p className="email">ejhuzaifa@gmail.com</p>
        </div>
      </div>
    </div>
  );
}



