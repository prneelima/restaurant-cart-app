import React from 'react';
import '../App.css';

const withHeader = (WrappedComponent, title) => {
  return class extends React.Component {
    render() {
      return (
        <div className='Menu'>
          <h2 style={{color:'white'}}>{title}</h2>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withHeader;
