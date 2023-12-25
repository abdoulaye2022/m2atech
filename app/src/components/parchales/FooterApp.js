import React from "react";
import {
    Container,
    Icon,
    Segment,
    Header,
    List,
    Grid,
    Input,
  } from "semantic-ui-react";

export const FooterApp = () => {
  return (
    <>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              {/* Logo Block */}
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Mon Logo" />
                {/* Ajoutez votre logo ici */}
              </Grid.Column>

              {/* Newsletters Blocks */}
              <Grid.Column width={6}>
                <Header
                  inverted
                  as="h4"
                  content="Abonnez-vous à notre newsletter"
                />
                <p>
                  Recevez les dernières mises à jour directement dans votre
                  boîte de réception.
                </p>
                <Input action="S" placeholder="Votre adresse e-mail" />
              </Grid.Column>

              {/* Social Media Links Block */}
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Suivez-nous" />
                <List link inverted>
                  <List.Item as="a">
                    <Icon name="twitter" />
                    Twitter
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="facebook" />
                    Facebook
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="linkedin" />
                    LinkedIn
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="instagram" />
                    Instagram
                  </List.Item>
                </List>
              </Grid.Column>

              {/* Privacy Policy Block */}
              <Grid.Column width={3}>
                <Header
                  inverted
                  as="h4"
                  content="Politique de confidentialité"
                />
                <List link inverted>
                  <List.Item as="a">Conditions d'utilisation</List.Item>
                  <List.Item as="a">Politique de confidentialité</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* Bottom Section */}
          <Segment inverted vertical>
            <Container textAlign="center">
              <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
            </Container>
          </Segment>
        </Container>
      </Segment>
    </>
  );
};
