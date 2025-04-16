import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CTO, TechCorp',
    quote: 'Brian is a highly skilled developer who delivers quality work on time. Highly recommended!',
  },
  {
    name: 'John Smith',
    title: 'Manager, Printcare Enterprises',
    quote: 'Professional, creative, and always responsive. Our business benefited greatly from his solutions.',
  },
  // Add more testimonials or certifications here
];

const Testimonials = () => (
  <>
    <section className="testimonials">
      <h2>Testimonials & Certifications</h2>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-quote">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
    <h3>Referees</h3>
    <ul className="referees-list">
      <li>
        <strong>Mr. Desmond Mutuma</strong><br/>
        ICT Manager, Nairobi Technical Training Institute.<br/>
        TEL: 0717640244.<br/>
        E-mail: desmutuma@gmail.com
      </li>
      <li>
        <strong>Mr. Enock Bore</strong><br/>
        Assistant Director ICT, Office of the Director of Public Prosecutions.<br/>
        TEL: 0725752627.<br/>
        Mail: Enock.bore@odpp.go.ke
      </li>
      <li>
        <strong>Mr. Alexander Macharia</strong><br/>
        Principal ICT Officer, Office of the Director of Public Prosecutions.<br/>
        TEL: 0712186368.<br/>
        E-mail: Alexander.maina@odpp.go.ke
      </li>
    </ul>
  </>
);

export default Testimonials;
