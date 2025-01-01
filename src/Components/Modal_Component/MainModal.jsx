import React from 'react';
import '../Modal_Component/MainModal.css';
import Header from '../Header_Component/Header';
import card1 from '../Portfolio_Cards_Component/card1.png';
import card2 from '../Portfolio_Cards_Component/card2.png';
import card3 from '../Portfolio_Cards_Component/card3.png';
import card4 from '../Portfolio_Cards_Component/card4.png';
import card5 from '../Portfolio_Cards_Component/card5.png';
import card6 from '../Portfolio_Cards_Component/card6.png';

function getCardContent(modalNumber) {
    switch (modalNumber) {
        case 1:
            return (
                <>
                    <Header sectionName="LOG CABIN" />
                    <img src={card1} alt="" className="d-block mx-auto" />
                    <p className="p-3 p-lg-5 fs-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rem voluptatem, nam veniam expedita iure laborum officia veritatis.
                    </p>
                </>
            );
        case 2:
            return (
                <>
                    <Header sectionName="TASTY CAKE" />
                    <img src={card2} alt="" className="d-block mx-auto" />
                    <p className="p-3 p-lg-5 fs-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rem voluptatem, nam veniam expedita iure laborum officia veritatis.
                    </p>
                </>
            );
        case 3:
            return (
                <>
                    <Header sectionName="CIRCUS TENT" />
                    <img src={card3} alt="" className="d-block mx-auto" />
                    <p className="p-3 p-lg-5 fs-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rem voluptatem, nam veniam expedita iure laborum officia veritatis.
                    </p>
                </>
            );
        case 4:
            return (
                <>
                    <Header sectionName="CONTROLER" />
                    <img src={card4} alt="" className="d-block mx-auto" />
                    <p className="p-3 p-lg-5 fs-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rem voluptatem, nam veniam expedita iure laborum officia veritatis.
                    </p>
                </>
            );
        case 5:
            return (
                <>
                    <Header sectionName="LOCKED SAFE" />
                    <img src={card5} alt="" className="d-block mx-auto" />
                    <p className="p-3 p-lg-5 fs-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rem voluptatem, nam veniam expedita iure laborum officia veritatis.
                    </p>
                </>
            );
        case 6:
            return (
                <>
                    <Header sectionName="SUBMARINE" />
                    <img src={card6} alt="" className="d-block mx-auto" />
                    <p className="p-3 p-lg-5 fs-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse rem voluptatem, nam veniam expedita iure laborum officia veritatis.
                    </p>
                </>
            );
        default:
            return null;
    }
}

export default function MainModal({ modalNumber }) {
    function hideModal() {
        let mainModal = document.querySelector('#mainModal');
        let mainModalContent = document.querySelector('#mainModal .content');
        document.body.classList.remove("overflow-hidden")
        mainModalContent.classList.add('hide');
        mainModal.classList.add('hide');
    }

    return (
        <section id="mainModal" className="hide position-fixed top-0 vh-100 w-100 overflow-auto start-0">
            <div className="container py-5">
                <div className="content bg-white py-5 mx-auto position-relative">
                    <i onClick={hideModal} className="close_btn fa-solid fa-x fs-1 position-absolute end-0 top-0 m-3"></i>
                    {getCardContent(modalNumber)}
                </div>
            </div>
        </section>
    );
}