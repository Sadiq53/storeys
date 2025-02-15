const Filters = () => {
  return (
    <>
        <div className="filters">
            <div className="item divide">
                <h4 className="font-sm medium dark">Location</h4>
                <p className="font-sm fs-16">City, Community or Area</p>
            </div>
            <div className="item divide">
                <h4 className="font-sm medium dark">Bedrooms</h4>
                <div className="dropdown">
                    <select className="font-sm fs-16 dropdown-select text-left">
                        <option className="dropdown-option" value="">Select Bedrooms</option>
                        <option className="dropdown-option" value="1">1 Bedroom</option>
                        <option className="dropdown-option" value="2">2 Bedrooms</option>
                        <option className="dropdown-option" value="3">3 Bedrooms</option>
                        <option className="dropdown-option" value="4">4+ Bedrooms</option>
                    </select>
                </div>
            </div>
            <div className="item divide">
                <h4 className="font-sm medium dark">Types</h4>
                <div className="dropdown">
                    <select className="font-sm fs-16 dropdown-select text-left">
                        <option className="dropdown-option" value="">Select Types</option>
                        <option className="dropdown-option" value="apartment">Apartment</option>
                        <option className="dropdown-option" value="house">House</option>
                        <option className="dropdown-option" value="condo">Condo</option>
                        <option className="dropdown-option" value="villa">Villa</option>
                    </select>
                </div>
            </div>
            <div className="item">
                <h4 className="font-sm medium dark">Price Range</h4>
                <div className="price-range-inputs">
                    <input 
                        type="number" 
                        placeholder="Min price"
                        className="font-sm fs-16 price-input"
                    />
                    <span className="separator">-</span>
                    <input 
                        type="number" 
                        placeholder="Max price"
                        className="font-sm fs-16 price-input"
                    />
                </div>
            </div>
            <div className="item p-0 ">
                <button className="cs-btn align-self-end">Search</button>
            </div>
        </div>
    </>
  )
}

export default Filters