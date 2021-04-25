import React, {  useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import { getDeviceComments } from "../http/commentsAPI";
import Commentary from "./Commentary";
import {observer} from 'mobx-react-lite'
import { Context } from "..";

const Comments = observer(() => {
    const {id} = useParams()
    const {comments} = useContext(Context)
  useEffect(()=>{
    getDeviceComments(id).then(data=>comments.setDeviceComments(data))
  },[comments])
  
  //исследование технологическог процесса формирования фотокаталитических плазменно-электролитных покрытий на поверхности магниевых сплавов
  return (
    <Container>
      
      <div style={{ fontSize: 32 }}>Отзывы</div>
      {comments.deviceComments.length === 0 ? <p>Отзывов пока нет...</p>: null}
      {comments.deviceComments.map((commentary) => (
          <>
        <Commentary
        
          id={commentary.id}
          rate={commentary.rating}
          text={commentary.text}
          userId={commentary.userId}
          deviceId={commentary.deviceId}
          key={commentary.id}
        /> 
        </>
      ))}
    </Container>
  );
});

export default Comments;
