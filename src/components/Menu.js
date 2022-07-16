import React from "react";

function BarraTopoLogo(){
    return (
        <div className="logo">
            <a className="icon-logo" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <ion-icon class="icon-logo" name="logo-instagram"></ion-icon>
            </a>

            <div className="linha-vertical"></div>

            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="./img/logo.png" alt="instagram"/>
            </a>
        </div>
    );
}

function BarraTopoIcons(){
    const [secaoHidden, setSecaoHidden] = React.useState('secaoHidden');

    const iconsName = ["paper-plane-outline","compass-outline",
        "heart-outline","person-outline"
    ];

    function toggleSecaoEmConstrucao(acao) {
        if (secaoHidden === '' && acao === 'retirar') {
            setSecaoHidden('secaoHidden');
            
        } else if(secaoHidden === 'secaoHidden' && acao !== 'retirar') {
            setSecaoHidden('');
        }
    }

    return (
        <div className="icons">
            <ion-icon name="home" onClick={() => {toggleSecaoEmConstrucao("retirar")}}></ion-icon>
            
            {iconsName.map(icon =>
                <ion-icon name={icon} onClick={toggleSecaoEmConstrucao}></ion-icon>
            )}
            
            <div className={"secaoEmConstrucao " + secaoHidden}>
                <img alt="Em construção" src="https://img.freepik.com/vetores-premium/sob-barreira-de-construcao-para-desenho-de-estrada_374761-148.jpg"/>
                <p>Lamentamos muito, seção ainda em construção.</p>
            </div>
        </div>
    );
}

function BarraTopo(){
    return (
        <div className="barra-topo">
                <BarraTopoLogo />

                <input className="pesquisar" placeholder="Pesquisar"/>

                <BarraTopoIcons />
        </div>
    );
}

function BarraTopoMobile() {
    return (
        <div className="barra-topo-mobile">
            <ion-icon class="icon-logo" name="logo-instagram"></ion-icon>
            <img src="./img/logo.png" alt="instagram"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}

export default function Menu() {
    return (
        <div className="menu">
            <BarraTopo />
            <BarraTopoMobile />

            <div className="borda-menu"></div>
        </div>
    );
}