import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
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
    Apparatus: "",
    Conclusion: "",
    Observation: "",
    Keyword: "",
  });
  
  return (
    <Container style={{ backgroundColor: "white" }} className={styles.Container}>
      <form noValidate autoComplete="off" className={styles.formContainer}>
        <div className={styles.divContainer}>
          <div className={styles.divLeft}>
            <TextField
              variant="outlined"
              className={styles.field}
              required="True"
              name="Name"
              id="standard-required"
              label="Your Name"
              onChange={(e) =>
                createTemplate({ ...templateData, Name: e.target.value })
              }
            />
            <TextField
              required
              variant="outlined"
              className={styles.field}
              id="standard-required"
              label="College Name"
              onChange={(e) =>
                createTemplate({
                  ...templateData,
                  CollegeName: e.target.value,
                })
              }
            />
            <TextField
              variant="outlined"
              required
              className={styles.field}
              id="standard-required"
              label="Branch"
              onChange={(e) =>
                createTemplate({ ...templateData, Branch: e.target.value })
              }
            />
          </div>
          <div className={styles.divRight}>
            <TextField
              required
              variant="outlined"
              className={styles.field}
              id="standard-required"
              label="Roll Number"
              onChange={(e) =>
                createTemplate({
                  ...templateData,
                  RollNumber: e.target.value,
                })
              }
            />

            <TextField
              variant="outlined"
              className={styles.field}
              required
              id="standard-required"
              label="Batch"
              onChange={(e) =>
                createTemplate({ ...templateData, Batch: e.target.value })
              }
            />

            <TextField
              required
              variant="outlined"
              className={styles.field}
              id="standard-required"
              label="Experiment Number"
              onChange={(e) =>
                createTemplate({
                  ...templateData,
                  ExperimentNo: e.target.value,
                })
              }
            />
          </div>
        </div>

        <TextField
          variant="outlined"
          required
          id="standard-required"
          label="Aim"
          rowsMax="3"
          multiline="True"
          className={styles.fieldLong}
          size="large"
          onChange={(e) =>
            createTemplate({ ...templateData, Aim: e.target.value })
          }
        />

        <TextField
          required
          variant="outlined"
          id="standard-required"
          label="Theory"
          rowsMax="3"
          multiline="True"
          className={styles.fieldLong}

          onChange={(e) =>
            createTemplate({ ...templateData, Theory: e.target.value })
          }
        />

        <TextField
          required
          id="standard-required"
          variant="outlined"
          label="Procedure"
          className={styles.fieldLong}

          rowsMax="3"
          multiline="True"
          onChange={(e) =>
            createTemplate({ ...templateData, Procedure: e.target.value })
          }
        />

        <TextField
          required
          id="standard-required"
          variant="outlined"
          rowsMax="3"
          label="Observation"
          className={styles.fieldLong}

          multiline="True"
          onChange={(e) =>
            createTemplate({ ...templateData, Observation: e.target.value })
          }
        />

        <TextField
          required
          id="standard-required"
          variant="outlined"
          rowsMax="3"
          label="Apparatus"
          className={styles.fieldLong}

          multiline="True"
          onChange={(e) =>
            createTemplate({ ...templateData, Apparatus: e.target.value })
          }
        />

        <TextField
          id="standard-required"
          variant="outlined"
          label="Conclusion"
          className={styles.fieldLong}

          size="medium"
          rowsMax="3"
          multiline="True"
          required
          onChange={(e) =>
            createTemplate({ ...templateData, Conclusion: e.target.value })
          }
        />

        <TextField
          variant="outlined"
          id="standard-required"
          label="Keyword to be Used"
          className={styles.fieldLong}

          required
          onChange={(e) =>
            createTemplate({ ...templateData, Keyword: e.target.value })
          }
        />

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
            className={styles.button}
          >
            Submit
          </Button>
          <Button
            className={styles.Button}
            variant="contained"
            size="medium"
            color="secondary"
            endIcon={<SendIcon />}
            className={styles.button}

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
