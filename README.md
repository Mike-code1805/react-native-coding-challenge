# React Native - Desafío de codificación

ITGlobers está buscando personas que puedan crear productos increíbles, por eso creamos este desafío para probar las habilidades generales de desarrollo de nuestros candidatos.

## Instrucciones
1. Cree su aplicaciónTienes 1 semana para completar el desafío.Se evaluará la implementación y el diseño.

2. Envíe su desafíoSiga estas instrucciones para enviar su desafío.Configure su entorno de desarrollo (React Native - Guía de introducción)Escribe tu código

3. Impresiona con tus habilidades

## Desafío

Se requiere crear una aplicación basada en ReactJS, React Hooks y Redux, que consta de tres pantallas:

1. Inicio de sesión.

2. Registro.

3. Paginación

Listado de información con paginación.Para implementar la lógica de la aplicación se deberá consumir los servicios dehttps://reqres.in/.

En la pantalla de inicio de sesión es necesario usar Redux para mantener la sesión del usuario. Así, en el momento en que el ingreso sea satisfactorio, el email del usuario deberá guardarse en un estado con encriptación AES256.

En la pantalla de registro es necesario crear el usuario y si el proceso es satisfactorio, se debe hacer el ingreso a la aplicación creando la sesión con los datos suministrados.

En la pantalla del listado de información con paginación, se deberá consumir el listadode recursos y paginarlos mediante Redux. En esta pantalla deberá aparecer el email delusuario des-encriptado mediante AES256 y se debe disponer de un botón para cerrar lasesión.

## Resumen de funcionalidades y entregables

1. Consumir los servicios https://reqres.in/.

2. Cifrar el email de usuario usando AES256.

3. Toda la información necesaria deberá ser un estado en Redux.

4. El diseño de la interfaz es de libre elección, pero se evaluará la usabilidad y limpieza que se implemente.

5. Es primordial el uso de componentes.

6. El proyecto debe realizarse usando TypeScript. Si se desarrolla en JavaScript no se tendrá en cuenta a la hora de la evaluación.

7. Se deben validar todos los formularios sin usar ningún plugin.

8. Implementar paginación mediante Redux.

9. Implementar un botón para cerrar la sesión del usuario.

10.  Es necesario disponer de un historial de versiones en GIT.

11. El entregable es un repositorio, bien sea en Github, Gitlab o la plataforma de preferencia. El repositorio debe ser privado y debe evidenciar el flujo del trabajo.

12. Se entregará un informe con screenshot que evidencie el abordaje y desarrollo de la solución.

13. Se dispondrá de un tiempo máximo de 7 días para su entrega.

# My notes by Miguel Enrique Saca Accostupa
A continuación están los pasos que he seguido al hacer este proyecto:

1. Creación de las los screens y las rutas *screens/*.
2. Creación de los diseños y estilos de cada screen en cada componente.
3. Creación de las validaciones de cada formulario en cada screen.
4. Definición de redux con redux toolkit.
5. Llamadas a la API de *https://reqres.in/api* en *redux/apiCalls.ts*
6. Código limpio.

Correr el proyecto:<br>

    npm install
    npm start
