import React from 'react'
import './index.css'

const Profile = () => {

    const OnOrders_click = () => {
      window.location = "./account/orders"
    }
    const OnProfile_click = () => {
      window.location = "./account/profile"
    }
    const OnAddress_click = () => {

    }
    const OnWallet_click = () => {

    }
    const OnCards_click = () => {

    }
    return (
        <div>
            <div class="d-flex flex-column bd-highlight mb-3">
            <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                <div class="Name">
                    <h3>Your Account</h3>
                </div>
            </div>
                <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                    <div className='box' >
                        <div class="d-flex flex-column bd-highlight mb-3" >
                            <div class="d-flex flex-row bd-highlight mb-3" id='box_1' onClick={OnWallet_click}>
                                <div className='image'><i class="fa-solid fa-wallet fa-3x"></i></div>
                                <div><h4>wallet</h4></div>
                            </div>
                            {/* <div class="d-flex flex-row bd-highlight mb-3 ">
                                <p>Use thw wallet balance</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='box' >
                        <div class="d-flex flex-cloumn bd-highlight mb-3" >
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="d-flex flex-row bd-highlight mb-3" id='box_1' onClick={OnAddress_click}>
                                    <div className='image' ><i class="fa-solid fa-house fa-3x"></i></div>
                                    <div ><h4>Addresses</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div class="d-flex flex-cloumn bd-highlight mb-3">
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="d-flex flex-row bd-highlight mb-3" id='box_1' onClick={OnCards_click}>
                                    <div className='image'><i class="fa-brands fa-cc-visa fa-3x"></i></div>
                                    <div><h4>Payment Options</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                    <div className='box'>
                        <div class="d-flex flex-cloumn bd-highlight mb-3">
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="d-flex flex-row bd-highlight mb-3" id='box_1' onClick={OnProfile_click}>
                                    <div className='image'><i class="fa-solid fa-user fa-3x"></i></div>
                                    <div><h4>Profile</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div class="d-flex flex-cloumn bd-highlight mb-3">
                            <div class="d-flex flex-column bd-highlight mb-3">
                                <div class="d-flex flex-row bd-highlight mb-3" id='box_1' onClick={OnOrders_click}>
                                    <div className='image'><i class="fa-solid fa-box-open fa-3x"></i></div>
                                    <div><h4>My orders</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
