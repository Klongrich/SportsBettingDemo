import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

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