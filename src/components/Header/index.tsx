import { Container, Content } from './style';

import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>

            <Content>
                <div className="page-details">
                    <h1>Pedidos</h1>
                    <h3>Acompanhe pedidos dos clientes</h3>
                </div>

                <img src={logo} alt="" />
            </Content>

        </Container>
    );
}
