const page = (name,rollNumber,collegeName,branch,batch,experimentNo,aim,theory,procedure,observation,conclusion) =>{
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
          <div>Name:${name}</div>
          <div>Roll Number:${rollNumber}</div>
        </div>
        <div class="right">
          <div>College Name:${collegeName}</div>
          <div>Branch:${branch}</div>
          <div>Batch:${batch}</div>
        </div>
      </div>
      <div class="ExperimentHeading">
        <div><h1>Experiment Number:${experimentNo}</h1></div>
      </div>
      <div class="lowerGrid">
        <div class="Aim"><span>Aim:-></span>${aim}</div>
        <div class="Theory"><span>Theory:-></span>${theory}</div>
        <div class="Procedure"><span>Procedure:-></span>${procedure}</div>
        <div class="Obersvation"><span>Observation:-></span>${observation}</div>
        <div class="Conclusion"><span>Conclusion:-></span>${conclusion}</div>
      </div>
    </div>
  </body>
</html>

        `
    );
}

export default page;