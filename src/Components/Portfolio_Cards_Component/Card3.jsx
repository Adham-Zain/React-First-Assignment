import React from 'react'
import { showModal } from '../Modal_Component/ShowModal';
import MainCard from './MainCard';
import card3 from '../Portfolio_Cards_Component/card3.png';

export default function Card3({ sendValueToPortfolioCards }) {

    function sendModalNumber() {
        sendValueToPortfolioCards(3);
    }

    function displayModal() {
        showModal();
        sendModalNumber();
    }

    return (<>
        <div onClick={displayModal} className='col-lg-6 col-xl-4 h-100 position-relative'>
            {<MainCard card={card3}/>}
        </div>
    </>
    )
}