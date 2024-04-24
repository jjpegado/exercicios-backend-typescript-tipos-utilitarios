type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type Conexao = {
    driver:string,
    url: string
}

const conexao = (dados: Conn): Readonly<Conexao> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}


const conectar = conexao ({
    username: 'julio', 
    password: '99882644', 
    host: 'localhost', 
    port: '5432', 
    dbname: 'primeira'  
})

conectar.driver = 'mySQL' //Readonly não pode fazer mudanças so leitura