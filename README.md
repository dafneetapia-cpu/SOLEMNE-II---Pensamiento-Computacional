# SOLEMNE-II-Pensamiento-Computacional
Este proyecto es una exploración de arte cinetico y principios de la bauhaus mediado por el pensamiento computacional. A través del sistema, la estética resultante es la de una interacción directa entre la lógica del bucle anidado y la respuesta reactiva del usuario.

# Sistemas Geométricos Reactivos

## Descripción Objetiva
Mi trabajo consiste en un sistema visual generativo e interactivo desarrollado en p5.js, el cual explora la relación entre la lógica algorítmica y la respuesta humana. En pantalla se despliega una matriz geométrica de 3x3 compuesta por elementos circulares, cuya escala, desfase espacial y paleta cromática son modificados en tiempo real mediante el movimiento del cursor y comandos de teclado. La composición se caracteriza por el uso de transparencia y modos de mezcla/transparencia, elementos que permiten al usuario manipular la profundidad y el ritmo de la pieza, transformando una estructura de grilla estática en una experiencia visual dinámica y paramétrica.

## Descripción Conceptual
En este proyecto, mi intención fue explorar cómo el diseño puede automatizarse mediante lógica computacional, creando una interfaz donde quien usa el programa deja de ser un simple espectador para convertirse en el operador del sistema. Para esto, tomé como referencia los principios de la Bauhaus, especialmente su búsqueda de claridad visual y la idea de que la forma debe responder a una estructura funcional; por eso, elegí trabajar con elementos geométricos simples y colores puros organizados en una grilla. A esta base le sumé la influencia del Arte Cinético, incorporando el movimiento y la percepción óptica como ejes centrales. En mi trabajo, la relación entre ambos referentes se traduce en una modulación paramétrica: mientras la Bauhaus me ayuda a organizar el espacio de manera racional en la matriz de 3x3, el Arte Cinético guía la parte interactiva, permitiendo que el usuario, a través de sus gestos, transforme una composición que podría ser estática en una experiencia visual dinámica donde el ritmo y las transparencias crean nuevas capas de profundidad.

## Reglas que gobiernan el sistema

- Inputs: El sistema utiliza la posición del cursor (mouseX, mouseY) para el mapeo de variables visuales y eventos de teclado (keyPressed) para la gestión de estados.
- Procesos: Las funciones map() transforman los datos crudos del hardware en rangos coherentes para el diseño. Un bucle anidado se encarga de la distribución espacial de los elementos.
- Outputs: La respuesta visual producida es un renderizado geométrico que se actualiza a 60 cuadros por segundo en el navegador.
- 
La forma en que el sistema responde es doble. Por un lado, la interacción es continua, ya que el movimiento del cursor (mouseX, mouseY) actúa directamente sobre la posición y el diámetro de las figuras, procesándose a través de funciones de mapeo que traducen gestos pequeños en cambios visuales significativos. Por otro lado, la interacción es discreta al momento de cambiar las paletas de color mediante el teclado. Básicamente, el programa toma datos crudos del hardware y los normaliza para que la respuesta visual en pantalla se sienta fluida y como una extensión directa de lo que el usuario está haciendo con el mouse

- ![Diagrama de flujo](diagrama_flujo_1)

## Resultado final
Una composición dinámica que permite al usuario experimentar con relaciones de contraste, color y ritmo espacial.
![RESULTADOS](resultado1)
![RESULTADOS](resultado2)
![RESULTADOS](resultado3)

## Codigo y Ejecución

- **Archivo de código:** [sketch.js](sketch.js)
- **Link para ejecutar en el navegador:** [Anrir proyecto en p5.js] (https://editor.p5js.org/Dafnne/sketches/VjUtAE4J_)
