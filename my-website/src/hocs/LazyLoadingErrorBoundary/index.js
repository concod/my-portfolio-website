import React from 'react'

import { Modal } from '@material-ui/core'

/** Adapted from https://reactjs.org/docs/error-boundaries.html */
class LazyLoadingErrorBoundary extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  /**
   * @return {*} description
   */
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  /**
   * @return {*} description
   */
  render() {
    return (
      <>
        {this.state.hasError ? (
          <Modal
            open={this.state.hasError}
            // onRetry={() => window.location.reload()}
            title='Error'
            description='Something went wrong. Try again.'>
            <div>Something went wrong. Try again</div>
          </Modal>
        ) : (
          this.props.children
        )}
      </>
    )
  }
}

export default LazyLoadingErrorBoundary
