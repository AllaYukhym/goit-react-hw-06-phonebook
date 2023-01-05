import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeHandleFilter = event => {
    console.log(' IT is event: ', event);
    const { value } = event.currentTarget;
    console.log('IT is value: ', value);
    dispatch(changeFilter(value));
  };

  console.log('IT is filter: ', filter);
  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeHandleFilter} />
      </Label>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
