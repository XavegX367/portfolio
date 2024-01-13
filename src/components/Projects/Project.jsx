import Tag from './Tag'
import PropTypes from 'prop-types';
import Btn from '../../components/Layout/Btn'
// import Thumbnail from "react-webpage-thumbnail";

function Project({ project }) {
  return (
    <div className="project">
        <div className="flex gap-x-2">
            <a href={project.url}><span className='md:header-item md:text-4xl'>{project.name}</span></a>
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

        <div className='flex flex-col justify-center gap-y-4 text-sm md:text-xl mt-2 md:mt-4 text-gray-300'>
            <a href={project.url}>
                {/* TODO: Maak een prima width foto van Tict :) */}
                <img src={project.img} alt={project.name} className='w-full md:w-1/4 md:h-1/4 h-full' />
                </a>
            {project.description}
        </div>

        <div className='flex justify-end mr-2 md-mr-4'>
            <Btn internal="true" content={"Read more"} link={project.internal} />
        </div>
    </div>
  )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export default Project