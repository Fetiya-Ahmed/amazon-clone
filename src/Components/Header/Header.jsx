import React from 'react'
import classes from './Header.module.css'
import LowerHeader from "./LowerHeader";
// icons
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
function Header() {
    return (
        <>
            <section>
                <div className={classes.header__container}>
                    
                    <div className={classes.logo__container}>
                        {/* logo section*/}
                    <a href="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                    </a>
                     {/* delivery */}
                    <div className={classes.delivery}>
                        <span>
                            <SlLocationPin />
                        </span>
                        <div>
                            <p>Delivered to</p>
                            <span>USA</span>
                        </div>
                    </div>
                    </div>  
                    {/* search section*/}
                    <div className={classes.search}>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" placeholder='Search Amazon'/>
                        <BsSearch size={25}/>
                    </div>
                    {/* other section */}
                    <div className={classes.order__container}>
                        <a href="" className={classes.language}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />

                            <select name="" id="">
                            <option value="">EN</option>
                            </select>
                        </a>
                        <a href="/auth">
                            <p>Sign In</p>
                            <span>Account & Lists</span>
                        </a>
                        <a href="/orders">
                            <p>returns</p>
                            <span>& Orders</span>
                        </a>
                        <a href="/cart" className={classes.cart}>
                        <BiCart size={35} />
                        <span>0</span>
                        </a>
                    </div>
                </div>
            </section>
            <LowerHeader/>
        </>
    )
}

export default Header;