import React from "react";

export default function MenuInferiorMobile() {
    const [secaoHidden, setSecaoHidden] = React.useState('secaoHidden');

    const iconsName = ["search-outline","add-circle-outline",
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
        <div className="barra-inferior">
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