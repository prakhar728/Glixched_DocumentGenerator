import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Container,
  TextField,
  createMuiTheme,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { createTemp, fetchTemplate } from "../../Actions/index";
import styles from "./Template.module.css";
const TemplateGenerator = () => {
  const [templateData, createTemplate] = useState({
    Name: "",
    CollegeName: "",
    Batch: "",
    Aim: "",
    Branch: "",
    RollNumber: 0,
    ExperimentNo: 0,
    Theory: "",
    Procedure: "",
    Appartus: "",
    Conclusion: "",
    Observation: "",
    Keyword: "",
  });
  const theme = createMuiTheme({
    overrides: {
      MuiGrid: {},
    },
  });
  return (
    <Container style={{ backgroundColor: "white" }}>
      <form noValidate autoComplete="off" className={styles.formContainer}>
        <Grid
          container
          direction="column"
          sm={12}
          justify="center"
          alignContent="center"
        >
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <TextField
                className={styles.gridItemSmall}
                required="True"
                name="Name"
                id="standard-required"
                label="Your Name"
                onChange={(e) =>
                  createTemplate({ ...templateData, Name: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                required
                className={styles.gridItemSmall}
                id="standard-required"
                label="College Name"
                onChange={(e) =>
                  createTemplate({
                    ...templateData,
                    CollegeName: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                required
                className={styles.gridItemSmall}
                id="standard-required"
                label="Branch"
                onChange={(e) =>
                  createTemplate({ ...templateData, Branch: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <TextField
                required
                className={styles.gridItemSmall}
                id="standard-required"
                label="Roll Number"
                onChange={(e) =>
                  createTemplate({
                    ...templateData,
                    RollNumber: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item>
              <TextField
              className={styles.gridItemSmall}
                required
                id="standard-required"
                label="Batch"
                onChange={(e) =>
                  createTemplate({ ...templateData, Batch: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                required
                className={styles.gridItemSmall}
                id="standard-required"
                label="Experiment Number"
                onChange={(e) =>
                  createTemplate({
                    ...templateData,
                    ExperimentNo: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>

          <Grid item sm={12}>
            <TextField
              required
              id="standard-required"
              label="Aim"
              rowsMax="3"
              multiline="True"
              className={styles.gridItem}
              size="large"
              onChange={(e) =>
                createTemplate({ ...templateData, Aim: e.target.value })
              }
            />
          </Grid>

          <Grid item>
            <TextField
              required
              id="standard-required"
              label="Theory"
              rowsMax="3"
              multiline="True"
              className={styles.gridItem}
              onChange={(e) =>
                createTemplate({ ...templateData, Theory: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-required"
              label="Procedure"
              className={styles.gridItem}
              rowsMax="3"
              multiline="True"
              onChange={(e) =>
                createTemplate({ ...templateData, Procedure: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-required"
              rowsMax="3"
              label="Observation"
              className={styles.gridItem}
              multiline="True"
              onChange={(e) =>
                createTemplate({ ...templateData, Observation: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-required"
              rowsMax="3"
              label="Apparatus"
              className={styles.gridItem}
              multiline="True"
              onChange={(e) =>
                createTemplate({ ...templateData, Appartus: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-required"
              label="Conclusion"
              className={styles.gridItem}
              size="medium"
              rowsMax="3"
              multiline="True"
              required
              onChange={(e) =>
                createTemplate({ ...templateData, Conclusion: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-required"
              label="Keyword to be Used"
              className={styles.gridItemSmall}
              required
              onChange={(e) =>
                createTemplate({ ...templateData, Keyword: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Container className={styles.ButtonContainer}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<SendIcon />}
            type="Submit"
            onClick={(e) => {
              e.preventDefault();
              createTemp(templateData);
            }}
          >
            Submit
          </Button>
          <Button
            className={styles.Button}
            variant="contained"
            size="medium"
            color="secondary"
            endIcon={<SendIcon />}
            onClick={(e) => {
              e.preventDefault();
              fetchTemplate();
            }}
          >
            Get PDF
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default TemplateGenerator;
