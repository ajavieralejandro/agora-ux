import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import {Wrapper} from './member.styles';

const Member = ({teamMember}) => {

  const {img,nombre,apellido,rol,bio} = teamMember;

  return (
    <Card>
    <Image src={img}  wrapped ui={false} />
    <Card.Content>
      <Card.Header>{apellido} {nombre}</Card.Header>
      <Card.Meta>{rol}</Card.Meta>
      <Card.Description>
        bio: {bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
  );
}

export default Member;