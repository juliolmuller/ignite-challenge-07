import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [visibleImage, setVisibleImage] = useState('');
  const modalDisclosure = useDisclosure({
    isOpen: Boolean(visibleImage),
    onClose: () => setVisibleImage(''),
  });

  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3]} gap="10">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={setVisibleImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={visibleImage} {...modalDisclosure} />
    </>
  );
}
