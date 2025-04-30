import React from "react";
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
const About=()=>{
    return(
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The Only thing we srious about is food</p>
                    </div>
                    <p className="mid">
                        At <strong>AFC Food</strong>, we believe that food brings people together in the most magical way. Our passion for creating delicious, fresh, and memorable dishes drives everything we do. From handpicking the finest ingredients to crafting flavors that feel like home, we are committed to delivering meals that not only satisfy your hunger but also warm your heart. Whether you're sharing a quick bite with friends or sitting down for a family feast, we’re here to make every moment special with food that’s made with love, care, and a touch of creativity.
                    </p>

                    <Link to={"/"}>Explore Menu<span>
                        <HiOutlineArrowNarrowRight/>
                        </span></Link>
                </div>
                <div className="banner">
                    <img src="about.png" alt="about" />
                </div>
            </div>

        </section>
    )
}

export default About;