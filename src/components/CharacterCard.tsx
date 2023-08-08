/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Link, useNavigate } from "react-router-dom";
import { NewCharacter } from "../types/character";
import { deleteCharacter } from "../lib/controller";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Stack, Image, Text, Progress } from "@chakra-ui/react";

interface IProps {
  character: NewCharacter;
  detailsPage?: boolean;
}

function Character({ character }: IProps) {

  const navigate = useNavigate();

  return (

    <div className="flex items-center justify-center">
      <Card
        className="mb-10"
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        borderRadius='lg'
        padding="5px"
      >
        <Image
          src={character.avatar}
          borderRadius='lg'
          boxSize='500px'
        />
        <Stack>
          <CardBody>
            <Heading className="mb-3" size='2xl'>{character.name}</Heading>
            <Text className="mb-3" fontSize='2xl'>
              {character.role}
            </Text>
            <Text className="mb-5" fontSize='medium'>
              "{character.dicton}"
            </Text>
            <Text className="ml-12" maxW="md" style={{ textAlign: 'justify' }}>
              {character.description}
            </Text>
            <div className="mt-10">
              <Text>Niveau : {character.level ? character.level / 10 : 0}/ 10</Text>
              <Progress value={character.level} />
            </div>
          </CardBody>
          <CardFooter>

            <ButtonGroup spacing='80'>

              <Link to={`/character/${character.id}`} state={{ character: character }}>
                <Button variant='solid' colorScheme='blue'>
                  En savoir plus
                </Button>
              </Link>
              <Button variant='solid' colorScheme='red'
                onClick={() => deleteCharacter(character.id, navigate)}>
                Supprimer
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </div >

  );
}

export default Character;