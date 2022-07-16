function BarraTopoLogo(){
    return (
        <div class="logo">
            <a class="icon-logo" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <ion-icon class="icon-logo" name="logo-instagram"></ion-icon>
            </a>

            <div class="linha-vertical"></div>

            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="./img/logo.png" alt="instagram"/>
            </a>
        </div>
    );
}

function BarraTopoIcons(){
    let iconsName = ["paper-plane-outline","compass-outline",
        "heart-outline","person-outline"
    ];

    return (
        <div class="icons">
            {iconsName.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    );
}

function BarraTopo(){
    return (
        <div class="barra-topo">
                <BarraTopoLogo />

                <input class="pesquisar" placeholder="Pesquisar"/>

                <BarraTopoIcons />
        </div>
    );
}

function BarraTopoMobile() {
    return (
        <div class="barra-topo-mobile">
            <ion-icon class="icon-logo" name="logo-instagram"></ion-icon>
            <img src="./img/logo.png" alt="instagram"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}

export default function Menu() {
    return (
        <div class="menu">
            <BarraTopo />
            <BarraTopoMobile />

            <div class="borda-menu"></div>
        </div>
    );
}