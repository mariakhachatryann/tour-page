import { defineStore } from "pinia";

export const useToursStore = defineStore("toursStore", {
    state: () => {
        return {
            tours: [
                { id: 0, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame1", desc: "Gyumri, Black Fortress, Harichavank", direction: "Gyumri" },
                { id: 1, title: "Amberd Fortress, Mount Aragats, Lake Kari, Aregi Dry Fruit and Eco-Snack factory, Saghmosavank Monastery, Armenian…", img: "frame2", desc: "Amberd Fortress, Aragats, Saghmosavank Monastery, Lake Kari", direction: "Amberd" },
                { id: 2, title: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", img: "frame1", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Khor Virap" },
                { id: 3, title: "Sightseeing and walking tour in Yerevan, Erebuni Museum and Fortress", img: "frame3", desc: "Yerevan, Erebeuni Museum  and Fortress", direction: "Yerevan" },
                { id: 4, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame1", desc: "Gyumri, Black Fortress, Harichavank", direction: "Gyumri" },
                { id: 5, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame1", desc: "Gyumri, Black Fortress, Harichavank", direction: "Gyumri" },
            ]
        }
    }
})

export const useHotelsStore = defineStore("hotelsStore", {
    state: () => {
        return {
            hotels: [
                { id: 0, title: "Best Western Plus Congress hotel", img: "hotel", direction: "Amberd", facilities: ["Pool", "Bar", "Breakfast", "Gym", "Wi-Fi", "Front desk 24/7", "Express check-in", "Lounge area", "In-room dining", "Daily housekeeping", "Non-smoking", "Safety deposit box", "Luggage storage"] },
                { id: 1, title: "Residence Inn by Marriott", img: "hotel1", direction: "Sevan", facilities: ["Pool", "Bar", "Breakfast", "Gym", "Wi-Fi", "Front desk 24/7", "Express check-in", "Lounge area", "In-room dining", "Daily housekeeping", "Non-smoking", "Safety deposit box", "Luggage storage"] },
                { id: 2, title: "Hilton Garden Inn", img: "hotel2", direction: "Dilijan", facilities: ["Pool", "Bar", "Breakfast", "Gym", "Wi-Fi", "Front desk 24/7", "Express check-in", "Lounge area", "In-room dining", "Daily housekeeping", "Non-smoking", "Safety deposit box", "Luggage storage"] },
                { id: 3, title: "Radisson Beach Resort Palm Jumeirah", img: "hotel3", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Gyumri", facilities: ["Pool", "Bar", "Breakfast", "Gym", "Wi-Fi", "Front desk 24/7", "Express check-in", "Lounge area", "In-room dining", "Daily housekeeping", "Non-smoking", "Safety deposit box", "Luggage storage"] },
                { id: 4, title: "Four Seasons Hotel", img: "hotel4", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Noravank", facilities: ["Pool", "Bar", "Breakfast", "Gym", "Wi-Fi", "Front desk 24/7", "Express check-in", "Lounge area", "In-room dining", "Daily housekeeping", "Non-smoking", "Safety deposit box", "Luggage storage"] },
                { id: 5, title: "Foxwoods Resort", img: "hotel5", desc: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", direction: "Tatev", facilities: ["Pool", "Bar", "Breakfast", "Gym", "Wi-Fi", "Front desk 24/7", "Express check-in", "Lounge area", "In-room dining", "Daily housekeeping", "Non-smoking", "Safety deposit box", "Luggage storage"] },
            ]
        }
    }
})