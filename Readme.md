## TEMPLATE DOCUMENT GENERATOR

This is a project developed during Dev Heat IIIT Surat. A Dev event with mentors. 
It basically accepts data from user->
* Name
* Branch
* College Name
* Batch
* Experiment Number
* Aim of the Experiment
* Theory
*(If the theory is not provided then the Theory will be added automatically using the keyword provided)*
* Conclusion
* Observation
* Keyword
*(If not providing any theory then add the keyword that can be googled and then summarized)*

## RUN ON LOCAL MACHINE
 To run on local machine move into the Server and Client side folder and run npm install.
 All the Dependencies will be involved after which both the server side and Client side server have to be run to run the web app.
 
 Also MongoDb server needs to be running already. Use `npm start` in the respective directories after installing the dependencies.

 ## ENVIRONMENT VARIABLES
  A server side env file has to be added. The contents are the following->
  1. __URL__ = MongoDb data base url
  2. **SERPSTACK_KEY* = Contain the Api key provided by the Serpstack Api
  3. **MEANING_CLOUD_KEY** = Contain the Api key provided by Meaning Cloud Api
