import Tag from './Tag'
import PropTypes from 'prop-types';
import Btn from '../../components/Layout/Btn'

function Project({ project }) {
  return (
    <div className="project">
        <div className="flex gap-x-2">
            <a href={project.url}><span className='header-item md:text-4xl'>{project.name}</span></a>
            <div className="flex overflow-x-auto overflow-y-hidden">
                {
                    project.tags.map((tag, index) => {
                        return (
                            <Tag key={index} kind={tag} />
                        )
                    })
                }
            </div>
        </div>

        <div className='flex flex-col md:flex-row text-sm md:text-xl mx-4 md:mx-8 mt-2 md:mt-4 text-gray-300'>
            <a href={project.url}><img className="w-1/2 md:w-1/3" src={project.image} alt={project.name} /></a>
            {project.description}
        </div>

        <div className='flex justify-end mr-2 md-mr-4'>
            <Btn content={"Read more"} link={""} />
        </div>
    </div>
  )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export default Project