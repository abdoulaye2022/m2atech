import React, { useEffect, useState } from "react";
import {
  Container,
  Menu,
  Segment,
  Header,
  Button,
  Grid,
  Image,
} from "semantic-ui-react";
import { TypeAnimation } from 'react-type-animation';

export const HeaderApp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <>
      <Menu fixed="top" inverted={!scrolled}>
        <Container>
          <Menu.Item as="a" header>
            M2acode
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              as="a"
              name="home"
              active={activeItem === "home"}
              onClick={() => handleItemClick("home")}
            >
              Accueil
            </Menu.Item>
            <Menu.Item
              as="a"
              name="blog"
              active={activeItem === "blog"}
              onClick={() => handleItemClick("blog")}
            >
              Blogs
            </Menu.Item>
            <Menu.Item
              as="a"
              name="contact"
              active={activeItem === "contact"}
              onClick={() => handleItemClick("contact")}
            >
              Contact
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <Segment
        inverted
        vertical
        textAlign="center"
        style={{ minHeight: "50vh", padding: "3em 0em" }}
      >
        <Container text>
          <Header
            as="h1"
            content={
              <TypeAnimation
                sequence={[
                  "Bienvenue sur le Site M2acode",
                  1000,
                  "Bienvenue sur le Site M2acode",
                  1000,
                  "Bienvenue sur le Site M2acode",
                  1000,
                  "Bienvenue sur le Site M2acode",
                  1000,
                  "Bienvenue sur le Site M2acode",
                  1000,
                ]}
                speed={50}
                //style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            }
            inverted
            style={{
              fontSize: "2.5em",
              fontWeight: "normal",
              marginBottom: "0.5em",
            }}
          />
          <Header
            as="h2"
            content="Développeur Passionné | Créateur de Solutions Innovantes"
            inverted
            style={{
              fontSize: "1.5em",
              fontWeight: "normal",
              marginBottom: "1.5em",
            }}
          />
          <p>
            Bonjour, je suis Abdoulaye Mohamed Ahmed, un développeur passionné
            par la création de solutions innovantes. Explorez mon travail,
            découvrez mes compétences et n'hésitez pas à me contacter pour
            discuter de vos projets.
          </p>
          <Button primary size="huge">
            Voir Mon Travail
          </Button>
        </Container>
      </Segment>
    </>
  );
};
