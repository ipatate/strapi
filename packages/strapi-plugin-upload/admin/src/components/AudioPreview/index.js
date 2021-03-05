import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const Audio = styled.audio`
  max-width: 100%;
`;

const AudioPreview = ({ src }) => {
  return (
    <Wrapper>
      <Audio controls="controls" src={src} />
    </Wrapper>
  );
};

AudioPreview.defaultProps = {
  src: null,
};

AudioPreview.propTypes = {
  src: PropTypes.string,
};

export default AudioPreview;
