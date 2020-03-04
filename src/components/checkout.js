import React from 'react'
import '../checkout.css'
const Checkout = () => {
    return(
        <div>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            {/*---- Include the above in your HEAD tag --------*/}
            <div className="container wrapper">
                <div className="row cart-head">
                <div className="container">
                    <div className="row">
                    <p />
                    </div>
                    <div className="row">
                    <div style={{display: 'table', margin: 'auto'}}>
                        <span className="step step_complete"> <a href="#" className="check-bc">Cart</a> <span className="step_line step_complete">&nbsp;</span> <span className="step_line backline">&nbsp;</span> </span>
                        <span className="step step_complete"> <a href="#" className="check-bc">Checkout</a> <span className="step_line ">&nbsp;</span> <span className="step_line step_complete">&nbsp;</span> </span>
                        <span className="step_thankyou check-bc step_complete">Thank you</span>
                    </div>
                    </div>
                    <div className="row">
                    <p />
                    </div>
                </div>
                </div>    
                <div className="row cart-body">
                <form className="form-horizontal" method="post" action>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                    {/*REVIEW ORDER*/}
                    <div className="panel panel-info">
                        <div className="panel-heading">
                        Review Order <div className="pull-right"><small><a className="afix-1" href="#">Edit Cart</a></small></div>
                        </div>
                        <div className="panel-body">
                        <div className="form-group">
                            <div className="col-sm-3 col-xs-3">
                            <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                            <div className="col-xs-12">Product name</div>
                            <div className="col-xs-12"><small>Quantity:<span>1</span></small></div>
                            </div>
                            <div className="col-sm-3 col-xs-3 text-right">
                            <h6><span>$</span>25.00</h6>
                            </div>
                        </div>
                        <div className="form-group"><hr /></div>
                        <div className="form-group">
                            <div className="col-sm-3 col-xs-3">
                            <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                            <div className="col-xs-12">Product name</div>
                            <div className="col-xs-12"><small>Quantity:<span>1</span></small></div>
                            </div>
                            <div className="col-sm-3 col-xs-3 text-right">
                            <h6><span>$</span>25.00</h6>
                            </div>
                        </div>
                        <div className="form-group"><hr /></div>
                        <div className="form-group">
                            <div className="col-sm-3 col-xs-3">
                            <img className="img-responsive" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                            <div className="col-xs-12">Product name</div>
                            <div className="col-xs-12"><small>Quantity:<span>2</span></small></div>
                            </div>
                            <div className="col-sm-3 col-xs-3 text-right">
                            <h6><span>$</span>50.00</h6>
                            </div>
                        </div>
                        <div className="form-group"><hr /></div>
                        <div className="form-group">
                            <div className="col-xs-12">
                            <strong>Subtotal</strong>
                            <div className="pull-right"><span>$</span><span>200.00</span></div>
                            </div>
                            <div className="col-xs-12">
                            <small>Shipping</small>
                            <div className="pull-right"><span>-</span></div>
                            </div>
                        </div>
                        <div className="form-group"><hr /></div>
                        <div className="form-group">
                            <div className="col-xs-12">
                            <strong>Order Total</strong>
                            <div className="pull-right"><span>$</span><span>150.00</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*REVIEW ORDER END*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                    {/*SHIPPING METHOD*/}
                    <div className="panel panel-info">
                        <div className="panel-heading">Address</div>
                        <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-12">
                            <h4>Shipping Address</h4>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Country:</strong></div>
                            <div className="col-md-12">
                            <input type="text" className="form-control" name="country" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6 col-xs-12">
                            <strong>First Name:</strong>
                            <input type="text" name="first_name" className="form-control" defaultValue />
                            </div>
                            <div className="span1" />
                            <div className="col-md-6 col-xs-12">
                            <strong>Last Name:</strong>
                            <input type="text" name="last_name" className="form-control" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Address:</strong></div>
                            <div className="col-md-12">
                            <input type="text" name="address" className="form-control" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>City:</strong></div>
                            <div className="col-md-12">
                            <input type="text" name="city" className="form-control" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>State:</strong></div>
                            <div className="col-md-12">
                            <input type="text" name="state" className="form-control" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                            <div className="col-md-12">
                            <input type="text" name="zip_code" className="form-control" defaultValue />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Phone Number:</strong></div>
                            <div className="col-md-12"><input type="text" name="phone_number" className="form-control" defaultValue /></div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Email Address:</strong></div>
                            <div className="col-md-12"><input type="text" name="email_address" className="form-control" defaultValue /></div>
                        </div>
                        </div>
                    </div>
                    {/*SHIPPING METHOD END*/}
                    {/*CREDIT CART PAYMENT*/}
                    <div className="panel panel-info">
                        <div className="panel-heading"><span><i className="glyphicon glyphicon-lock" /></span> Secure Payment</div>
                        <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-12"><strong>Card Type:</strong></div>
                            <div className="col-md-12">
                            <select id="CreditCardType" name="CreditCardType" className="form-control">
                                <option >Visa</option>
                                <option>MasterCard</option>
                                <option >American Express</option>
                                <option>Discover</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Credit Card Number:</strong></div>
                            <div className="col-md-12"><input type="text" className="form-control" name="car_number" defaultValue /></div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12"><strong>Card CVV:</strong></div>
                            <div className="col-md-12"><input type="text" className="form-control" name="car_code" defaultValue /></div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                            <strong>Expiration Date</strong>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <select className="form-control" name>
                                <option value>Month</option>
                                <option >01</option>
                                <option>02</option>
                                <option >03</option>
                                <option >04</option>
                                <option>05</option>
                                <option >06</option>
                                <option >07</option>
                                <option >08</option>
                                <option >09</option>
                                <option >10</option>
                                <option >11</option>
                                <option >12</option>
                            </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <select className="form-control" name>
                                <option value>Year</option>
                                <option >2015</option>
                                <option >2016</option>
                                <option >2017</option>
                                <option >2018</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                            <span>Pay secure using your credit card.</span>
                            </div>
                            <div className="col-md-12">
                            <ul className="cards">
                                <li className="visa hand">Visa</li>
                                <li className="mastercard hand">MasterCard</li>
                                <li className="amex hand">Amex</li>
                            </ul>
                            <div className="clearfix" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                            <button type="submit" className="btn btn-primary btn-submit-fix">Place Order</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*CREDIT CART PAYMENT END*/}
                    </div>
                </form>
                </div>
                <div className="row cart-footer">
                </div>
            </div>
            </div>
    )
}
export default Checkout;