
const file = async (req, res, next) => {
    console.log(req.files)
    console.log(req.body)

    const archivo = req.files.archivo;
    const fileName = archivo.name;
    const path = __dirname + '/../public/uploads/' + fileName;


    try {
        archivo.mv(path, (error) => {
            if (error) {
                console.error(error);
                res.writeHead(500, {
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify({ status: 'false', message: error }));
                return;
            }
            return res.status(200).send({ status: 'true', path:'/uploads/' + fileName });
        });
    } catch (e) {
        res.status(500).json({
            error: true,
            message: e.toString()
        });
    }
}

module.exports = {
    file,
}