import { Fragment, useState } from 'react';
import { X, Plus, Minus, Trash } from 'react-feather';
import Link from 'next/link';
import { 
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const HeaderWhite = () => {
  
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Fragment>
      <Navbar light expand="lg" className="navbar ">
        <div className="container">
          <Link href="/">
            <NavbarBrand className="d-flex align-items-center justify-content-center">
              <img className="mb0 img-header" alt="logo" src="/static/image/logo-vici.png"/>
            </NavbarBrand>
          </Link>
          <NavbarToggler className="mt0" onClick={() => setNavbarOpen(!navbarOpen)} />
          <Collapse className="justify-content-between" isOpen={navbarOpen} navbar>
            <Nav className="ml100-0" navbar>
              <NavItem>
                <Link href="/">
                  <NavLink className="ml10 worksans vici-p active">
                    Home
                  </NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
              >
                <DropdownToggle nav caret>
                  <span className="ml10 worksans vici-p  dropdown__trigger ">
                    Product
                  </span>
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-product dr-position">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      {/* KYC Validation */}
                      <DropdownItem className="mt40">
                        <Link href="/products/kyc-verification">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/kyc.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                KYC Verification                
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown">
                                Verify customer in a matter of seconds.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      {/* Bank Verification */}
                      <DropdownItem className="mt40">
                        <Link href="/products/bank-verification">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/bank-verification.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                Bank Card Verification       
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown ">
                                Automated checking of bank identification number.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      {/* Disbursement */}
                      <DropdownItem className="mt40">
                        <Link href="/products/disbursement">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/disbursement.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                Disbursement      
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown ">
                                Manage your bill, detect and collect payment and reconcile.     
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      {/* Payment Gateway */}
                      <DropdownItem className="mt40">
                        <Link href="/products/payment-gateway">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/pg.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                Payment Gateway      
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown ">
                                No-hassle experience in sending and receiving payments.     
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {/* KYC Validation */}
                      <DropdownItem className="mt40">
                        <Link href="/products/remittance">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/remittance.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                Remittance   
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown">
                                Sending money abroad has never been this easy.         
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      {/* Bank Verification */}
                      <DropdownItem className="mt40">
                        <Link href="/products/edc-machine">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/edc.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                EDC Machine       
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown ">
                                Our portable and efficient countertop EDC Machine supports any payment.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      {/* Disbursement */}
                      <DropdownItem className="mt40">
                        <Link href="/products/kiosk">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/kiosk.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                Kiosk Machine      
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown ">
                                Our easy, integrated and secure self-service kiosk machine.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      {/* Payment Gateway */}
                      <DropdownItem className="mt40">
                        <Link href="/products/h2h">
                          <div className="d-flex justify-content-start align-items-start">
                            <img className="img-icon-md mb0" src="/static/image/icon-header/h2h.png"/>
                            <div className="ml10">
                              <h6 className="mb0 vici-h6 worksans color-red">
                                H2H Pulsa & PPOB     
                              </h6>
                              <p className="vici-p worksans op07 vici-dropdown ">
                                Free registration, low-cost service to top up credits.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                    </div>
                    </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <NavItem>
                <Link href="/pricing">
                  <NavLink className="ml10 worksans vici-p">
                    Pricing
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about-us">
                  <NavLink className="ml10 worksans vici-p">
                    About Us
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/career">
                  <NavLink className="ml10 worksans vici-p">
                    Careers
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/blog">
                  <NavLink className="ml10 worksans vici-p">
                    Blogs
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact-us">
                  <NavLink className="ml10 worksans vici-p">
                    Contact Us
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
            <Nav className="mlauto" navbar>
              <NavItem>
                <NavLink href="#" className="ml10 vici500 worksans vici-p">
                  ZH
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ml10 mr10 worksans vici-p vici500">
                  ENG
                </NavLink>
              </NavItem>
              <Button 
                className="btn btn-login mb0 ml10 mr10"
                href="/login"
              >
                Log In
              </Button>
            </Nav>
          </Collapse>

        </div>
      </Navbar>
    </Fragment>
  );
}

export default HeaderWhite;