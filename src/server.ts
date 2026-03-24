import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
   // methods: ["GET", "POST"]
});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "RB (Visa Cash App RB)", base: "Faenza, Italy" },
    { id: 8, name: "Haas", base: "Kannapolis, United States" },
    { id: 9, name: "Williams", base: "Grove, United Kingdom" },
    { id: 10, name: "Kick Sauber", base: "Hinwil, Switzerland" },
];

const drivers = [
    { id: 1, name: "Lando Norris", base: "McLaren" },
    { id: 2, name: "Oscar Piastri", base: "McLaren" },
    { id: 3, name: "Max Verstappen", base: "Red Bull Racing" },
    { id: 4, name: "Isack Hadjar", base: "Red Bull Racing" },
    { id: 5, name: "Lewis Hamilton", base: "Ferrari" },
    { id: 6, name: "Charles Leclerc", base: "Ferrari" },
    { id: 7, name: "George Russell", base: "Mercedes" },
    { id: 8, name: "Kimi Antonelli", base: "Mercedes" },
    { id: 9, name: "Fernando Alonso", base: "Aston Martin" },
    { id: 10, name: "Lance Stroll", base: "Aston Martin" },
    { id: 11, name: "Pierre Gasly", base: "Alpine" },
    { id: 12, name: "Franco Colapinto", base: "Alpine" },
    { id: 13, name: "Carlos Sainz", base: "Williams" },
    { id: 14, name: "Alexander Albon", base: "Williams" },
    { id: 15, name: "Esteban Ocon", base: "Haas" },
    { id: 16, name: "Oliver Bearman", base: "Haas" },
    { id: 17, name: "Liam Lawson", base: "Racing Bulls" },
    { id: 18, name: "Arvid Lindblad", base: "Racing Bulls" },
    { id: 19, name: "Nico Hülkenberg", base: "Audi" },
    { id: 20, name: "Gabriel Bortoleto", base: "Audi" },
    { id: 21, name: "Sergio Pérez", base: "Cadillac" },
    { id: 22, name: "Valtteri Bottas", base: "Cadillac" }
];

server.get("/teams", async(request, response) =>{
    response.type("application/json").code(200);
    return{teams};
});
server.get("/drivers", async(request, response) =>{
    response.type("application/json").code(200);
    return {drivers};
});

interface DriverParams {
    id: string
}

server.get<{Params: DriverParams}>(
    "/drivers/:id",
     async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

        if(!driver){
    response.type("application/json").code(404);
    return { message: "Driver Not Found"}
        }else{
        response.type("application/json").code(200); 
        return {driver};
        }
    }
);
interface TeamsParams {
    id: string
}

server.get<{Params: TeamsParams}>(
    "/teams/:id",
     async(request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find((d) => d.id === id);

        if(!team){
    response.type("application/json").code(404);
    return { message: "Driver Not Found"}
        }else{
        response.type("application/json").code(200); 
        return {team};
        }
    }
);

server.listen({port:3333}, () => {
    console.log("Server init")
})