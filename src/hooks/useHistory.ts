const useHistory = () => {
  interface CardItem {
    id: number;
    title: string;
    name: string;
    textMessage: string;
    subtitle: string;
    color: string;
    coconut: string;
    price: string;
    participation: string;
    soldPrice: string;
    winner: string;
    role: string;
    date: string;
    bid: string;
    location: string;
  }
  interface Section {
    title: string;
    data: CardItem[];
  }
  const sections: Section[] = [
    {
      title: "Aujourd'hui",
      data: [
        {
          id: 1,
          title: '600€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#3C4868',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '50',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Gui',
          date: '19/03/24',
          location: 'Pari',
        },
        {
          id: 2,
          title: '1.30€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#4ABF40',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '100',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Non',
          date: '19/03/24',
          location: 'Pari',
        },
        {
          id: 3,
          title: '250€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#C7577C',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '200',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Gui',
          date: '19/03/24',
          location: 'Pari',
        },
        {
          id: 4,
          title: '490€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#EBBD57',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '500',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Non',
          date: '19/03/24',
          location: 'Pari',
        },
      ],
    },
    {
      title: 'Hier',
      data: [
        {
          id: 5,
          title: '600€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#3C4868',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '50',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Non',
          date: '19/03/24',
          location: 'Pari',
        },
        {
          id: 6,
          title: '1.30€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#4ABF40',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '100',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Non',
          bid: '156',
          date: '19/03/24',
          location: 'Pari',
        },
        {
          id: 7,
          title: '250€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#C7577C',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '200',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Non',
          date: '19/03/24',
          location: 'Pari',
        },
        {
          id: 8,
          title: '490€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#EBBD57',
          coconut: '= 6 000',
          textMessage: 'Gagnant de l’enchère',
          price: '500',
          bid: '156',
          participation: '198.5',
          soldPrice: '2 540',
          winner: 'Jacques la malice',
          role: 'Non',
          date: '19/03/24',
          location: 'Pari',
        },
      ],
    },
  ];

  const groupData = (data: CardItem[]): CardItem[][] => {
    const grouped: CardItem[][] = [];
    for (let i = 0; i < data.length; i += 2) {
      grouped.push(data.slice(i, i + 2));
    }
    return grouped;
  };

  return {sections, groupData};
};
export default useHistory;
