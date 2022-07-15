function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} alt={props.alt}/>
            <div class="txt">
                <p><b>{props.nomeUsuario}</b></p>
                <p>{props.nome}</p>
            </div>
        </div>
    );
}

function PerfisRecomendados() {
    return ([
        {nome:"bad.vibes.memes",
         img:"./img/sidebar/badvibesmemes 1.svg",
         status:"Segue você"
        },
        {nome:"chibirdart",
         img:"./img/sidebar/chibirdart 1.svg",
         status:"Segue você"
        },
        {nome:"razoesparaacreditar",
         img:"./img/sidebar/razoesparaacreditar 1.svg",
         status:"Novo no Instagram"
        },
        {nome:"adorableanimals",
         img:"./img/post/adorableanimals 2.svg",
         status:"Segue você"
        },
        {nome:"smallcutecats",
         img:"./img/sidebar/smallcutecats 1.svg",
         status:"Segue você"
        }
    ]);
}

function Sugestoes() {
    let canais = PerfisRecomendados();

    return (
        <div class="sugestoes">
            <div class="parte-1">
                <p>Sugestões para você</p>
                <h1>Ver tudo</h1>
            </div>

            <div class="canais">
                {canais.map(canal => 
                    <div>
                        <div class="canal">
                            <img src={canal.img} alt={canal.nome}/>
                            <div>
                                <p>{canal.nome}</p>
                                <h2>{canal.status}</h2>
                            </div>
                        </div>
                        <p>Seguir</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function TextoInferior() {
    return (
        <div class="txt-final">
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}

export default function Sidebar() {

    return (
        <div class="sidebar">

            <Usuario
                nome="Catana" 
                nomeUsuario="catanacomics"
                img="./img/catanacomics 1.svg" 
                alt="usuario/catanacomics"
            />

            <Sugestoes />

            <TextoInferior />
        </div>
    );
}