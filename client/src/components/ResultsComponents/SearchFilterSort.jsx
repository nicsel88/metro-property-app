import React from 'react'
import Multiselect from 'multiselect-react-dropdown'
import styles from './SearchFilterSort.module.css'
import SearchIcon from '../../images/search-icon.png'
import SaveSearchIcon from '../../images/save-search-icon.png'
import SortIcon from '../../images/sort-icon.png'
import ViewIcon from '../../images/view-icon.png'
// import styles from './Driver.module.css'
import { useState } from 'react'


const SearchFilterSort = ({ filter, setFilter, handleChange }) => {

    // Create nested array with districts, suburbs for Auckland and Chch:
    const regions = [ {name: "All of New Zealand"}, {name: "Northland"},
    { 
        name: "Auckland",
        districts: [ {name: "All districts"},
            {
                name: "Auckland City",
                suburbs: ["Arch Hill","Auckland CBD","Avondale","Blockhouse Bay","Balmoral","Blackpool","Eden  Terrace","Eden Valley","Ellerslie","Epsom","Freemans Bay","Glendowie","Glen Innes","Grafton","Greenlane","Greenwoods Corner","Grey Lynn","Herne Bay","Hillsborough","Kingsland","Kohimarama","Lynfield","Meadowbank","Mission Bay","Morningside","Mount Albert","Mount Eden","Mount Roskill","Mount Wellington","Newmarket","Newton","New Windsor","Onehunga","Oneroa","Onetangi","One Tree Hill","Ōrākei","Oranga","Ostend","Ōtāhuhu","Owairaka","Palm Beach","Panmure","Parnell","Penrose","Point England","Point Chevalier","Ponsonby","Remuera","Royal Oak","Saint Heliers","St Johns","Saint Marys Bay","Sandringham","Stonefields","Surfdale","Tāmaki","Te Papapa","Three Kings","Waikowhai","Wai o Taiki Bay","Waterview","Wesley","Western Springs","Westfield","Westmere"]
            },
            {name: "Franklin"}, {name: "Hauraki Gulf Islands"}, {name: "Manukau City"}, {name: "Manukau City"}, {name: "North Shore City"}, {name: "Papakura"}, {name: "Rodney"}, {name: "Waiheke Island"}, {name: "Waitakere City"}
        ]
     },
     {name: "Waikato"}, {name: "Bay of Plenty"}, {name: "Gisborne"}, {name: "Hawke's Bay"}, {name: "Taranaki"}, {name: "Manawatu/Whanganui"}, {name: "Wellington"}, {name: "Nelson/Tasman"}, {name: "Marlborough"}, {name: "West Coast"},
     {
        name: "Canterbury",
        districts: [ {name: "All districts"}, {name: "Ashburton"}, {name: "Banks Peninsula"}, 
            {
                name: "Christchurch City",
                suburbs: ["All suburbs", "Addington", "Aidanfield", "Aranui", "Avondale", "Avonhead", "Avonside", "Balmoral Hill", "Barrington", "Beckenham", "Belfast", "Bexley", "Bishopdale", "Bromley", "Brookhaven", "Brooklands", "Broomfield", "Bryndwr", "Burnside", "Burwood", "Casebrook", "Cashmere", "Chaneys", "City Centre", "Clifton", "Cracroft", "Dallington", "Edgeware", "Evreton", "Fendalton", "Ferrymead", "Forest Park", "Halswell", "Harewood", "Heathcote", "Hei Hei", "Hillmorton", "Hillsborough", "Hoon Hay", "Hornby", "Huntsbury", "Hyde Park", "Ilam", "Islington", "Kainga", "Kennedy's Bush", "Linwood", "Mairehau", "Marshland", "Merivale", "Middleton", "Moncks Bay", "Mount Pleasant", "Murray Aynsley", "New Brighton", "North Linwood", "North New Brighton", "Northcote", "Northshore", "Northwood", "Oaklands", "Opawa", "Papanui", "Parklands", "Philipstown", "Queenpark", "Ravenswood", "Redcliffs", "Redwood", "Riccarton", "Richmond", "Richmond Hill", "Russley", "Scarborough", "Shirley", "Sockburn", "Somerfield", "South New Brighton", "Southshore", "Spencerville", "Spreydon", "St. Albans", "St. Andrews Hill", "St. Martins", "Stewarts Gully", "Strowan", "Styx", "Sumner", "Sydenham", "Templeton", "Upper Riccarton", "Waimairi Beach", "Wainoni", "Waitikiri", "Waltham", "Westlake", "Westmorland", "Wigram", "Wigram Park", "Woolston", "Yaldhurst"]
            },
                {name: "Hurunui"}, {name: "Mackenzie"}, {name: "Selwyn"}, {name: "Timaru"}, {name: "Waimakariri"}, {name: "Waimate"}
        ]
    }, {name: "Otago"}, {name: "Southland"}];

    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedDistrict, setSelectedDistrict] = useState();
    const [selectedSuburb, setSelectedSuburb] = useState();
  
    const availableDistrict = regions.find((region) => region.name === selectedRegion);
    const availableSuburb = availableDistrict?.districts?.find(
      (district) => district.name === selectedDistrict
    );


    const rentMin = ["Any", 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1500, 2000];
    const rentMax = ["Any", 100, 200, 300, 400, 500, 600, 700, 800, 1000, 1500, 2000];
    const bedroomsMin = ["Any", 1, 2, 3, 4, 5, 6];
    const bedroomsMax = ["Any", 1, 2, 3, 4, 5, 6];
    const bathroomsMin = ["Any", 1, 2, 3, 4, 5, 6];
    const bathroomsMax = ["Any", 1, 2, 3, 4, 5, 6];
    const carparksMin = ["Any", 1, 2, 3, 4];
    const carparksMax = ["Any", 1, 2, 3, 4];
    const propertyType = ["All", "House", "Townhouse", "Apartment", "Unit"];
    const amenities = ["School", "Supermarket", "Public transport", "Park", "Cafe/restaurant", "Shopping centre", "Gym"];

    // const amenities = [ {name: "Any"}, {name: "Apartment"}, {name: "House"}, {name: "Townhouse"}, {name: "Unit"}];

    const [selectedAmenities, setSelectedAmenities] = useState();
    const [selectedPropertyType, setSelectedPropertyType] = useState();
    
    // const [amenities, setAmenities] = useState(amenities)


    // location: {region: "", district: "", city: ""}
    // petsOk: true,


