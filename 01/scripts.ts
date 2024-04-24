type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}
type NovoUsuario = Omit<Usuario, 'rg'>;
type UsuarioComposObrigatorios = Required<NovoUsuario>;

const cadastrarUsuário = (info: UsuarioComposObrigatorios): UsuarioComposObrigatorios => {
    return info;
}