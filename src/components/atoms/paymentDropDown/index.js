import React, {useState} from 'react';
import { Dropdown } from "react-bootstrap";
import {PayDropDownIcon, ActionArrow} from "../../../assets";
import './payment-dropdown.scss'

const PaymentDropDown = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
        <img src={ActionArrow}></img>
        </a>
      ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              className={className}
              aria-labelledby={labeledBy}
            >
            <img src={PayDropDownIcon} className="dropdownmenu-arrow"></img>
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );

    return (
        <div className="d-flex justify-content-center profile-menu">
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"></Dropdown.Toggle>
                <Dropdown.Menu className="payment-dropdown dropdown-menu-right" as={CustomMenu}>
                    <Dropdown.Item eventKey="1" className="d-flex justify-content-center approve">Approve</Dropdown.Item>
                    <Dropdown.Item eventKey="2" className="d-flex justify-content-center cancel">Cancel</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default PaymentDropDown;
