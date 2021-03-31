import React from 'react';
import {Card, Image} from 'react-bootstrap'
import star from '../assets/star.png'

const Commentary = ({id, rate, text, userId, deviceId}) => {
    const email = `exa***@**.ru`
    return (
        <Card className="p-3 m-1">
        <div style={{fontSize: 24}} className="d-flex align-items-center justify-content-between">
            <div>Пользователь: {id} Email: {email}</div>
            <div className="d-flex align-items-center">Оценка {rate}<Image src={star} width={24}/></div>
        </div>
        <div>
          Отзыв ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium
          semper justo et commodo. In sed condimentum diam. Nulla maximus nunc
          ac dui sodales ultrices. Curabitur cursus blandit tortor eget rutrum.
          Sed nibh eros, pretium id interdum in, molestie tempor est. Etiam
          lacinia dignissim ipsum, in condimentum lacus rhoncus quis.
        </div>
      </Card>
    );
};

export default Commentary;