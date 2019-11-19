import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Удаление вмятин без покраски
          </Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Удаление вмятин без покраски
          </Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Вмятины на кузове? Да, проблема. Еще вчера автомобиль выглядел будто
            только сошедший с конвейера, а через несколько дней «простоя» на СТО
            попадет в категорию битых, крашеных, ремонтированных... Или Вы
            обратитесь к нам за беспокрасочным удалением вмятин и Ваше авто
            станет таким же, как в день покупки. Мы предлагаем достойную
            альтернативу традиционной рихтовке – удаление вмятин без покраски в
            Москве по уникальной немецко-американской технологии PDR/DOL.
            Быстро, недорого, качественно.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Механическая полировка автомобиля
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Последовательность операций при полировке автомобиля в Москве
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Очищаем машину от разного рода загрязнений и пятен с последующей
            сушкой вымытой поверхности. Наши мастера втирают абразивные пасты в
            поврежденные участки кузова авто. Выполняем шлифовку обработанной
            поверхности. При необходимости поочередно используем различные
            абразивные пасты и повторную шлифовку для достижения идеальной
            гладкости. Наносим силиконовое покрытие, чтобы вернуть поверхностям
            блеск. Для того чтобы сохранить ваше авто в первоначальном виде как
            можно дольше, мы рекомендуем после абразивных работ нанести на авто
            защитный слой. Стоимость полировки автомобиля от царапин мы назовем
            после того, как мастер осмотрит поверхности и согласует с вами план
            работ. Мы предлагаем выгодные цены на профессиональные услуги
            авторемонта в Москве – ждем вас в своей мастерской в ЮАО в удобное
            для вас время!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Локальная покраска кузова
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Локальная покраска деталей в «Автокорпус»
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Наш автосервис располагает командой квалифицированных специалистов.
            Мы работаем в центральной части Москвы, в ЮАО, уже более 8 лет. Цена
            предоставляемых нами услуг всегда разумна, а качество – неизменно на
            высоте. Выполняя покрасочные работы, наши мастера используют
            оборудование от ведущих мировых брендов и материалы, прошедшие
            испытания временем. Результаты нашей работы сопровождаются
            соответствующими гарантиями. Локальная покраска деталей автомобиля –
            это экономия времени и средств в сочетании с полным сохранением
            целостности производственной сборки. Закрашивание царапин, сколов и
            вмятин не переводит запчасти в статус «перекрашенных», а
            соответственно, цена авто при последующей продаже не будет занижена.
            Доверьте свое авто опытным мастерам!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Защитная полировка автомобиля
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Виды защиты кузова от царапин и сколов
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Полимерная пленка. «Жидкое стекло». Керамическое покрытие. Наши
            специалисты используют исключительно высококачественные материалы и
            передовые технологии, которые подбираются с учетом особенностей
            отечественных дорог. На каждую автомашину негативно влияют кислотные
            дожди, зимние реагенты, лучи солнечного света и прочие внешние
            факторы. Все они заставляют лакокрасочный слой тускнеть, а если
            появляются царапины и сколы, на них быстро образуется ржавчина.
            После многочисленных тестирований и исследований мы определили
            лучшие виды защиты, которые с уверенностью используются нами в
            центре. Специалисты с радостью помогут транспортному средству
            обрести новую жизнь, в которой не будет места тусклому цвету,
            ржавчине и прочим неприятным сюрпризам. Вас ждут доступные цены на
            защитную полировку автомобиля – вы не найдете прайсов выгоднее в
            пределах ЮАО, да и всей Москвы. Вместе с тем мы гарантируем
            безукоризненное качество защитной полировки кузова – технологический
            процесс отточен нашими мастерами до ювелирного совершенства!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
