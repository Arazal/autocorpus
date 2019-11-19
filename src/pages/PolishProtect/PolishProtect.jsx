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

import img1 from "../../assets/polish/KRYTEX.PNG";

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
        <Typography variant="h5" component="h3">
          Антидождь, Антигрязь, Антилед
        </Typography>
        <Typography component="p">
          уменьшает запотевание до 65%; уменьшает загрязнение и существенно
          упрощает очистку; уменьшает использование стеклоомывающей жидкости до
          10 раз; увеличивает срок службы дворников в 5 раз; улучшает видимость
          во время движения в непогоду.
        </Typography>
      </Paper>

      <Paper className={classes.root} style={{ marginTop: "10px" }}>
        <Typography variant="h5" component="h3">
          Титановое защитное покрытие для ЛКП.
        </Typography>
        <Typography component="p">
          защищает краску от выгорания и сохраняет естественный цвет; уменьшает
          вероятность возникновения сколов; уменьшает риск образования и
          развития коррозии; снижает риск повреждения ЛКП на мойках с низким
          качеством химии и низким уровнем подготовки мойщиков; создает эффект
          антиграффити (от 2 слоев); усиливает блеск, глубину и насыщенность
          цвета ЛКП.
        </Typography>
      </Paper>
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
                В работе используем KRYTEX
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Свойства: защищает краску от выгорания и сохраняет естественный
                цвет; уменьшает вероятность возникновения сколов; уменьшает риск
                образования и развития коррозии; снижает риск повреждения ЛКП на
                мойках с низким качеством химии и низким уровнем подготовки
                мойщиков; создает эффект антиграффити (от 2 слоев); усиливает
                блеск, глубину и насыщенность цвета ЛКП
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Container>
  );
}
