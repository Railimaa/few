import OrdersBoard from '../OrdersBoard';
import { Container } from './style';
import { Order } from '../../types/Order';

const orders: Order[] = [
    {
        '_id': '64de22acc86ec3328202894b',
        'table': '3',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos ',
                    'imagePath': '1692126097852-1681170769655-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 1,
                '_id': '64de22acc86ec3328202894c'
            },
            {
                'product': {
                    'name': 'Coca Cola ',
                    'imagePath': '1692142319616-1681172209875-coca-cola.png',
                    'price': 16,
                },
                'quantity': 1,
                '_id': '64de22acc86ec3328202894d'
            }
        ],
    },
];

export default function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon='⏱'
                title='Fila de espera'
                orders={orders}
            />
            <OrdersBoard
                icon='👨‍🍳'
                title='Em preparação'
                orders={[]}
            />
            <OrdersBoard
                icon='✅'
                title='Pronto'
                orders={[]}
            />
        </Container>
    );
}
