function cliente(req, res){
    (cliente[req.method] ||function(req, res){
        res.status(405).send()
    })(req, res)
}
export default cliente

cliente['GET'] = function(req, res){
    res.status(200).json({
        id: 3,
        nome:'Maria',
        email:'mariamariamaria@xcfmail.com'
    })
    return true;
}
