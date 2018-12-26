const sampleData = {
  restaurants: [
    {
      id: "1",
      name: "Dinemore",
      phone: "085 3535 699",
      address: {
        city: "Kandy, SL",
        street: "Dinemore, 15 George E De Silva Mawatha, Kandy"
      },
      tbr: true,
      avg_cost: 1000,
      placeLatLng: {
        lat: 7.2875,
        lng: 80.6231
      },
      likes: 150,
      cuisines: ["American", "Fast Food"],
      additionalInfo: ["Breakfast", "Brunch", "Private Dining Area Available"],
      description:
        "Grabbing brunch or just stopping by for a drink - 'Dinemore' brings out an exciting, and effervescent vibe to the dining experience."
    },
    {
      id: "2",
      name: "Open Rice",
      phone: "085 3885 799",
      address: {
        city: "Kandy, SL",
        street: "Open Rice Sri Lanka, 701/A, Peradeniye Road, 20000"
      },
      tbr: false,
      avg_cost: 1000,
      placeLatLng: {
        lat: 7.28,
        lng: 80.6192
      },
      likes: 150,
      cuisines: ["Chinese", "Indian"],
      additionalInfo: ["Breakfast", "Brunch", "Private Dining Area Available"],
      description:
        "Centrally located OpenRice is a Restaurant with specialty in multi delicious Cuisine created with the ingenuity and passion inspired by the fantastic flavors."
    }
  ]
};

export default sampleData;
