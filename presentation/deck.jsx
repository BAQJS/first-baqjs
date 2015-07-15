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
  lexical2: require("./lexical-scope-2.jpg"),
  inheritance: require("./inheritance.png"),
  delegation: require("./delegation.png"),
  constructor: require("./constructor-objects.png"),
  create: require("./create-objects.png")
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

        <Slide transition={["slide"]} bgColor="primary" notes="en ES6 esxiste el block scope con el uso de let">
          <Heading size={4} caps textColor="black">
            Javascript maneja solamente* function scope
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

        <Slide transition={["slide", "spin"]}  bgColor="#23241F" notes="Concepto basado en la naturaleza compilada del lenguaje, donde las declaraciones son leidas primero, y luego se hace la asignacion en tiempo de ejecucion <br /> en lenguajes interpretados, el interprete no sabe nada de la siguiente linea de codigo">
          <Heading caps size={1} textColor="tertiary">
            Hoisting
          </Heading>
          <Appear fid="1">
            <CodePane
              lang="javascript"
              source={require("raw!./hoisting.example")}
              />
          </Appear>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw!./hoisting-a.example")}
              />
          </Appear>
          <Appear fid="3">
            <CodePane
              lang="javascript"
              source={require("raw!./hoisting-1.example")}
              />
          </Appear>
          <Appear fid="4">
            <CodePane
            lang="javascript"
            source={require("raw!./hoisting-1-a.example")}
            />
          </Appear>
        </Slide>

        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="secondary">
            THIS
          </Heading>
          <Heading caps fit size={2} textColor="tertiary">
            keyword
          </Heading>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="black" notes="a diferencia del scope lexico, ">
          <Appear fid="1">
            <Text bold textColor="tertiary" margin="0 0 20px">Cada funcion, mientras se ejecuta, tiene una referencia a su contexto de ejecución actual, llamado THIS</Text>
          </Appear>
          <Appear fid="2">
            <Text bold textColor="tertiary" margin="0 0 20px">El keyword this siempre referencia a un objeto de los que se puedan obtener propiedades, no a alguna primitiva</Text>
          </Appear>
          <Appear fid="3">
            <Text bold textColor="tertiary" margin="0 0 20px">La decisión de a que objeto referencia el keyword "this" se hace en tiempo de ejecucion, al momento del llamado de la funcion.</Text>
          </Appear>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={1} textColor="">
            Reglas de asignacion del "this"
          </Heading>
          <List>
            <ListItem><Appear fid="1">default binding: el "this" hace referencia al objeto global*</Appear></ListItem>
            <ListItem><Appear fid="2">implicit binding: la funcion fue llamada dentro de un objeto contenedor</Appear></ListItem>
            <ListItem><Appear fid="3">explicit binding: fue llamada con .call() o .apply()</Appear></ListItem>
            <ListItem><Appear fid="4">la funcion fue llamada con el new keyword</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Text bold caps textColor="tertiary">Default Binding</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./this-default.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Text bold caps textColor="tertiary">Implicit Binding</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./this-implicit.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Text bold caps textColor="tertiary">Explicit Binding</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./this-explicit.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Text bold caps textColor="tertiary">New Binding</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./this-new.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={1} textColor="">
            new Operator
          </Heading>
          <List>
            <ListItem><Appear fid="1">Crea un nuevo objeto</Appear></ListItem>
            <ListItem><Appear fid="2">El nuevo objeto es linkeado al prototipo de la funcion (Un objeto)</Appear></ListItem>
            <ListItem><Appear fid="3">El objeto recien creado es atabado como el "this" para es llamado de esa funcion</Appear></ListItem>
            <ListItem><Appear fid="4">El llamado a la funcion retorna el objeto recientemente construido</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={1} textColor="">
            Confusiones generadas por el "this"
          </Heading>
          <List>
            <ListItem><Appear fid="1">Asumir que el "this" hace referencia a la funcion en si misma</Appear></ListItem>
            <ListItem><Appear fid="2">Acceder al scope (lexico) de la funcion</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Text bold caps textColor="tertiary">Closures</Text>
          <Text textColor="tertiary">es cuando una funcion "recuerda" su scope lexico aun cuando la funcion es ejecutada fuera de ese scope lexico.</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./closures.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="#23241F" notes="empezar a ver el codigo de una manera diferente">
          <Text bold caps textColor="tertiary">Closures</Text>
          <CodePane
            lang="javascript"
            source={require("raw!./closures-2.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={1} textColor="">
            Como Construir objetos en JS
          </Heading>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="#23241F" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={5} textColor="white">
            Object Literal
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./object-literal.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="#23241F" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={5} textColor="white">
            Factory Function
          </Heading>

          <CodePane
            lang="javascript"
            source={require("raw!./factory-function.example")}
            margin="20px auto 0"
            />
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Heading caps fit size={5} textColor="white">
            prototype (Objetos linkeados a otros objetos)
          </Heading>
          <Heading caps fit size={5} textColor="white">
            Behavior Delegation
          </Heading>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary" notes="esto hace que la semantica del lenguaje cambie completamente">
          <Heading fit size={5} textColor="white">
            Las clases
          </Heading>
          <Appear fid="1">
            <Heading caps fit size={5} textColor="white">
              No Existen en JS
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary">
          <Heading fit size={5} textColor="white">
            La Herencia
          </Heading>
          <Appear fid="1">
            <Heading caps fit size={5} textColor="white">
              No Existe en JS
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={5} margin="0 0 40px" textColor="black">
            Lo que realmente importa es que dos objetos terminen vinculados uno a otro a través del [[prototype]] chain
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={5} margin="0 0 40px" textColor="black">Herencia Vs Delegacion</Heading>
          <Layout>
            <Fill>
              <Image src={images.inheritance.replace('/','')} margin="0px auto 40px" height="300px"/>
            </Fill>
            <Fill>
              <Image src={images.delegation.replace('/','')} margin="0px auto 40px" height="300px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="#23241F" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Text bold caps textColor="tertiary">Function constructor</Text>

          <CodePane
            lang="javascript"
            source={require("raw!./object-constructor.example")}
            margin="0 auto 0"
            />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={5} margin="0 0 40px" textColor="black">Function constructor chain</Heading>
          <Image src={images.constructor.replace('/','')} margin="0px auto 40px" height="650px"/>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="#23241F" textColor="primary" notes="cada uno de estos tipos definen propiedades y comportamientos diferentes">
          <Text bold caps textColor="tertiary">Object.create()</Text>

          <CodePane
            lang="javascript"
            source={require("raw!./object-delegation.example")}
            margin="0 auto 0"
            />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={5} margin="0 0 40px" textColor="black">Object.create chain</Heading>
          <Image src={images.create.replace('/','')} margin="0px auto 40px" height="650px"/>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Gracias!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
