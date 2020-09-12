const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

//criando uma instância do express
const app = express();

//getting the local authentication type
const LocalStrategy = require("passport-local").Strategy;

app.use(express.json());
// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

app.use(
  cookieSession({
    name: "S3CreT",
    keys: ["vueauthrandomkey"],
    //maxAge: 3 * 1000, //50 segundos
    maxAge: 24 * 60 * 60 * 1000, //24 horas
  })
);

let users = [
  {
    id: 1,
    user: "Usuário 1",
    email: "user@email.com",
    pwd: "123",
  },
  {
    id: 2,
    name: "Emma",
    email: "emma@email.com",
    pwd: "password2",
  },
];

//Configurando o passaport para trabalhar com a estratégia de login local!
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "pwd",
    },

    (username, password, done) => {
      console.log(username + " - " + password);
      let user = users.find((user) => {
        return user.email === username && user.pwd === password;
      });

      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: "Usuário ou senha incorreto!" });
      }
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

app.post("/api/login", (request, response, next) => {
  console.log(request.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    console.log(user);
    if (!user)
      return response.status(400).send([user, "Não foi possível logar!", info]);

    request.login(user, (err) => {
      response.send("Logado!");
    });
  })(request, response, next);
});

app.get("/api/logout", function (request, response) {
  req.logout();

  console.log("logged out");

  return res.send();
});

const authMiddleware = (request, response, next) => {
  if (!request.isAuthenticated()) {
    console.log("tá logado não!");
    response
      .status(401)
      .send("Você não está autorizado à acessar este recurso!");
  } else {
    next();
  }
};

app.get("/api/user", authMiddleware, (request, response) => {
  //console.log(request.session);
  let user = users.find((user) => {
    return user.id === request.session.passport.user;
  });

  console.log([user, request.session]);
  response.send({ userid: user.id, username: user.user });
});

//Chamado na direção back-end->front-end
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Chamado na direção front-end->back-end
passport.deserializeUser((id, done) => {
  let user = users.find((user) => {
    return user.id === id;
  });

  done(null, user);
});

app.listen(3030, () => {
  console.log("Servidor auth está ouvindo na porta 3030!");
});
