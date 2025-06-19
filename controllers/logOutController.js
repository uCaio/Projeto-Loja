const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.log(err)
                return res.status(500).send("Erro ao encerrar a sessão.")
            }
            res.redirect("/login")
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = {logout}