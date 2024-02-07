import Tag from './Tag'
import PropTypes from 'prop-types';
import Btn from '../../components/Layout/Btn'
import { HashLink } from 'react-router-hash-link';
// import Thumbnail from "react-webpage-thumbnail";

function Project({ project }) {

    return (
        <div className="project">
            <div className="flex flex-col gap-y-2">
                <a href={project.url}><span className='md:header-item md:text-4xl'>{project.name}</span></a>
                <div className="flex overflow-x-auto overflow-y-hidden">
                    {
                        project.tags.map((tag, index) => {
                            return (
                                <HashLink to={`${project.internal}/#${tag}`} key={index}>
                                    <Tag kind={tag} />
                                </HashLink>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col justify-center gap-y-4 text-sm md:text-xl mt-2 md:mt-4 md:w-3/5 text-gray-300'>
            <a href={project.url}>
                    <img src={project.img} alt={project.name} className='w-full md:w-1/4 md:h-1/4 h-full' />
                </a>
                {project.description}
            </div>

            <div className='flex justify-end md:w-3/5 mr-2 mt-2 mb-2 md-mr-4'>
                <Btn internal="true" content={"Read more"} link={project.internal} />
            </div>
        </div>
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export default Project