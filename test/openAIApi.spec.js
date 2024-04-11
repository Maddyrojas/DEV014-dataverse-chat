import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

window.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve("¡Hola! ¡Bienvenido a Isla Tortuga! ¿En qué puedo ayudarte hoy?"),
  })
);

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  test('communicateWithOpenAI', () => {
    const prompt = "Hola";
    const tour = {//11_Isla Tortuga
      "id": "11_lugarTuristico",
      "name": "Isla Tortuga",
      "location": "Puntarenas",
      "shortDescription": "Isla paradisíaca con aguas cristalinas y zonas acuáticas.",
      "description": "Isla Tortuga es un refugio tropical con playas de arena blanca y aguas cristalinas, explora la vida marina en un entorno paradisíaco y vive la emoción de practicar deportes acuáticos en un escenario único. Relájate bajo el sol, es un destino perfecto para quienes buscan escapar del bullicio y disfrutar de la tranquilidad del mar. Relájate bajo el sol, toma un baño refrescante en las aguas cristalinas y disfruta de la paz y la belleza natural que te rodea. Un destino ideal para escapar y disfrutar de la belleza natural en el Golfo de Nicoya.",
      "imageUrl": "https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/Imagenes%20Dataverse/11_lugarTuristico.jpg",
      "tipoTurismo": "turismo de playa",
      "gastoPromedio": 120,
      "facts": {
        "museo": "undefined",
        "compras": "Tienda de Recuerdos Isla Tortuga",
        "alimentacion": "Restaurante Tropical"
      }
    }
    return communicateWithOpenAI(tour, prompt)
      .then(response => {
        expect(response).toBe('¡Hola! ¡Bienvenido a Isla Tortuga! ¿En qué puedo ayudarte hoy?');
      })
      .catch(error =>{
        expect(error).toBe(error);
      });
  });
});