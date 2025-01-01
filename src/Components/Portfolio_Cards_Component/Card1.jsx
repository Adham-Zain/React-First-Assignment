import React from 'react'
import { showModal } from '../Modal_Component/ShowModal';
import MainCard from './MainCard';
import card1 from '../Portfolio_Cards_Component/card1.png';

export default function Card1({ sendValueToPortfolioCards }) {

    function sendModalNumber() {
        sendValueToPortfolioCards(1);
    }

    function displayModal() {
        showModal();
        sendModalNumber();
    }

    return (<>
        <div onClick={displayModal} className='col-lg-6 col-xl-4 h-100 position-relative'>
            {<MainCard card={card1}/>}
        </div>
    </>
    )
}