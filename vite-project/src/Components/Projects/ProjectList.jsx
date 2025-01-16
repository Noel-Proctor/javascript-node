import PropTypes from 'prop-types';


function ProjectsList({ colour }) {

    const projects = [
        {
            title: "Project One",
            description: "A web application built using React and Node.js",
            link: "#"
        },

        {
            title: "Project Two",
            description: "An Ecommerce platform built using Spring Boot",
            link: "#"
        }
    ]

    return (
        <section id='projects' className="project-section" style={{ background: colour }}>
            <h2>Projects</h2>
            <p>This is some information about my projects</p>

            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className='project-item'>
                        <h3>{project.title}</h3>
                        <h3>{project.description}</h3>
                        <a href={project.link} target='_blank' rel="noopener noreferrer ">Go to project</a>
                    </div>
                ))}
            </div>

        </section>

    )

};

ProjectsList.propTypes = {
    colour: PropTypes.string.isRequired
}

export default ProjectsList