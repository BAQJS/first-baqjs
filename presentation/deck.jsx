import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  baqLogo: require("./logo.jpeg"),
  me: require("./me.jpg"),
  areaDos: require("./areadoslogo.png"),
  koombea: require("./logoKoombea.jpeg"),
  popular: require("./popular.png"),
  npm: require("./npm.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            BAQ.JS
          </Heading>
          <Heading size={1} fit caps margin="20px 0px 0">
            All the things Javascript
          </Heading>
          <Heading size={2} fit caps textColor="black">
            La comunidad barranquillera de Javascript
          </Heading>
          <Link href="https://github.com/BAQJS">
            <Text bold caps textColor="tertiary">Github: BAQJS</Text>
          </Link>

          <Link href="https://twitter.com/BAQJS">
            <Text bold caps textColor="tertiary">Twitter: @BAQ_JS</Text>
          </Link>

        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.me.replace('/','')} margin="0px auto 40px" height="200px"/>
          <Heading size={6} fit textColor="primary">
            Richard Roncancio
          </Heading>
          <Link href="https://twitter.com/Sr_batusai">
            <Text textColor="tertiary">Twitter: @Sr_batusai</Text>
          </Link>
          <Text textColor="tertiary">
            Front End Developer @ Koombea
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading caps fit margin="0 0 40px" textColor="black">Este Evento es traido a ustedes gracias a:</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="black" margin={10}>
                Koombea
              </Heading>
              <Image src={images.koombea.replace('/','')} margin="0px auto 40px" height="300px"/>
              <Text bold textColor="black">Refrigerios</Text>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="black" margin={10}>
                AreaDos
              </Heading>
              <Image src={images.areaDos.replace('/','')} margin="0px auto 40px" height="300px"/>
              <Text bold textColor="black">Lugar</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} caps fit textColor="primary">
            Porque javascript?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="#3b3b3b">
          <Heading size={6} caps fit textColor="white">
            Uno de los lenguajes mas usados en la actualidad
          </Heading>
          <Appear fid="1">
            <Image src={images.popular.replace('/','')} height="750px"/>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading size={6} caps fit textColor="black">
            Respositorio de Paquetes mas grande, NPM
          </Heading>
          <Appear fid="1">
            <Image src={images.npm.replace('/','')} height="750px"/>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Universal
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Browser</Appear></ListItem>
            <ListItem><Appear fid="2">Server side</Appear></ListItem>
            <ListItem><Appear fid="3">Bots (Skynet?)</Appear></ListItem>
            <ListItem><Appear fid="4">Desktop Apps</Appear></ListItem>
            <ListItem><Appear fid="5">Mobile Apps</Appear></ListItem>
            <ListItem><Appear fid="6">...</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Hace parte integral del
          </Heading>
          <Appear fid="1">
          <Heading size={1} fit caps margin="20px 0px 0">
            Web Platform
          </Heading>
          </Appear>
        </Slide>


        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps textColor="black">
            Esta en constante evolucion:
          </Heading>
          <Appear fid="1">
          <Heading size={4} color="white" fit caps margin="20px 0px 0">
            ES6, ES7
          </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>El lenguaje de programacion Menos comprendido del mundo</Quote>
            <Cite>Douglas Crockford</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
