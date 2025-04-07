import React from 'react'
import useFetch from '../components/CustomeHook'
import { BASE_URL } from '../utils/Config'

const About = () => {
  const { data } = useFetch(`${BASE_URL}/about`)
  const aboutData = data.data
  console.log(aboutData)
  return (
    <><div className="container" style={{ marginTop: "100px", marginBottom: "150px" }}>
      <div className="row">
        {
          aboutData && aboutData.length > 0 ? (
            aboutData.map((about) => (
              <>
                <div className="col-8" key={about.id}>
                  <img className="img-fluid" style={{ width: "90%", height: "100%" }} src={about.image} alt={about.name} />
                  <h3 className='mt-3'>{about.name}</h3>
                  <h5 className='text-muted'>{about.title}</h5>
                </div>
                <div className="col">
                  <p className='fst-italic'>{about.description}</p>
                  <h4>Experience</h4>
                  <ul>
                    {about.experience.map((exp) => (
                      <li key={exp._id}>
                        {exp.role ? <strong>{exp.role}</strong> : ""}
                        {exp.duration ? ` - ${exp.duration}` : ""}
                      </li>
                    ))}
                  </ul>
                  <h4>Skills</h4>
                  <div className="d-flex flex-wrap">
                    {about.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge bg-warning me-2 mb-2 p-2 fs-6"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ))
          ) : (<h1>No data found</h1>)
        }
      </div>
    </div></>
  )
}

export default About