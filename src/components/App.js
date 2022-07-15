import Menu from './Menu';
import Conteudo from './Conteudo';
import MenuInferiorMobile from './MenuInferiorMobile';

export default function App() {
    return (
        <div class='root'>
            <Menu />
            <Conteudo />

            <div class="borda-menu inferior"></div>
            
            <MenuInferiorMobile />
        </div>
    );
}