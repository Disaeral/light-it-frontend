import React, {  useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import { getDeviceComments } from "../http/commentsAPI";
import Commentary from "./Commentary";
import {observer} from 'mobx-react-lite'

const Comments = observer(() => {
    const {id} = useParams()
  const [comments, setComments] = useState([])
  useEffect(()=>{
    getDeviceComments(id).then(data=>setComments(data))
  },[id])
  //исследование технологическог процесса формирования фотокаталитических плазменно-электролитных покрытий на поверхности магниевых сплавов
  return (
    <Container>
      {console.log(comments)}
      <div style={{ fontSize: 32 }}>Отзывы</div>
      {comments.length === 0 ? <p>Отзывов пока нет...</p>: null}
      {console.log(comments)}
      {comments.map((commentary) => (
          
        <Commentary
          id={commentary.id}
          rate={commentary.rating}
          text={commentary.text}
          userId={commentary.userId}
          deviceId={commentary.deviceId}
          key={commentary.id}
        /> 
      ))}
    </Container>
  );
});

export default Comments;
