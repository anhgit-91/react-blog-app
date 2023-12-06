import {
    FooterContainer,
    Polygon,
    FooterLine,
    FooterLinks,
} from "./footer.styled";
import { Container } from "../../styles/index";

const Footer = () => {
    return (
        <Polygon>
            <Container>
                <FooterContainer>
                    <FooterLine></FooterLine>
                    <p>
                        This site contains affiliate links to products. We may
                        receive a commission for purchases made through these
                        links. However, this does not impact our reviews and
                        comparisons. We only suggest products we’ve reviewed,
                        and in many instances also use, in order to help you
                        make the best choices.
                    </p>
                    <p>COPYRIGHT © 2006–2023 COPYBLOGGER MEDIA LLC</p>
                    <div>
                        <FooterLinks>
                            <li>customer support</li>
                            <li>comment policy</li>
                            <li>privacy policy</li>
                            <li>cookie policy</li>
                            <li>refund policy</li>
                            <li>terms</li>
                        </FooterLinks>
                    </div>
                </FooterContainer>
            </Container>
        </Polygon>
    );
};
export default Footer;
