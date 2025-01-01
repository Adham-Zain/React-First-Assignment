import React from 'react'
import { showModal } from '../Modal_Component/ShowModal';
import MainCard from './MainCard';
import card6 from '../Portfolio_Cards_Component/card6.png';

export default function Card6({ sendValueToPortfolioCards }) {

    function sendModalNumber() {
        sendValueToPortfolioCards(6);
    }

    function displayModal() {
        showModal();
        sendModalNumber();
    }

    return (<>
        <div onClick={displayModal} className='col-lg-6 col-xl-4 h-100 position-relative'>
            {<MainCard card={card6}/>}
        </div>
    </>
    )
}