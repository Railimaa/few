import { useEffect } from 'react';
import close from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrent } from '../../utils/formatCurrent';


import { Actions, Container, ModalBody, OrderDetails } from './style';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  OnClose: () => void;
}

export default function OrderModal({ visible, order, OnClose} : OrderModalProps) {

    if (!visible || !order) {
        return null;
    }

    const total = order.products.reduce((total, { product, quantity }) => {
        return total += (product.price * quantity);
    }, 0);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                OnClose();
            }
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [OnClose]);


    return (
        <Container>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type='button' onClick={OnClose}>
                        <img src={close} alt="" />
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '⏱'}
                            {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </span>
                        <strong>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto!'}
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>

                    <div className="order-itens">
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img
                                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                                    alt=""
                                    width="56"
                                    height="28.51"
                                />

                                <span className='quantity'>{quantity}x</span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrent(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrent(total)}</strong>
                    </div>
                </OrderDetails>

                <Actions>
                    <button type='button' className='primary'>
                        <span>👨‍🍳</span>
                        <strong>Iniciar produção</strong>
                    </button>

                    <button type='button' className='secondary'>
                        Cancelar pedido
                    </button>
                </Actions>

            </ModalBody>

        </Container>
    );
}
