import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setLayout } from './actions';
import ListView from '.';

const ListViewLayout = ({ layout, ...props }) => {
  const dispatch = useDispatch();
  const initialParams = useSelector(state => state.get('content-manager_listView').initialParams);

  useEffect(() => {
    dispatch(setLayout(layout.contentType));
  }, [dispatch, layout]);

  if (!initialParams) {
    return null;
  }

  return <ListView {...props} layout={layout} />;
};

ListViewLayout.propTypes = {
  layout: PropTypes.exact({
    components: PropTypes.object.isRequired,
    contentType: PropTypes.shape({
      attributes: PropTypes.object.isRequired,
      metadatas: PropTypes.object.isRequired,
      info: PropTypes.shape({ label: PropTypes.string.isRequired }).isRequired,
      layouts: PropTypes.shape({
        list: PropTypes.array.isRequired,
        editRelations: PropTypes.array,
      }).isRequired,
      options: PropTypes.object.isRequired,
      settings: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ListViewLayout;
