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
  npm: require("./npm.png"),
  fire: require("./fire.gif"),
  lexical1: require("./lexical-scope.jpg"),
  lexical2: require("./lexical-scope-2.jpg")
};

var imagesArray = Object.keys(images).map((key)=> {return images[key];});

preloader(imagesArray);

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
          <Link href="https://github.com/BAQJS">
            <Text bold caps textColor="tertiary">Github: BAQJS</Text>
          </Link>

          <Link href="https://twitter.com/BAQJS">
            <Text bold caps textColor="tertiary">Twitter: @BAQ_JS</Text>
          </Link>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <Image src={images.me.replace('/','')} style={{border: "1px solid white"}} height="250px"/>
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
            <Image src={images.popular.replace('/','')} height="580px"/>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Heading size={6} caps fit textColor="black">
            Respositorio de Paquetes mas grande, NPM
          </Heading>
          <Appear fid="1">
            <Image src={images.npm.replace('/','')} height="580px"/>
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
            Hace parte integral de
          </Heading>
          <Appear fid="1">
          <Heading size={1} fit caps margin="20px 0px 0">
            La Plataforma Web
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


        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={2} fit caps textColor="black">
            Pero...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>El lenguaje de programacion Menos comprendido del mundo</Quote>
            <Cite>Douglas Crockford</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="<ul><li>Javascript fue creado en 10 dias por Brendan Eich</li><li>Ecma script es el nombre oficial del estandar, javascript es una implementacion del estandar, actionscript 3 es otra</li></ul>">
          <List>
            <ListItem><Appear fid="1">El Nombre del lenguaje</Appear></ListItem>
            <ListItem><Appear fid="2">Lenguaje tipo LISP disfrazado de C</Appear></ListItem>
            <ListItem><Appear fid="3">Errores de diseño</Appear></ListItem>
            <ListItem><Appear fid="4">Coerción</Appear></ListItem>
            <ListItem><Appear fid="5">Orientado a objetos, libre de clases, prototipos</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Objetivos de BAQ.JS
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Entender
          </Heading>
          <Appear fid="1">
            <Heading size={1} fit caps textColor="white">
              Lo raro
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Sacar provecho
          </Heading>
          <Appear fid="1">
            <Heading size={1} fit caps textColor="white">
              de lo bueno
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Crear una nueva mentalidad
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Entorno al lenguaje
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Image src={images.fire.replace('/','')} height="700px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Objetos y "this"
          </Heading>
          <Heading size={1} fit caps textColor="black">
            en Javascript
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="black">
            Pero antes...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps textColor="black">
            Lo basico del<br />lenguaje
          </Heading>
          <Text bold caps textColor="tertiary">Tipos, Scope, Closures</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="Aun cuando js no es un lenguaje fuertemente tipado, el estandar define 6 tipos, 5 valores primitivos, 1 de referencia">
          <Heading size={1} fit caps textColor="black">
            Tipos en Javascript
          </Heading>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <List>
            <ListItem><Appear fid="1">undefined</Appear></ListItem>
            <ListItem><Appear fid="2">null</Appear></ListItem>
            <ListItem><Appear fid="3">boolean</Appear></ListItem>
            <ListItem><Appear fid="4">String</Appear></ListItem>
            <ListItem><Appear fid="5">Number</Appear></ListItem>
            <ListItem><Appear fid="6">Object</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="#23241F">
          <CodePane
            lang="javascript"
            source={require("raw!./js-types.example")}
            margin="20px auto"
            />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="que busca: referencias de variables, donde busca: en los diferentes scopes">
          <Heading size={1} caps textColor="black">
            Scope:
          </Heading>
          <Appear fid="1">
          <Text bold>
            Es el conjunto de reglas para almacenar y buscar variables en alguna ubicacion.
          </Text>
          </Appear>
          <Appear fid="2">
          <Text bold textColor="white">
            "Que Buscar", "Donde Buscar"
          </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="A diferencia de lo que se cree, js es un lenguaje dinamico, compilado <br /> para js, la compilacion la compilacion ocurre algunos microsegundos antes de que el codigo sea ejecutado">
          <Heading size={2} caps textColor="black">
            Javascript tiene Scope en funciones unicamente*
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="A diferencia de lo que se cree, js es un lenguaje dinamico, compilado <br /> para js, la compilacion la compilacion ocurre algunos microsegundos antes de que el codigo sea ejecutado">
          <Text bold caps textColor="tertiary">Fact:</Text>
          <Heading size={2} caps textColor="black">
            Javascript es un lenguaje Compilado!
          </Heading>
          <Link href="https://www.youtube.com/watch?v=UJPdhx5zTaw">
            <Text bold fontSize={20}>Breaking the JavaScript Speed Limit with V8</Text>
          </Link>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white"
          notes="<ul>
                    <li>asigna la declaracion de variables y funciones a su respectivo scope, dentro de la funcion lo hace recursivamente y asigna las variables a el scope de la funcion.</li>
                    <li>asigna el rhs al lhs</li>
                  </ul>"
        >
          <Heading size={5} margin="0 0 40px" textColor="black">La ejecucion de un archivo .js se divide en:</Heading>
          <Layout>
            <Fill>
              <Appear fid="1">
                <Heading size={6} caps textColor="black" margin={10}>
                  Fase de Compilacion
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="2">
                <Heading size={6} caps textColor="black" margin={10}>
                  Fase de ejecucion
                </Heading>
              </Appear>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Appear fid="1">
            <Text bold caps textColor="tertiary">Un statement</Text>
          </Appear>
          <CodePane
            lang="javascript"
            source={require("raw!./scope-basic.example")}
            margin="20px auto 0"
            />
            <Appear fid="2">
              <Text bold caps textColor="tertiary">dos operaciones diferentes,<br /> declaracion e inicializacion.</Text>
            </Appear>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="basados en estos conceptos...">
          <Text bold caps textColor="tertiary">Conversacion <br /> Engine, Scope</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./scope-basic-2.example")}
            margin="20px auto 0"
            />
            <Text bold caps textColor="tertiary">LHS(objetivo de la asignacion),<br /> RHS(fuente de la asignacion)</Text>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary" notes="las decisiones sobre como el scope esta compuesto recaen sobre el programador, y cuando se compila, ya este no se puede cambiar">
          <Heading caps fit size={1} textColor="tertiary">
            Scope Lexico:
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Scope de tiempo de compilacion
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Layout>
            <Fill>
              <Image src={images.lexical1.replace('/','')} margin="0px auto 40px" height="300px"/>
            </Fill>
            <Fill>
              <Image src={images.lexical2.replace('/','')} margin="0px auto 40px" height="500px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide", "spin"]}  bgColor="#23241F" notes="las decisiones sobre como el scope esta compuesto recaen sobre el programador, y cuando se compila, ya este no se puede cambiar">
          <Heading caps fit size={1} textColor="tertiary">
            Hoisting
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./hoisting.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="secondary">
            THIS
          </Heading>
          <Heading caps fit size={2} textColor="tertiary">
            keyword
          </Heading>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="black" notes="ademas de las variables y funciones dentro de su scope lexico">
          <Text bold textColor="tertiary">Cada funcion, mientras se ejecuta, tiene una referencia a su contexto de ejecución actual, llamado THIS</Text>
          <Text bold textColor="tertiary">el keyword this siempre referencia a un objeto de los que se puedan obtener propiedades, no a alguna primitiva</Text>
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="black">
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
