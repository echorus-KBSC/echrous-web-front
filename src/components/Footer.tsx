/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import echorus from '../images/echorus.svg';

const Footer = () => {
    return (
        <footer
            css={css`
                position: absolute;
                bottom: 0px;

                display: flex;
                width: 100vw;
                height: 133px;
            `}
        >
            <img src={echorus} alt="echorus team logo" />

            <span
                css={css`
                    position: absolute;
                    bottom: 48px;
                    right: 45px;
                    display: block;
                    width: 140px;
                    font-size: 14px;
                    line-height: 18px;
                    text-align: center;
                `}
            >
                ©Echorus Team 2022
                <br />
                All rights reserved
            </span>
        </footer>
    );
};

export default Footer;
