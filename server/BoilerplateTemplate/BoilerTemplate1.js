const page = ({
  Name,
  RollNumber,
  CollegeName,
  Branch,
  Batch,
  ExperimentNo,
  Aim,
  Theory,
  Procedure,
  Apparatus,
  Observation,
  Conclusion,
  Keyword,
}) => {
  let content = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result Template</title>
      <style>
        * {
          box-sizing: border-box;
        }
        .container {
          color: black;
          width: 100%;
        }
        .upperGrid {
          display: block;
  
          padding: 10px 10px;
          font-size: 20px;
          height: fit-content;
        }
        .left {
          color: black;
          width: 50%;
  
          float: left;
          height: 100px;
        }
        .right {
          width: 50%;
          color: black;
          margin-right: -100%;
          float: left;
          height: 100px;
        }
        .left div,
        .right div {
          font-size: 1.5rem;
          padding: 10px 0;
        }
        .ExperimentHeading {
          width: 98%;
          text-align: center;
          margin-top: 15%;
        }
        .lowerGrid {
          padding: 0 20px;
        }
        .lowerGrid span {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .lowerGrid div {
          padding: 15px 0;
          margin: 10px;
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="upperGrid">
          <div class="left">
            <div>Name:${Name}</div>
            <div>Roll Number:${RollNumber}</div>
          </div>
          <div class="right">
            <div>College Name:${CollegeName}</div>
            <div>Branch:${Branch}</div>
            <div>Batch:${Batch}</div>
          </div>
        </div>
        <div class="ExperimentHeading">
          <div><h1>Experiment Number:${ExperimentNo}</h1></div>
        </div>
        <div class="lowerGrid">
          <div class="Aim"><span>Aim:-></span>${Aim}</div>
          <div class="Appartus"><span>Apparatus:-></span>${Apparatus}</div>
          <div class="Theory"><span>Theory:-></span>${Theory}</div>
          <div class="Procedure"><span>Procedure:-></span>${Procedure}</div>
          <div class="Observation"><span>Observation:-></span>${Observation}</div>
          <div class="Conclusion"><span>Conclusion:-></span>${Conclusion}</div>
        </div>
      </div>
    </body>
  </html>
  
  `;
  return content;
};

export default page;
