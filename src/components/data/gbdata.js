import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import cv from "../data/cv.pdf";

export const navlink = [
  {
    url: "/",
    text: "Inicio",
  },
  {
    url: "/sobre",
    text: "Sobre",
  },
  {
    url: "/servicos",
    text: "Serviços",
  },
  {
    url: "/habilidades",
    text: "Habilidades",
  },
  {
    url: "/portifolio",
    text: "Portfólio",
  },
  {
    url: "/depoimentos",
    text: "Depoimentos",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contato",
    text: "Contato",
  },
];
export const home = [
  {
    id: 1,
    text: "OLÁ EU SOU",
    name: "GABRIEL BARBOSA",
    post: "DEV REACT",
    design: "FRONT-END",
    desc: "Sou desenvolvedor web front end. Sou um estusiasta na programação, tenho facilidade em aprender e sempre estou buscando por algo novo. Atualmente estou desenvolvendo com a library React <3.",
  },
];
export const about = [
  {
    desc: "Estudo e trabalho com desenvolvimento web desde 2022, desenvolvi alguns projetos front end e tenho conhecimento em back end. Estou fazendo cursos de React pela DIO para melhorar minhas skills nessa biblioteca.",
    desc1:
      "Atualmente estou cursando Tec em Sistemas de Computação (UFF), e também sempre estou lendo sobre estruturas de dados e algoritmos para desenvolver ainda mais minha lógica.",
    cover: "./images/my-pic.jpg",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Web Design",
    desc: "O design mais moderno e de alta qualidade feito a nível profissional.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Buscando sempre manter as melhores práticas nos códigos",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Design Responsivo",
    desc: "Sites totalmentes responsivos, para a melhor experiência do usuário",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Conhecimento em Material UI e de outras ferramentas para as construções dos layouts",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Utilização de icones da Material UI, e também o da preferência do cliente",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Suporte",
    desc: "Faço o suporte dos sites para sanar as principais duvidas dos clientes",
  },
];

export const skills = [
  {
    id: 1,
    cover: "../images/skills/js.png",
    description: "Javascript",
    url: "https://www.javascript.com/",
  },
  {
    id: 2,
    cover: "../images/skills/node.png",
    description: "Node.js",
    url: "https://nodejs.org/pt-br/",
  },
  {
    id: 3,
    cover: "../images/skills/react.png",
    description: "React",
    url: "https://pt-br.reactjs.org/tutorial/tutorial.html",
  },
  {
    id: 4,
    cover: "../images/skills/html.png",
    description: "HTML",
    url: "https://www.w3schools.com/html/",
  },
  {
    id: 5,
    cover: "../images/skills/css.png",
    description: "CSS",
    url: "https://www.w3schools.com/css/",
  },
  {
    id: 6,
    cover: "../images/skills/git.png",
    description: "GIT",
    url: "https://git-scm.com/",
  },
  {
    id: 7,
    cover: "../images/skills/sass.png",
    description: "Sass",
    url: "https://sass-lang.com/documentation/",
  },
  {
    id: 8,
    cover: "../images/skills/typescript.png",
    description: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
];

export const experience = [
  {
    id: 1,
    year: "2022",
    title: "Trabalho Voluntário na Open SDO",
    description: "Atuei ajudando aos novos desenvolvedores com React",
  },
  {
    id: 2,
    year: "2022",
    title: "Criação de uma landing page",
    description: "Freelancer",
  },
];

export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "CLIENTES SATISFEITOS ",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "1120",
    title: "PROJETOS COMPLETADOS",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "ARQUIVOS BAIXADOS",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "2741",
    title: "LINHAS DE CÓDIGOS",
  },
];
export const portifolio = [
  {
    id: 1,
    cover: "../images/port/port1.png",
    name: "SuperHero Buscador",
    category: "Desenvolvimento",
    title: "SuperHero Buscador",
  },
  {
    id: 2,
    cover: "../images/port/port2.png",
    name: "Gerador de Usuários",
    category: "Desenvolvimento",
    title: "Gerador de Usuários",
  },
  {
    id: 3,
    cover: "../images/port/port3.png",
    name: "Crud",
    category: "Desenvolvimento",
    title: "Crud",
  },
  {
    id: 4,
    cover: "../images/port/port4.png",
    name: "Impérios da Frutas",
    category: "Desenvolvimento",
    title: "Impérios da Frutas",
  },
  {
    id: 5,
    cover: "../images/port/port5.png",
    name: "Bibliotecas de Filmes",
    category: "Desenvolvimento",
    title: "Bibliotecas de Filmes",
  },
  {
    id: 6,
    cover: "../images/port/port.png",
    name: "Em breve",
    category: "Marketing",
    title: "Em breve",
  },
  {
    id: 7,
    cover: "../images/port/port.png",
    name: "Em breve",
    category: "Marketing",
    title: "Em breve",
  },
  {
    id: 8,
    cover: "../images/port/port.png",
    name: "Em breve",
    category: "Design",
    title: "Em breve",
  },
  {
    id: 9,
    cover: "../images/port/port.png",
    name: "Em breve",
    category: "Design",
    title: "Em breve",
  },
];
export const depoiments = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.jpg",
    name: "Gabriel Barbosa",
    post: "Desenvolvedor React",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Martin King",
    post: "Desenvolvedor Back End",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "Raissa Silva",
    post: "Desenvolvedora React",
  },
];
export const blog = [
  {
    id: 1,
    title: "Domine esses incríveis",
    date: "27 Agosto, 2022",
    author: "Lolriam Black ",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Melhores itens de design para usar",
    date: "15 Junho, 2022",
    author: "Lori Green ",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Os 20 melhores frameworks front end",
    date: "23 Feveiro, 2022",
    author: "Loriam Gray ",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
];
export const contato = [
  {
    id: 1,
    icon: <AddLocationAltOutlined />,
    text1: "Rua lorem 472",
    text2: "Araruama, Rio de Janeiro",
  },
  {
    id: 2,
    icon: <PhoneIphone />,
    text1: "22 99981-2086",
    text2: "55 00000-0000",
  },
  {
    id: 3,
    icon: <EmailOutlined />,
    text1: "gabrielbarbosadorio@gmail.com",
    text2: `https://www.linkedin.com/in/dev-gabriel-barbosa/`,
  },
];
export const social = [
  {
    id: 1,
    icon: <Facebook />,
    url: "https://www.linkedin.com/in/gabriel-barbosa-83bb2a223/",
  },
  {
    id: 2,
    icon: <Twitter />,
    url: "https://www.linkedin.com/in/gabriel-barbosa-83bb2a223/",
  },
  {
    id: 3,
    icon: <Instagram />,
    url: "https://www.instagram.com/gabriel_barbosa_dev/",
  },
  {
    id: 4,
    icon: <YouTube />,
    url: "https://www.linkedin.com/in/gabriel-barbosa-83bb2a223/",
  },
  {
    id: 5,
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/gabriel-barbosa-83bb2a223/",
  },
];

export const curriculo = {
  file: cv,
};
