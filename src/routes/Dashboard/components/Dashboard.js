import React, { PropTypes } from 'react'
import Dashboard from '../../../components/Dashboard'

class DashboardRoute extends React.Component {
  static propTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboardAddItem: PropTypes.func.isRequired,
    dashboardEditItem: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.props.dashboardVisitIncrement()
  }

  updateItem = ({editItemIndex, label}) => (
    editItemIndex === null
      ? this.props.dashboardAddItem({label})
      : this.props.dashboardEditItem({editItemIndex, label})
  )

  render () {
    return (
      <Dashboard
        visitsCount={this.props.dashboard.visitsCount}
        dashboardItems={this.props.dashboard.dashboardItems}
        updateItem={this.updateItem}
      />
    )
  }

}

export default DashboardRoute
