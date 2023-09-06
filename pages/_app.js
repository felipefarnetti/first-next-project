import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/Container/Container";

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
