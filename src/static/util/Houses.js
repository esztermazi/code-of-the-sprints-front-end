const Houses = {
  name: 'Houses',
  children: [
    {
      name: 'Lords of Andúnie',
      children: [
        {
          name: 'Isildur',
          children: [
            {
              name: 'Arvendui',
              children: [
                {
                  name: 'Aragorn',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Bëor',
      children: [
        {
          name: 'Echtelion',
          children: [
            {
              name: 'Denethor',
              children: [
                {
                  name: 'Boromir',
                },
                {
                  name: 'Faramir',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Thengel',
      children: [
        {
          name: 'Théoden',
          children: {
            name: 'Théodred',
          },
        },
        {
          name: 'Éomund',
          children: [
            {
              name: 'Éomer',
            },
            {
              name: 'Éowyn',
            },
          ],
        },
        {
          name: 'Théodwyn',
        },
      ],
    },
  ],
};

export default Houses;
