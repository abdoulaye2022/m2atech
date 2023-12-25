import React from "react";
import {
  Image,
  Grid,
  Segment,
  Container,
  Header,
  Card,
  Progress,
  Item,
  Form,
  Button,
} from "semantic-ui-react";
import { useSpring, animated, config } from "react-spring";

const Home = () => {
  const appsData = [
    {
      id: 1,
      name: "Application 1",
      description: "Description de l'application 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Application 2",
      description: "Description de l'application 2.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Application 3",
      description: "Description de l'application 3.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const skillsData = [
    { name: "PHP", level: 90 },
    { name: "React.js", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
  ];

  const experienceData = [
    {
      id: 1,
      jobTitle: "Développeur Web Senior",
      company: "Entreprise ABC",
      location: "Ville, Pays",
      startDate: "Janvier 2018",
      endDate: "Présent",
      description:
        "Responsable du développement et de la maintenance des applications web.",
      imageSrc: "https://via.placeholder.com/150", // Remplacez cela par le chemin de votre image
    },
    {
      id: 2,
      jobTitle: "Développeur Front-End",
      company: "Société XYZ",
      location: "Ville, Pays",
      startDate: "Mars 2015",
      endDate: "Décembre 2017",
      description:
        "Conception et implémentation d'interfaces utilisateur pour divers projets web.",
      imageSrc: "https://via.placeholder.com/150", // Remplacez cela par le chemin de votre image
    },
    // Ajoutez d'autres expériences professionnelles au besoin
  ];

  const slideIn = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    config: config.wobbly,
  });

  return (
    <>
      <Segment vertical>
        <Container>
          <Header as="h2" textAlign="center">
            À Propos de Moi
          </Header>
          <Grid stackable centered>
            <Grid.Row columns={2}>
              <Grid.Column width={6} textAlign="center">
                <Image src="/images/photo.png" size="medium" circular />
              </Grid.Column>
              <Grid.Column width={10}>
                <br />
                <br />
                <br />
                <p>
                  Bonjour, je suis Abdoulaye, un passionné de l'information
                  (Developement des systems informatique).
                </p>
                <p>
                  Je suis déterminé à contribuer au développement des systèmes
                  informatiques, et je possède une vaste expérience dans ce
                  domaine. Mon approche consiste à identifier les problèmes des
                  systèmes informatiques et à trouver des solutions.
                </p>
                <p>
                  N'hésitez pas à me contacter si vous avez des questions ou si
                  vous souhaitez discuter de collaborations potentielles.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical>
        <Container>
          <Header as="h2" textAlign="center">
            Mes Compétences
          </Header>
          <Grid columns={2} centered stackable>
            <Grid.Row>
              <Grid.Column>
                {skillsData.map((skill, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <Header as="h3">{skill.name}</Header>
                    <Progress percent={skill.level} color="teal" progress />
                  </div>
                ))}
              </Grid.Column>
              <Grid.Column verticalAlign="middle" textAlign="center">
                <Image src="/images/dev2.png" size="medium" circular style={{marginLeft: 50}}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical>
        <Container>
          <animated.div style={slideIn}>
            <Header as="h2" textAlign="center">
              Mes Expériences Professionnelles
            </Header>
          </animated.div>
          <Item.Group divided>
            {experienceData.map((experience) => (
              <animated.div key={experience.id} style={slideIn}>
                <Item>
                  <Item.Image size="tiny" src={experience.imageSrc} />
                  <Item.Content>
                    <Item.Header>{experience.jobTitle}</Item.Header>
                    <Item.Meta>
                      <span>
                        {experience.company} - {experience.location}
                      </span>
                      <br />
                      <span>
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </Item.Meta>
                    <Item.Description>
                      {experience.description}
                    </Item.Description>
                  </Item.Content>
                </Item>
              </animated.div>
            ))}
          </Item.Group>
        </Container>
      </Segment>
      <Segment vertical>
        <Container>
          <Header as="h2" textAlign="center">
            Nos Applications
          </Header>
          <Grid stackable columns={3}>
            <Grid.Row>
              {appsData.map((app) => (
                <Grid.Column key={app.id}>
                  {/* Card for Each App */}
                  <Card>
                    <Image src={app.imageUrl} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{app.name}</Card.Header>
                      <Card.Description>{app.description}</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical>
        <Container>
          <Header as="h2" textAlign="center">
            Contactez-moi
          </Header>
          <Form>
            <Form.Field>
              <label>Nom</label>
              <input placeholder="Votre nom" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Votre adresse email" />
            </Form.Field>
            <Form.TextArea
              label="Message"
              placeholder="Écrivez votre message..."
            />
            <Button primary type="submit" style={{ width: "100%" }}>
              Envoyer
            </Button>
          </Form>
        </Container>
      </Segment>
    </>
  );
};

export default Home;
