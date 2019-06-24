const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);

app.get('/', (__, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

var x = 1;

function Dados(nome, endereco, idade, email, prof) {
    this.nome = nome;
    this.endereco = endereco;
    this.idade = idade;
    this.email = email;
    this.prof = prof
  }

io.on('connection', socket => {
    io.emit('messageResponse', 'Olá! Seja bem vindo!');
    io.emit('messageResponse', 'Por favor, me informe seu nome!');

    socket.on('newMessage', msg => {
        io.emit('messageResponse', msg)
        switch (x) {
            case 1:
                io.emit('messageResponse', 'OK, obrigado! Me enforme seu endereço.');
                nome = msg;
                break;
            case 2:
                io.emit('messageResponse', 'me diga sua idade.');
                endereco = msg;
                break;
            case 3:
                io.emit('messageResponse', 'Me informe seu e-mail.');
                idade = msg;
                break;
            case 4:
                io.emit('messageResponse', 'qual sua profissão?');
                email = msg;
                break;
            case 5:
                prof = msg;
                io.emit('messageResponse', 'Obrigado! confirme se os dados estão corretos!'); 
     
                let meusDados = new Dados(nome, endereco, idade, email, prof); 
    
                io.emit('messageResponse', `Nome: ${meusDados.nome}`);
                io.emit('messageResponse', `Endereço: ${meusDados.endereco}`);
                io.emit('messageResponse', `Idade: ${meusDados.idade}`);
                io.emit('messageResponse', `E-mail: ${meusDados.email}`);
                io.emit('messageResponse', `Profissão: ${meusDados.prof}`);
                break;
        }
        x++;  
    })
})

http.listen(3000, () => console.log('listening on *:3000'))