import React from "react";
import '../../public/assets/css/main.css';
import teamMemberFour from "../../public/assets/img/team/elizabethmwata.png"
import teamMemberOne from "../../public/assets/img/team/team-1.png";
import teamMemberTwo from "../../public/assets/img/team/team-1.png";
import teamMemberThree from "../../public/assets/img/team/team-1.png";

function TeamMember({ imgSrc, name, role }) {
  return (
    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <img src={imgSrc} className="img-fluid" alt="" />
        <h4>{name}</h4>
        <span>{role}</span>
        <div className="social">
          <a href="twitter"><i className="bi bi-twitter"></i></a>
          <a href="fb"><i className="bi bi-facebook"></i></a>
          <a href="ig"><i className="bi bi-instagram"></i></a>
          <a href="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Team</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  { imgSrc: teamMemberOne, name: "Blacio Wanjala", role: "Project Manager" },
  { imgSrc: teamMemberTwo, name: "Mackson Dzombo", role: "PC" },
  { imgSrc: teamMemberThree, name: "Sheikh Abdi Aziz", role: "Director" },
  { imgSrc: teamMemberFour, name: "Elizabeth Mwata", role: "Finance Manager" },
];

export default Team;
