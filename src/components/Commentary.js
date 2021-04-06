import React from 'react';
import {Card, Image} from 'react-bootstrap'
import star from '../assets/star.png'

const Commentary = ({id, rate, text, userId}) => {
  
    return (
        <Card className="p-3 m-1">
        <div style={{fontSize: 24}} className="d-flex align-items-center justify-content-between">
            <div>Пользователь: {userId} Отзыв #{id}</div>
            <div className="d-flex align-items-center">Оценка {rate}<Image src={star} width={24}/></div>
        </div>
        <div>
          {text}
        </div>
      </Card>
    );
};

export default Commentary;