
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import Orders from '../Orders';

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Header />
            <Orders />
        </ThemeProvider>
    );
}

