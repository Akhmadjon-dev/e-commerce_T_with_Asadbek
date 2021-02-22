import React, { Component } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Deliver } from "../../style";

export default class Oplata extends Component {
    render() {
        return (
            <Deliver>
                <div className='dostavka'>
                    <h1>Оплата</h1>
                    <div className='dostavka__text'>
                        <p>
                            Нашим гостям мы предлагаем жаркую парилку, разогретую до оптимального температурного режима и душистые веники. Благодаря правильному проектированию помещений русской бани в Домодедово, наш легкий пар не жжет кожу и не оставляет после себя головную боль. В банный комплекс входят: русская баня на дровах,  оздоровительные SPA-процедуры, хаммам, бассейн и караоке. Для Вашего удобства в составе нашего комплекса имеется  уютный зал, где Вы можете расслабиться и сделать  заказ из нашего меню. Банный комплексе De’Lore  рассчитан на одновременное посещение 25 человек.
                    </p>
                        <p>
                            Нашим гостям мы предлагаем жаркую парилку, разогретую до оптимального температурного режима и душистые веники. Благодаря правильному проектированию помещений русской бани в Домодедово, наш легкий пар не жжет кожу и не оставляет после себя головную боль. В банный комплекс входят: русская баня на дровах,  оздоровительные SPA-процедуры, хаммам, бассейн и караоке. Для Вашего удобства в составе нашего комплекса имеется  уютный зал, где Вы можете расслабиться и сделать  заказ из нашего меню. Банный комплексе De’Lore  рассчитан на одновременное посещение 25 человек.
                    </p>
                    </div>
                    <div className='dostavka__button'>
                        <button className='katalog'>В каталог</button>
                        <Link className='link' to='/deliver'><div className='oplate'>
                            <p>О доставке</p>
                            <BsArrowRightShort className='arrow' />
                        </div></Link>
                    </div>
                </div>
            </Deliver>
        )
    }
}
