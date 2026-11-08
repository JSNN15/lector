# Gauge Reader

**Photo of a needle pressure gauge or dial thermometer, and the reading comes out as a number with alarm limits and a log. The AI reads the scale once; geometry and classic vision do the rest.**

[![Open the tool](https://img.shields.io/badge/Try%20it-jsnn15.github.io%2Flector-ffb020?style=for-the-badge)](https://jsnn15.github.io/lector/)
![NVIDIA Nemotron VL](https://img.shields.io/badge/NVIDIA-Nemotron%20VL-76b900?style=flat-square&logo=nvidia&logoColor=white)
![Classic vision](https://img.shields.io/badge/classic%20vision-RANSAC%20%2B%20radial%20sweep-555?style=flat-square)
![License](https://img.shields.io/badge/code-Apache--2.0-blue?style=flat-square)

[Español](README.md) · **English**

> The interface is in Spanish.

<a href="https://jsnn15.github.io/lector/"><img src="docs/demo.gif" alt="Scale numbers get marked, a sweep finds the needle and the reading appears" width="100%"></a>

## The problem

Mines and plants still have hundreds of analog gauges that are read on rounds and written down by hand. Data arrives late, with transcription errors and no trend.

## How it works

<img src="docs/flow.svg" alt="Photo, AI reads the scale, geometry, radial sweep, reading with cross-check" width="100%">

Asking a vision model "what does the needle read?" often fails: it mixes scales and misses by several divisions. So the AI only does what it does well, **reading and locating the printed numbers**, and the rest is verifiable geometry.

```mermaid
flowchart LR
    A[Photo] --> B["Nemotron VL<br/>printed numbers + x,y position"]
    B --> C["RANSAC over triples<br/>circle + angle→value line"]
    C -->|drops the 2nd scale| D["Radial sweep<br/>720 angles, 0.4–0.88 r"]
    D --> E{matches the<br/>AI estimate?}
    E -->|yes| F[Reading + alarm + log]
    E -->|no, > 6 % of span| G[Review: drag the needle]
```

1. **AI, once per gauge.** Nemotron VL returns each scale number with its position (0-1000) plus its own reading estimate.
2. **Geometry.** RANSAC over number triples fits the dial circle and an angle-to-value line. Numbers that don't fit (a second scale, a logo) are discarded.
3. **Classic vision.** A radial sweep finds the highest-contrast direction from the hub; among in-range candidates, the AI estimate picks the tip over the tail.
4. **Cross-check.** If geometry and AI disagree by more than 6 % of the span, the page asks for review and lets you drag the tip.
5. **Fixed camera.** With a still camera the AI calibrates once and needle tracking runs in the browser many times per second, with no further API calls.

## Limits

- Round, single-needle gauges. No digital displays or multi-needle meters.
- Strong glare or very oblique photos hurt number location; the cross-check flags it.
- A reading aid for rounds, not a calibrated instrument.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole tool: RANSAC fit, radial sweep, fixed-camera mode, alarms and log. |
| `s/` | Sample photos with their cached scale reading. |
| `docs/` | Demo GIF and diagrams. |

Locally: `python3 -m http.server 8770`. Live scale reading uses [nv-gateway](https://github.com/JSNN15/nv-gateway).

## Credits

Sample photos (their authors' licenses): *Pressure gauge* (zimpenfish), *Back-Entry-Dial-Thermometer* (Public Domain Photos), *residual pressure gauge* (yawning hunter), *Under Pressure* (ThenAndAgain), *Pressure* (BinaryApe), *Increasing Pressure* and *That's all she's got captain!* (flattop341), *Gauge on a U-Boat* (quinet), CC BY 2.0 via Openverse.

In 7 of the 8 samples the geometric reading matches the AI's independent estimate. On the submarine gauge (kg/cm²) they disagree: geometry reads 0.63, which is correct, and the AI estimated 0.55. That is why the page flags "Revisar" (check) instead of picking one.

---

<sub>Personal project by **Julián Neira Nova**, electrical engineer with 10 years in mining operations · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nothing here comes from clients or employers.
[Portfolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [All tools](https://github.com/JSNN15)</sub>
