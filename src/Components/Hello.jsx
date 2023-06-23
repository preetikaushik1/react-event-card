import { useState } from "react"

const Hello = () =>{

  let [dollar, changevalue] = useState('$0')


    return(
        <>
        <div className="outer-main">
            <div className="box">
                <div className="free">Free</div>
                <div className="for">For freelancers</div>
                <div className="num">{dollar}</div>
                <div className="user1"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>1 users</span></div>
                <div className="user1"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>10 downloads per month</span></div>
                <div className="user1"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>Raster files</span></div>
                <button onClick={() =>changevalue('Thank You')} className="btn">Subscribe</button>

            </div>


            <div className="box  box2">
            <div className="free1">Pro</div>
                <div className="for1">For freelancers</div>
                <div className="num1">$40</div>
                <div className="user2"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>3 users</span></div>
                <div className="user2"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>Unlimited downloads</span></div>
                <div className="user2"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>Fully-editable files</span></div>
<div className="user2"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>Custom packs</span></div>
<div className="user2"><span><i class="fa fa-check-circle" aria-hidden="true"></i>
</span><span>200+ custom icons</span></div>
                <button className="btn2">Subscribe</button>

            </div>

        </div>
        </>
    )

}




export default Hello