//     const [plan, setPlan] = useState(2);
//     const excessOptions = [100, 300, 500, 1000, 2000];
//     const [excess, setExcess] = useState(500);
//     const valueOptions = [4000, 9000, 15000];
//     const [value, setValue] = useState(9000);
//   const [gender, setGender] = useState('female');
//   const [incidents, setIncidents] = useState(true);
//   const [driver2, setDriver2] = useState(false);

// Value = "Any", "1"...
// Key = "0", "1", This is the index of the array


  return (
  <>
    <div className={styles.ListingsSearchContainer}>
      <div className={styles.ListingsSearchContent}>
        <div className={styles.SearchBarRow}>          
              <input className={styles.SearchBar} type='text' placeholder='Enter address, city or keywords'></input> 
              <button className={styles.SearchButton}><img src={SearchIcon} alt='search icon' /></button>   
        </div>
        <div className={styles.LocationRow}>
          <div className={styles.FilterCategoryContainer}>
            <div>
              <label className={styles.FilterCategoryLabel}>Select location</label>
            </div>
            <div>
              <select className={styles.LocationFilterButton}
                name="region"
                placeholder="Region"
                defaultValue={filter.region}
                value={selectedRegion}
                onChange={(e) => {
                  setSelectedRegion(e.target.value);
                  setFilter({ ...filter, [e.target.name]: e.target.value });
                }} >
                <option>--Choose Region--</option>
                {regions.map((value, key) => {
                  return (
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles.FilterCategoryContainer}>
            <div>
              <label></label>
            </div>
            <div>
              <select className={styles.LocationFilterButton}
                name="district"
                placeholder="District"
                defaultValue={filter.district}
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setFilter({ ...filter, [e.target.name]: e.target.value });
                }} >
                <option>--Choose District--</option>
                {availableDistrict?.districts?.map((e, key) => {
                  return (
                    <option value={e.name} key={key}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles.FilterCategoryContainer}>
            <div>
              <label></label>
            </div>
            <div>
              <select className={styles.LocationFilterButton}
                name="suburb"
                placeholder="Suburb"
                defaultValue={filter.suburb}
                value={selectedSuburb}
                  onChange={(e) => {
                    setSelectedSuburb(e.target.value);
                    setFilter({ ...filter, [e.target.name]: e.target.value });
                  }} >
                <option>--Choose Suburb--</option>
                {availableSuburb?.suburbs?.map((e, key) => {
                  return (
                    <option value={e.name} key={key}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles.ButtonContainer}>
            <button className={styles.SortButton}><img src={SortIcon} alt='save search icon' />  Sort By</button>
          </div>
        </div>
        <div className={styles.PropertyFiltersRow}>
          <div className={styles.FilterCategoryContainer}>
            <label className={styles.FilterCategoryLabel}>Rent per week</label>
            <div className={styles.FilterMinMax}>
                <select className={styles.FilterButton}
                  name="rentMin"
                  defaultValue={filter.rentMin}
                  onChange={handleChange}>
                  {rentMin.map((value, index) => {
                        return (
                        <option value={value} key={index} >
                          {value}
                        </option>
                        );
                      })}
                </select>
                <select className={styles.FilterButton}
                  name="rentMax"
                  defaultValue={filter.rentMax}
                  onChange={handleChange}>
                  {rentMax.map((value, index) => {
                        return (
                        <option value={value} key={index} >
                          {value}
                        </option>
                        );
                      })}
                </select>
            </div>
          </div>
          <div className={styles.FilterCategoryContainer}>
            <label className={styles.FilterCategoryLabel}>Bedrooms</label>
            <div className={styles.FilterMinMax}>
                <select className={styles.FilterButton}
                  name="bedroomsMin"
                  defaultValue={filter.bedroomsMin}
                  onChange={handleChange}>
                  {bedroomsMin.map((value, index) => {
                        return (
                        <option value={value} key={index} >
                          {value}
                        </option>
                        );
                      })}
                </select>

                <select className={styles.FilterButton}
                  name="bedroomsMax"
                  defaultValue={filter.bedroomsMax}
                  onChange={handleChange}>
                  {bedroomsMax.map((option, index) => {
                        return (
                        <option key={option} value={index} >
                          {option}
                        </option>
                        );
                      })}
                </select>
            </div>
          </div>
          <div className={styles.FilterCategoryContainer}>
            <label className={styles.FilterCategoryLabel}>Bathrooms</label>
            <div className={styles.FilterMinMax}>

                <select className={styles.FilterButton}
                  name="bathroomsMin"
                  defaultValue={filter.bathroomsMin}
                  onChange={handleChange}>
                  {bathroomsMin.map((value, index) => {
                        return (
                        <option value={value} key={index} >
                          {value}
                        </option>
                        );
                      })}
                </select>

                <select className={styles.FilterButton}
                  name="bathroomsMax"
                  defaultValue={filter.bathroomsMax}
                  onChange={handleChange}>
                  {bathroomsMax.map((option, index) => {
                        return (
                        <option key={option} value={index} >
                          {option}
                        </option>
                        );
                      })}
                </select>
            </div>  
          </div>
          <div className={styles.ButtonContainer}>
            <button className={styles.SavedSearchButton}><img src={SaveSearchIcon} alt='save search icon' /> Save Search</button>
          </div>
        </div>
        <div className={styles.ExtrasRow}>
          <div className={styles.FilterCategoryContainer}>
            <label className={styles.FilterCategoryLabel}>Property Type</label>
            <Multiselect
                id="css_custom"
                name="propertyType"
                isObject={false}
                onKeyPressFn={function noRefCheck(){}}
                onRemove={(selectedList) => {
                  setSelectedPropertyType(selectedList);
                  setFilter({ ...filter, ["propertyType"]: selectedList });
                }}
                onSearch={function noRefCheck(){}}
                onSelect={(selectedList) => {
                  setSelectedPropertyType(selectedList);
                  setFilter({ ...filter, ["propertyType"]: selectedList });
                }}
                options={propertyType}
                selectedValues={filter.propertyType}
                showCheckbox
                style={{
                  chips: {
                    background: "#868484",
                    color: "white"
                  },
                  multiselectContainer: {
                    color: "#868484",
                    'margin-top': "0.5rem",
                    'margin-left': "auto",
                    'margin-right': "auto",
                    width: '90%',
                  
                  },
                  searchBox: {
                    color: "#868484",
                    'border-radius': '4px',
                    height: '2rem',
                    'padding-top': '0rem'
                  },
                  optionContainer: {
                    color: "white",
                    background: "#868484"
                  }
                }}
            />
          </div>
          <div className={styles.FilterCategoryContainer}>
            <label className={styles.FilterCategoryLabel}>Amenities</label>
            <Multiselect
                id="css_custom"
                name="amenities"
                isObject={false}
                onKeyPressFn={function noRefCheck(){}}
                onRemove={(selectedList) => {
                  setSelectedAmenities(selectedList);
                  setFilter({ ...filter, ["amenities"]: selectedList });
                }}
                onSearch={function noRefCheck(){}}
                onSelect={(selectedList) => {
                  setSelectedAmenities(selectedList);
                  setFilter({ ...filter, ["amenities"]: selectedList });
                }}
                options={amenities}
                selectedValues={filter.amenities}
                showCheckbox
                style={{
                  chips: {
                    background: "#868484",
                    color: "white"
                  },
                  multiselectContainer: {
                    color: "#868484",
                    'margin-top': "0.5rem",
                    'margin-left': "auto",
                    'margin-right': "auto",
                    width: '90%',
                  
                  },
                  searchBox: {
                    color: "#868484",
                    'border-radius': '4px',
                    height: '2rem',
                    'padding-top': '0rem'
                  },
                  optionContainer: {
                    color: "white",
                    background: "#868484"
                  }
                }}
            />
          </div>
          <div className={styles.FilterCategoryContainer}>
            <div className={styles.CheckboxesContainer}>
              <div className={styles.CheckBoxAndLabel}>
                <div className={styles.CheckBox}>
                  <input type="checkbox" name="petsOk" value="true" onChange={handleChange} />
                </div>
                <label for="pets_ok">Pets OK</label>
              </div>
              <div className={styles.CheckBoxAndLabel}>
                <div className={styles.CheckBox}>
                  <input type="checkbox" name="availableNow" value="true" onChange={handleChange} />
                </div>
                <label for="available_now">Available Now</label>
              </div>
            </div>
          </div>
          <div className={styles.ButtonContainer}>
            <button className={styles.ViewSavedSearchButton}>
              <img src={ViewIcon} alt='save search icon' />
              <p>View Saved Searches</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
    

    // <div className={styles.DriverDetails}>
    // </div>
    // <input type="dropdown" > </input>
  )
}

export default SearchFilterSort