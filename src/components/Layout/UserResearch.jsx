import PropTypes from 'prop-types';

const UserResearch = ({reviewer}) => {
  return (
    <div className='flex flex-col px-4 gap-x-4 gap-y-2 mt-4 border rounded-xl p-4 md:w-2/6'>
    <span className='text-2xl'>{reviewer.name}</span>
    <div className='pl-2'>
      <div className='flex flex-row gap-x-4'>
        <div className='flex flex-col'>
          <span>Gender:</span>
          <span>Age:</span>
          <span>Profession:</span>
          <span>Hobbies:</span>
        </div>
        <div className='flex flex-col'>
          <p className='text-base'>{reviewer.gender}</p>
          <p className='text-base'>{reviewer.age}</p>
          <p className='text-base'>{reviewer.job}</p>
          <p className='text-base'>{reviewer.hobbies}</p>
        </div>
      </div>

      <div className='flex flex-col flex-wrap mt-4'>
        <h1 className='text-2xl'>Feedback:</h1>
        <p className='text-base pl-2'>{reviewer.review}</p>
      </div>
    </div>
  </div>
  )
}

UserResearch.propTypes = {
    reviewer: PropTypes.object.isRequired,
};

export default UserResearch