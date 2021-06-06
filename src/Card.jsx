import React from "react";
import Card1 from "./Card1";
import Sdata from "./Sdata";
const Card=()=>{
    return(<>
       

        <div className="container-fluid mb-5">
            <div className="row">     
            <div className="col-10 mx-auto">
            <div className="my-5">
            <h1 className="text-center">Notifications</h1>
        </div>

                <div className="row gy-4">
                    
                    {
                        Sdata.map((val,ind)=>{
                            return(
                                <Card1 key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                
                                
                                />
                            )
                            
                        })
                    }
                    
                        
                        


                        </div>
                        </div>

                    </div>










                    </div>
                

            
            
            
            </>
    );
};
export default Card;