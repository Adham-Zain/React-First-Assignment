import React, { useState } from 'react';
import './cards.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import MainModal from '../Modal_Component/MainModal';

export default function PortfolioCards() {
    
    const [modalNum, setModalNum] = useState(1);

    function handleValue(value) {
        setModalNum(value);
    }

    return (<>

        <div className='row row-gap-4 mt-5'>
            <Card1 sendValueToPortfolioCards={handleValue} />
            <Card2 sendValueToPortfolioCards={handleValue} />
            <Card3 sendValueToPortfolioCards={handleValue} />
            <Card4 sendValueToPortfolioCards={handleValue} />
            <Card5 sendValueToPortfolioCards={handleValue} />
            <Card6 sendValueToPortfolioCards={handleValue} />
        </div>

        <MainModal modalNumber={modalNum} />
    </>

    );
}
