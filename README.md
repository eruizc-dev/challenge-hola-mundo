# Tramos horarios

Haz click [aquí](https://eruizc-dev.github.io/tramos-horarios/) para ver una preview.


## Sobre el repositorio

Este proyecto fue hecho para participar de los desafíos creados por el canal
de YouTube de [HolaMundo](https://youtu.be/aouDQ8caJYg) del día 15 de enero de
2021.

## Consigna

Construye una lista que contenga tramos horarios en intervalos de 30 min de 8am
a 8pm.

La empresa tiene una disponibilidad de 8 motociclistas cada 30 minutos. Cuando
alguien haga click sobre una de estas cajitas deberá tomar un recurso de
motociclista a demás de marcar la caja en verde. Si el mismo usuario hace click
en la caja deberá liberar el recurso. Si otros usuarios han tomado a todos los
motociclistas, la caja debe aparecer en color rojo y no me debe dejar tomar ese
horario.

## Cómo ejecutar

 1. Clona el proyecto `git clone https://github.com/eruizc-dev/tramos-horarios.git` y navega hacia a él.
 2. Installa las dependencias `npm ci`.
 3. Ejecuta el servidor de desarrollo con `npm run start`.
 4. Accede a `https://localhost:3000` con tu navegador favorito.

O copia y pega lo siguiente y haz el paso 4

    git clone https://github.com/eruizc-dev/tramos-horarios.git && \
    cd tramos-horarios && \
    npm ci && \
    npm run start

### Dependencias

 - node
 - npm
