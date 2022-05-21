import React from 'react'
import './index.css'
const Order_card = ({ order_data, total_amount, order_id, backurl }) => {
    

    return (
        <div class="container">
            <div class="header">
                <div class="d-flex flex-row mb-3">
                    <div class="d-flex flex-column mb-3" id="data_top">
                        <div>
                            Order Placed
                        </div>
                        <div>
                            {order_data}
                        </div>
                    </div>
                    <div class="d-flex flex-column mb-3" id='data_top'>
                        <div>
                            Total
                        </div>
                        <div>
                            Rs {total_amount}
                        </div>
                    </div>
                    <div class="d-flex flex-column mb-3" id='data_last'>
                        <div>
                            ORDER # {order_id}
                        </div>
                        <div>
                            <a>View Order details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="status">
                <h5>Delivered 27th April 2022</h5>
            </div>
            <div class="footer">
                <div class="d-flex flex-row mb-3">
                    <div class="image">
                      <img src={backurl} height={150} width={150}></img>
                    </div>
                    <div class="product_name">
                    Writing product descriptions for your T-shirt dropshipping business can be really annoying. 
                     They’re only a couple of sentences long and seem like they should be really easy to create, 
                     but they can have a dramatic effect on your sales.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order_card;
