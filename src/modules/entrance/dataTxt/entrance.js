const fr = {
  titlePersonalPresentation: "Mon changement\nde vie",
  paraPersonalPresentation: [
    "mon bute en quelques lignes c'est surtout de me presenter car meme si cette application web reste a bute ludique c'est aussi mon premier projet personel pour vous et moi montrer ce dont je suis capable",
    "pour commencer il y a encore 2ans et demi je n'avais que des lointain connaissance dans le developement mais une chose est sur je n'aimais plus ce que je fesais vendeur depuis 12 ans avec la crise du Covid et mon manque de patience croissant avec le manque de civisme de certain je devais changer de vois",
    "donc voila premier confinement et aprés une fracture de la jambe et surtout quelque motivation plus tard d'un ami je me lance et j'aprend les bases HTML CSS PHP je crée un premier site fonctionnel mais qui n'a jamais etait utilisé",
    "fin d'année 2020 je n'en peux plus proche du burn out je me lance j'ai le plein sur mon CPF et je peux avaler du code comme un gobeur de flan et la je tombe sur transition pro je me fait aider et j'arrive avec l'accord de mon entreprise a entre dans le bootcamp de septembre 2021",
    "le bocal academy c'est chez eux pour une formation fullstack JS sur le stack MERN je passe un tres bon moment et surtout je sais que je veux devenir developeur",
    "j'ai un grave probleme de santé 3 jours aprés la fin de ma formation plusieur mois passe et je choisis de pointer au chomage pour lancé ma microsocieté pour le moment octobre 2022 je travail sur le projet d'un client",
    "et la je me dis pendant ma formation j'avais eu une idée ce que je vous presente aujourd'hui avec tout ce que je sais faire",
  ],
  titleProjectPresentation: "Mon Projet",
  paraProjectPresentation: [
    "je suis un tres gros joueur faut pas ce mentire et dans les jeux je recherche en general de la logique ou de la reflection donc naturelement les jeux de simulation en tous genre et strategie en passant par les RPG et MMO j'ai aussi fait pas mal de jeux de role et plateau",
    "et donc nous voila ici je veux vous proposer un moment ludique entre le jeux de role de strategie avec de la gestion et un soupçon de social je vais posé dans le prochain paragraphe le but puis par la suite la technique",
    "le bute vous etes un noble romain asser riche pour posseder des gladiateur et c'est a vous de gerrer votre 'ecurie' soin, equipement, choix des prochain combat, le combat, ect",
    "et la on va parler technique un petit peux je commence a connaitre quelque language et avant de passer a un autre je voulais valider comme je l'avais fait avec le PHP HTML et CSS sur mon premier site donc nous voici ici",
    "pendant ma formation de 4 mois j'ai fait du stack MERN (Mongo, express, react, node) j'ai abandonné le R pour le remplacer par Vue d'abord pas mal de vue 2 pour la façon de coder ici cela sera en 3 je vais vous faire un tour rapide des techno tout de suite donc resté assis",
    "pour le front on reste sur du simple j'utilise vite mais par Tailwind cela me permet d'etre tranquil sur l'instalation de pas mal de modul comme daisyIU HeadlessIU avec autoprefixer et autre pour les quelque framwork que j'utilise j'essai le plus possible de rester simple Axios routerVue pinia dayjs",
    "pour le Back c'est plus complexe mais en gros la trinité mongo/mongoose node express puis quelque modul obligatoire pour avoir un vie plus simple (body-parse, cors, nodemon, dotenv, ect)",
    "a ce jour je n'ai rien fait de plus j'en suis qu'au debut",
  ],
  titleLogPage: "choisisez votre rouleaux",
  logView: ["login", "reset", "signin"],
  typeLog: {
    login: {
      title: "Connection",
      content: [
        {
          name: "username",
          type: "text",
          label: "Votre pseudo",
          placeHolder: "XxD4rKs4SukexX",
          value: "",
        },
        {
          name: "password",
          type: "password",
          label: "Votre Mot de passe",
          placeHolder: "******",
          value: "",
        },
      ],
    },
    reset: {
      title: "Reset Password",
      content: [
        {
          name: "email",
          type: "email",
          label: "Votre e-mail",
          placeHolder: "XxD4rKs4SukexX@konoha.kh",
          value: "",
        },
      ],
    },
    signin: {
      title: "Création compte",
      content: [
        {
          name: "username",
          type: "text",
          label: "Votre pseudo",
          placeHolder: "XxD4rKs4SukexX",
          value: "",
        },
        {
          name: "email",
          type: "email",
          label: "Votre e-mail",
          placeHolder: "XxD4rKs4SukexX@konoha.kh",
          value: "",
        },
        {
          name: "password",
          type: "password",
          label: "Votre Mot de passe",
          placeHolder: "******",
          value: "",
        },
        {
          name: "verifPassword",
          type: "password",
          label: "pour etre sur !!",
          placeHolder: "la meme chose que au dessus",
          value: "",
        },
      ],
    },
  },
  nav: ["Personnel", "Projet", "Connexion"],
};
const en = {};
export default { en, fr };
