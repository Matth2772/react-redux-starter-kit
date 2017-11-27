import React from 'react'

export const Dashboard = (props) => (
  <div>
    <h2 className={'dashboardContainer'}>
      Dashboard:
      {' '}
      <span className='dashboard--green'>
        {props.dashboard}
      </span>
    </h2>
    <button className='btn btn-default'>
      Increment
    </button>
    {' '}
    <button className='btn btn-default'>
      Double (Async)
    </button>
  </div>
)

Dashboard.propTypes = {
  dashboard: React.PropTypes.number.isRequired
}

export default Dashboard
