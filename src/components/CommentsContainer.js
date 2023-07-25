import {React} from "react";
import Comments from "./Comments";


  const CommentData = [
                        {
                         name:'Piyush',
                         text:'Hi this is comment done by me',
                         reply:[
                              {
                                    name:'Piyush',
                                    text:'Hi this is comment done by me',
                                    reply:[
           
                                    ]
                                   
                                   },
                                   

                         ]
                        
                        },{
                              name:'Piyush',
                              text:'Hi this is comment done by me',
                              reply:[
                                    {
                                          name:'Piyush',
                                          text:'Hi this is comment done by me',
                                          reply:[
                 
                                          ]
                                         
                                         },
                                         
                              ]
                             
                             },
                             {
                              name:'Piyush',
                              text:'Hi this is comment done by me',
                              reply:[
                                    {
                                          name:'Piyush',
                                          text:'Hi this is comment done by me',
                                          reply:[
                 
                                          ]
                                         
                                         },
                                         
                              ]
                             
                             },
                             {
                              name:'Piyush',
                              text:'Hi this is comment done by me',
                              reply:[
                                    {
                                          name:'Piyush',
                                          text:'Hi this is comment done by me',
                                          reply:[
                 
                                          ]
                                         
                                         },
                                         
                              ]
                             
                             },
                                       
                        
                  
                  
                     ]





//  const CommentList = ({comments})=>{
                        
//               return comments.map((comment,index)=>(
//                   <div>
//                         <Comments key={index} data={comment}/>
//                         <div className="pl-5 border border-l-black ml-5">
//                           <CommentList comments={comment.reply}/>
//                         </div>
//                   </div>
//               )

//               )          

// }
const CommentList = ({ comments }) => {
      return comments.map((comment, index) => (
        <div key={index}>
          <Comments data={comment} /> {/* Remove 'key' prop from here, add 'key' to the wrapping div instead */}
          {comment.reply && comment.reply.length > 0 && (
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comments={comment.reply} />
            </div>
          )}
        </div>
      ));
    };
    
                     

const CommentContainer = ()=>{

      return(
                <div className="m-5 p-2">
                     <h1 className="text-2xl font-bold"> Comment:</h1>                
                      <CommentList comments={CommentData}/>
                </div>

      )


}


export default CommentContainer;