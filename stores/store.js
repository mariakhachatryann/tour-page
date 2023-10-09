import { defineStore } from "pinia";

export const useToursStore = defineStore("toursStore", {
    state: () => {
        return {
            tours: [
                { id: 0, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame1", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Amberd" },
                { id: 1, title: "Amberd Fortress, Mount Aragats, Lake Kari, Aregi Dry Fruit and Eco-Snack factory, Saghmosavank Monastery, Armenian…", img: "frame2", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Sevan" },
                { id: 2, title: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", img: "frame1", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Dilijan" },
                { id: 3, title: "Sightseeing and walking tour in Yerevan, Erebuni Museum and Fortress", img: "frame3", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Gyumri" },
                { id: 4, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame1", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Noravank" },
                { id: 5, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame1", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Tatev" },
            ]
        }
    }
})