import React, { Component, useContext, useState } from 'react'
import { ContentApp } from "../../style/index";
import { MdClose } from 'react-icons/md'
import bonus from '../../assets/img/main/Group.png'
import delivery from '../../assets/img/main/delivery.png'
import Basket2 from "./Basket2";
import image from '../../assets/img/main/image.png'
import { Context } from '../../store/context';
import { remove } from 'lodash';
import { Link } from 'react-router-dom';

export default function Basket() {
    const [count, setCount] = useState(1)
    const [context, setContext] = useContext(Context);
    const [isShow, setIsShow] = useState(false);
    const modalHandler = () => {
        setIsShow(!isShow)
    }
    const filterHandler = (id) => {
        const result = context.filter(item => item.id !== id)
        setContext(result)
    }

    return (
        <ContentApp>
            {isShow ? <Basket2
            /> : <div><article>
                <div className='basket'>
                    <div className='box'>
                        <h3>Корзина</h3>
                    </div>
                    {context.map(item => (
                        <div className='box'>
                            <MdClose onClick={() => filterHandler(item.id)} />
                            <img src={item.img} alt='' />
                            <Link to={{
                                pathname: '/cart',
                                id: item.id
                            }} style={{ textDecoration: 'none', color: 'black' }}>{item.title}</Link>
                            <div className='button'>
                                <p onClick={() => setCount(count - 1)} style={{ cursor: 'pointer' }}>-</p>
                                <p>{count}</p>
                                <p onClick={() => setCount(count + 1)} style={{ cursor: 'pointer' }}>+</p>
                            </div>
                            <strong>{count * item.price} ₽</strong>
                        </div>
                    ))}
                </div>
                <div className='sell'>
                    <strong style={{ marginLeft: '5%', marginBottom: '20px' }}>Заказ №47593</strong>
                    <div className='basket__price'>
                        <span>Товаров в корзине</span>
                        <strong>700 ₽</strong>
                    </div>
                    <div className='basket__price'>
                        <span>Промокод</span>
                        <strong>- 100  ₽</strong>
                    </div>
                    <div className='basket__price2'>
                        <span>Итого к оплате</span>
                        <strong>600 ₽</strong>
                    </div>
                    <div className='basket__price'>
                        <button className='basket__button'>Оформить заказ</button>
                    </div>
                </div>

            </article>
                <aside>
                    <div className='basket__rek'>
                        <p style={{ textAlign: 'center' }}>Закажите на 3000 RUB и получите</p>
                        <div className='bonus'>
                            <img src={bonus} alt='' />
                            <p><strong>30 RUB</strong> на бонусный счет</p>
                        </div>
                        <div className='bonus'>
                            <img src={delivery} alt='' />
                            <strong>Бесплатная доставка</strong>
                        </div>
                        <span><strong>1000 </strong>(минимальный заказ)</span>
                        <div className='range'> 0<input type='range' min='1' max='50' value='25' />3000</div>
                        <span>Осталось 1988 RUB до бесплатной доставки</span>
                    </div>
                    <div className='promokod'>
                        <h4>Промокод</h4>
                        <div className='basket__input'>
                            <input type='number' placeholder='Введите промокод' />
                            <button onClick={modalHandler}>Подтвердить</button>
                        </div>
                    </div>
                </aside></div>}

        </ContentApp>
    )
}
