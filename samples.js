// Ejemplos de demostración: imagen, crédito y licencia de cada caso.
const SAMPLES = [
  {
    "img": "s/g0.jpg",
    "credit": "Pressure gauge · zimpenfish · CC BY 2.0",
    "link": "https://www.flickr.com/photos/12708857@N00/490405017",
    "result": {
      "instrumento": "manómetro",
      "unidad": "libras por pulgada cuadrada (PSI)",
      "escala_min": 0,
      "escala_max": 300,
      "numeros": [
        {
          "v": 0,
          "x": 375,
          "y": 320
        },
        {
          "v": 50,
          "x": 375,
          "y": 255
        },
        {
          "v": 100,
          "x": 450,
          "y": 290
        },
        {
          "v": 150,
          "x": 500,
          "y": 235
        },
        {
          "v": 200,
          "x": 550,
          "y": 290
        },
        {
          "v": 250,
          "x": 625,
          "y": 255
        },
        {
          "v": 300,
          "x": 650,
          "y": 320
        }
      ],
      "valor_estimado": 150,
      "confianza": "alta",
      "problemas": ""
    }
  },
  {
    "img": "s/g1.jpg",
    "credit": "Back-Entry-Dial-Thermometer__11461 · Public Domain Photos · CC BY 2.0",
    "link": "https://www.flickr.com/photos/28958738@N06/6962971591",
    "result": {
      "instrumento": "termómetro",
      "unidad": "°C",
      "escala_min": 0,
      "escala_max": 120,
      "numeros": [
        {
          "v": 0,
          "x": 185,
          "y": 605
        },
        {
          "v": 20,
          "x": 165,
          "y": 500
        },
        {
          "v": 40,
          "x": 220,
          "y": 395
        },
        {
          "v": 60,
          "x": 320,
          "y": 355
        },
        {
          "v": 80,
          "x": 415,
          "y": 415
        },
        {
          "v": 100,
          "x": 435,
          "y": 530
        },
        {
          "v": 120,
          "x": 385,
          "y": 630
        }
      ],
      "valor_estimado": 20,
      "confianza": "alta",
      "problemas": ""
    }
  },
  {
    "img": "s/g2.jpg",
    "credit": "residual pressure gauge · yawning hunter · CC BY 2.0",
    "link": "https://www.flickr.com/photos/192679240@N05/52441447645",
    "result": {
      "instrumento": "manómetro",
      "unidad": "bar",
      "escala_min": 0,
      "escala_max": 300,
      "numeros": [
        {
          "v": 0,
          "x": 270,
          "y": 475
        },
        {
          "v": 50,
          "x": 330,
          "y": 430
        },
        {
          "v": 100,
          "x": 390,
          "y": 455
        },
        {
          "v": 150,
          "x": 435,
          "y": 515
        },
        {
          "v": 200,
          "x": 430,
          "y": 595
        },
        {
          "v": 250,
          "x": 395,
          "y": 670
        },
        {
          "v": 300,
          "x": 330,
          "y": 705
        }
      ],
      "valor_estimado": 0,
      "confianza": "alta",
      "problemas": "reflejos, ángulo"
    }
  },
  {
    "img": "s/g3.jpg",
    "credit": "Under Pressure · ThenAndAgain · CC BY 2.0",
    "link": "https://www.flickr.com/photos/22606501@N00/60636479",
    "result": {
      "instrumento": "manómetro",
      "unidad": "psi",
      "escala_min": 0,
      "escala_max": 100,
      "numeros": [
        {
          "v": 10,
          "x": 285,
          "y": 675
        },
        {
          "v": 20,
          "x": 235,
          "y": 550
        },
        {
          "v": 30,
          "x": 240,
          "y": 410
        },
        {
          "v": 40,
          "x": 310,
          "y": 290
        },
        {
          "v": 50,
          "x": 430,
          "y": 210
        },
        {
          "v": 60,
          "x": 590,
          "y": 205
        },
        {
          "v": 70,
          "x": 685,
          "y": 285
        },
        {
          "v": 80,
          "x": 765,
          "y": 395
        },
        {
          "v": 90,
          "x": 785,
          "y": 535
        },
        {
          "v": 100,
          "x": 740,
          "y": 660
        }
      ],
      "valor_estimado": 65,
      "confianza": "alta",
      "problemas": ""
    }
  },
  {
    "img": "s/g4.jpg",
    "credit": "Pressure · BinaryApe · CC BY 2.0",
    "link": "https://www.flickr.com/photos/93001633@N00/2915056465",
    "result": {
      "instrumento": "manómetro",
      "unidad": "lb/in²",
      "escala_min": 0,
      "escala_max": 160,
      "numeros": [
        {
          "v": 0,
          "x": 300,
          "y": 575
        },
        {
          "v": 20,
          "x": 285,
          "y": 490
        },
        {
          "v": 40,
          "x": 295,
          "y": 400
        },
        {
          "v": 60,
          "x": 325,
          "y": 325
        },
        {
          "v": 80,
          "x": 385,
          "y": 300
        },
        {
          "v": 100,
          "x": 440,
          "y": 340
        },
        {
          "v": 120,
          "x": 470,
          "y": 425
        },
        {
          "v": 140,
          "x": 465,
          "y": 505
        },
        {
          "v": 160,
          "x": 440,
          "y": 585
        }
      ],
      "valor_estimado": 115,
      "confianza": "media",
      "problemas": "reflejos, suciedad en el vidrio, ángulo de visión"
    }
  },
  {
    "img": "s/g5.jpg",
    "credit": "Increasing Pressure · flattop341 · CC BY 2.0",
    "link": "https://www.flickr.com/photos/46861107@N00/236611537",
    "result": {
      "instrumento": "manómetro",
      "unidad": "psi",
      "escala_min": 0,
      "escala_max": 100,
      "numeros": [
        {
          "v": 0,
          "x": 532,
          "y": 690
        },
        {
          "v": 10,
          "x": 458,
          "y": 650
        },
        {
          "v": 20,
          "x": 398,
          "y": 600
        },
        {
          "v": 30,
          "x": 360,
          "y": 510
        },
        {
          "v": 40,
          "x": 360,
          "y": 390
        },
        {
          "v": 50,
          "x": 390,
          "y": 310
        },
        {
          "v": 60,
          "x": 450,
          "y": 250
        },
        {
          "v": 70,
          "x": 530,
          "y": 220
        },
        {
          "v": 80,
          "x": 620,
          "y": 260
        },
        {
          "v": 90,
          "x": 670,
          "y": 350
        },
        {
          "v": 100,
          "x": 690,
          "y": 470
        }
      ],
      "valor_estimado": 68,
      "confianza": "media",
      "problemas": "reflejos en el vidrio, ángulo de visión oblicuo"
    }
  },
  {
    "img": "s/g6.jpg",
    "credit": "Gauge on a U-Boat · quinet · CC BY 2.0",
    "link": "https://www.flickr.com/photos/91994044@N00/15633105576",
    "result": {
      "instrumento": "manómetro",
      "unidad": "kg/cm²",
      "escala_min": 0,
      "escala_max": 1,
      "numeros": [
        {
          "v": 0,
          "x": 420,
          "y": 595
        },
        {
          "v": 0.2,
          "x": 410,
          "y": 440
        },
        {
          "v": 0.4,
          "x": 470,
          "y": 320
        },
        {
          "v": 0.6,
          "x": 580,
          "y": 320
        },
        {
          "v": 0.8,
          "x": 640,
          "y": 440
        },
        {
          "v": 1,
          "x": 630,
          "y": 575
        }
      ],
      "valor_estimado": 0.55,
      "confianza": "alta",
      "problemas": ""
    }
  },
  {
    "img": "s/g7.jpg",
    "credit": "That's all she's got captain! · flattop341 · CC BY 2.0",
    "link": "https://www.flickr.com/photos/46861107@N00/352434816",
    "result": {
      "instrumento": "manómetro",
      "unidad": "psi",
      "escala_min": 0,
      "escala_max": 200,
      "numeros": [
        {
          "v": 20,
          "x": 360,
          "y": 620
        },
        {
          "v": 40,
          "x": 290,
          "y": 550
        },
        {
          "v": 60,
          "x": 260,
          "y": 450
        },
        {
          "v": 80,
          "x": 270,
          "y": 350
        },
        {
          "v": 100,
          "x": 310,
          "y": 260
        },
        {
          "v": 120,
          "x": 380,
          "y": 200
        },
        {
          "v": 140,
          "x": 450,
          "y": 190
        },
        {
          "v": 160,
          "x": 530,
          "y": 230
        },
        {
          "v": 180,
          "x": 590,
          "y": 310
        },
        {
          "v": 200,
          "x": 610,
          "y": 420
        }
      ],
      "valor_estimado": 95,
      "confianza": "media",
      "problemas": "reflejos, suciedad, ángulo oblicuo"
    }
  }
];
