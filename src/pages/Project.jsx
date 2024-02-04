import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import projects from "../utils/projects"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faFigma, faGitlab, faHtml5, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import UserResearch from '../components/Layout/UserResearch'
import Btn from '../components/Layout/Btn'

const Project = () => {
  const [project, setProject] = useState(null)
  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    // search in projects through the objects and find the one that has the same id as the one in the url
    setProject(projects[id - 1])
  }, [])

  const goBack = () => {
    navigate('/projects')
  }

  return (
    <div>
      {
        project && (
          <div className='p-4'>
            <div className='md:w-2/5'>
              <div className='flex flex-row justify-center md:justify-start gap-x-2'>
                <button className='cursor-pointer md:mt-2' onClick={() => goBack()}>
                  <FontAwesomeIcon icon={faArrowLeft} className='text-4xl mb-4' />
                </button>
                <span className="text-3xl mx-1 md:text-5xl text-white header-item text-center justify-center md:text-start">{project.name}</span>
              </div>
              <p className='text-base flex flex-wrap md:pl-2 md:mt-4 text-center md:text-start'>{project.description}</p>
            </div>

            {/* Interactive Media */}
            {
              (project.interactive_media !== undefined) ?
                <div id='interactive_media' className='flex flex-col justify-start'>
                  <hr className='mt-4 mb-4'></hr>
                  <h1 className='text-2xl'>Interactive Media</h1>

                  <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                    {project.interactive_media.text}
                  </p>


                  <p className='text-base flex flex-wrap pl-4 md:mt-4 md:w-2/5'>
                    <span className='italic'>Reflection:</span>
                    <span className='pl-2'>{project.interactive_media.reflection}</span>
                  </p>

                </div>
              : <></>
            }

            {/* Development */}
            {
              (project.development !== undefined) ?
                <div id='development' className='flex flex-col justify-start'>
                  <hr className='mt-4 mb-4'></hr>
                  <div className='flex flex-row md:justify-start gap-x-2'>
                    <h1 className='text-2xl'>Development </h1>
                    {
                      (project.git.length > 0) ?
                        project.git.map((git, index) => (
                          <a key={index} target='blank' href={git}><FontAwesomeIcon icon={faGitlab} className='text-3xl' /></a>
                        ))
                      : <></>
                    }
                  </div>

                  <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                    {project.development.text}
                  </p>


                  <p className='text-base flex flex-wrap pl-4 md:mt-4 md:w-2/5'>
                    <span className='italic'>Reflection:</span>
                    <span className='pl-2'>{project.development.reflection}</span>
                  </p>

                  

                  {
                    (project.used_languages.length > 0) ?
                      <div className='flex flex-col justify-between pl-6'>
                        <h1 className='text-xl mt-2'>Languages and Frameworks</h1>
                        <div className='flex flex-row flex-wrap pl-2 md:mt-4 md:w-2/5'>
                          {
                            project.used_languages.map((language, index) => (
                              <div key={index} className='flex flex-col md:flex-row justify-start'>
                                <div className='flex flex-col justify-center mr-6'>
                                  {/* Check the language name and give the right fontawesome icon */}
                                  {
                                    (language === 'HTML') ?
                                      <FontAwesomeIcon icon={faHtml5} className='text-5xl mt-2' />
                                      : <></>
                                  }
                                  {
                                    (language === 'CSS') ?
                                      <FontAwesomeIcon icon={faCss3} className='text-5xl mt-2' />
                                      : <></>
                                  }
                                  {
                                      (language === 'React') ?
                                      <FontAwesomeIcon icon={faReact} className='text-5xl mt-2' />
                                      : <></>
                                  }
                                  {
                                      (language === 'php') ?
                                      <FontAwesomeIcon icon={faPhp} className='text-5xl mt-2' />
                                      : <></>
                                  }
                                  {
                                      (language === 'JavaScript') ?
                                      <FontAwesomeIcon icon={faJs} className='text-5xl mt-2' />
                                      : <></>
                                  }
                                  {
                                    (language === 'MySQL') ?
                                    <img src='https://cdn.worldvectorlogo.com/logos/mysql-6.svg' className='w-16 h-16 grayscale justify' />
                                    : <></>
                                  }
                                  {
                                    (language === 'TailwindCSS') ?
                                    <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' className='w-16 h-16 grayscale ml-6' />
                                    : <></>
                                  }
                                  {
                                    (language === 'Laravel') ?
                                    <FontAwesomeIcon icon={faLaravel} className='text-5xl mt-2' />
                                    : <></>
                                  }
                                  {
                                    (language === 'TypeScript') ?
                                    <img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' className='w-16 h-16 mr-4 grayscale ml-4' />
                                    : <></>
                                  }
                                  
                                  <span className='text-lg text-center text-[#848484]'>{language}</span>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      : <></>
                  }
                </div>
              : <></>
            }

            {/* Design */}
            {
              (project.design !== undefined) ?
                <div id='design' className='flex flex-col justify-start'>
                  <hr className='mt-4 mb-4'></hr>
                  <div className='flex flex-row md:justify-start gap-x-2'>
                    <h1 className='text-2xl'>Design</h1>
                    {
                    (project.design_urls.length > 0) ?
                      project.design_urls.map((design_url, index) => (
                        <a key={index} target='blank' href={design_url}><FontAwesomeIcon icon={faFigma} className='text-3xl'/></a>
                      ))
                      : <></>
                    }
                  </div>

                  <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                    {project.design.text}
                  </p>


                  <p className='text-base flex flex-wrap pl-4 md:mt-4 md:w-2/5'>
                    <span className='italic'>Reflection:</span>
                    <span className='pl-2'>{project.design.reflection}</span>
                  </p>

                </div>
              : <></>
            }

            {/* Research */}
            {
              (project.research !== undefined) ?
                <div id='research' className='flex flex-col justify-start'>
                  <hr className='mt-4 mb-4'></hr>
                  <h1 className='text-2xl'>Research</h1>

                  <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                    {project.research.text}
                  </p>

                  {
                    (project.research.user_research !== undefined) ?
                      <div className='mt-4 pl-4'>
                        <h1>Problem</h1>
                        <div className='pl-2 md:w-2/5'>
                          <span>{project.research.user_research.problem}</span>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-x-4'>
                          {
                            project.research.user_research.users.map((user_test, index) => (
                              <UserResearch key={index} reviewer={user_test} />
                              ))
                            }
                        </div>
                      </div>
                    : <></>
                  }


                  <p className='text-base flex flex-wrap pl-4 md:mt-4 md:w-2/5'>
                    <span className='italic'>Reflection:</span>
                    {
                      (project.research.user_research !== undefined && project.research.user_research.outcome !== undefined) ?
                        <span className='pl-2'>{project.research.user_research.outcome}</span>
                        :
                        <span className='pl-2'>{project.research.reflection}</span>
                    }
                  </p>

                </div>
              : <></>
            }

            {/* Communication */}
            {
              (project.communication !== undefined) ?
                <div id='communication' className='flex flex-col justify-start'>
                  <hr className='mt-4 mb-4'></hr>
                  <h1 className='text-2xl'>Communication</h1>

                  <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                    {project.communication.text}
                  </p>


                  <p className='text-base flex flex-wrap pl-4 md:mt-4 md:w-2/5'>
                    <span className='italic'>Reflection:</span>
                    <span className='pl-2'>{project.communication.reflection}</span>
                  </p>

                </div>
              : <></>
            }

            {/* Professional Identity */}
            {
              (project.professional_identity !== undefined) ?
                <div id='professional_identity' className='flex flex-col justify-start'>
                  <hr className='mt-4 mb-4'></hr>
                  <h1 className='text-2xl'>Professional Identity</h1>

                  <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                    {project.professional_identity.text}
                  </p>


                  <p className='text-base flex flex-wrap pl-4 md:mt-4 md:w-2/5'>
                    <span className='italic'>Reflection:</span>
                    <span className='pl-2'>{project.professional_identity.reflection}</span>
                  </p>

                  {
                    (project.professional_identity.links !== undefined) ?
                    <div className='flex flex-col md:flex-row gap-y-4 mt-2 gap-x-4'>
                      {
                        project.professional_identity.links.map((url, index) => (
                          // <a className='btn' key={index} target ='blank' href ={url.url}>{url.name}</a>
                          <Btn key={index} content={url.name} link={url.url} />

                          ))
                      }
                    </div>
                      : <></>
                  }

                </div>
              : <></>
            }

          </div>
        )
      }
    </div>
  )
}

export default Project


{/* <UserResearch key={index} reviewer={user_test} /> */}