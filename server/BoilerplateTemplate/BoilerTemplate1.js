const page = (Name,RollNumber,CollegeName,Branch,Batch,ExperimentNo,Aim,Theory,Procedure,Apparatus,Observation,Conclusion) =>{
    return(
        `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PDF Result Template</title>
    <style>
        .container{
            background-color: #f2eecb;
            color:black;
        }
        .upperGrid{
            border:2px solid black;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding:10px 10px;
            font-size:20px;
        }
        .left{
            display: flex;
            flex-direction:column;
            justify-content: space-between;
        }
        .left div,.right div{
            font-size:1.5rem;
            padding:10px 0;
        }
        .ExperimentHeading{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .lowerGrid{
            display: flex;
            flex-direction: column;
            padding:0 20px;
        }
        .lowerGrid span{
            font-size:1.5rem;
            font-weight: bold;
        }
        .lowerGrid div{
            padding:15px 0;
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
        <div class="Theory"><span>Theory:-></span>${Theory}</div>
        <div class="Procedure"><span>Procedure:-></span>${Procedure}</div>
        <div class="Obersvation"><span>Observation:-></span>${Observation}</div>
        <div class="Conclusion"><span>Conclusion:-></span>${Conclusion}</div>
      </div>
    </div>
  </body>
</html>

        `
    );
}

export default page;