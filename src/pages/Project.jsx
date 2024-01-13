import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import projects from "../utils/projects"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
            <button className='cursor-pointer' onClick={() => goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} className='text-4xl mb-4' />
            </button>
            <div className='md:w-2/5'>
              <div className='flex flex-row justify-center md:justify-start gap-x-2'>
                <span className="text-3xl mx-1 md:text-5xl text-white header-item text-center justify-center md:text-start">{project.name}</span>
              </div>
              <p className='text-base flex flex-wrap md:pl-2 md:mt-4 text-center md:text-start'>{project.description}</p>
            </div>
            <hr className='mt-4 mb-4'></hr>
            {/* Designing fase */}
            <div className='flex flex-col justify-start'>
              <h1 className='text-2xl'>Designing Phase</h1>

              <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                {project.design_description}
              </p>

              <div className=''>
                {
                  (project.designing.length > 0) ?
                  project.designing.map((design, index) => (
                    <div key={index} className='flex flex-col md:flex-row gap-x-4 pl-2 justify-center md:justify-start'>
                      {
                      (design.img) ?
                        <div className='mt-4 flex flex-col md:flex-row md:gap-x-8 justify-center md:justify-start'>
                        <p className='md:w-2/5'>{design.paragraph}</p>
                        <img src={design.img} className='md:w-96 md:h-auto' />
                        </div>
                        :
                        <div className='md:w-2/5 mt-4'>
                          <p>{design.paragraph}</p>
                        </div>
                      }
                    </div>
                  ))
                  :
                  <div></div>
                }
              </div>
            </div>


            <hr className='mb-4'></hr>
            {/* What have I learned */}
            <div className='flex flex-col justify-between'>
              <h1 className='text-2xl'>What have I learned</h1>

              <p className='text-base flex flex-wrap pl-2 md:mt-4 md:w-2/5'>
                {project.learned}
              </p>
            </div>

            <hr className='mt-4 mb-4'></hr>
            {/* User tests */}
            <div className='flex flex-col justify-between'>
              <h1 className='text-2xl'>User Reviews</h1>
              <div className='flex flex-col md:flex-row md:gap-x-4 gap-y-4 md:gap-y-0'>
                {
                  ( project.user_tests.length > 0 ) ?
                    project.user_tests.map((user_test, index) => (
                      <div key={index} className='flex flex-col px-4 gap-x-4 gap-y-2 mt-4 border rounded-xl p-4 md:w-1/5'>
                        <span className='text-2xl'>{user_test.name}</span>
                        <div className='pl-2'>
                          <div className='flex flex-row gap-x-4'>
                            <div className='flex flex-col'>
                              <span>Gender:</span>
                              <span>Age:</span>
                              <span>Profession:</span>
                              <span>Hobbies:</span>
                            </div>
                            <div className='flex flex-col'>
                              <p className='text-base'>{user_test.gender}</p>
                              <p className='text-base'>{user_test.age}</p>
                              <p className='text-base'>{user_test.job}</p>
                              <p className='text-base'>{user_test.hobbies}</p>
                            </div>
                          </div>

                          <div className='flex flex-col flex-wrap mt-4'>
                            <h1 className='text-2xl'>Feedback:</h1>
                            <p className='text-base pl-2'>{user_test.review}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  :
                  <div>
                    <p className='text-base'>No available reviews</p>
                  </div>
                }
              </div>
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Project