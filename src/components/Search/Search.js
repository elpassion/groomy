import React from 'react';
import { SearchWrapper, SearchForm } from './SearchStyles';
import SearchIcon from '../SvgAssets/SearchIcon';

class Search extends React.Component {
  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <SearchWrapper>
        <SearchIcon />
        <SearchForm
          onChange={this.onChange.bind(this)}
          placeholder='Find a Service...'
          spellcheck='false'
        />
      </SearchWrapper>
    );
  }
}

export default Search;
