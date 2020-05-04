import { Fragment } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'react-feather';

const WhiteFooter = () => {
  return (
    <Fragment>
     <section className="space--xs bg--footer">
        <div className="container">
          <h4 className="color-white worksans vici600 mb20 left-center">
            PT Vici Remittance Indonesia
          </h4>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mb20 left-center">
              <p className="color-white worksans mb20">
                Komplek Business Park, Ruko AB-6 Lt. 6 
                Jalan Meruya Ilir No. 88, Kebon Jeruk 
                Kota Jakarta Barat, DKI Jakarta 11620
              </p>
              <Link href="#">
                <div className="sosmed-footer text-center bg-white">
                  <Facebook className="text-center img-icon-sm"/>
                </div>
              </Link>
              <Link href="#">
                <div className="sosmed-footer text-center bg-white ml10">
                  <Twitter className="text-center img-icon-sm"/>
                </div>
              </Link>
              <Link href="#">
                <div className="sosmed-footer text-center bg-white ml10">
                  <Instagram className="text-center img-icon-sm"/>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-6 mb20 showhide">
              <h6 className="color-white worksans mb10">
                Products
              </h6>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 mb10">
                  <Link href="/products/kyc-validation">
                    <a className="color-white worksans mb5">
                      KYC Verification
                    </a>
                  </Link>
                  <br></br>
                  <Link href="/products/bank-verification">
                    <a className="color-white worksans mb5">
                      Bank Card Verification
                    </a>
                  </Link>
                  <br></br>
                  <Link href="/products/disbrusment">
                    <a className="color-white worksans mb5">
                      Disbursement
                    </a>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb10">
                  <Link href="/products/payment-gateway">
                    <a className="color-white worksans mb5">
                      Payment Gateway
                    </a>
                  </Link>
                  <br></br>
                  <Link href="/products/remittance">
                    <a className="color-white worksans mb5">
                      Remittance
                    </a>
                  </Link>
                  <br></br>
                  <Link href="/products/h2h">
                    <a className="color-white worksans mb5">
                      H2H Pulsa & PPOB 
                    </a>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb10">
                  <Link href="/products/edc-machine">
                    <a className="color-white worksans mb5">
                      EDC Machine
                    </a>
                  </Link>
                  <br></br>
                  <Link href="/products/kiosk">
                    <a className="color-white worksans mb5">
                      Kiosk Machine
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-6 mb20 showhide">
              <h6 className="color-white worksans mb10">
                Security
              </h6>
              <div className="row ">
                <div className="col-lg-6 col-md-2 col-12 mb10 text-left">
                  <div className="img-icon-md bg--left" 
                    style={{backgroundImage:`url('/static/image/home/icon-payment/Group-1.png')`}}></div>
                </div>
                <div className="col-lg-6 col-md-2 col-12 mb10 text-left">
                  <div className="img-icon-md bg--left" 
                    style={{backgroundImage:`url('/static/image/home/icon-payment/Group-2.png')`}}></div>
                </div>
                <div className="col-lg-6 col-md-2 col-12 mb10 text-left">
                  <div className="img-icon-md bg--left" 
                    style={{backgroundImage:`url('/static/image/home/icon-payment/Group-3.png')`}}></div>
                </div>
                <div className="col-lg-6 col-md-2 col-12 mb10 text-left">
                  <div className="img-icon-md bg--left" 
                    style={{backgroundImage:`url('/static/image/home/icon-payment/Group-4.png')`}}></div>
                </div>
                <div className="col-lg-6 col-md-2 col-12 mb10 text-left">
                  <div className="img-icon-md bg--left" 
                    style={{backgroundImage:`url('/static/image/home/icon-payment/Group-5.png')`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space--xxs" style={{backgroundColor:'#640C15'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12 mb10 left-center">
              <Link href="#">
                <a className="color-white worksans">
                  Terms and Conditions
                </a>
              </Link>
            </div>
            <div className="col-lg-2 col-md-2 col-12 mb10 left-center">
              <Link href="#">
                <a className="color-white worksans">
                  Privacy and Policy
                </a>
              </Link>
            </div>
            <div className="col-lg-2 col-md-2 col-12 mb10 left-center">
              <Link href="#">
                <a className="color-white worksans">
                  Legal
                </a>
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 col-12 mb10">
              <p className="color-white worksans right-center">
                Copyright © VICI Remittance - 2019
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default WhiteFooter;