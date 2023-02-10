import React from 'react';
import PropTypes from 'prop-types';

const WithTitle = WrappedComponent => {
  const MyComp = (props) => {
    const title = props.title + ' | ' + 'Thomas A. Mendez';
    return (
      <WrappedComponent {...props} title={title} />
    );
  };
  MyComp.propTypes = {
    title: PropTypes.string.isRequired,
  };
  MyComp.displayName = 'HOC';
  return MyComp;
};

WithTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WithTitle;
