import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filters';
import { FilterText, FilterContainer, FilterInput } from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    function hendleFilter(event) {
        const { value } = event.target;
        dispatch(setStatusFilter(value));
    }
    return (
        <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
            type="search"
            name="filter"
            value={filter}
            onChange={hendleFilter}
        />
    </FilterContainer>
    );
};
