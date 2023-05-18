import React from "react";
import '../../Styles/Home/quickSearchItems.css';

class QuickSearchItems extends React.Component {

  render() {
    const { name, content, image, } = this.props.quickSearchItemsData;

    return (
      <div>
        <div className="col">
          <div className="card card-1 fade-in" id="card styles">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`${image}`} alt="img not found" className="img-fluid card-img-left" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{name}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuickSearchItems;