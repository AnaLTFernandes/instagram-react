function Postagens() {
    return ([
        {nome:"meowed",
         imagem:"./img/stories/meowed 1.svg",
         instagram:"https://www.instagram.com/meowed/",
         postagemIMG:"./img/post/gato-telefone 1.svg",
         altPostagem:"gato",
         visualizacaoIMG: "./img/stories/respondeai 1.svg",
         visualizacaoCanal:"respondeai",
         visualizacaoNumero: "101.523"
        },
        {nome:"barked",
         imagem:"./img/stories/barked 1.svg",
         instagram:"https://www.instagram.com/barked/",
         postagemIMG:"./img/post/dog 1.svg",
         altPostagem:"doguinho",
         visualizacaoIMG:"./img/post/adorableanimals 2.svg",
         visualizacaoCanal:"adorable_animals",
         visualizacaoNumero: "99.159"
        },
        {nome:"meowed",
         imagem:"./img/stories/meowed 1.svg",
         instagram:"https://www.instagram.com/meowed/",
         postagemVideo:"./video/video.mp4",
         visualizacaoIMG:"./img/stories/respondeai 1.svg",
         visualizacaoCanal:"respondeai",
         visualizacaoNumero: "31.890"
        },
        {nome:"meowed",
         imagem:"./img/stories/meowed 1.svg",
         instagram:"https://www.instagram.com/meowed/",
         postagemIMG:"./img/post/gato 3.jpg",
         altPostagem:"gato",
         visualizacaoIMG:"./img/stories/9gag 1.svg",
         visualizacaoCanal:"9gag",
         visualizacaoNumero: "83.721"
        }
    ]);
}

function PostTopo(props) {
    return (
        <div class="topo">
            <div class="canal">
                <img src={props.imagem} alt={props.alt}/>
                
                <a href={props.link} target="_blank" rel="noreferrer">
                    <p>{props.nome}</p>
                </a>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    );
}

function PostIcones() {
    return (
        <div class="icones-post">
            <div>
                <ion-icon class="heart" name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon class="icon bookmark" name="bookmark-outline"></ion-icon>
        </div>
    );
}

function PostVisualizacao(props) {
    return (
        <div class="visualizacao">
            <img src={props.imagem} alt={props.canal}/>
            <p>Curtido por <b>{props.canal}</b> e <b>outras {props.quantidade} pessoas</b></p>
        </div>
    );
}

export default function Posts() {
    let arrayPost = Postagens();

    return (
        <div class="coluna-posts">
            {arrayPost.map(canal =>
                <div class="post">
                    <PostTopo 
                        imagem={canal.imagem} 
                        alt={canal.nome} 
                        nome={canal.nome} 
                        link={canal.instagram}
                    />
                    
                    {(canal.postagemIMG !== undefined) 
                        ? <img src={canal.postagemIMG} alt={canal.altPostagem}/>
                        : <video src={canal.postagemVideo} controls="controls"/>
                    }

                    <PostIcones />

                    <PostVisualizacao 
                        imagem={canal.visualizacaoIMG}
                        canal={canal.visualizacaoCanal} 
                        quantidade={canal.visualizacaoNumero}
                    />
                </div>
            )}
        </div>
    );
}