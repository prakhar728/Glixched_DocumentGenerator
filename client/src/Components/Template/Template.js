import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Container,
  FormControl,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { createTemp,fetchTemplate} from "../../Actions/index";
const TemplateGenerator = () => {
  const [templateData, createTemplate] = useState({
    Name: "",
    CollegeName: "",
    Batch: "",
    Aim: "",
    Branch:"",
    RollNumber:0,
    ExperimentNo: 0,
    Theory: "",
    Procedure: "",
    Appartus: "",
    Conclusion: "",
    Observation:"",
  });

  return (
    <Container style={{ backgroundColor: "white" }}>
      <form noValidate autoComplete="off">
        <Grid container direction="column">
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <TextField
                required
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
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="Branch"
                onChange={(e) =>
                  createTemplate({ ...templateData, Branch: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="Roll Number"
                onChange={(e) =>
                  createTemplate({ ...templateData, RollNumber: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="standard-required"
                label="Batch"
                onChange={(e) =>
                  createTemplate({ ...templateData, Batch: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid item sm={8}>
            <TextField
              required
              id="standard-required"
              label="Aim"
              onChange={(e) =>
                createTemplate({ ...templateData, Aim: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
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
          <Grid item>
            <TextField
              id="standard-required"
              label="Theory"
              onChange={(e) =>
                createTemplate({ ...templateData, Theory: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-required"
              label="Procedure"
              onChange={(e) =>
                createTemplate({ ...templateData, Procedure: e.target.value })
              }
            />
          </Grid>
        </Grid>
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
      </form>
    </Container>
  );
};

export default TemplateGenerator;
