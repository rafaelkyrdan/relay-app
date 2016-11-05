import React from 'react'
import classes from './ListPage.css'
import Relay from 'react-relay'

class ListPage extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }
  render () {
    return (
      <div className={classes.root}>
        I am a REACT app!
        <p>
          {`Your viewer id is: ${this.props.viewer.id}`}
        </p>
      </div>
    )
  }
}

export default Relay.createContainer(
  ListPage,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          id
        }
      `,
    },
  },
)
