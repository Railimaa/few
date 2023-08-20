import { useState } from 'react';
import { Order } from '../../types/Order';
import OrderModal from '../OrderModal';
import { Board, OrderContainer } from './style';

interface OrderBoardProps{
  icon: string,
  title: string,
  orders: Order[]
}

export default function OrdersBoard({ icon, title, orders} : OrderBoardProps) {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);



    function handleOpenModal(order: Order) {
        setModalIsVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setModalIsVisible(false);
        setSelectedOrder(null);
    }

    return (
        <Board>
            <OrderModal
                visible={modalIsVisible}
                order={selectedOrder}
                OnClose={handleCloseModal}
            />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrderContainer>
                    {orders.map((order) => (
                        <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span> itens</span>
                        </button>
                    ))}
                </OrderContainer>
            )}
        </Board>
    );
}
