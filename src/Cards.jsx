import React from 'react'

function Cards(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                        <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                        <hr></hr>
                        <ul className="fa-ul">
                            <li className={props.data.features_available.users.text_type}><span className="fa-li"><i className={props.data.features_available.users.is_available} ></i></span>{props.data.features_available.users.count}</li>
                            <li className={props.data.features_available.storage.text_type}><span className="fa-li"><i className={props.data.features_available.storage.is_available}></i></span>{props.data.features_available.storage.space}GB Storage</li>
                            <li className={props.data.features_available.public_proj.text_type}><span className="fa-li"><i className={props.data.features_available.public_proj.is_available}></i></span>Unlimited Public Projects</li>
                            <li className={props.data.features_available.communtiy_acess.text_type}><span className="fa-li"><i className={props.data.features_available.communtiy_acess.is_available}></i></span>Community Access</li>
                            <li className={props.data.features_available.private_proj.text_type}><span className="fa-li"><i className={props.data.features_available.private_proj.is_available}></i></span>Unlimited Private Projects</li>
                            <li className={props.data.features_available.phone_support.text_type}><span className="fa-li"><i className={props.data.features_available.phone_support.is_available}></i></span>Dedicated Phone Support</li>
                            <li className={props.data.features_available.subdomain.text_type}><span className="fa-li"><i className={props.data.features_available.subdomain.is_available}></i></span> <span className={props.data.features_available.subdomain.weight}>{props.data.features_available.subdomain.type}</span> Free Subdomain</li>
                            <li className={props.data.features_available.reports.text_type}><span className="fa-li"><i className={props.data.features_available.reports.is_available}></i></span>Monthly Status Reports</li>
                        </ul>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards