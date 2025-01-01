import React from 'react'
import { showModal } from '../Modal_Component/ShowModal';
import MainCard from './MainCard';
import card4 from '../Portfolio_Cards_Component/card4.png';

export default function Card4({ sendValueToPortfolioCards }) {

    function sendModalNumber() {
        sendValueToPortfolioCards(4);
    }

    function displayModal() {
        showModal();
        sendModalNumber();
    }

    return (<>
        <div onClick={displayModal} className='col-lg-6 col-xl-4 h-100 position-relative'>
            {<MainCard card={card4}/>}
        </div>
    </>
    )
}