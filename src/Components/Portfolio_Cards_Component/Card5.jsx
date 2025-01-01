import React from 'react'
import { showModal } from '../Modal_Component/ShowModal';
import MainCard from './MainCard';
import card5 from '../Portfolio_Cards_Component/card5.png';

export default function Card5({ sendValueToPortfolioCards }) {

    function sendModalNumber() {
        sendValueToPortfolioCards(5);
    }

    function displayModal() {
        showModal();
        sendModalNumber();
    }

    return (<>
        <div onClick={displayModal} className='col-lg-6 col-xl-4 h-100 position-relative'>
            {<MainCard card={card5}/>}
        </div>
    </>
    )
}