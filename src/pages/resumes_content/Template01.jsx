import React from "react";

function Template01({ userData }) {
  return (
    <section id="preview-sc" className="print_area">
      <div className="container">
        {/* Your resume template JSX */}
        {/* Populate the template with userData */}
        <div className="preview-cnt">
          <div className="preview-cnt-l bg-green text-white">
            {/* Populate with userData */}
            <div className="preview-blk">
              <div className="preview-image">
                <img src={userData.image} alt="" id="image_dsp" />
              </div>
              <div className="preview-item preview-item-name">
                <span className="preview-item-val fw-6" id="fullname_dsp">
                  {userData.firstname} {userData.lastname}
                </span>
              </div>
              <div className="preview-item">
                <span
                  className="preview-item-val text-uppercase fw-6 ls-1"
                  id="designation_dsp"
                >
                  {userData.designation}
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>ACHIEVEMENTS</h3>
              </div>
              <div className="achievements-items preview-blk-list" id="achievements_dsp">
                {/* Map through userData.achievements and display each achievement */}
                {userData.achievements &&
                  userData.achievements.map((achievement, index) => (
                    <div className="preview-item" key={index}>
                      <span className="preview-item-val">{achievement}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Experience */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>EXPERIENCE</h3>
              </div>
              <div className="experiences-items preview-blk-list" id="experiences_dsp">
                {/* Map through userData.experiences and display each experience */}
                {userData.experiences &&
                  userData.experiences.map((experience, index) => (
                    <div className="preview-item" key={index}>
                      <span className="preview-item-val">{experience}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Education */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>EDUCATION</h3>
              </div>
              <div className="educations-items preview-blk-list" id="educations_dsp">
                {/* Map through userData.educations and display each education */}
                {userData.educations &&
                  userData.educations.map((education, index) => (
                    <div className="preview-item" key={index}>
                      <span className="preview-item-val">{education}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Projects */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>PROJECTS</h3>
              </div>
              <div className="projects-items preview-blk-list" id="projects_dsp">
                {/* Map through userData.projects and display each project */}
                {userData.projects &&
                  userData.projects.map((project, index) => (
                    <div className="preview-item" key={index}>
                      <span className="preview-item-val">{project}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Skills */}
            <div className="preview-blk">
              <div className="preview-blk-title">
                <h3>SKILLS</h3>
              </div>
              <div className="skills-items preview-blk-list" id="skills_dsp">
                {/* Map through userData.skills and display each skill */}
                {userData.skills &&
                  userData.skills.map((skill, index) => (
                    <div className="preview-item" key={index}>
                      <span className="preview-item-val">{skill}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Continue populating other sections with userData */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Template01;
