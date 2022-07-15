import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

export default function Conteudo() {
    return (
        <div class="conteudo">
            <div class="postagens">
                <Stories />
            </div>
        </div>
    );
}