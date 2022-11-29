import AuthController from "./AuthController.js";

class TweetController {
  constructor() {
    this.tweets = [];
    this.create = this.create.bind(this);
    this.getTweetsByUser = this.getTweetsByUser.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.reverseTweets = this.reverseTweets.bind(this);

  }

  create(req, res) {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    const { avatar } = AuthController.getLoggedUser(username);

    this.tweets.push({ username, tweet, avatar });

    res.status(201).send('OK, seu tweet foi criado');
  }

  getTweetsByUser(req, res) {
    const { username } = req.params;

    const tweetsDoUsuario = this.tweets.filter(t => t.username === username);

    res.status(200).send(tweetsDoUsuario);
  }

  getTweets(req, res) {
    const { page } = req.query;

    if (page && page < 1) {
      res.status(400).send('Informe uma página válida!');
      return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (this.tweets.length <= 10) {
      return res.send(this.reverseTweets());
    }

    res.status(200).send([...this.tweets].reverse().slice(start, end));
  }

  reverseTweets() {
    return [...this.tweets].reverse();
  }

}

export default new TweetController();

