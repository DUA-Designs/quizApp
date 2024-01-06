 import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Q4snip from './images/question4.png';
import Q5snip from './images/question5.png';
import Q8snip from './images/question8.png';
import Q9snip from './images/question9.png';
import testIcon from './images/exam-svgrepo-com.svg';
 
 
 

 
const questions=[{question:"Which of the following is the correct way to instantiate an array?","options":["A: int myArray [ ] = {1, 3, 5};","B: int myArray [ ] [ ] = {1,2,3,4};","C: int [ ] myArray = (5, 4, 3);","D: int [ ] myArray = {“1”, “2”, “3”};"],"answer":"A"},
{question:"What are the valid statements for static keyword in Java?","options":["1. We can have static block in a class.","2. The static block in a class is executed every time an object of class is created.","3. We can have static method implementations in interface.","4. We can define static block inside a method."], "multi":true,selections:["A. 1,2,3","B. 1,3","C. 3,4","D. 2,3,4"],"answer":"B"},
{question:" Which of the following statements are true for inheritance in Java?","options":["1. The “extend” keyword is used to extend a class in java.","2. You can extend multiple classes in java.","3. Private members of the superclass are accessible to the subclass.","4. We can't extend Final classes in java."],"multi":true,selections:["A. 1,2,3","B. 4","C. 1,4","D. 2,3"],"answer":"B"},
{question:"What will be the output of the below program?","snippet":Q4snip,"options":["A. Compile time error","B. Super","C. Subclass","D. Runtime error"],"answer":"A"},
{question:"What will be the output of the below program?","snippet":Q5snip,"options":["A. Compile time error at line 6","B. Compile time error at line 8","C. Compile time error at both line 6 and 8","4. Works fine and prints “Subclass” two times."],"answer":"B"},
{question:"Which of the below are unchecked exceptions in java?","multi":true,"options":["1. RuntimeException","2. ClassCastException","3. NullPointerException","D. IOException"],selections:["A. 1,4","B. 1,3","C. 1,2,3","D. 2,4"],"answer":"C"}
,{question:"Which of the following statement(s) are true for java?","multi":true,"options":["1. JVM is responsible for converting Byte code to the machine-specific code.","2. We only need JRE to run java programs.","3. JDK is required to compile java programs.","4. JRE doesn't contain JVM"],selections:["A. 1,3","B. 2,4","C. 1,3,4","D. 1,2,3"],"answer":"D"}
,{question:"What will be the output of below program?","options":["A. “Test toString called”","B. Compile-time error","C. “Test@7fh2bd8” (Object class toString() method is being called)"],"snippet":Q8snip,"answer":"B"}
,{question:"What is the output of the following program?","options":["A. Compilation error","B. Constructor called Method called","C. Runtime error","D. Method called"],"snippet":Q9snip,"answer":"B"}
,{question:"Bride and Groom","desc":"A bride and groom has their wedding planned soon. But the bride has some conditions to put the ring on her. The bride will give some queries to the groom to find solutions for. If the groom resolves the queries he get's to put the ring on her finger. So you will be given and array 'input' of length 'n' of integer type. A 'two-dimensional array' named 'queries' of length 'q' and an integer 'k' will be provided for you. You need to select an element from 'input' such that there exists 'l','r','k' where 'l' is the sum of all the elements before selected element, 'r' is the sum of all the elements after the selected element. For each query to pass there should exist an element in the array such that 'r'-'l'-'k'=Sum of all elements  from each query or 'queries[index]'. Now return true if all the queries are passed else return false."}
];
const testcase=[{caseInput:`3
3
1 2 3 4
12 34 56`,caseOutput:"output1"},{caseInput:`3
3
1 2 3 4
12 34 56`,caseOutput:"output2"},{caseInput:`3
3
1 2 3 4
12 34 56`,caseOutput:"output3"},{caseInput:`3
3
1 2 3 4
12 34 56`,caseOutput:"output4"},{caseInput:`3
3
1 2 3 4
12 34 56`,caseOutput:"output5"},{caseInput:`3
3
1 2 3 4
12 34 56`,caseOutput:"output6"}];
 const scannerCode=`public static void main(String args[]){
      
  Scanner scan=new Scanner(System.in);
int first=scan.nextInt();
int second=scan.nextInt();
scan.nextLine();
 String []third=scan.nextLine().trim().split(" ");
 String []fourth=scan.nextLine().trim().split(" ");
 int []input=new int[first];
 int [][]queries=new int [fourth.length][2];
 for(int i=0;i<first;i++){
 input[i]=Integer.parseInt(third[i]);
 }
 for(int i=0;i<fourth.length;i++){
  for(int j=0;j<2;j++){
    queries[i][j]=Integer.parseInt(fourth[i].charAt(j)+"");
  }
 }


  System.out.println( brideGroom(first,input,second,queries));
}
}`;
function App() {
  const [view,setView]=useState([true,true,true]);
  const [candidate,setCandidate]=useState([]);
  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  const [answer,setAnswer]=useState(["0","0","0","0","0","0","0","0","0","0"]);
  const [timer,setTimer]=useState([59,60]);
  const [result,setResult]=useState(0);
  const [check,setCheck]=useState([0,0]);
 const [tescasesIsRunning,setTestcasesIsRunning]=useState(false);
  const [algoAnswers,setAlgoAnswers]=useState([]);
  const [dashboard,setDashboard]=useState(false);
  const [right,setRight]=useState(0);
  const [sampleInput,setSampleInput]=useState(
 ` 3
  3
  1 2 3
  12 34 56`);
  const [myCode,setMyCode]=useState(`import java.util.*;
  public class Solution{
        public static  boolean brideGroom(int n,int [] input,int k, int [][]queries){

          //Your code goes here.

return false;
        }

    `);
  
 
  function handleDetails(e){
    e.preventDefault();
       let name=document.getElementById('name').value;
       let email=document.getElementById('email').value;
       setCandidate([name,email]);
        setCheck([1,check[1]]);
    setView([false,false,true]);

  }
  function handleQuestion(){
    if(currentQuestionIndex<questions.length-1){
      setCurrentQuestionIndex(currentQuestionIndex+1);
    }
    
  }
  function handleNavigation(k){
    setCurrentQuestionIndex(k);

  }
  function handleAnswer(index){
    setCheck([check[0],1]);

    let obj=answer;
   let arr=["A","B","C","D"];
   let status =document.getElementById(`${currentQuestionIndex}radio${index}`).checked;
   
   
   obj[currentQuestionIndex] = status?arr[index]:0;
   
   
    
   
   setAnswer([...obj]);
   console.log(answer);
 


  }
  function handleSubmit(){
    setCheck([0,0]);
     setView([false,false,false]);
    let variable=0;
    let counter=0;
     for(let i=0;i<questions.length;i++){
      if(questions[i]["answer"]===answer[i] && i<9){
  variable+=10;
  counter++;
      }
      else if(i===9){
        let count=0;
         for(let i in testcase){
          if(testcase[i].caseOutput===algoAnswers[i]){
            count++;
          }
          variable+=(count*5);

         }
      }
     }
     setRight(counter);
     
     setResult(variable);


  }
const  handleCollapse =()=>{
    document.getElementById("accordion-button").classList.toggle("collapsed");
    document.getElementById("collapseDiv").classList.toggle("toggledCollapse");
  }
  const  handleAlgoAnswers= async()=>{
     
    setTestcasesIsRunning(true);
     
    for(let i=0;i<6;i++){
      setSampleInput( document.getElementById(`testcaseInput${i}`).value);
 
       await handleOutput("byHandleAlgoAnswers",i);
       console.log("Check the loop timing now" +i);
   
   
     
      
 


    }
    let fakeAlgoAnswers=[];
    for(let i in algoAnswers){
         let element=algoAnswers[i].split('e');
        fakeAlgoAnswers[i]=element[0]+'e';
   
       }
       console.log(fakeAlgoAnswers);
       setAlgoAnswers(fakeAlgoAnswers);

       setTestcasesIsRunning(false);
    
 
 
  

  }

  const  handleOutput=  (byWhat,ind)=>{  

 



    const data = JSON.stringify({
      language: 'java',
      version: 'JDK 17.0.1',
      code: `${myCode} ${scannerCode}`,
      input: sampleInput
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
        const res=JSON.parse(this.responseText);
      
        if(byWhat==="byHandleAlgoAnswers"){
          
          document.getElementById(`testcaseOutput${ind}`).value=res["output"];
        let neededVariable=algoAnswers;
         if(algoAnswers.length>=ind+1){
          neededVariable[ind]= document.getElementById(`testcaseOutput${ind}`).value;
         }
         else{
          neededVariable.push( document.getElementById(`testcaseOutput${ind}`).value);
         }
       
          setAlgoAnswers(neededVariable);
        }
        else{
        
            document.getElementById("myOutput").value=res["output"];
        
          
        }
       
      }
    });
    
    xhr.open('POST', 'https://online-code-compiler.p.rapidapi.com/v1/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', '6fbfebbdc6msh5f6f5ee3beae5d2p1fc4d9jsn61a0a7629cf5');
    xhr.setRequestHeader('X-RapidAPI-Host', 'online-code-compiler.p.rapidapi.com');
    
    xhr.send(data);
    return new Promise(resolve => setTimeout(resolve, 4000));
    
  }

  useEffect(()=>{
    window.innerWidth<=960?setDashboard(true):setDashboard(false);
   if(currentQuestionIndex<9){
    let l=questions[currentQuestionIndex].hasOwnProperty("multi")?questions[currentQuestionIndex]["selections"].length:questions[currentQuestionIndex]["options"].length;
    if(answer[currentQuestionIndex]==="0" && check[1]===1){
     

  
      for(let i=0;i<l;i++){
        document.getElementById(`${currentQuestionIndex}radio${i}`).checked=false;
      }
    }
     if(answer[currentQuestionIndex]!=="0" && check[1]===1){
      let arr=["A","B","C","D"];
      document.getElementById(`${currentQuestionIndex}radio${arr.indexOf(answer[currentQuestionIndex])}`).checked=true;
    

     }
   }
   if(check[0]===1){
    setTimeout(()=>{
      if(timer[0]!==0 || timer[1]!==0){
       if(timer[1]===0){
        setTimer([timer[0]-1,60]);

       }
       else{
        setTimer([timer[0],timer[1]-1]);
       }

      }
      else{
        setTimer([0,0]);
        
        handleSubmit();
      }
    },1000);
    
   }
   
    
   
   
    

  });
 
  

    
   
 
  return (
    <div  id='app' className='p-2'>
      {view[0]?<div id='instructions' style={{opacity:!view[0]?"0":"1"}} className='container shadow p-5 rounded  bg-body-tertiary'>
       
<div className='row p-4'>
<div className='col-12 d-flex justify-content-between my-4'><h1   className='my-3 col-8'>Core Java Quiz<sub className='fs-6'> - by Aravind</sub></h1><h1 className='col-1'><img className='img-fluid col-12' src={testIcon} alt="test_icon"/></h1> </div>
 <p className='my-3'>In this quiz, you will be tested on Core Java basics and OOPS concepts. There are some code snippets too to test your basic Java coding skills.</p>
<p className='my-3'>Some questions have multiple answers. Give it a try and share it with others if you like it.</p>

<p>Note: Make sure to be ready staying in a stable environment before taking the test. Once the test begins the timer will start and you cannot navigate back. Do not reload the page. Click on the "Submit Test" button if you feel you are done. Good luck!</p>
<button onClick={()=>setView([false,true,true])} className='btn btn-dark col-lg-2 col-md-3 col-sm-6 col-xs-10 my-3'>Next</button> 
</div>
      </div>:view[1]?<div id='userDetails' style={{opacity:!view[1]?"0":"1",  transition: "all .2s",visibility:!view[1]?"hidden":"visible"}} className='container p-4 shadow rounded bg-body-tertiary'>
      <button onClick={()=>setView([true,true,true])} className='my-3 btn btn-primary col-lg-2 col-md-3 col-sm-6 colsxs-12'>Back to instructions</button>
      <h1 className='my-3'>Enter your details to continue...</h1>
      <form className='row' onSubmit={(event)=>handleDetails(event)}>
        <div className='col-lg-6 col-md-6 col-sm-10 col-xs-12'><input type='text' className=' form-control    my-3' name='name' id='name' placeholder='Name'  ></input></div>
        <div className='col-lg-6 col-md-6 col-sm-10 col-xs-12'><input type='email' className=' form-control   my-3' name='email' id='email' placeholder='Email'  ></input></div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-xs-6 '><input type='submit' className='btn btn-info my-3' ></input></div>
      </form>
      </div>:view[2]?<div id='quiz' className='container-fluid shadow p-4 rounded bg-body-tertiary'>
        <div className='row '>
        <div  className='col-1 p-2   text-center my-2 '><strong id='dashHead'  style={{background:"burlywood"}} className='p-2 d-block'>{dashboard?<i className="fi fi-rr-menu-burger fs-3"></i>:"Dashboard"}</strong><div className='shadow border ' id='dashboard'>
          {questions.map((item,index)=><div className='mb-2  p-2 col-8 text-center' key={index} onClick={()=>handleNavigation(index)}>{answer[index]!=="0"?<button className='btn btn-success' >Q{index+1}</button>:<button className='btn btn-secondary  ' style={{background: currentQuestionIndex===index?"#ffcc00":""}} >Q{index+1}</button>}</div>)}</div></div>
      <div className='col-11'  ><div  className='row d-flex justify-content-between'><div className='col'> </div>
      <div className='col-2 '><button onClick={handleSubmit} className='btn btn-danger  ' >Submit</button></div>
      <div className='col-2   rounded text-center d-grid align-items-center'><span >Time left | {timer[0]} m : {timer[1]<10?"0"+timer[1]:timer[1]} s</span></div></div>
        <div id='questions' className='row p-3 my-2 shadow border rounded'>
        <div className='col-10 ' id='currentQuestion'>
          <div className='col-12 d-flex justify-content-between'><h3 className='col-10 fs-4  '>{currentQuestionIndex+1}. {questions[currentQuestionIndex].question}</h3>
          {answer[currentQuestionIndex]!=="0"?<div className='col-1 shadow    text-center rounded d-grid align-items-center '><i class="fa-solid fa-floppy-disk text-success   "></i></div>:""}
          </div>
        
         {questions[currentQuestionIndex].hasOwnProperty("snippet")?<div className='col-8 mx-auto'><img className='img-fluid rounded'src={questions[currentQuestionIndex]["snippet"]} alt='code_snippet'></img></div>:""}
       
        </div>
        <div className='col-12 p-2 mx-auto'>{questions[currentQuestionIndex].hasOwnProperty("options")? questions[currentQuestionIndex].hasOwnProperty("multi")? <div>{questions[currentQuestionIndex]["options"].map((item,index)=><div key={index}>{item}</div>)}{questions[currentQuestionIndex].selections.map((item,index)=><div className='shadow bg-body-tertiary p-2 my-2 rounded'><input type='radio' name='answer' className='form-check-input' id={`${currentQuestionIndex}radio${index}`} onClick={()=>handleAnswer(index)}></input>&nbsp;{item}</div>)}</div>:questions[currentQuestionIndex]["options"].map((item,index)=><div className='col shadow rounded bg-body-tertiary p-2 my-2'><input type='radio' name='question'className='form-check-input' id={`${currentQuestionIndex}radio${index}`} onClick={()=>handleAnswer(index)}></input> {item}</div>):
        <div className=' col-12  d-lg-flex d-md-flex'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 p-2 '>{questions[currentQuestionIndex]['desc']}   </div>
         <div className='col-8 p-3'>
          <div className='p-1  '>
            <textarea rows={10}  className='col-12 shadow  rounded my-2 p-1' defaultValue={myCode} id='myCode' onChange={(event)=>setMyCode(event.target.value)}></textarea><textarea rows={5} className='col-lg-6 col-md-8 col-sm-12 col-xs-12 shadow  rounded my-2 p-1' placeholder='Your output goes here...' id='myOutput'></textarea><textarea rows={3} className='col-lg-4 log-md-6 col-sm-12 col-xs-12 shadow  rounded my-2 p-1 mx-2' value={sampleInput} onChange={(event)=>setSampleInput(event.target.value)} id='myInput'></textarea>

            <button className='btn btn-info col-6' onClick={()=>handleOutput("byMyself",-1)}>Check your result</button>
            <div className='row p-2 text-center'>{testcase.map((item,index)=><div className='col-lg-3 col-md-4 col-sm-4 col-xs-6  p-1 '><div className='col-12 shadow p-1 border rounded  '>Testcase {index+1}<div className='col-12 p-1  '><textarea rows={5}  className='col-12' id={`testcaseInput${index}`} value={item.caseInput} onChange={(event)=>testcase}></textarea><textarea    className='col-12'  id={`testcaseOutput${index}`} defaultValue={"output"}></textarea></div></div></div>)}
           </div>
           <button className='btn btn-success col-4 ' onClick={handleAlgoAnswers} disabled={tescasesIsRunning}>{tescasesIsRunning?<i class="fa fa-circle-o-notch fa-spin" ></i>:"Check testcases"}</button>

          </div>
        
         
     </div>   </div>}
        </div>
        <div className='col-12  d-flex justify-content-between ' style={{height:"fit-content"}}>{currentQuestionIndex>0?<button className='btn btn-secondary  col-lg-2 col-md-3 col-sm-4 col-xs-4 ' onClick={()=>setCurrentQuestionIndex(currentQuestionIndex-1)} >Previous</button>:""} <button className='btn btn-primary  col-lg-2 col-md-3 col-sm-4 col-xs-4 ' onClick={handleQuestion}>Next</button></div>

      </div></div>
        </div>
      </div>
      :<div id='results' className='container p-4 text-center'>
        <div className='row'>
<h1>Here are your results.</h1>
<div className='col-8 mx-auto p-2 '>
<div className="accordion col-12" >
 
    <h2 className="accordion-header">
      <button className="accordion-button " type="button"   id='accordion-button' onClick={handleCollapse}>
       Click to view results {candidate[0]}.
      </button>
    </h2>

    
   </div>
   <div id="collapseDiv"   className='col-12 p-4'>
      <h5>Your Score</h5>
      <div className='col-12 d-flex '><div className='col-6 p-1'><div className='shadow p-1'>{right}<p>Right Answers</p></div></div>
      <div className='col-6 p-1 '><div className='shadow p-1'>10<p>Total Questions</p></div></div></div>
      <div className='col-6 shadow p-1 mx-auto my-3'>{((result/120)*100).toFixed(2)}%
      <p>{  result>=70?result>=90?result>=100?<span>You did excellent <i class="fa-solid fa-face-laugh-beam"></i></span>:<span>You did amazing <i class="fa-solid fa-face-smile-beam"></i></span>:<span>You did good <i class="fa-solid fa-face-smile"></i></span>:<span>Need to improve <i class="fa-regular fa-face-frown"></i></span>}</p></div>
      <div className='text-center my-3'>You can close this window.</div>
    </div>
  
</div>

      </div>
                      
      </div>}



      
    </div>
  );
}

export default App;
