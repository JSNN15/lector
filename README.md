# Lector de instrumentos

**Foto de un manómetro o termómetro de aguja y la lectura sale en número, con alarma y registro. La IA lee la escala una vez; la geometría y la visión clásica hacen el resto.**

[![Abrir la máquina](https://img.shields.io/badge/Probar-jsnn15.github.io%2Flector-ffb020?style=for-the-badge)](https://jsnn15.github.io/lector/)
![NVIDIA Nemotron VL](https://img.shields.io/badge/NVIDIA-Nemotron%20VL-76b900?style=flat-square&logo=nvidia&logoColor=white)
![Visión clásica](https://img.shields.io/badge/visi%C3%B3n%20cl%C3%A1sica-RANSAC%20%2B%20barrido%20radial-555?style=flat-square)
![Licencia](https://img.shields.io/badge/c%C3%B3digo-Apache--2.0-blue?style=flat-square)

**Español** · [English](README.en.md)

<a href="https://jsnn15.github.io/lector/"><img src="docs/demo.gif" alt="Se marcan los números de la escala, un barrido encuentra la aguja y aparece la lectura" width="100%"></a>

## El problema

En faena todavía hay cientos de instrumentos de aguja que se leen en una ronda y se anotan a mano. El dato llega tarde, con errores de transcripción y sin tendencia.

## Cómo funciona

<img src="docs/flujo.svg" alt="Foto, la IA lee la escala, geometría, barrido radial y dato con control" width="100%">

Preguntarle a un modelo de visión "¿cuánto marca la aguja?" falla seguido: confunde escalas y se equivoca por varias divisiones. Por eso la IA hace solo lo que hace bien, **leer y ubicar los números impresos**, y el resto es geometría que se puede verificar.

```mermaid
flowchart LR
    A[Foto] --> B["Nemotron VL<br/>números impresos + posición x,y"]
    B --> C["RANSAC sobre tríos<br/>círculo + recta ángulo→valor"]
    C -->|descarta la 2.ª escala| D["Barrido radial<br/>la línea que llega más lejos"]
    D --> E{¿calza con la<br/>estimación de la IA?}
    E -->|sí| F[Lectura + alarma + registro]
    E -->|no, > 6 % del rango| G[Revisar: punta opuesta, otra candidata o a mano]
```

1. **IA, una vez por instrumento.** Nemotron VL entrega cada número de la escala con su posición (0-1000) y además una estimación propia de la lectura.
2. **Geometría.** Con tríos de números, RANSAC ajusta la circunferencia del dial y una recta ángulo-valor. Los números que no calzan (una segunda escala, un logo) quedan fuera.
3. **Visión clásica.** Un barrido radial de 720 direcciones busca la línea que sale continua del eje y llega más lejos hacia la escala. Así distingue la punta del contrapeso, que también es oscuro pero se corta antes. La tolerancia lateral va en píxeles para soportar un centro estimado con algo de error. La estimación de la IA no elige la aguja: solo sirve de control.
4. **Control cruzado.** Si la lectura geométrica y la de la IA difieren en más de 6 % del rango, la página avisa. El panel «¿La lectura está mal?» corrige y muestra el error de la lectura automática.
5. **Cámara fija.** Con la cámara quieta, la IA calibra una sola vez y el seguimiento de la aguja corre en el navegador muchas veces por segundo, sin más llamadas.

## Límites

- Instrumentos circulares de una aguja. No lee displays digitales ni medidores de varias agujas.
- Reflejos fuertes o fotos muy oblicuas degradan la ubicación de los números; el control cruzado lo avisa.
- Es una lectura de apoyo para rondas, no un instrumento calibrado.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La máquina completa: ajuste RANSAC, barrido radial, modo cámara fija, alarmas y registro. |
| `s/` | Fotos de ejemplo con la lectura de escala guardada. |
| `docs/` | GIF de la demo y diagramas. |

En local: `python3 -m http.server 8770`. La lectura de escala en vivo usa [nv-gateway](https://github.com/JSNN15/nv-gateway).

## Créditos

Fotos de ejemplo (licencias de sus autores): *Pressure gauge* (zimpenfish), *Back-Entry-Dial-Thermometer* (Public Domain Photos), *residual pressure gauge* (yawning hunter), *Under Pressure* (ThenAndAgain), *Pressure* (BinaryApe), *Increasing Pressure* y *That's all she's got captain!* (flattop341), *Gauge on a U-Boat* (quinet), CC BY 2.0 vía Openverse.

De los 8 ejemplos, en 6 la lectura geométrica coincide con la estimación independiente de la IA. En los otros dos (el manómetro de neumáticos y el del submarino) la aguja está en 0 y la IA estimó 65 y 0,55: tomó el contrapeso por la punta. La geometría los lee bien y la página avisa que no coinciden.

La primera versión del barrido también confundía el contrapeso con la punta en esos dos casos, porque elegía la línea más oscura cerca del eje. Ahora mide el alcance de cada línea y, si aun así se equivoca, el panel «¿La lectura está mal?» permite usar la punta opuesta, probar otra candidata o ajustar a mano, y muestra el error de la lectura automática.

---

<sub>Proyecto personal de **Julián Neira Nova**, ingeniero eléctrico con 10 años en faena · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nada de lo publicado proviene de clientes ni de empleadores.
[Portafolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [Todas las máquinas](https://github.com/JSNN15)</sub>
