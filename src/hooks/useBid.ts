const useBid = () => {
  interface CardItem {
    id: number;
    title: string;
    name: string;
    subtitle: string;
    color: string;
    coconut: string;
    price: string;
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
          price: '50',
        },
        {
          id: 2,
          title: '1.30€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#4ABF40',
          coconut: '= 6 000',
          price: '100',
        },
        {
          id: 3,
          title: '250€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#C7577C',
          coconut: '= 6 000',
          price: '200',
        },
        {
          id: 4,
          title: '490€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#EBBD57',
          coconut: '= 6 000',
          price: '500',
        },
      ],
    },
    {
      title: 'Demain',
      data: [
        {
          id: 5,
          title: '600€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#3C4868',
          coconut: '= 6 000',
          price: '50',
        },
        {
          id: 6,
          title: '1.30€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#4ABF40',
          coconut: '= 6 000',
          price: '100',
        },
        {
          id: 7,
          title: '250€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#C7577C',
          coconut: '= 6 000',
          price: '200',
        },
        {
          id: 8,
          title: '490€',
          name: 'Prix magasin',
          subtitle: 'Bientôt disponible',
          color: '#EBBD57',
          coconut: '= 6 000',
          price: '500',
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
  return {
    sections,
    groupData,
  };
};
export default useBid;
