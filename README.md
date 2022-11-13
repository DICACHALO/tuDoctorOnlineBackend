# TuDoctorOnline
## Iniciar Proyecto
- Ejecutar en el terminal de su entorno de trabajo el siguiente comando `npm init` para iniciar la aplicaciÃ³n, configurar con sus preferencias.

## Bibliotecas
> Las siguientes bibliotecas permiten un correcto funcionamiento de la aplicaciÃ³n, en donde se integra el modelo, el enrutamiento, la parte del ORM, la recarga continua y automatica de la aplicaciÃ³n cuando se realizan cambios, tambiÃ©n la validaciÃ³n de las cors, es decir que se pueda conectar a los dos protocolos de comunicaciÃ³n: `http` y `https`, a continuaciÃ³n el listado de las bibliotecas empleadas:
- `npm install express`
- `npm install nodemon`
- `npm install mongoose`
- `npm install morgan`
- `npm install cors`

## Iniciar la AplicaciÃ³n
- `npm start`

## Recomendaciones
- Incluir en el archivo package.json la siguiente clave valor: "start": "nodemon index.js", en scrips, para poder ejecutar el app correctamente.
- Si a la hora de instalar las bibliotecas aparece un error vinculado a SSL ejecutar el siguiente comando en consola: `npm config set strict-ssl false`
- DespuÃ©s de clonar el repo, dirigirse al terminal de su entorno de trabajo y ejecutar el siguiente comando: `npm install` esto con el fin de reinstalar todas las dependencias que le faltan.
