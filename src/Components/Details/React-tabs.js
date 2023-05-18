import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../Styles/Details/reactTabs.css"



class ReactTabs extends React.Component {
    render() {
        const { restaurantsData } = this.props;

        const queryParams = new URLSearchParams(window.location.search);
        const restaurantId = queryParams.get("restaurant_id");
        const restaurant = restaurantsData.find((restaurant) => {
            return restaurant._id === restaurantId;
        });
        console.log("restaurantId:", restaurantId);
        console.log("restaurant:", restaurant);
        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 className='text-danger fw-bold display-6' style={{ marginRight: 'auto' }}>{restaurant?.name}</h2>
                    <button className="btn btn-success" style={{ marginLeft: 'auto' }}>Place Online Order</button>
                </div>

                <Tabs>
                    <TabList>
                        <Tab><h3 className='fs-5 fw-bold'>Overview</h3></Tab>
                        <Tab ><h3 className='fs-5 fw-bold'>Contact</h3></Tab>
                    </TabList>

                    <TabPanel>
                        <h2>About Us</h2>
                        <p>Our bakery is a family-owned business that has been serving the community for over 20 years. We take pride in offering high-quality baked goods made with fresh ingredients.</p>
                        <br />
                        <h2>Our Menu</h2>
                        <p>Our menu features a wide variety of baked goods, including cakes, cookies, bread, and pastries. We also offer custom orders for special occasions.</p>
                        <br />
                        <h2>Special Offers</h2>
                        <p>Stay tuned for our seasonal specials and discounts, which we offer regularly to our loyal customers.</p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Phone Number</h2>
                        <p style={{ color: "green" }}>+91 75920-08912</p>
                        <br />
                        <h2>Contact Us</h2>
                        <p>We are located in the heart of downtown, and our friendly staff is always available to answer any questions you may have. You can reach us by phone, email, or through our website.</p>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }

}

export default ReactTabs;
