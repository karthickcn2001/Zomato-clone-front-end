import React from 'react';
import '../../Styles/Filter/filter.css';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="h4 text-black">Breakfast Places in Mumbai</div>

          <div className="grid-container">
            <div className="vertical-box" style={{ paddingLeft: "10px;" }}>
              <span className="filters-toggle">
                <h5>Filter / Sort</h5>
                <i className="fa fa-chevron-down"></i>
              </span>

              <div className="filters-content">
                <h4>Filters</h4>
                <h5 style={{ fontFamily: "Gill Sans", fontSize: "20px", fontWeight: "bold" }}>Select Location</h5>
                <div className="dropdown">
                  <input type="text" list="cities" placeholder="Select Location" className="dropdowndatalist" />
                  <datalist id="cities">
                    <option>Chennai</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Delhi</option>
                    <option>Kolkata</option>
                    <option>Hyderabad</option>
                  </datalist>
                </div>
                <br></br>
                
                <h5 style={{ fontFamily: "Gill Sans", fontSize: "20px", fontWeight: "bold" }}>Cuisine</h5>
                <div className="checkboxdata">
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label>North Indian</label><br></br>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label>South Indian</label><br></br>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label>Chinese</label><br></br>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label>Fast food</label><br></br>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <label>Street food</label><br></br>
                </div>

                <h5 style={{ fontFamily: "Gill Sans", fontSize: "20px", fontWeight: "bold" }}>Cost For Two</h5>
                <div className="radiodata">
                  <input type="radio" name="action" />
                  <label>Less than ₹500</label><br></br>
                  <input type="radio" name="action" />
                  <label>₹500 to ₹1000</label><br></br>
                  <input type="radio" name="action" />
                  <label>₹1000 to ₹1500</label><br></br>
                  <input type="radio" name="action" />
                  <label>₹1500 to ₹2000</label><br></br>
                  <input type="radio" name="action" />
                  <label>₹2000+</label><br></br>
                </div>

                <div className="filters2">
                  <h4 style={{ fontFamily: "Gill Sans", fontSize: "20px", fontWeight: "bold" }}>Sort</h4>
                  <div className="radiodata">
                    <input type="radio" name="actions" className="spacearound" />
                    <label>Price low to high</label><br></br>
                    <input type="radio" name="actions" className="spacearound" />
                    <label>Price high to low</label><br></br>
                  </div>
                </div>

              </div>
            </div>


            <div className="horizontal-box1">
              <img src="/Assets/Filter/bake1.jpg" alt='img not found' />
              <div>
                <div className="box1text1">The Big Chill Cakery</div><br></br>
                <div className="box1text2">FORT</div><br></br>
                <div className="box1text3">Shop 1, Plot D, Samruddhi Complex, Chincholi ...</div><br></br>
              </div>
              <hr />
              <div className="box1text4">CUISINES:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontFamily: 'cursive', color: 'black' }}>Bakery</span></div><br></br>
              <div className="box1text5">COST FOR TWO:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontFamily: 'cursive', color: 'black' }}>₹700</span></div>
            </div>


            <div className="horizontal-box2">
              <img src="/Assets/Filter/bake2.jpg" alt='img not found' />
              <div>
                <div className="box1text1">The Bake Shop</div><br></br>
                <div className="box1text2">FORT</div><br></br>
                <div className="box1text3">Shop 1, Plot D, Samruddhi Complex, Chincholi ...</div><br></br>
              </div>
              <hr />
              <div className="box1text4">CUISINES:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontFamily: 'cursive', color: 'black' }}>Bakery</span></div><br />
              <div className="box1text5">COST FOR TWO:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontFamily: 'cursive', color: 'black' }}>₹700</span></div>
            </div>

          </div>

          <div className="pagination">
            <div className="pagination-buttons">
              <button className="page active">1</button>
              <button className="page">2</button>
              <button className="page">3</button>
              <button className="page">4</button>
              <button className="page">5</button>
              <button className="page">6</button>
              <button className="ellipsis">...</button>
              <button className="page">10</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter;
