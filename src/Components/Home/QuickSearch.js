import React from 'react';
import QuickSearchItems from "../../Components/Home/QuickSearchItem";


class QuickSearch extends React.Component {
    render() {
        const { mealtypesData } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="h1">Quick Searches</div>
                    <div className="h3">Discover restaurants by type of meal</div>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            mealtypesData.map((item) => {
                                return <QuickSearchItems quickSearchItemsData={item} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;