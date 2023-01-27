import '../css/search-filter.css';
import { ISearchFilterProps } from "../Pages/Home";

function SearchFilter({SearchFilterProps}: {SearchFilterProps: ISearchFilterProps}) {
  return (
    <div className="home-search">
        <div className="home-search-area">
          <div className="search-bar">
            <input type="text" placeholder="Search" onChange={(e) => SearchFilterProps.setFilterSearch(e.target.value)} />
            <button onClick={SearchFilterProps.handleSearch}><i className="fa fa-search"></i></button>
          </div>
          <select className="filter-select" onChange={(e) => {SearchFilterProps.setFilterType(e.target.value)}}>
            <option value="">All</option>
            <option value="Almond milk">Almond milk</option>
            <option value="Cashew milk">Cashew milk</option>
            <option value="Coconut milk">Coconut milk</option>
            <option value="Hemp milk">Hemp milk</option>
            <option value="Macadamia milk">Macadamia milk</option>
            <option value="Oat milk">Oat milk</option>
            <option value="Pea milk">Pea milk</option>
            <option value="Rice milk">Rice milk</option>
            <option value="Soy milk">Soy milk</option>
            <option value="Walnut milk">Walnut milk</option>
            <option value="Whole milk">Whole milk</option>
          </select>
        </div>
    </div>
  );
}

export default SearchFilter;
