import React from 'react';
import {Container} from "react-bootstrap";
import crypto from './crypto.jpg'
import styled from "styled-components";

const Styles = styled.div `
.jumbo {
  background: url(${crypto}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  position: relative;
  z-index: -2;
  margin-bottom: 2rem;
  border-radius: 20px;
}
  
  .overlay {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 20px;
  }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <div className='jumbo'>
                <div className='overlay'></div>
                    <Container>
                        <h2>Crypto is future </h2>
                        <p>
                            A cryptocurrency, crypto-currency, or crypto is a digital currency
                            designed to work as a medium of exchange through a computer network
                            that is not reliant on any central authority, such as a government or
                            bank, to uphold or maintain it. It is a decentralized system for verifying
                            that the parties to a transaction have the money they claim to have,
                            eliminating the need for traditional intermediaries, such as banks, when
                            funds are being transferred between two entities.
                            Individual coin ownership records are stored in a digital ledger,
                            which is a computerized database using strong cryptography to secure
                            ransaction records, to control the creation of additional coins, and to
                            verify the transfer of coin ownership. Despite their name, cryptocurrencies
                            are not considered to be currencies in the traditional sense and while
                            varying treatments have been applied to them, including classification as
                            commodities, securities, as well as currencies, cryptocurrencies are
                            generally viewed as a distinct asset class in practice. Some crypto schemes
                            use validators to maintain the cryptocurrency. In a proof-of-stake model,
                            owners put up their tokens as collateral. In return, they get authority
                            over the token in proportion to the amount they stake. Generally, these token
                            stakers get additional ownership in the token over time via network fees,
                            newly minted tokens or other such reward mechanisms.
                        </p>
                    </Container>
            </div>
        </Styles>
    );
};

export default Jumbotron;