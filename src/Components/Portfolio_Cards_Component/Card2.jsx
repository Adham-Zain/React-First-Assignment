import React from 'react'
import { showModal } from '../Modal_Component/ShowModal';
import MainCard from './MainCard';
import card2 from '../Portfolio_Cards_Component/card2.png';

export default function Card2({ sendValueToPortfolioCards }) {

    function sendModalNumber() {
        sendValueToPortfolioCards(2);
    }

    function displayModal() {
        showModal();
        sendModalNumber();
    }

    return (<>
        <div onClick={displayModal} className='col-lg-6 col-xl-4 h-100 position-relative'>
            {<MainCard card={card2}/>}
        </div>
    </>
    )
}