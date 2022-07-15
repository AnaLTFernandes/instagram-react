function Storie(props) {
    return (
        <div>
            <img class="fundo" src="./img/stories/stories_background.jpg" />
            <img class="foto-perfil" src={props.image} alt={props.alt} />
            <p>{props.nome}</p>
        </div>
    );
}

export default function Stories() {
    let arrayCanais = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet',
         'wawawiwacomicsa', 'respondeai', 'filomoderna', 'memeriagourmet'
    ];

    return (
        <div class="caixa-stories">
            {arrayCanais.map(canal => 
                <Storie 
                    image={"./img/stories/" + canal + " 1.svg"} 
                    alt={canal} 
                    nome={canal}/>
            )}
                
            <ion-icon class="icone" name="chevron-forward-circle"></ion-icon>
        </div>
    );
}