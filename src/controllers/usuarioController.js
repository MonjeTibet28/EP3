import User from '../models/usuario.js'

const methods = {
    crearUsuario: async (req, res) => {
        try {
            const { nombre, apellido, email, password, repeatPassword } = req.body

            if (!nombre || !apellido || !email || !password || !repeatPassword) {
                return res.status(400).send('Todos los campos son obligatorios')
            }

            if (password !== repeatPassword) {
                return res.status(400).send('Las contraseñas no coinciden')
            }

            const existingUser = await User.findOne({ email: email })
            if (existingUser) {
                return res.status(400).send('Correo invalido, use otro por favor')
            }

            const user = new User({ nombre, apellido, email, password })
            user.password = await user.encryptPassword(password)
            await user.save()

            res.status(201).send('Usuario creado correctamente')

        } catch (error) {
            console.error(`Error al crear un usuario: ${error}`)
            res.status(500).send('Hubo un error al crear el usuario')
        }
    },

    obtenerUsuario: async (req, res) => {
        try {
            const { email, password } = req.body;
         
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(404).send('El correo o contraseña son inválidos');
            }

            const validPassword = await user.validPassword(password);
            if (!validPassword) {
                return res.status(404).send('El correo o contraseña son inválidos');
            }



            res.status(200).send('Usuario autenticado correctamente')
        } catch (error) {
            console.error(`Error al obtener un usuario: ${error}`)
            res.status(500).send('Hubo un error al obtener el usuario')
        }
    }
};

export { methods }