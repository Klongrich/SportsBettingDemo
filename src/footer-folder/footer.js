import React from 'react'
import styled from 'styled-components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">
                        <Icon className="fab fa-ethereum"></Icon>
                        <Icon className="fab fa-bitcoin"></Icon>
                    </Footer.Link>
                    <Footer.Link href="#">Mission</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Provide Liquidity</Footer.Link>
                    <Footer.Link href="#">House/Player</Footer.Link>
                    <Footer.Link href="#">Uniswap Token</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#"><strike>United States</strike></Footer.Link>
                    <Footer.Link href="#">Europe</Footer.Link>
                    <Footer.Link href="#">China</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-github" />Github</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

function Icons({className}) {
    return <Icon className={className} />
}

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

const Icon = styled.i`
    font-size: 18px;
    margin-right: 16px;
`

const Container = styled.div`
  padding: 3% 1% 1% 1%;
  background: radial-gradient(circle, rgba(42,42,42,1) 0%, rgba(100,100,100,1) 100%);

  @media (max-width: 1000px) {
    padding: 3% 1% 1% 1%;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 95%;
    margin: 0 auto;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Link = styled.a`
  color: #fff;
  margin-bottom: 5%;
  font-size: 15px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

const Title = styled.p`
  font-size: 25px;
  color: #fff;
  margin-bottom: 15%;
  font-weight: bold;
`;