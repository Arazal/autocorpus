import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from "@material-ui/core/";

import img1 from "../../assets/polish/Paint.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} style={{ marginTop: "10px" }}>
        <Card
          className={classes.card}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "20px",
            width: "100%"
          }}
        >
          <CardActionArea>
            <CardMedia className={classes.media} image={img1} title="KRYTEX" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Эффективное устранение различных дефектов лакокрасочного
                покрытия
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Локальная покраска деталей автомобиля – это экономия времени и
                средств в сочетании с полным сохранением целостности
                производственной сборки. Закрашивание царапин, сколов и вмятин
                не переводит запчасти в статус «перекрашенных», а
                соответственно, цена авто при последующей продаже не будет
                занижена. Доверьте свое авто опытным мастерам!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper
        className={classes.root}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <Typography
          variant="h5"
          component="h3"
          style={{ marginBottom: "10px" }}
        >
          Локальная покраска кузова
        </Typography>
        <Typography component="p">
          Каждый автовладелец стремится оградить свою машину от неприятностей.
          Однако дорога непредсказуема. Если вы обнаружили на транспорте сколы
          или потертости, не стоит унывать. Такая услуга, как локальный окрас
          автомобиля в Москве, – способна решить многие проблемы, включая
          восстановление поврежденного кузова и ремонт бампера. Сегодня нет
          необходимости менять кузовные части или полностью перекрашивать машину
          при появлении мелких повреждений. Достаточно локальной покраски одной
          детали, которая представляет собой эффективное устранение дефектов
          лакокрасочного покрытия. Это могут быть потертости, царапины, сколы,
          небольшие вмятины и некоторые другие повреждения. Мастерская
          «Автокорпус» обслуживает машины в Москве – мы расположены на
          территории ЮАО.
        </Typography>
      </Paper>
    </Container>
  );
}
