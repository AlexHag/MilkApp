import { useState } from "react";
import { Dispatch, useRef } from "react";
import { ProductInfo } from "../App";
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

          <select className="filter-select" onChange={(e) => SearchFilterProps.setFilterType(e.target.value)}>
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
      
      {/* <div className={`filter-container ${filterActive ? '' : 'hidden'}`}>
        <div className="filter-items">
          <label><input type="checkbox" value="All" onChange={handleAllCheckboxChange} checked={allAsFilter}/>All</label>
          <label><input type="checkbox" value="Almond Milk" onChange={handleCheckboxChange}/>Almond milk</label>
          <label><input type="checkbox" value="Cashew milk" onChange={handleCheckboxChange}/>Cashew milk</label>
          <label><input type="checkbox" value="Coconut milk" onChange={handleCheckboxChange}/>Coconut milk</label>
          <label><input type="checkbox" value="Hemp milk" onChange={handleCheckboxChange}/>Hemp milk</label>
          <label><input type="checkbox" value="Macadamia milk" onChange={handleCheckboxChange}/>Macadamia milk</label>
          <label><input type="checkbox" value="Oat milk" onChange={handleCheckboxChange}/>Oat milk</label>
          <label><input type="checkbox" value="Pea milk" onChange={handleCheckboxChange}/>Pea milk</label>
          <label><input type="checkbox" value="Rice milk" onChange={handleCheckboxChange}/>Rice milk</label>
          <label><input type="checkbox" value="Soy milk" onChange={handleCheckboxChange}/>Soy milk</label>
          <label><input type="checkbox" value="Walnut milk" onChange={handleCheckboxChange}/>Walnut milk</label>
          <label><input type="checkbox" value="Whole milk" onChange={handleCheckboxChange}/>Whole milk</label>
        </div>
      </div> */}
      {/* <button onClick={dostuff}>DoStuf</button> */}
    </div>
  );
}

export default SearchFilter;
