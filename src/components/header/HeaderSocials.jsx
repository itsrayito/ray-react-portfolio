import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/itsrayito" target="_blank">
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/rayitoaguirre" target="_blank">
                <BsLinkedin />
            </a>
        </div>
    );
};

export default HeaderSocials;